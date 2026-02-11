import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Topic, CategoryLevel } from "@/data/topicsContent";
import { getTopicSections } from "@/data/subtopicContent";

const badgeConfig: Record<CategoryLevel, string> = {
  emt: "bg-success/10 text-success border-success/20",
  aemt: "bg-primary/10 text-primary border-primary/20",
  paramedic: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
};

interface TopicCardProps {
  topic: Topic;
  categorySlug: string;
  categoryLevel: CategoryLevel;
}

export function TopicCard({ topic, categorySlug, categoryLevel }: TopicCardProps) {
  const hasSubsections = topic.subsections.length > 0;
  const richSections = getTopicSections(categorySlug, topic.slug);
  const hasRichContent = richSections && richSections.length > 0;
  const hasContent = hasSubsections || hasRichContent;
  const firstSubsection = topic.subsections[0];
  
  // Link to first subsection if available, otherwise just to topic level
  const href = hasSubsections 
    ? `/topics/${categorySlug}/${topic.slug}/${firstSubsection.slug}`
    : `/topics/${categorySlug}/${topic.slug}`;

  return (
    <Link 
      to={href}
      className="block group"
    >
      <Card className={cn(
        "h-full transition-all duration-200 hover:shadow-md hover:border-primary/30",
        !hasContent && "opacity-60"
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <Badge 
              variant="outline" 
              className={cn("font-medium text-xs shrink-0", badgeConfig[categoryLevel])}
            >
              {hasSubsections
                ? `${topic.subsections.length} subsection${topic.subsections.length !== 1 ? 's' : ''}`
                : hasRichContent
                  ? 'Lesson'
                  : '0 subsections'}
            </Badge>
          </div>
          
          <div className="mt-3">
            <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">
              {topic.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
              {topic.description || "Content coming soon..."}
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          {/* Subsections preview - hide for flat topics with rich content */}
          {hasSubsections && !hasRichContent && (
            <div>
              <p className="text-xs font-medium text-foreground mb-2">In this topic</p>
              <ul className="space-y-1.5">
                {topic.subsections.slice(0, 3).map((subsection, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span className="line-clamp-1">{subsection.title}</span>
                  </li>
                ))}
                {topic.subsections.length > 3 && (
                  <li className="text-sm text-muted-foreground pl-3.5">
                    +{topic.subsections.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">
                {topic.estimatedMinutes > 0 ? `${topic.estimatedMinutes} min` : "TBD"}
              </span>
            </div>
            <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {hasContent ? "Start" : "Coming soon"} <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
