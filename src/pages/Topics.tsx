import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { curriculumContent, CategoryLevel } from "@/data/topicsContent";
import { BookOpen, Sparkles, ChevronRight, GraduationCap, TrendingUp, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const levelConfig: Record<CategoryLevel, {
  icon: typeof GraduationCap;
  badgeLabel: string;
  badgeClass: string;
  cardClass: string;
  subtitle: string;
}> = {
  emt: {
    icon: GraduationCap,
    badgeLabel: "Start Here",
    badgeClass: "bg-success/10 text-success border-success/20",
    cardClass: "ring-2 ring-success/30 border-success/20 hover:ring-success/50",
    subtitle: "Core basics for new EMTs – simple and clear"
  },
  aemt: {
    icon: TrendingUp,
    badgeLabel: "Building On Basics",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    cardClass: "ring-2 ring-primary/30 border-primary/20 hover:ring-primary/50",
    subtitle: "Deeper understanding for advancement"
  },
  paramedic: {
    icon: Award,
    badgeLabel: "Advanced Mastery",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    cardClass: "ring-2 ring-purple-500/30 border-purple-500/20 hover:ring-purple-500/50",
    subtitle: "In-depth for paramedic-level thinking"
  }
};

const Topics = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Welcoming Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <BookOpen className="h-7 w-7" />
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Learning Path
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you're just starting out or advancing your skills, we'll make every concept clear and manageable. Pick a path that matches where you are in your EMS journey.
          </p>
        </div>

        {/* Encouraging hint */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
            <Sparkles className="h-4 w-4 text-success" />
            <p className="text-sm text-success font-medium">
              New to EMS? Start with "Foundations for EMT" – we'll make it easy.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {curriculumContent.map((category) => {
            const config = levelConfig[category.level];
            const Icon = config.icon;
            const isStartHere = category.level === "emt";

            return (
              <Link key={category.slug} to={`/topics/${category.slug}`} className="block group">
                <Card 
                  className={cn(
                    "h-full transition-all duration-300 hover:shadow-lg",
                    config.cardClass
                  )}
                >
                  {isStartHere && (
                    <div className="bg-success/10 border-b border-success/20 px-5 py-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-success" />
                      <span className="text-sm font-medium text-success">Recommended Starting Point</span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={cn("font-medium shrink-0", config.badgeClass)}
                      >
                        {config.badgeLabel}
                      </Badge>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <h2 className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      <p className="text-base text-muted-foreground font-medium">
                        {config.subtitle}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-5">
                    {/* Topics preview */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Topics Included
                      </p>
                      <ul className="space-y-1.5">
                        {category.topics.slice(0, 3).map((topic, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span className="line-clamp-1">{topic.title}</span>
                          </li>
                        ))}
                        {category.topics.length > 3 && (
                          <li className="text-sm text-muted-foreground pl-3.5">
                            +{category.topics.length - 3} more topics
                          </li>
                        )}
                        {category.topics.length === 0 && (
                          <li className="text-sm text-muted-foreground italic">
                            Coming soon...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {category.topics.length} topic{category.topics.length !== 1 ? 's' : ''}
                      </span>
                      <div className="flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* More Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            More topics coming soon: Patient Assessment, Pharmacology, Trauma Care, and more.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Topics;
