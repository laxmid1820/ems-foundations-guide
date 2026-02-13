import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface QuizQuestion {
  id: string;
  level: string;
  domain: string;
  question_type: "mc" | "multi" | "ordered";
  question_text: string;
  options: {
    type: string;
    choices?: string[];
    items?: string[];
    correctCount?: number;
  };
  nremt_domain: string;
  difficulty: number;
  tags: string[];
}

export interface QuizResult {
  question_id: string;
  selected_answer: string;
  is_correct: boolean;
  correct_answer: string;
  explanation: string;
  nremt_domain: string;
}

export interface QuizSubmission {
  attempt_id: string;
  score: number;
  total: number;
  xp_earned: number;
  results: QuizResult[];
}

export type QuizLength = 10 | 20 | 50 | "mock";
type QuizPhase = "select" | "configure" | "loading" | "session" | "results";

function getMockCount(level: string): number {
  switch (level) {
    case "emt": return Math.floor(Math.random() * 51) + 70;
    case "aemt": return 135;
    case "paramedic": return Math.floor(Math.random() * 41) + 110;
    default: return 100;
  }
}

export function useQuiz() {
  const { user } = useAuth();
  const [phase, setPhase] = useState<QuizPhase>("select");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [submission, setSubmission] = useState<QuizSubmission | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [quizLength, setQuizLength] = useState<QuizLength>(20);
  const [immediateAnswers, setImmediateAnswers] = useState(false);
  const [bankSize, setBankSize] = useState<number | null>(null);

  const configureQuiz = useCallback(async (level: string) => {
    setSelectedLevel(level);
    setPhase("configure");
    setBankSize(null);

    try {
      const { count, error: countError } = await supabase
        .from("quiz_questions")
        .select("id", { count: "exact", head: true })
        .eq("level", level);

      if (!countError && count !== null) {
        setBankSize(count);
      }
    } catch (e) {
      console.error("Failed to fetch bank size:", e);
    }
  }, [selectedLevel, quizLength]);

  const startQuiz = useCallback(async (level?: string, domain?: string) => {
    const effectiveLevel = level || selectedLevel;
    const limit = quizLength === "mock" ? getMockCount(effectiveLevel) : quizLength;

    setPhase("loading");
    setError(null);
    setSelectedLevel(effectiveLevel);
    setSelectedDomain(domain || null);
    setAnswers(new Map());
    setCurrentIndex(0);
    setSubmission(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("get-quiz", {
        body: { level: effectiveLevel, domain, limit },
      });

      if (fnError) throw fnError;
      if (!data?.questions || data.questions.length === 0) {
        setError("No questions available for this level yet. Please try again later.");
        setPhase("select");
        return;
      }

      setQuestions(data.questions);
      setPhase("session");
    } catch (e: any) {
      console.error("startQuiz error:", e);
      setError(e.message || "Failed to load quiz");
      setPhase("select");
    }
  }, [selectedLevel, quizLength]);

  const setAnswer = useCallback((questionId: string, answer: string) => {
    setAnswers((prev) => {
      const next = new Map(prev);
      next.set(questionId, answer);
      return next;
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const prevQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const submitQuiz = useCallback(async () => {
    if (!user) {
      setError("You must be logged in to submit a quiz.");
      return;
    }

    setPhase("loading");
    setError(null);

    try {
      const answersArray = Array.from(answers.entries()).map(([question_id, selected_answer]) => ({
        question_id,
        selected_answer,
      }));

      const { data, error: fnError } = await supabase.functions.invoke("submit-quiz", {
        body: {
          level: selectedLevel,
          domain_filter: selectedDomain,
          answers: answersArray,
        },
      });

      if (fnError) throw fnError;

      setSubmission(data as QuizSubmission);
      setPhase("results");
    } catch (e: any) {
      console.error("submitQuiz error:", e);
      setError(e.message || "Failed to submit quiz");
      setPhase("session");
    }
  }, [user, answers, selectedLevel, selectedDomain]);

  const resetQuiz = useCallback(() => {
    setPhase("select");
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers(new Map());
    setSubmission(null);
    setError(null);
    setQuizLength(20);
    setImmediateAnswers(false);
    setBankSize(null);
  }, []);

  return {
    phase,
    questions,
    currentIndex,
    currentQuestion: questions[currentIndex] || null,
    answers,
    submission,
    error,
    selectedLevel,
    quizLength,
    immediateAnswers,
    bankSize,
    configureQuiz,
    startQuiz,
    setAnswer,
    setQuizLength,
    setImmediateAnswers,
    nextQuestion,
    prevQuestion,
    submitQuiz,
    resetQuiz,
  };
}
