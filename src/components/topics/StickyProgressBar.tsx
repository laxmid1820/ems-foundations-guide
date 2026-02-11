import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

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
        "bg-background/95 backdrop-blur-sm border-t border-border",
        "shadow-[0_-4px_20px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="container mx-auto px-4 py-3 max-w-4xl">
        <div className="flex items-center gap-4">
          {/* Progress info */}
          <div className="flex items-center gap-2 min-w-0">
            {isComplete ? (
              <CheckCircle className="h-5 w-5 text-success shrink-0" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-primary/30 shrink-0" />
            )}
            <span className="text-sm font-medium text-foreground truncate">
              {isComplete 
                ? "Lesson Complete!" 
                : `${sectionsViewed} of ${totalSections} sections`
              }
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-500 ease-out",
                isComplete ? "bg-success" : "bg-primary"
              )}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>

          {/* Percentage */}
          <span className={cn(
            "text-sm font-semibold tabular-nums min-w-[3rem] text-right",
            isComplete ? "text-success" : "text-foreground"
          )}>
            {Math.round(clampedProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
