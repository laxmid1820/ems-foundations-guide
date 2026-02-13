import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion, QuizResult } from "@/hooks/useQuiz";

interface QuizQuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  revealedResult?: QuizResult;
}

const difficultyLabels = ["", "Recall", "Application", "Analysis"];
const difficultyColors = [
  "",
  "bg-success/10 text-success border-success/20",
  "bg-warning/10 text-warning border-warning/20",
  "bg-destructive/10 text-destructive border-destructive/20",
];

function QuestionHeader({ nremt_domain, difficulty }: { nremt_domain: string; difficulty: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-xs">{nremt_domain}</Badge>
      <Badge variant="outline" className={cn("text-xs", difficultyColors[difficulty])}>
        {difficultyLabels[difficulty]}
      </Badge>
    </div>
  );
}

function RevealedFeedback({ result }: { result: QuizResult }) {
  return (
    <div
      className={cn(
        "mt-4 rounded-xl border-2 p-4 space-y-2 animate-bounce-land",
        result.is_correct
          ? "border-success/40 bg-success/5"
          : "border-destructive/40 bg-destructive/5"
      )}
    >
      <div className="flex items-center gap-2">
        {result.is_correct ? (
          <>
            <CheckCircle2 className="h-5 w-5 text-success" />
            <span className="text-sm font-bold text-success">Correct!</span>
          </>
        ) : (
          <>
            <XCircle className="h-5 w-5 text-destructive" />
            <span className="text-sm font-bold text-destructive">Not quite</span>
          </>
        )}
      </div>
      {!result.is_correct && (
        <p className="text-sm text-foreground">
          <span className="font-semibold">Correct answer:</span> {result.correct_answer}
        </p>
      )}
      {result.explanation && (
        <p className="text-sm text-muted-foreground">{result.explanation}</p>
      )}
    </div>
  );
}

function getChoiceStyle(choice: string, selectedAnswer: string | undefined, revealedResult?: QuizResult) {
  if (!revealedResult) {
    return selectedAnswer === choice
      ? "border-primary bg-primary/5"
      : "border-border hover:border-primary/40 hover:bg-accent/50";
  }
  // Revealed state
  if (choice === revealedResult.correct_answer) {
    return "border-success bg-success/10";
  }
  if (choice === selectedAnswer && !revealedResult.is_correct) {
    return "border-destructive bg-destructive/10";
  }
  return "border-border opacity-60";
}

function MCQuestion({ question, selectedAnswer, onAnswer, revealedResult }: QuizQuestionCardProps) {
  const disabled = !!revealedResult;

  return (
    <div className={cn("space-y-6", disabled && revealedResult && !revealedResult.is_correct && "animate-shake")}>
      <div className="space-y-3">
        <QuestionHeader nremt_domain={question.nremt_domain} difficulty={question.difficulty} />
        <p className="text-lg font-semibold text-foreground leading-relaxed">{question.question_text}</p>
      </div>
      <RadioGroup
        value={selectedAnswer || ""}
        onValueChange={disabled ? undefined : onAnswer}
        className="space-y-3"
        disabled={disabled}
      >
        {question.options.choices?.map((choice, i) => (
          <Label
            key={i}
            htmlFor={`choice-${i}`}
            className={cn(
              "flex items-center gap-3 rounded-xl border-2 p-4 transition-all",
              disabled ? "cursor-default" : "cursor-pointer",
              getChoiceStyle(choice, selectedAnswer, revealedResult)
            )}
          >
            <RadioGroupItem value={choice} id={`choice-${i}`} disabled={disabled} />
            <span className="text-sm text-foreground flex-1">{choice}</span>
            {revealedResult && choice === revealedResult.correct_answer && (
              <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
            )}
            {revealedResult && choice === selectedAnswer && !revealedResult.is_correct && choice !== revealedResult.correct_answer && (
              <XCircle className="h-4 w-4 text-destructive shrink-0" />
            )}
          </Label>
        ))}
      </RadioGroup>
      {revealedResult && <RevealedFeedback result={revealedResult} />}
    </div>
  );
}

