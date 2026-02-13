import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { QuizQuestionCard } from "./QuizQuestionCard";
import type { QuizQuestion } from "@/hooks/useQuiz";

interface QuizSessionProps {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Map<string, string>;
  onAnswer: (questionId: string, answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export function QuizSession({
  questions,
  currentIndex,
  answers,
  onAnswer,
  onNext,
  onPrev,
  onSubmit,
}: QuizSessionProps) {
  const question = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex + 1) / total) * 100;
  const isLast = currentIndex === total - 1;
  const answeredCount = answers.size;
  const allAnswered = answeredCount === total;

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

      {/* Question */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        {question && (
          <QuizQuestionCard
            key={question.id}
            question={question}
            selectedAnswer={answers.get(question.id)}
            onAnswer={(answer) => onAnswer(question.id, answer)}
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
            onClick={onSubmit}
            disabled={!allAnswered}
          >
            <Send className="h-4 w-4" />
            Submit Quiz
          </Button>
        ) : (
          <Button variant="default" size="sm" onClick={onNext}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
