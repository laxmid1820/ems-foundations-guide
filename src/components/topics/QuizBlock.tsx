import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { XPFloater } from "@/components/gamification/XPFloater";
import type { QuizQuestion } from "@/data/topics";

interface QuizBlockProps {
  question: QuizQuestion;
  onAnswer?: (questionId: string, correct: boolean) => void;
  onXPGain?: (amount: number) => void;
}

const encouragements = [
  "You're on fire! 🔥",
  "Nice work! 💪",
  "Keep it up! ⭐",
  "Nailed it! 🎯",
];

export function QuizBlock({ question, onAnswer, onXPGain }: QuizBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shakeWrong, setShakeWrong] = useState(false);
  const [xpGain, setXpGain] = useState<{ amount: number; ts: number } | null>(null);
  const [isRetry, setIsRetry] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    
    const correct = selectedIndex === question.correctIndex;
    setIsCorrect(correct);
    setIsSubmitted(true);
    onAnswer?.(question.id, correct);

    if (correct) {
      setShowConfetti(true);
      const amt = isRetry ? 5 : 10;
      setXpGain({ amount: amt, ts: Date.now() });
      onXPGain?.(amt);
      setTimeout(() => setShowConfetti(false), 100);
    } else {
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 600);
    }
  };

  const handleRetry = () => {
    setSelectedIndex(null);
    setIsSubmitted(false);
    setIsCorrect(false);
    setIsRetry(true);
  };

  const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];

  return (
    <div className="relative rounded-2xl border-2 border-border bg-card overflow-hidden">
      <ConfettiEffect trigger={showConfetti} />
      
      {/* Question Header */}
      <div className="bg-primary/10 p-5 sm:p-6 border-b border-border">
        <p className="text-xs font-extrabold text-primary uppercase tracking-widest mb-1.5">Knowledge Check</p>
        <p className="text-[11px] text-muted-foreground font-medium mb-1">Self-assessment — confirm clinical decisions with your local protocols</p>
        <p className="text-foreground font-bold text-lg leading-snug">{question.question}</p>
      </div>

      {/* Options */}
      <div className="p-5 sm:p-6 relative">
        {xpGain && <XPFloater amount={xpGain.amount} timestamp={xpGain.ts} />}
        
        <RadioGroup
          value={selectedIndex !== null ? String(selectedIndex) : undefined}
          onValueChange={(value) => !isSubmitted && setSelectedIndex(Number(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectOption = index === question.correctIndex;
            
            return (
              <div 
                key={index}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer",
                  !isSubmitted && isSelected && "border-primary bg-primary/5 shadow-sm",
                  !isSubmitted && !isSelected && "border-border hover:border-primary/40 hover:bg-primary/5",
                  isSubmitted && isCorrectOption && "border-success bg-success/10",
                  isSubmitted && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                  isSubmitted && "cursor-default",
                  shakeWrong && isSelected && !isCorrectOption && "animate-shake"
                )}
                onClick={() => !isSubmitted && setSelectedIndex(index)}
              >
                <RadioGroupItem 
                  value={String(index)} 
                  id={`option-${question.id}-${index}`}
                  disabled={isSubmitted}
                  className={cn(
                    isSubmitted && isCorrectOption && "border-success text-success",
                    isSubmitted && isSelected && !isCorrectOption && "border-destructive text-destructive"
                  )}
                />
                <Label 
                  htmlFor={`option-${question.id}-${index}`}
                  className={cn(
                    "flex-1 cursor-pointer text-sm sm:text-base font-medium",
                    isSubmitted && "cursor-default"
                  )}
                >
                  {option}
                </Label>
                {isSubmitted && isCorrectOption && (
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                )}
                {isSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="h-5 w-5 text-destructive shrink-0" />
                )}
              </div>
            );
          })}
        </RadioGroup>

        {/* Feedback */}
        {isSubmitted && (
          <div className={cn(
            "mt-5 p-4 rounded-xl",
            isCorrect ? "bg-success/10 border-2 border-success/30" : "bg-destructive/10 border-2 border-destructive/30"
          )}>
            <div className="flex items-start gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              )}
              <div>
                <p className={cn(
                  "font-extrabold text-sm",
                  isCorrect ? "text-success" : "text-destructive"
                )}>
                  {isCorrect ? encouragement : "Almost — give it another shot!"}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          {!isSubmitted ? (
            <Button 
              variant="duo"
              onClick={handleSubmit} 
              disabled={selectedIndex === null}
              className="w-full sm:w-auto"
              size="lg"
            >
              Check Answer
            </Button>
          ) : !isCorrect ? (
            <Button 
              variant="outline" 
              onClick={handleRetry}
              className="w-full sm:w-auto"
              size="lg"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
