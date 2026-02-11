import { Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface LearningObjectivesProps {
  objectives: string[];
  className?: string;
}

export function LearningObjectives({ objectives, className }: LearningObjectivesProps) {
  if (!objectives || objectives.length === 0) return null;

  return (
    <div 
      className={cn(
        "rounded-lg border border-primary/20 bg-primary/5 p-5 sm:p-6",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <Target className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">Learning Objectives</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        After this lesson, you'll be able to:
      </p>
      
      <ul className="space-y-3">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium">
              {index + 1}
            </span>
            <span className="text-sm text-foreground leading-relaxed pt-0.5">
              {objective}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
