import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { getTopicContent, getSubsectionContentFromCurriculum, CategoryLevel } from "@/data/topicsContent";
import { getTopicSections } from "@/data/subtopicContent";
import { TopicSection } from "@/components/topics/TopicSection";
import { LevelProgressionButton } from "@/components/topics/LevelProgressionButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Clock, BookOpen, ChevronRight, Construction } from "lucide-react";

const badgeConfig: Record<CategoryLevel, string> = {
  emt: "bg-success/10 text-success border-success/20",
  aemt: "bg-primary/10 text-primary border-primary/20",
  paramedic: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
};

const TopicOverview = () => {
  const { level, topicSlug } = useParams<{ level: string; topicSlug: string }>();
  const navigate = useNavigate();
  
  // Smooth scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [level, topicSlug]);

  const topicData = level && topicSlug ? getTopicContent(level, topicSlug) : undefined;
  
  // If topic has subsections, redirect to first subsection
  if (topicData && topicData.topic.subsections.length > 0) {
    const firstSubsection = topicData.topic.subsections[0];
    return <Navigate to={`/topics/${level}/${topicSlug}/${firstSubsection.slug}`} replace />;
  }

  if (!topicData) {
    return <Navigate to="/topics" replace />;
  }

  const { category, topic } = topicData;

  // Get rich section content for topics without subsections
  const richSections = level && topicSlug 
    ? getTopicSections(level, topicSlug) 
    : undefined;

  // Find next topic in the category
  const currentTopicIndex = category.topics.findIndex(t => t.slug === topicSlug);
  const nextTopic = currentTopicIndex < category.topics.length - 1 
    ? category.topics[currentTopicIndex + 1] 
    : null;

  const handleContinue = () => {
    if (nextTopic) {
      if (nextTopic.subsections.length > 0) {
        navigate(`/topics/${level}/${nextTopic.slug}/${nextTopic.subsections[0].slug}`);
      } else {
        navigate(`/topics/${level}/${nextTopic.slug}`);
      }
    } else {
      navigate(`/topics/${level}`);
    }
  };

  // If we have rich sections, render them inline
  if (richSections && richSections.length > 0) {
    return <TopicOverviewWithContent 
      category={category} 
      topic={topic} 
      level={level!} 
      topicSlug={topicSlug!}
      sections={richSections} 
      nextTopic={nextTopic}
      onContinue={handleContinue}
    />;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:px-8 pb-24">
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
              <BreadcrumbLink asChild>
                <Link to={`/topics/${level}`} className="text-muted-foreground hover:text-foreground">
                  {category.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BookOpen className="h-7 w-7" />
            </div>
            <div className="pt-1">
              <Badge 
                variant="outline" 
                className={cn("font-medium mb-2", badgeConfig[category.level])}
              >
                {category.level.toUpperCase()}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                {topic.title}
              </h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {topic.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{topic.estimatedMinutes > 0 ? `${topic.estimatedMinutes} min` : "TBD"}</span>
            </div>
            <span>•</span>
            <span>{richSections && richSections.length > 0 ? `${richSections.length} sections` : `${topic.subsections.length} subsections`}</span>
          </div>
        </div>

        {/* Coming Soon Card */}
        <Card className="max-w-3xl border-dashed border-2 border-muted-foreground/30 bg-muted/30">
          <CardContent className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Construction className="h-8 w-8" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Content Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We're working hard to bring you quality educational content for this topic. 
              Check back soon for comprehensive lessons, examples, and practice questions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="outline" asChild>
                <Link to={`/topics/${level}`}>
                  Back to {category.title}
                </Link>
              </Button>
              {nextTopic && (
                <Button onClick={handleContinue} className="gap-2">
                  Continue to Next Topic
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Next Topic Preview */}
        {nextTopic && (
          <div className="max-w-3xl mt-8">
            <p className="text-sm font-medium text-muted-foreground mb-3">Up Next</p>
            <Card className="hover:border-primary/30 transition-colors cursor-pointer" onClick={handleContinue}>
              <CardContent className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{nextTopic.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {nextTopic.description || "Content coming soon..."}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        )}
      </div>

    </Layout>
  );
};

// ─── Inline content renderer for topics without subsections ───
import type { TopicSection as TopicSectionType } from "@/data/topics";
import type { CategoryContent, Topic } from "@/data/topicsContent";

interface TopicOverviewWithContentProps {
  category: CategoryContent;
  topic: Topic;
  level: string;
  topicSlug: string;
  sections: TopicSectionType[];
  nextTopic: Topic | null;
  onContinue: () => void;
}

function TopicOverviewWithContent({ 
  category, topic, level, topicSlug, sections, nextTopic, onContinue 
}: TopicOverviewWithContentProps) {
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set());
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [answeredQuizzes, setAnsweredQuizzes] = useState<Set<string>>(new Set());
  const [tabsViewed, setTabsViewed] = useState<Set<number>>(new Set());

  const totalSections = sections.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSectionsViewed(new Set());
    setFlippedCards(new Set());
    setAnsweredQuizzes(new Set());
    setTabsViewed(new Set());
  }, [topicSlug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsViewed(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [topicSlug, sections]);

  const handleCardFlip = useCallback((cardId: string) => {
    setFlippedCards(prev => new Set(prev).add(cardId));
  }, []);
  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    setAnsweredQuizzes(prev => new Set(prev).add(questionId));
  }, []);
  const handleTabViewed = useCallback((index: number) => {
    setTabsViewed(prev => new Set(prev).add(index));
  }, []);

  const progress = Math.round((sectionsViewed.size / totalSections) * 100);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:px-8 max-w-4xl pb-24">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/topics" className="text-muted-foreground hover:text-foreground">Topics</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/topics/${level}`} className="text-muted-foreground hover:text-foreground">
                  {category.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BookOpen className="h-7 w-7" />
            </div>
            <div className="pt-1">
              <Badge variant="outline" className={cn("font-medium mb-2", badgeConfig[category.level])}>
                {category.level.toUpperCase()}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {topic.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{topic.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{topic.estimatedMinutes} min</span>
            </div>
            <span>•</span>
            <span>{sections.length} sections</span>
          </div>
        </div>

        {/* Rich Section Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <TopicSection
              key={section.id}
              section={section}
              index={index}
              onTabViewed={handleTabViewed}
              onCardFlip={handleCardFlip}
              onQuizAnswer={handleQuizAnswer}
            />
          ))}
        </div>

        {/* Level Progression Button for comparison modules */}
        <LevelProgressionButton 
          currentLevel={category.level}
          topicSlug={topicSlug}
          variant="card"
        />

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button variant="outline" asChild>
              <Link to={`/topics/${level}`}>
                Back to {category.title}
              </Link>
            </Button>
            {nextTopic && (
              <Button onClick={onContinue} className="gap-2">
                Continue to Next Topic
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default TopicOverview;
