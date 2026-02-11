import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/data/topics";

interface QuizBlockProps {
  question: QuizQuestion;
  onAnswer?: (questionId: string, correct: boolean) => void;
}

export function QuizBlock({ question, onAnswer }: QuizBlockProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    
    const correct = selectedIndex === question.correctIndex;
    setIsCorrect(correct);
    setIsSubmitted(true);
    onAnswer?.(question.id, correct);
  };

  const handleRetry = () => {
    setSelectedIndex(null);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      {/* Question Header */}
      <div className="bg-primary/10 p-4 sm:p-5 border-b border-border">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Knowledge Check</p>
        <p className="text-foreground font-medium text-lg leading-snug">{question.question}</p>
      </div>

      {/* Options */}
      <div className="p-4 sm:p-5">
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
                  "flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-pointer",
                  !isSubmitted && isSelected && "border-primary bg-primary/5",
                  !isSubmitted && !isSelected && "border-border hover:border-primary/30",
                  isSubmitted && isCorrectOption && "border-success bg-success/10",
                  isSubmitted && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                  isSubmitted && "cursor-default"
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
                    "flex-1 cursor-pointer text-sm sm:text-base",
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
            "mt-4 p-4 rounded-lg",
            isCorrect ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"
          )}>
            <div className="flex items-start gap-2">
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              )}
              <div>
                <p className={cn(
                  "font-semibold text-sm",
                  isCorrect ? "text-success" : "text-destructive"
                )}>
                  {isCorrect ? "Correct!" : "Not quite right"}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          {!isSubmitted ? (
            <Button 
              onClick={handleSubmit} 
              disabled={selectedIndex === null}
              className="w-full sm:w-auto"
            >
              Submit Answer
            </Button>
          ) : !isCorrect ? (
            <Button 
              variant="outline" 
              onClick={handleRetry}
              className="w-full sm:w-auto"
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
