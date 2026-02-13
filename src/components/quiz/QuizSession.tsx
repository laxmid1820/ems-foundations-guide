import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import { QuizQuestionCard } from "./QuizQuestionCard";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { XPFloater } from "@/components/gamification/XPFloater";
import type { QuizQuestion, QuizResult } from "@/hooks/useQuiz";

interface QuizSessionProps {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Map<string, string>;
  onAnswer: (questionId: string, answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  immediateAnswers?: boolean;
  immediateResults?: Map<string, QuizResult>;
  onCheckAnswer?: (questionId: string, answer: string) => QuizResult | null;
}

export function QuizSession({
  questions,
  currentIndex,
  answers,
  onAnswer,
  onNext,
  onPrev,
  onSubmit,
  immediateAnswers = false,
  immediateResults,
  onCheckAnswer,
}: QuizSessionProps) {
  const question = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex + 1) / total) * 100;
  const isLast = currentIndex === total - 1;

  // For immediate mode: track per-question confetti/XP
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  const [xpFloat, setXpFloat] = useState<{ amount: number | null; ts: number | null }>({ amount: null, ts: null });

  const currentRevealed = immediateResults?.get(question?.id);
  const isCurrentRevealed = !!currentRevealed;

  // Count answered: in immediate mode, count revealed; in normal mode, count answers
  const answeredCount = immediateAnswers
    ? (immediateResults?.size || 0)
    : answers.size;
  const allAnswered = answeredCount === total;

  const handleAnswer = (questionId: string, answer: string) => {
    if (immediateAnswers && onCheckAnswer && !immediateResults?.has(questionId)) {
      // In immediate mode, answering also checks
      const result = onCheckAnswer(questionId, answer);
      if (result) {
        if (result.is_correct) {
          setConfettiTrigger(false);
          // Small delay so React re-renders the false first
          setTimeout(() => setConfettiTrigger(true), 10);
          setXpFloat({ amount: 10, ts: Date.now() });
        }
      }
    } else if (!immediateAnswers) {
      onAnswer(questionId, answer);
    }
  };

  const handleFinish = () => {
    // In immediate mode on last question, auto-submit
    onSubmit();
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Question {currentIndex + 1} of {total}</span>
          <span>{answeredCount}/{total} answered</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      {/* Immediate mode note */}
      {immediateAnswers && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" />
          <span>Answers revealed as you go</span>
        </div>
      )}

      {/* Question */}
      <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
        <ConfettiEffect trigger={confettiTrigger} />
        <XPFloater amount={xpFloat.amount} timestamp={xpFloat.ts} />
        {question && (
          <QuizQuestionCard
            key={question.id}
            question={question}
            selectedAnswer={answers.get(question.id)}
            onAnswer={(answer) => handleAnswer(question.id, answer)}
            revealedResult={currentRevealed}
          />
        )}
      </div>

      {/* Self-assessment qualifier */}
      <p className="text-center text-xs text-muted-foreground">
        Self-assessment — confirm clinical decisions with your local protocols
      </p>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {isLast ? (
          <Button
            variant="duo"
            size="lg"
            onClick={immediateAnswers ? handleFinish : onSubmit}
            disabled={!allAnswered}
          >
            <Send className="h-4 w-4" />
            {immediateAnswers ? "Finish Quiz" : "Submit Quiz"}
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            onClick={onNext}
            disabled={immediateAnswers && !isCurrentRevealed}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
