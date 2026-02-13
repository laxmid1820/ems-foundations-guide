import { Star, BookOpen, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeVariant = "topic-mastered" | "module-complete" | "quiz-10" | "quiz-20" | "quiz-50" | "quiz-mock";

interface AchievementBadgeProps {
  variant: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
}

const config: Record<BadgeVariant, { icon: typeof Star; label: string }> = {
  "topic-mastered": { icon: Star, label: "Mastered" },
  "module-complete": { icon: BookOpen, label: "Complete" },
  "quiz-10": { icon: Shield, label: "10Q" },
  "quiz-20": { icon: Shield, label: "20Q" },
  "quiz-50": { icon: Shield, label: "50Q" },
  "quiz-mock": { icon: Shield, label: "Mock" },
};

export function AchievementBadge({ variant, size = "sm", className }: AchievementBadgeProps) {
  const { icon: Icon, label } = config[variant];
  const isSm = size === "sm";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-xp/40 bg-xp/10 text-xp font-bold",
        isSm ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        className
      )}
    >
      <Icon className={cn(isSm ? "h-3 w-3" : "h-3.5 w-3.5")} />
      <span>{label}</span>
    </div>
  );
}
