import { cn } from "@/lib/utils";
import { CheckCircle, Star } from "lucide-react";

interface StickyProgressBarProps {
  progress: number;
  sectionsViewed: number;
  totalSections: number;
  className?: string;
}

export function StickyProgressBar({ 
  progress, 
  sectionsViewed, 
  totalSections,
  className 
}: StickyProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const isComplete = clampedProgress >= 100;

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-background/95 backdrop-blur-sm border-t-2 border-border",
        "shadow-[0_-4px_20px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <div className="container mx-auto px-4 py-3 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 min-w-0">
            {isComplete ? (
              <Star className="h-5 w-5 text-xp fill-current shrink-0" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-primary/30 shrink-0" />
            )}
            <span className={cn(
              "text-sm font-bold truncate",
              isComplete ? "text-success" : "text-foreground"
            )}>
              {isComplete 
                ? "Lesson Complete! ⭐" 
                : `${sectionsViewed} of ${totalSections} sections`
              }
            </span>
          </div>

          <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                "bg-success"
              )}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>

          <span className={cn(
            "text-sm font-extrabold tabular-nums min-w-[3rem] text-right",
            isComplete ? "text-success" : "text-foreground"
          )}>
            {Math.round(clampedProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
