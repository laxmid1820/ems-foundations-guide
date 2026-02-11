import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export function StreakBadge({ streak, className }: StreakBadgeProps) {
  if (streak <= 0) return null;

  return (
    <div className={cn(
      "flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1.5 text-sm font-bold text-destructive",
      className
    )}>
      <Flame className="h-4 w-4 fill-current" />
      <span>{streak}</span>
    </div>
  );
}
