import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Subtopic, Category } from "@/data/categories";

interface SubtopicCardProps {
  subtopic: Subtopic;
  category: Category;
}

export function SubtopicCard({ subtopic, category }: SubtopicCardProps) {
  const Icon = subtopic.icon;
  
  return (
    <Link 
      to={`/topics/${category.slug}/${subtopic.slug}`} 
      className="block group"
    >
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/30">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <Badge 
              variant="outline" 
              className={cn("font-medium text-xs shrink-0", category.badgeClass)}
            >
              {category.badgeLabel}
            </Badge>
          </div>
          
          <div className="mt-3">
            <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">
              {subtopic.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
              {subtopic.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          {/* What You'll Learn */}
          <div>
            <p className="text-xs font-medium text-foreground mb-2">What You'll Learn</p>
            <ul className="space-y-1.5">
              {subtopic.whatYoullLearn.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress placeholder */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-muted-foreground">0%</span>
            </div>
            <Progress value={0} className="h-1.5" />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{subtopic.estimatedMinutes} min read</span>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Start <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          {/* Encouraging tagline */}
          <p className="text-xs text-muted-foreground italic">
            {subtopic.encouragingTagline}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
