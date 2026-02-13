import { cn } from "@/lib/utils";
import { ProgressRing } from "@/components/gamification/ProgressRing";

interface TopicProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  showMessage?: boolean;
}

function getMessage(progress: number): string {
  if (progress <= 0) return "Let's go!";
  if (progress < 50) return "Keep scrolling!";
  if (progress < 80) return "Halfway there!";
  if (progress < 100) return "Almost done!";
  return "Nailed it! ⭐";
}

export function TopicProgressRing({
  progress,
  size = 56,
  strokeWidth = 5,
  className,
  showMessage = true,
}: TopicProgressRingProps) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative inline-flex items-center justify-center">
        <ProgressRing
          progress={clamped}
          size={size}
          strokeWidth={strokeWidth}
          strokeColor="hsl(var(--xp))"
          className="[&_.absolute]:hidden"
        />
        <div className="absolute flex items-center justify-center">
          <span
            className={cn(
              "font-extrabold text-foreground",
              size <= 44 ? "text-[10px]" : "text-xs"
            )}
          >
            {Math.round(clamped)}%
          </span>
        </div>
      </div>
      {showMessage && (
        <span className="text-xs font-bold text-xp whitespace-nowrap">
          {getMessage(clamped)}
        </span>
      )}
    </div>
  );
}