function MultiQuestion({ question, selectedAnswer, onAnswer, revealedResult }: QuizQuestionCardProps) {
  const selectedSet = new Set(selectedAnswer?.split("|||").filter(Boolean) || []);
  const disabled = !!revealedResult;

  const toggleChoice = (choice: string) => {
    if (disabled) return;
    const next = new Set(selectedSet);
    if (next.has(choice)) next.delete(choice);
    else next.add(choice);
    onAnswer(Array.from(next).join("|||"));
  };

  return (
    <div className={cn("space-y-6", disabled && revealedResult && !revealedResult.is_correct && "animate-shake")}>
      <div className="space-y-3">
        <QuestionHeader nremt_domain={question.nremt_domain} difficulty={question.difficulty} />
        <p className="text-lg font-semibold text-foreground leading-relaxed">{question.question_text}</p>
        {question.options.correctCount && (
          <p className="text-sm text-muted-foreground">Select {question.options.correctCount} answers</p>
        )}
      </div>
      <div className="space-y-3">
        {question.options.choices?.map((choice, i) => (
          <Label
            key={i}
            htmlFor={`multi-${i}`}
            className={cn(
              "flex items-center gap-3 rounded-xl border-2 p-4 transition-all",
              disabled ? "cursor-default" : "cursor-pointer",
              getChoiceStyle(choice, selectedAnswer, revealedResult)
            )}
          >
            <Checkbox
              id={`multi-${i}`}
              checked={selectedSet.has(choice)}
              onCheckedChange={() => toggleChoice(choice)}
              disabled={disabled}
            />
            <span className="text-sm text-foreground">{choice}</span>
          </Label>
        ))}
      </div>
      {revealedResult && <RevealedFeedback result={revealedResult} />}
    </div>
  );
}

function OrderedQuestion({ question, selectedAnswer, onAnswer, revealedResult }: QuizQuestionCardProps) {
  const items = question.options.items || [];
  const disabled = !!revealedResult;
  const [order, setOrder] = useState<string[]>(
    selectedAnswer ? selectedAnswer.split("|||") : [...items].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
    if (!selectedAnswer && items.length > 0) {
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      setOrder(shuffled);
      onAnswer(shuffled.join("|||"));
    }
  }, [question.id]);

  const moveUp = (idx: number) => {
    if (idx === 0 || disabled) return;
    const next = [...order];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    setOrder(next);
    onAnswer(next.join("|||"));
  };

  const moveDown = (idx: number) => {
    if (idx === order.length - 1 || disabled) return;
    const next = [...order];
    [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
    setOrder(next);
    onAnswer(next.join("|||"));
  };

  return (
    <div className={cn("space-y-6", disabled && revealedResult && !revealedResult.is_correct && "animate-shake")}>
      <div className="space-y-3">
        <QuestionHeader nremt_domain={question.nremt_domain} difficulty={question.difficulty} />
        <p className="text-lg font-semibold text-foreground leading-relaxed">{question.question_text}</p>
        <p className="text-sm text-muted-foreground">Arrange in the correct order (use arrows)</p>
      </div>
      <div className="space-y-2">
        {order.map((item, i) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border-2 border-border p-4 bg-card">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
              {i + 1}
            </span>
            <span className="text-sm text-foreground flex-1">{item}</span>
            {!disabled && (
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => moveUp(i)}
                  disabled={i === 0}
                  className="text-xs px-1.5 py-0.5 rounded bg-muted hover:bg-accent disabled:opacity-30 text-foreground"
                >▲</button>
                <button
                  onClick={() => moveDown(i)}
                  disabled={i === order.length - 1}
                  className="text-xs px-1.5 py-0.5 rounded bg-muted hover:bg-accent disabled:opacity-30 text-foreground"
                >▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {revealedResult && <RevealedFeedback result={revealedResult} />}
    </div>
  );
}

export function QuizQuestionCard(props: QuizQuestionCardProps) {
  const { question_type } = props.question;
  if (question_type === "mc") return <MCQuestion {...props} />;
  if (question_type === "multi") return <MultiQuestion {...props} />;
  if (question_type === "ordered") return <OrderedQuestion {...props} />;
  return null;
}
