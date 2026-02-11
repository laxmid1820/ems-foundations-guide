import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { TopicCard } from "@/components/topics/TopicCard";
import { getCategoryContentBySlug, CategoryLevel } from "@/data/topicsContent";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { GraduationCap, TrendingUp, Award } from "lucide-react";

const levelConfig: Record<CategoryLevel, {
  icon: typeof GraduationCap;
  badgeLabel: string;
  badgeClass: string;
  description: string;
  encouragement: string;
}> = {
  emt: {
    icon: GraduationCap,
    badgeLabel: "Start Here",
    badgeClass: "bg-success/10 text-success border-success/20",
    description: "Start your EMS journey with confidence. We'll break down everything into easy-to-understand concepts with plenty of examples and encouragement.",
    encouragement: "We'll make these concepts easy, step by step. No rush – take your time."
  },
  aemt: {
    icon: TrendingUp,
    badgeLabel: "Building On Basics",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    description: "Ready to level up? We'll add more detail to what you already know, connecting concepts to give you a deeper clinical understanding.",
    encouragement: "Building on what you know with deeper understanding. You're ready for this."
  },
  paramedic: {
    icon: Award,
    badgeLabel: "Advanced Mastery",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    description: "Master the clinical reasoning behind the protocols. We'll explore pathophysiology, pharmacology connections, and critical decision-making.",
    encouragement: "Advanced concepts for clinical excellence. You've earned your place here."
  }
};

const CategoryDetail = () => {
  const { level } = useParams<{ level: string }>();
  
  const category = level ? getCategoryContentBySlug(level) : undefined;
  
  if (!category) {
    return <Navigate to="/topics" replace />;
  }

  const config = levelConfig[category.level];
  const Icon = config.icon;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/topics" className="text-muted-foreground hover:text-foreground">
                  Topics
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div className="pt-1">
              <Badge 
                variant="outline" 
                className={cn("font-medium mb-2", config.badgeClass)}
              >
                {config.badgeLabel}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {category.title}
              </h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {config.description}
          </p>
          
          <p className="text-base text-muted-foreground italic">
            {config.encouragement}
          </p>
        </div>

        {/* Topic Cards Grid */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Choose a Topic to Begin
          </h2>
          {category.topics.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
              {category.topics.map((topic) => (
                <TopicCard 
                  key={topic.slug} 
                  topic={topic}
                  categorySlug={category.slug}
                  categoryLevel={category.level}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-muted/50 p-8 text-center max-w-4xl">
              <p className="text-muted-foreground mb-2">
                Topics for this level are coming soon!
              </p>
              <p className="text-sm text-muted-foreground">
                We're working hard to bring you quality content. Check back soon!
              </p>
            </div>
          )}
        </div>

        {/* Encouragement footer */}
        <div className="max-w-4xl mt-8 p-5 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Remember:</span> Everyone learns at their own pace. 
            These topics are designed to build on each other, but feel free to explore in any order that feels right for you. 
            If something feels confusing, that's normal – we'll break it down together.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryDetail;
