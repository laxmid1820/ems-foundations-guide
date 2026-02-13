import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizLevelCardProps {
  level: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  badgeLabel: string;
  badgeClass?: string;
  cardClass?: string;
  questionCount?: number;
  avgScore?: number;
  onClick: () => void;
}

export function QuizLevelCard({
  label,
  description,
  icon,
  badgeLabel,
  badgeClass,
  cardClass,
  questionCount,
  avgScore,
  onClick,
}: QuizLevelCardProps) {
  return (
    <button onClick={onClick} className="block w-full text-left group">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-lg cursor-pointer",
          cardClass
        )}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
              {icon}
            </div>
            <Badge
              variant="outline"
              className={cn("font-medium shrink-0", badgeClass)}
            >
              {badgeLabel}
            </Badge>
          </div>

          <div className="mt-4 space-y-2">
            <h2 className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
              {label}
            </h2>
            <p className="text-base text-muted-foreground font-medium">
              {description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {questionCount !== undefined && (
              <span>{questionCount} questions available</span>
            )}
            {avgScore !== undefined && avgScore > 0 && (
              <span>Avg: {avgScore}%</span>
            )}
          </div>

          <div className="flex items-center justify-end pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Start Quiz <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
