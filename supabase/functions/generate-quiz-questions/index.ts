import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an expert EMS instructor with 9 years of field experience as both an EMT and Paramedic, and 7 years teaching at Pierce College as an evaluator, SEI, and paramedic instructor.

Your core teaching style is:
- Technically accurate at all times with zero tolerance for medical inaccuracy
- Simplified and clear for adult learners without losing essential clinical details
- Encouraging, direct, and professionally supportive
- Uses practical metaphors and analogies only when they genuinely clarify complex concepts
- Always connects concepts to real-world prehospital patient care and decision-making

QUALITY GUARDRAILS (NEVER VIOLATE):
- Do NOT reproduce verbatim questions from any published NREMT exam, textbook test bank, or copyrighted source.
- Questions must be scenario-based whenever appropriate and test "most appropriate next step" or "which finding is most concerning" style thinking.
- All distractors must be plausible real-world clinical mistakes an EMT/AEMT/Paramedic would actually make.
- Never use placeholder text (e.g., "Option A", "Choice 1").
- Explanations must be clear, direct, explain the clinical reasoning, and state why the concept matters on the NREMT and in the field.
- For drug dosages or clinical thresholds, append: "Verify with your agency protocols."
- Use metaphors and analogies only when they genuinely improve understanding — never force them.
- Prioritize patient safety, clinical judgment, and real-world field decision-making in every question and explanation.
- Never include "AI-generated", "created by AI", or similar disclosures.
- Each question must be unique and clinically accurate.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const body = await req.json();
    const { level, domain } = body;
    const count = Math.min(Math.max(1, parseInt(body.count) || 25), 50);

    if (!level || !["emt", "aemt", "paramedic"].includes(level)) {
      return new Response(JSON.stringify({ error: "Invalid level" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const domainFilter = domain || "mixed domains per level weighting";
    const levelLabel = level.toUpperCase() === "AEMT" ? "AEMT" : level.charAt(0).toUpperCase() + level.slice(1);

    // Level-specific question type and domain weighting rules
    const levelRules: Record<string, string> = {
      emt: `QUESTION TYPE MIX: 82% mc, 13% multi, 5% ordered.
DOMAIN WEIGHTING: Primary Assessment (39-43%), Patient Treatment and Transport (20-24%), Scene Size-Up and Safety (15-19%), Operations (10-14%), Secondary Assessment (5-9%).`,
      aemt: `QUESTION TYPE MIX: 72% mc, 18% multi, 10% ordered.
DOMAIN WEIGHTING: Clinical Judgment (31-35%), Medical/Obstetrics/Gynecology (25-29%), Cardiology & Resuscitation (11-15%), Airway/Respiration/Ventilation (9-13%), Trauma (7-11%), EMS Operations (6-10%).`,
      paramedic: `QUESTION TYPE MIX: 65% mc, 22% multi, 13% ordered.
DOMAIN WEIGHTING: Clinical Judgment (34-38%), Medical/Obstetrics/Gynecology (24-28%), Cardiology & Resuscitation (10-14%), Airway/Respiration/Ventilation (8-12%), EMS Operations (8-12%), Trauma (6-10%).`,
    };

    const userPrompt = `Generate exactly ${count} NREMT-style practice questions for the ${levelLabel} certification level.${domainFilter !== "mixed domains per level weighting" ? ` Focus on: ${domainFilter}.` : ""}

${levelRules[level]}

DIFFICULTY DISTRIBUTION: 25% difficulty 1 (recall), 55% difficulty 2 (application), 20% difficulty 3 (analysis/clinical judgment).

OUTPUT REQUIREMENTS — each question object must have exactly these fields:
- question_type: "mc" | "multi" | "ordered"
- question_text: string (scenario-based when appropriate)
- options: object (see structures below)
- correct_answer: string
- explanation: string (clinical reasoning + why it matters on NREMT and in the field)
- nremt_domain: string
- difficulty: 1 | 2 | 3
- tags: string[]
- level: "${level}"

QUESTION TYPE STRUCTURES:
- mc: options = { "type": "mc", "choices": ["option1", "option2", "option3", "option4"] } — exactly 4 realistic clinical options. correct_answer = exact text of the correct choice.
- multi: options = { "type": "multi", "choices": ["A text", "B text", "C text", "D text", "E text"] }. correct_answer = comma-separated correct letters (e.g. "B,C,E").
- ordered: options = { "type": "ordered", "items": ["Step 1", "Step 2", "Step 3", ...] }. correct_answer = comma-separated items in correct order.

Generate exactly ${count} questions now. Begin generation.`;

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
                        question_type: { type: "string", enum: ["mc", "multi", "ordered"] },
                        question_text: { type: "string" },
                        options: {
                          type: "object",
                          description: "mc: {type:'mc', choices:[4 strings]}. multi: {type:'multi', choices:['A text','B text',...]}. ordered: {type:'ordered', items:[strings in any order]}",
                          properties: {
                            type: { type: "string", enum: ["mc", "multi", "ordered"] },
                            choices: { type: "array", items: { type: "string" } },
                            items: { type: "array", items: { type: "string" } },
                          },
                        },
                        correct_answer: { type: "string", description: "mc: exact text of correct choice. multi: comma-separated correct letters e.g. 'A,C,D'. ordered: comma-separated items in correct sequence." },
                        explanation: { type: "string", description: "Clinical reasoning explaining why the answer is correct and why wrong choices are plausible mistakes. Include field relevance." },
                        nremt_domain: { type: "string", description: "EMT domains: Primary Assessment, Patient Treatment and Transport, Scene Size-Up and Safety, Operations, Secondary Assessment. AEMT/Paramedic domains: Clinical Judgment, Medical/Obstetrics/Gynecology, Cardiology & Resuscitation, Airway/Respiration/Ventilation, Trauma, EMS Operations" },
                        difficulty: { type: "number", enum: [1, 2, 3], description: "1=recall, 2=application, 3=analysis/clinical judgment" },
                        tags: { type: "array", items: { type: "string" } },
                        level: { type: "string", enum: ["emt", "aemt", "paramedic"] },
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
    return new Response(JSON.stringify({ error: "An error occurred generating questions" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
