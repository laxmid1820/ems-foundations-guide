import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonProgressProps {
  sectionsViewed: string[];
  totalSections: number;
  flashcardsFlipped: string[];
  totalFlashcards: number;
  quizzesPassed: string[];
  totalQuizzes: number;
  className?: string;
}

export function LessonProgress({
  sectionsViewed,
  totalSections,
  flashcardsFlipped,
  totalFlashcards,
  quizzesPassed,
  totalQuizzes,
  className
}: LessonProgressProps) {
  const sectionProgress = totalSections > 0 ? (sectionsViewed.length / totalSections) * 40 : 40;
  const flashcardProgress = totalFlashcards > 0 ? (flashcardsFlipped.length / totalFlashcards) * 30 : 30;
  const quizProgress = totalQuizzes > 0 ? (quizzesPassed.length / totalQuizzes) * 30 : 30;
  
  const totalProgress = Math.round(sectionProgress + flashcardProgress + quizProgress);
  const isComplete = totalProgress >= 100;

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-foreground whitespace-nowrap">
          {isComplete ? (
            <span className="flex items-center gap-1 text-success">
              <Star className="h-4 w-4 fill-current" /> Complete!
            </span>
          ) : (
            "Progress"
          )}
        </span>
        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-500",
              isComplete ? "bg-success" : "bg-success"
            )}
            style={{ width: `${totalProgress}%` }}
          />
        </div>
        <span className="text-sm font-extrabold text-foreground w-10 text-right">{totalProgress}%</span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-medium">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className={cn(
            "h-3.5 w-3.5",
            sectionsViewed.length >= totalSections ? "text-success" : "text-muted-foreground/50"
          )} />
          Sections: {sectionsViewed.length}/{totalSections}
        </span>
        
        {totalFlashcards > 0 && (
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className={cn(
              "h-3.5 w-3.5",
              flashcardsFlipped.length >= totalFlashcards ? "text-success" : "text-muted-foreground/50"
            )} />
            Flashcards: {flashcardsFlipped.length}/{totalFlashcards}
          </span>
        )}
        
        {totalQuizzes > 0 && (
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className={cn(
              "h-3.5 w-3.5",
              quizzesPassed.length >= totalQuizzes ? "text-success" : "text-muted-foreground/50"
            )} />
            Quizzes: {quizzesPassed.length}/{totalQuizzes}
          </span>
        )}
      </div>
    </div>
  );
}
