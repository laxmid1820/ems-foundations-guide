import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";
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
  // Calculate overall progress
  const sectionProgress = totalSections > 0 ? (sectionsViewed.length / totalSections) * 40 : 40;
  const flashcardProgress = totalFlashcards > 0 ? (flashcardsFlipped.length / totalFlashcards) * 30 : 30;
  const quizProgress = totalQuizzes > 0 ? (quizzesPassed.length / totalQuizzes) * 30 : 30;
  
  const totalProgress = Math.round(sectionProgress + flashcardProgress + quizProgress);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Main progress bar */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground whitespace-nowrap">Progress</span>
        <Progress value={totalProgress} className="flex-1 h-2" />
        <span className="text-sm font-medium text-foreground w-10 text-right">{totalProgress}%</span>
      </div>

      {/* Detailed breakdown */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
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
