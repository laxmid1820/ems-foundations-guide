import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const supabaseUser = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { level, domain_filter, answers } = await req.json();
    // answers: Array<{ question_id: string, selected_answer: string }>

    if (!level || !answers || !Array.isArray(answers) || answers.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Fetch correct answers for the submitted questions
    const questionIds = answers.map((a: any) => a.question_id);
    const { data: questions, error: qError } = await supabaseAdmin
      .from("quiz_questions")
      .select("id, correct_answer, explanation, nremt_domain")
      .in("id", questionIds);

    if (qError) throw qError;

    const questionMap = new Map(questions!.map((q: any) => [q.id, q]));

    // Grade
    let score = 0;
    const results: any[] = [];
    const responses: any[] = [];

    for (const answer of answers) {
      const q = questionMap.get(answer.question_id);
      if (!q) continue;
      const isCorrect = q.correct_answer === answer.selected_answer;
      if (isCorrect) score++;
      results.push({
        question_id: answer.question_id,
        selected_answer: answer.selected_answer,
        is_correct: isCorrect,
        correct_answer: q.correct_answer,
        explanation: q.explanation,
        nremt_domain: q.nremt_domain,
      });
      responses.push({
        question_id: answer.question_id,
        selected_answer: answer.selected_answer,
        is_correct: isCorrect,
      });
    }

    const total = answers.length;
    const xpEarned = score * 10;

    // Create attempt
    const { data: attempt, error: aError } = await supabaseAdmin
      .from("quiz_attempts")
      .insert({
        user_id: user.id,
        level,
        domain_filter: domain_filter || null,
        score,
        total,
        xp_earned: xpEarned,
        completed_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (aError) throw aError;

    // Insert responses
    const responsesWithAttempt = responses.map((r) => ({
      ...r,
      attempt_id: attempt.id,
    }));

    const { error: rError } = await supabaseAdmin
      .from("quiz_responses")
      .insert(responsesWithAttempt);

    if (rError) throw rError;

    // Update user XP
    if (xpEarned > 0) {
      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("xp_total")
        .eq("user_id", user.id)
        .maybeSingle();

      if (profile) {
        await supabaseAdmin
          .from("profiles")
          .update({
            xp_total: profile.xp_total + xpEarned,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", user.id);
      }
    }

    return new Response(
      JSON.stringify({
        attempt_id: attempt.id,
        score,
        total,
        xp_earned: xpEarned,
        results,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("submit-quiz error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
