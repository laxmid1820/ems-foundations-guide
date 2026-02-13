import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { level, domain, limit = 20, include_answers = false } = await req.json();

    if (!level || !["emt", "aemt", "paramedic"].includes(level)) {
      return new Response(JSON.stringify({ error: "Invalid level" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const selectFields = include_answers
      ? "id, level, domain, question_type, question_text, options, nremt_domain, difficulty, tags, correct_answer, explanation"
      : "id, level, domain, question_type, question_text, options, nremt_domain, difficulty, tags";

    let query = supabase
      .from("quiz_questions")
      .select(selectFields)
      .eq("level", level);

    if (domain) {
      query = query.eq("nremt_domain", domain);
    }

    // Random selection via ordering
    const { data, error } = await query.limit(200);

    if (error) throw error;

    // Shuffle and take `limit`
    const shuffled = (data || []).sort(() => Math.random() - 0.5).slice(0, limit);

    return new Response(JSON.stringify({ questions: shuffled }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("get-quiz error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
