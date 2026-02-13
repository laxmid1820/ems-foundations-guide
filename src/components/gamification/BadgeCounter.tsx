import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeCounterProps {
  count: number;
  className?: string;
}

export function BadgeCounter({ count, className }: BadgeCounterProps) {
  if (count <= 0) return null;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-xp/10 px-2.5 py-1 text-xs font-extrabold text-xp animate-scale-in",
        className
      )}
    >
      <Star className="h-3.5 w-3.5 fill-current" />
      <span>{count}</span>
    </div>
  );
}
