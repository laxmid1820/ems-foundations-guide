import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { TopicCallout } from "@/components/topics/TopicCallout";
import { TopicSection } from "@/components/topics/TopicSection";
import { StickyProgressBar } from "@/components/topics/StickyProgressBar";
import { useXP } from "@/hooks/useXP";
import { LevelProgressionButton } from "@/components/topics/LevelProgressionButton";
import { 
  getSubsectionContentFromCurriculum, 
  getAdjacentSubsection,
  CategoryLevel 
} from "@/data/topicsContent";
import { getTopicSections } from "@/data/subtopicContent";
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
import { Clock, ArrowLeft, ChevronLeft, ChevronRight, Lightbulb, BookOpen, GraduationCap, TrendingUp, Award } from "lucide-react";

const levelConfig: Record<CategoryLevel, {
  icon: typeof GraduationCap;
  badgeLabel: string;
  badgeClass: string;
}> = {
  emt: {
    icon: GraduationCap,
    badgeLabel: "EMT",
    badgeClass: "bg-success/10 text-success border-success/20"
  },
  aemt: {
    icon: TrendingUp,
    badgeLabel: "AEMT",
    badgeClass: "bg-primary/10 text-primary border-primary/20"
  },
  paramedic: {
    icon: Award,
    badgeLabel: "Paramedic",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
  }
};

