import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { TopicSection } from "@/components/topics/TopicSection";
import { TopicCallout } from "@/components/topics/TopicCallout";
import { LearningObjectives } from "@/components/topics/LearningObjectives";

import { getSubtopic } from "@/data/categories";
import { getSubtopicContent } from "@/data/subtopicContent";
import { useLessonProgress, useSectionObserver } from "@/hooks/useLessonProgress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Clock, ArrowLeft, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react";

const SubtopicDetail = () => {
  const { level, subtopicSlug } = useParams<{ level: string; subtopicSlug: string }>();
  const navigate = useNavigate();
  
  const data = level && subtopicSlug ? getSubtopic(level, subtopicSlug) : undefined;
  const sections = level && subtopicSlug ? getSubtopicContent(level, subtopicSlug) : undefined;
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [subtopicSlug]);

  // Progress tracking
  const {
    sectionsViewed,
    progress,
    totalSections,
    markSectionViewed,
    markFlashcardFlipped,
    markQuizCorrect,
    resetProgress,
  } = useLessonProgress(sections);

  // Reset progress when navigating to new subtopic
  useEffect(() => {
    resetProgress();
  }, [subtopicSlug, resetProgress]);

  // IntersectionObserver for tracking section views
  useSectionObserver(sections, markSectionViewed);

  // Handle flashcard flip
  const handleCardFlip = useCallback((cardId: string) => {
    markFlashcardFlipped(cardId);
  }, [markFlashcardFlipped]);

  // Handle quiz answer
  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    if (correct) {
      markQuizCorrect(questionId);
    }
  }, [markQuizCorrect]);

  // Handle navigation with scroll-to-top
  const handleNavigate = useCallback((path: string) => {
    navigate(path);
    // scrollTo is handled by useEffect on route change
  }, [navigate]);

  if (!data) {
    return <Navigate to="/topics" replace />;
  }

  const { category, subtopic } = data;
  const Icon = subtopic.icon;

  // Find next/prev subtopics
  const currentIndex = category.subtopics.findIndex(s => s.slug === subtopic.slug);
  const prevSubtopic = currentIndex > 0 ? category.subtopics[currentIndex - 1] : null;
  const nextSubtopic = currentIndex < category.subtopics.length - 1 ? category.subtopics[currentIndex + 1] : null;

  const isComplete = progress >= 100;
  const isLastSubtopic = !nextSubtopic;

  return (
    <Layout>
      {/* Add padding at bottom for sticky progress bar */}
      <div className="container mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:px-8 max-w-4xl pb-24">
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
                <Link to={`/topics/${category.slug}`} className="text-muted-foreground hover:text-foreground">
                  {category.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{subtopic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back link */}
        <Link 
          to={`/topics/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {category.title}
        </Link>

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div className="pt-1 flex-1">
              <Badge 
                variant="outline" 
                className={cn("font-medium mb-2", category.badgeClass)}
              >
                {category.badgeLabel}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {subtopic.title}
              </h1>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {subtopic.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{subtopic.estimatedMinutes} min read</span>
            </div>
          </div>
        </div>

        {/* Encouraging intro callout */}
        <TopicCallout type="youveGotThis" className="mb-6">
          {subtopic.encouragingTagline} Take your time with each section – there's no rush. 
          We'll build understanding step by step.
        </TopicCallout>

        {/* Learning Objectives */}
        {subtopic.learningObjectives && (
          <LearningObjectives 
            objectives={subtopic.learningObjectives} 
            className="mb-8"
          />
        )}

        {/* Content Sections */}
        {sections && sections.length > 0 ? (
          <div className="space-y-6">
            {sections.map((section, index) => (
              <TopicSection 
                key={section.id} 
                section={section}
                index={index}
                onCardFlip={handleCardFlip}
                onQuizAnswer={handleQuizAnswer}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
            <p className="text-muted-foreground mb-2">
              Content for this topic is coming soon!
            </p>
            <p className="text-sm text-muted-foreground">
              We're working on making this section just as clear and helpful as the others.
            </p>
          </div>
        )}

        {/* Completion Message */}
        {isComplete && subtopic.completionMessage && (
          <div className="mt-8 rounded-lg border border-success/20 bg-success/5 p-6 text-center">
            <PartyPopper className="h-10 w-10 text-success mx-auto mb-3" />
            <p className="font-semibold text-foreground mb-2">Lesson Complete!</p>
            <p className="text-muted-foreground">{subtopic.completionMessage}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {prevSubtopic ? (
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => handleNavigate(`/topics/${category.slug}/${prevSubtopic.slug}`)}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <span className="text-xs text-muted-foreground block">Previous</span>
                  <span className="text-sm font-medium line-clamp-1">{prevSubtopic.title}</span>
                </div>
              </Button>
            ) : (
              <div />
            )}
            
            {nextSubtopic ? (
              <Button 
                className="justify-end sm:ml-auto"
                onClick={() => handleNavigate(`/topics/${category.slug}/${nextSubtopic.slug}`)}
              >
                <div className="text-right">
                  <span className="text-xs text-primary-foreground/80 block">Continue to Next</span>
                  <span className="text-sm font-medium line-clamp-1">{nextSubtopic.title}</span>
                </div>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="sm:ml-auto"
                onClick={() => handleNavigate(`/topics/${category.slug}`)}
              >
                {isComplete ? (
                  <>
                    <PartyPopper className="h-4 w-4 mr-2" />
                    Complete! Back to {category.title}
                  </>
                ) : (
                  `Back to ${category.title}`
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default SubtopicDetail;
