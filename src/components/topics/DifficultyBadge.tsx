import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DifficultyLevel } from "@/data/topics";

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel;
  className?: string;
}

const difficultyConfig: Record<DifficultyLevel, { label: string; className: string }> = {
  "start-here": {
    label: "Start Here",
    className: "bg-success/10 text-success border-success/20 hover:bg-success/20"
  },
  "getting-comfortable": {
    label: "Getting Comfortable",
    className: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
  },
  "building-on-basics": {
    label: "Building On Basics",
    className: "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20 dark:text-purple-400"
  }
};

export function DifficultyBadge({ difficulty, className }: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty];
  
  return (
    <Badge 
      variant="outline" 
      className={cn(config.className, "font-medium", className)}
    >
      {config.label}
    </Badge>
  );
}
