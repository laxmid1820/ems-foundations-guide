import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Layout } from "@/components/Layout";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { XPSlam } from "@/components/gamification/XPSlam";
import { TopicCallout } from "@/components/topics/TopicCallout";
import { TopicSection } from "@/components/topics/TopicSection";

import { SectionNav } from "@/components/topics/SectionNav";
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

// Helper: count quiz questions in a section's blocks
function countSectionQuizzes(section: { blocks?: { type: string; quiz?: { id: string } }[] }): string[] {
  if (!section.blocks) return [];
  return section.blocks
    .filter((b) => b.type === "quiz" && b.quiz?.id)
    .map((b) => b.quiz!.id);
}

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
  
  const richSections = level && topicSlug 
    ? getTopicSections(level, topicSlug)
    : undefined;
  
  // Progress tracking
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [answeredQuizzes, setAnsweredQuizzes] = useState<Set<string>>(new Set());
  const [tabsViewed, setTabsViewed] = useState<Set<number>>(new Set());
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set());
  const totalSections = richSections ? richSections.length : 4;

  // Mastery tracking
  const [masteredSections, setMasteredSections] = useState<Set<string>>(new Set());
  const [sectionCorrect, setSectionCorrect] = useState<Map<string, Set<string>>>(new Map());
  const [allQuizAnswers, setAllQuizAnswers] = useState<Map<string, boolean>>(new Map());
  const [topicBonusAwarded, setTopicBonusAwarded] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Build section quiz map
  const sectionQuizMap = useMemo(() => {
    if (!richSections) return new Map<string, string[]>();
    const m = new Map<string, string[]>();
    richSections.forEach((s) => m.set(s.id, countSectionQuizzes(s)));
    return m;
  }, [richSections]);

  const totalQuizCount = useMemo(() => {
    let c = 0;
    sectionQuizMap.forEach((ids) => (c += ids.length));
    return c;
  }, [sectionQuizMap]);

  // Scroll to top on route change & reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSectionsViewed(new Set());
    setFlippedCards(new Set());
    setAnsweredQuizzes(new Set());
    setTabsViewed(new Set());
    setMasteredSections(new Set());
    setSectionCorrect(new Map());
    setAllQuizAnswers(new Map());
    setTopicBonusAwarded(false);
    setActiveSectionId(null);
  }, [subsectionSlug, topicSlug]);

  const { gainSectionMasteryXP, gainFlashcardXP, gainQuizXP, addXP } = useXP();

  const masteredRef = useRef(masteredSections);
  masteredRef.current = masteredSections;

  // Track section visibility — mastery for quiz-free sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSectionId(sectionId);
            setSectionsViewed((prev) => {
              if (prev.has(sectionId)) return prev;
              const next = new Set(prev);
              next.add(sectionId);
              // Auto-master quiz-free sections
              const quizIds = sectionQuizMap.get(sectionId) || [];
              if (quizIds.length === 0 && !masteredRef.current.has(sectionId)) {
                gainSectionMasteryXP();
                setMasteredSections((ms) => new Set(ms).add(sectionId));
              }
              return next;
            });
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
      ['objective-section', 'overview-section', 'details-section', 'analogy-section'].forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [subsectionSlug, topicSlug, richSections, sectionQuizMap, gainSectionMasteryXP]);

  const handleCardFlip = useCallback((cardId: string) => {
    setFlippedCards(prev => {
      if (prev.has(cardId)) return prev;
      gainFlashcardXP();
      return new Set(prev).add(cardId);
    });
  }, [gainFlashcardXP]);

  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    setAnsweredQuizzes(prev => new Set(prev).add(questionId));

    setAllQuizAnswers((prev) => {
      const next = new Map(prev);
      if (!next.has(questionId) || correct) next.set(questionId, correct);
      return next;
    });

    if (correct) {
      gainQuizXP(true);
      // Check section mastery
      for (const [sectionId, quizIds] of sectionQuizMap.entries()) {
        if (quizIds.includes(questionId)) {
          setSectionCorrect((prev) => {
            const next = new Map(prev);
            const set = new Set(next.get(sectionId) || []);
            set.add(questionId);
            next.set(sectionId, set);
            if (set.size === quizIds.length && !masteredRef.current.has(sectionId)) {
              gainSectionMasteryXP();
              setMasteredSections((ms) => new Set(ms).add(sectionId));
            }
            return next;
          });
          break;
        }
      }
    }
  }, [gainQuizXP, sectionQuizMap, gainSectionMasteryXP]);

  // Topic completion bonus
  useEffect(() => {
    if (topicBonusAwarded || totalQuizCount === 0) return;
    if (allQuizAnswers.size < totalQuizCount) return;
    const correctCount = Array.from(allQuizAnswers.values()).filter(Boolean).length;
    const accuracy = (correctCount / totalQuizCount) * 100;
    if (accuracy > 80) {
      addXP(150, `Topic mastered at ${Math.round(accuracy)}% — +150 XP unlocked!`);
      setTopicBonusAwarded(true);
    }
  }, [allQuizAnswers, totalQuizCount, topicBonusAwarded, addXP]);

  const handleTabViewed = useCallback((index: number) => {
    setTabsViewed(prev => new Set(prev).add(index));
  }, []);

  // Weighted progress formula
  const totalFlashcards = richSections
    ? richSections.reduce((sum, s) =>
        sum + (s.blocks?.filter((b: any) => b.type === 'flashcards').flatMap((b: any) => b.flashcards || []).length || 0), 0)
    : 0;
  const sectionWeight = totalSections > 0 ? (sectionsViewed.size / totalSections) * 40 : 40;
  const flashcardWeight = totalFlashcards > 0 ? (flippedCards.size / totalFlashcards) * 30 : 30;
  const quizWeight = totalQuizCount > 0 ? (answeredQuizzes.size / totalQuizCount) * 30 : 30;
  const progress = Math.round(sectionWeight + flashcardWeight + quizWeight);
  
  const nextSubsection = level && topicSlug && subsectionSlug 
    ? getAdjacentSubsection(level, topicSlug, subsectionSlug, 'next')
    : null;
  const prevSubsection = level && topicSlug && subsectionSlug 
    ? getAdjacentSubsection(level, topicSlug, subsectionSlug, 'prev')
    : null;

  const handleNavigate = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  // Section XP map (before early return for hooks order)
  const sectionXPMap = useMemo(() => {
    const m = new Map<string, { earned: number; total: number }>();
    if (!richSections) return m;
    richSections.forEach((s) => {
      const quizIds = sectionQuizMap.get(s.id) || [];
      const quizCount = quizIds.length;
      const total = quizCount * 10 + 15;
      const correct = sectionCorrect.get(s.id)?.size || 0;
      const mastered = masteredSections.has(s.id);
      const earned = correct * 10 + (mastered ? 15 : 0);
      m.set(s.id, { earned, total });
    });
    return m;
  }, [richSections, sectionQuizMap, sectionCorrect, masteredSections]);

  if (!data) {
    return <Navigate to="/topics" replace />;
  }

  const { category, topic, subsection } = data;
  const config = levelConfig[category.level];
  const Icon = config.icon;

  const navSections = richSections
    ? richSections.map((s) => ({ id: s.id, title: s.title }))
    : [
        { id: "objective-section", title: "Learning Objective" },
        { id: "overview-section", title: "Overview" },
        { id: "details-section", title: "Key Details" },
        { id: "analogy-section", title: "Think of it this way" },
      ];

  return (
    <Layout>
      {/* SectionNav */}
      {(() => {
        let totalEarned = 0, totalPossible = 0;
        sectionXPMap.forEach(({ earned, total }) => { totalEarned += earned; totalPossible += total; });
        return (
          <SectionNav
            sections={navSections}
            masteredSections={masteredSections}
            activeSectionId={activeSectionId}
            sectionXPMap={sectionXPMap}
            topicXPEarned={totalEarned}
            topicXPTotal={totalPossible}
          />
        );
      })()}

      <div className="container mx-auto px-4 py-6 sm:py-10 sm:px-6 lg:pl-[240px] lg:pr-8 max-w-4xl lg:max-w-[calc(240px+768px+2rem)] pb-24">
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
        <div className="mb-8 pb-6 border-b border-border lg:max-w-3xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div className="pt-1 flex-1">
              <Badge variant="outline" className={cn("font-medium mb-2", config.badgeClass)}>
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

        {/* Content Blocks */}
        <div className="space-y-8 lg:max-w-3xl">
          {richSections ? (
            richSections.map((section, index) => {
              const quizIds = sectionQuizMap.get(section.id) || [];
              const quizCount = quizIds.length;
              const xpTotal = quizCount * 10 + 15;
              const correctCount = sectionCorrect.get(section.id)?.size || 0;
              const mastered = masteredSections.has(section.id);
              const xpEarned = correctCount * 10 + (mastered ? 15 : 0);
              const progress = quizCount > 0 ? (correctCount / quizCount) * 100 : (mastered ? 100 : 0);
              return (
                <TopicSection
                  key={section.id}
                  section={section}
                  index={index}
                  sectionXPEarned={xpEarned}
                  sectionXPTotal={xpTotal}
                  sectionProgress={progress}
                  isMastered={mastered}
                  onTabViewed={handleTabViewed}
                  onCardFlip={handleCardFlip}
                  onQuizAnswer={handleQuizAnswer}
                />
              );
            })
          ) : (
            <>
              <section id="objective-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">1</div>
                  <h2 className="text-xl font-bold text-foreground">Learning Objective</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{subsection.objective}</p>
              </section>

              <section id="overview-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">2</div>
                  <h2 className="text-xl font-bold text-foreground">Overview</h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{subsection.overview}</p>
              </section>

              <section id="details-section" className="rounded-lg border border-border bg-card shadow-sm p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">3</div>
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

        {/* Topic mastery celebration */}
        <ConfettiEffect trigger={topicBonusAwarded} intensity="big" />
        <XPSlam trigger={topicBonusAwarded} amount={150} />

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-border lg:max-w-3xl">
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

    </Layout>
  );
};

export default SubsectionDetail;