const SubsectionDetail = () => {
  const { level, topicSlug, subsectionSlug } = useParams<{ 
    level: string; 
    topicSlug: string;
    subsectionSlug: string;
  }>();
  const navigate = useNavigate();
  
  const data = level && topicSlug && subsectionSlug 
    ? getSubsectionContentFromCurriculum(level, topicSlug, subsectionSlug) 
    : undefined;
  
  // Get rich section content if available
  const richSections = level && topicSlug 
    ? getTopicSections(level, topicSlug)
    : undefined;
  
  // Track flipped flashcards and quiz answers for progress
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [answeredQuizzes, setAnsweredQuizzes] = useState<Set<string>>(new Set());
  const [tabsViewed, setTabsViewed] = useState<Set<number>>(new Set());
  
  // Progress tracking (simple: mark viewed sections)
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set());
  const totalSections = richSections ? richSections.length : 4; // Rich sections or default 4 blocks

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSectionsViewed(new Set());
    setFlippedCards(new Set());
    setAnsweredQuizzes(new Set());
    setTabsViewed(new Set());
  }, [subsectionSlug, topicSlug]);

  const { gainSectionXP, gainFlashcardXP, gainQuizXP } = useXP();

  // Track section visibility
  useEffect(() => {
    const viewedRef = sectionsViewed;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewedRef.has(entry.target.id)) {
            setSectionsViewed(prev => {
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
            gainSectionXP();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (richSections) {
      richSections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
      });
    } else {
      const defaultSections = ['objective-section', 'overview-section', 'details-section', 'analogy-section'];
      defaultSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [subsectionSlug, topicSlug, richSections, gainSectionXP]);

  // Handler callbacks for interactive elements
  const handleCardFlip = useCallback((cardId: string) => {
    setFlippedCards(prev => {
      if (prev.has(cardId)) return prev;
      gainFlashcardXP();
      return new Set(prev).add(cardId);
    });
  }, [gainFlashcardXP]);

  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    setAnsweredQuizzes(prev => new Set(prev).add(questionId));
    if (correct) gainQuizXP(true);
  }, [gainQuizXP]);

  const handleTabViewed = useCallback((index: number) => {
    setTabsViewed(prev => new Set(prev).add(index));
  }, []);

  const progress = Math.round((sectionsViewed.size / totalSections) * 100);
  
  // Navigation
  const nextSubsection = level && topicSlug && subsectionSlug 
    ? getAdjacentSubsection(level, topicSlug, subsectionSlug, 'next')
    : null;
  const prevSubsection = level && topicSlug && subsectionSlug 
    ? getAdjacentSubsection(level, topicSlug, subsectionSlug, 'prev')
    : null;

  const handleNavigate = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  if (!data) {
    return <Navigate to="/topics" replace />;
  }

  const { category, topic, subsection } = data;
  const config = levelConfig[category.level];
  const Icon = config.icon;

  return (
    <Layout>
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
              <BreadcrumbPage className="line-clamp-1">{topic.title}</BreadcrumbPage>
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
                className={cn("font-medium mb-2", config.badgeClass)}
              >
                {config.badgeLabel}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                {subsection.title}
              </h1>
              <p className="text-sm text-muted-foreground mt-2">
                Part of: {topic.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{topic.estimatedMinutes || 5} min read</span>
            </div>
          </div>
        </div>

        {/* Content Blocks - Rich content or fallback layout */}
        <div className="space-y-8">
          {richSections ? (
            /* Rich interactive content with tabs, flashcards, quizzes */
            richSections.map((section, index) => (
              <TopicSection
                key={section.id}
                section={section}
                index={index}
                onTabViewed={handleTabViewed}
                onCardFlip={handleCardFlip}
                onQuizAnswer={handleQuizAnswer}
              />
            ))
          ) : (
            /* Default 4-block layout for topics without rich content */
            <>
              {/* Objective Block */}
              <section id="objective-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">
                    1
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Learning Objective</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {subsection.objective}
                </p>
              </section>

              {/* Overview Block */}
              <section id="overview-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">
                    2
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Overview</h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {subsection.overview}
                </p>
              </section>

              {/* Key Details Block */}
              <section id="details-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">
                    3
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Key Details</h2>
                </div>
                <ul className="space-y-3">
                  {subsection.keyDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Analogy Callout */}
              <section id="analogy-section">
                <TopicCallout type="proTip">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Think of it this way...</p>
                      <p className="text-muted-foreground">{subsection.analogy}</p>
                    </div>
                  </div>
                </TopicCallout>
              </section>

              {/* Features placeholder */}
              {subsection.features && subsection.features !== "Placeholder features" && (
                <section className="rounded-lg border border-dashed border-border bg-muted/30 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <p className="font-medium text-foreground">Interactive Feature</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">{subsection.features}</p>
                </section>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {prevSubsection ? (
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => handleNavigate(`/topics/${prevSubsection.categorySlug}/${prevSubsection.topicSlug}/${prevSubsection.subsectionSlug}`)}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span className="text-sm">Previous</span>
              </Button>
            ) : (
              <div />
            )}
            
            {/* Level Progression Button - inline on all A&P, Pharmacology, Respiratory, and Patient Assessment topics */}
            {(topicSlug?.includes("anatomy-and-physiology") || topicSlug?.includes("pharmacology") || topicSlug?.includes("respiratory-emergencies") || topicSlug?.includes("patient-assessment") || topicSlug?.includes("shock-management") || topicSlug?.includes("pathophysiology") || topicSlug?.includes("advanced-airway") || topicSlug?.includes("cardiac-monitoring") || topicSlug?.includes("12-lead-ecg") || topicSlug?.includes("copd-vs-chf") || topicSlug?.includes("asthma-vs-anaphylaxis") || topicSlug?.includes("pulmonary-edema")) && (
              <LevelProgressionButton 
                currentLevel={category.level}
                topicSlug={topicSlug}
                variant="inline"
              />
            )}
            
            {nextSubsection ? (
              <Button 
                className="justify-end sm:ml-auto"
                onClick={() => handleNavigate(`/topics/${nextSubsection.categorySlug}/${nextSubsection.topicSlug}/${nextSubsection.subsectionSlug}`)}
              >
                <span className="text-sm">Continue to Next</span>
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="sm:ml-auto"
                onClick={() => handleNavigate(`/topics/${category.slug}`)}
              >
                Complete! Back to Topics
              </Button>
            )}
          </div>

          {/* Completion celebration card - only at Paramedic level end */}
          {(topicSlug?.includes("anatomy-and-physiology") || topicSlug?.includes("pharmacology") || topicSlug?.includes("respiratory-emergencies") || topicSlug?.includes("patient-assessment") || topicSlug?.includes("shock-management") || topicSlug?.includes("pathophysiology") || topicSlug?.includes("advanced-airway") || topicSlug?.includes("cardiac-monitoring") || topicSlug?.includes("12-lead-ecg") || topicSlug?.includes("copd-vs-chf") || topicSlug?.includes("asthma-vs-anaphylaxis") || topicSlug?.includes("pulmonary-edema")) && 
           !nextSubsection && category.level === "paramedic" && (
            <LevelProgressionButton 
              currentLevel={category.level}
              topicSlug={topicSlug}
              variant="card"
            />
          )}
        </div>
      </div>

      {/* Sticky Progress Bar */}
      <StickyProgressBar 
        progress={progress}
        sectionsViewed={sectionsViewed.size}
        totalSections={totalSections}
      />
    </Layout>
  );
};

export default SubsectionDetail;
