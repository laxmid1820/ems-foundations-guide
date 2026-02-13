import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, Info, Sparkles } from "lucide-react";
import type { QuizLength } from "@/hooks/useQuiz";

interface QuizConfigPanelProps {
  level: string;
  levelLabel: string;
  bankSize: number | null;
  quizLength: QuizLength;
  immediateAnswers: boolean;
  onQuizLengthChange: (length: QuizLength) => void;
  onImmediateAnswersChange: (value: boolean) => void;
  onStart: () => void;
  onBack: () => void;
}

function getMockCount(level: string): number {
  switch (level) {
    case "emt": return Math.floor(Math.random() * 51) + 70;
    case "aemt": return 135;
    case "paramedic": return Math.floor(Math.random() * 41) + 110;
    default: return 100;
  }
}

function getMockMinimum(level: string): number {
  switch (level) {
    case "emt": return 70;
    case "aemt": return 135;
    case "paramedic": return 110;
    default: return 70;
  }
}

const LENGTH_OPTIONS: { value: QuizLength; label: string }[] = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: "mock", label: "Full Mock" },
];

export function QuizConfigPanel({
  level,
  levelLabel,
  bankSize,
  quizLength,
  immediateAnswers,
  onQuizLengthChange,
  onImmediateAnswersChange,
  onStart,
  onBack,
}: QuizConfigPanelProps) {
  const [mockCount] = useState(() => getMockCount(level));

  const mockMinimum = useMemo(() => getMockMinimum(level), [level]);
  const showBankNote = quizLength === "mock" && bankSize !== null && bankSize < mockMinimum;

  return (
    <div className="mx-auto max-w-lg space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Configure Your Quiz</h2>
        <p className="text-muted-foreground">{levelLabel} Level</p>
      </div>

      {/* Question Count */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground">How many questions?</label>
        <div className="flex flex-wrap gap-2">
          {LENGTH_OPTIONS.map((opt) => {
            const isSelected = quizLength === opt.value;
            const label =
              opt.value === "mock" && isSelected
                ? `Full Mock (${mockCount})`
                : opt.label;

            return (
              <button
                key={String(opt.value)}
                onClick={() => onQuizLengthChange(opt.value)}
                className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-[0_3px_0_hsl(var(--primary)/0.6)] translate-y-0"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Bank size fallback note */}
        {showBankNote && (
          <div className="flex items-center gap-2 rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
            <Sparkles className="h-4 w-4 text-primary shrink-0" />
            <p className="text-sm text-primary font-medium">
              You'll get every question we have — great for a full review!
            </p>
          </div>
        )}

        {/* Mock disclaimer */}
        {quizLength === "mock" && (
          <p className="text-xs text-muted-foreground">
            Mock exams simulate NREMT format and question count. They do not replicate adaptive testing.
            Verify with{" "}
            <a href="https://nremt.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              nremt.org
            </a>.
          </p>
        )}
      </div>

      {/* Immediate Answers Toggle */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <label htmlFor="immediate-toggle" className="text-sm font-semibold text-foreground cursor-pointer">
            Show answers as you go
          </label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[240px]">
                See explanations instantly to reinforce learning — turn off for timed simulation.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Switch
          id="immediate-toggle"
          checked={immediateAnswers}
          onCheckedChange={onImmediateAnswersChange}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button variant="duo" size="lg" onClick={onStart}>
          Start Quiz
        </Button>
      </div>
    </div>
  );
}
