import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an EMS education content specialist. Generate NREMT-style practice questions aligned to the current National EMS Education Standards.

RULES:
- Do NOT reproduce verbatim questions from any published NREMT exam, textbook test bank, or copyrighted source.
- Each question must include a detailed explanation referencing the clinical reasoning, not just the correct answer.
- For drug dosages or clinical thresholds, append: "Verify with your agency protocols."
- Tag each question with its NREMT domain.
- Question types: multiple-choice (mc, 4 options), multiple-response (multi, select-all-that-apply with 4-5 options), and technology-enhanced items (ordered, ranked steps).
- Difficulty: 1 (recall), 2 (application), 3 (analysis).
- Never include "AI-generated", "created by AI", or similar disclosures.
- Each question must be unique and clinically accurate.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const { level, domain, count = 25 } = await req.json();

    if (!level || !["emt", "aemt", "paramedic"].includes(level)) {
      return new Response(JSON.stringify({ error: "Invalid level" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const domainFilter = domain || "mixed across all 5 NREMT domains";
    const levelLabel = level.toUpperCase() === "AEMT" ? "AEMT" : level.charAt(0).toUpperCase() + level.slice(1);

    const userPrompt = `Generate exactly ${count} NREMT-style practice questions for the ${levelLabel} certification level. Focus on: ${domainFilter}.

Mix question types: approximately 60% multiple-choice (mc), 25% multiple-response (multi), 15% ordered-response (ordered).
Mix difficulties: 30% difficulty 1, 50% difficulty 2, 20% difficulty 3.

NREMT domains to use:
- Airway, Respiration, and Ventilation
- Cardiology and Resuscitation
- Trauma
- Medical / Obstetrics and Gynecology
- EMS Operations`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "store_questions",
              description: "Store generated quiz questions",
              parameters: {
                type: "object",
                properties: {
                  questions: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        question_type: { type: "string", description: "mc, multi, or ordered" },
                        question_text: { type: "string" },
                        options: {
                          type: "object",
                          properties: {
                            type: { type: "string", description: "mc, multi, or ordered" },
                            choices: { type: "array", items: { type: "string" } },
                            items: { type: "array", items: { type: "string" } },
                            correctCount: { type: "number" },
                          },
                        },
                        correct_answer: { type: "string", description: "For mc: the correct choice text. For multi: comma-separated correct choices. For ordered: comma-separated items in correct order." },
                        explanation: { type: "string" },
                        nremt_domain: { type: "string", description: "One of: Airway Respiration and Ventilation, Cardiology and Resuscitation, Trauma, Medical Obstetrics and Gynecology, EMS Operations" },
                        difficulty: { type: "number", description: "1, 2, or 3" },
                        tags: { type: "array", items: { type: "string" } },
                      },
                    },
                  },
                },
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "store_questions" } },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required for AI credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway returned ${response.status}`);
    }

    const aiData = await response.json();
    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in AI response");

    const parsed = JSON.parse(toolCall.function.arguments);
    const questions = parsed.questions;

    if (!questions || !Array.isArray(questions) || questions.length === 0) {
      throw new Error("No questions generated");
    }

    // Insert into database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const rows = questions.map((q: any) => ({
      level,
      domain: q.nremt_domain,
      question_type: q.question_type,
      question_text: q.question_text,
      options: q.options,
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      nremt_domain: q.nremt_domain,
      difficulty: q.difficulty,
      tags: q.tags || [],
    }));

    const { data: inserted, error: insertError } = await supabase
      .from("quiz_questions")
      .insert(rows)
      .select("id");

    if (insertError) throw insertError;

    return new Response(
      JSON.stringify({ generated: inserted?.length || 0, level }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("generate-quiz-questions error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
