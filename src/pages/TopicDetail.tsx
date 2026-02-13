import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useXP } from "@/hooks/useXP";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { XPSlam } from "@/components/gamification/XPSlam";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
import { ModuleCompletionCeremony } from "@/components/gamification/ModuleCompletionCeremony";
import { Lock } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DifficultyBadge } from "@/components/topics/DifficultyBadge";
import { TopicSection } from "@/components/topics/TopicSection";
import { TopicCallout } from "@/components/topics/TopicCallout";
import { DisclaimerBanner } from "@/components/topics/DisclaimerBanner";
import { LessonProgress } from "@/components/topics/LessonProgress";
import { ContinueButton } from "@/components/topics/ContinueButton";
import { SectionNav } from "@/components/topics/SectionNav";
import { getTopicBySlug, getAdjacentTopics, getTopicInteractiveCount } from "@/data/topics";
import { Clock, ArrowLeft, BookOpen } from "lucide-react";

// Helper: count quiz questions in a section's blocks
function countSectionQuizzes(section: { blocks?: { type: string; quiz?: { id: string } }[] }): string[] {
  if (!section.blocks) return [];
  return section.blocks
    .filter((b) => b.type === "quiz" && b.quiz?.id)
    .map((b) => b.quiz!.id);
}

const TopicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentTopics(slug) : { prev: null, next: null };

  // Progress tracking state
  const [sectionsViewed, setSectionsViewed] = useState<string[]>([]);
  const [flashcardsFlipped, setFlashcardsFlipped] = useState<string[]>([]);
  const [quizzesPassed, setQuizzesPassed] = useState<string[]>([]);

  // Mastery tracking
  const [masteredSections, setMasteredSections] = useState<Set<string>>(new Set());
  const [sectionCorrect, setSectionCorrect] = useState<Map<string, Set<string>>>(new Map());
  const [allQuizAnswers, setAllQuizAnswers] = useState<Map<string, boolean>>(new Map());
  const [topicBonusAwarded, setTopicBonusAwarded] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // Get interactive element counts
  const interactiveCount = topic ? getTopicInteractiveCount(topic) : { flashcards: 0, quizzes: 0 };
  const totalSections = topic?.sections.length || 0;

  // Build section quiz map once
  const sectionQuizMap = useMemo(() => {
    if (!topic) return new Map<string, string[]>();
    const m = new Map<string, string[]>();
    topic.sections.forEach((s) => m.set(s.id, countSectionQuizzes(s)));
    return m;
  }, [topic]);

  // Total quiz count across topic
  const totalQuizCount = useMemo(() => {
    let c = 0;
    sectionQuizMap.forEach((ids) => (c += ids.length));
    return c;
  }, [sectionQuizMap]);

  // Check if lesson is complete
  const isComplete =
    sectionsViewed.length >= totalSections &&
    flashcardsFlipped.length >= interactiveCount.flashcards &&
    quizzesPassed.length >= interactiveCount.quizzes;

  // Reset progress when topic changes
  useEffect(() => {
    setSectionsViewed([]);
    setFlashcardsFlipped([]);
    setQuizzesPassed([]);
    setMasteredSections(new Set());
    setSectionCorrect(new Map());
    setAllQuizAnswers(new Map());
    setTopicBonusAwarded(false);
    setActiveSectionId(null);
  }, [slug]);

  const { gainSectionMasteryXP, gainFlashcardXP, gainQuizXP, addXP } = useXP();

  // Ref to avoid stale closure for mastered set
  const masteredRef = useRef(masteredSections);
  masteredRef.current = masteredSections;

  // Intersection Observer for section tracking — no XP on scroll for quiz sections
  useEffect(() => {
    if (!topic) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSectionId(sectionId);
            setSectionsViewed((prev) => {
              if (prev.includes(sectionId)) return prev;
              // Auto-master quiz-free sections on view
              const quizIds = sectionQuizMap.get(sectionId) || [];
              if (quizIds.length === 0 && !masteredRef.current.has(sectionId)) {
                gainSectionMasteryXP();
                setMasteredSections((ms) => new Set(ms).add(sectionId));
              }
              return [...prev, sectionId];
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    topic.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [topic, sectionQuizMap, gainSectionMasteryXP]);

  // Handlers for interactive elements
  const handleCardFlip = useCallback((cardId: string) => {
    setFlashcardsFlipped((prev) => {
      if (prev.includes(cardId)) return prev;
      gainFlashcardXP();
      return [...prev, cardId];
    });
  }, [gainFlashcardXP]);

  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    // Track all answers for accuracy
    setAllQuizAnswers((prev) => {
      const next = new Map(prev);
      // Only upgrade to correct, never downgrade
      if (!next.has(questionId) || correct) {
        next.set(questionId, correct);
      }
      return next;
    });

    if (correct) {
      setQuizzesPassed((prev) =>
        prev.includes(questionId) ? prev : [...prev, questionId]
      );
      gainQuizXP(true);

      // Check section mastery
      for (const [sectionId, quizIds] of sectionQuizMap.entries()) {
        if (quizIds.includes(questionId)) {
          setSectionCorrect((prev) => {
            const next = new Map(prev);
            const set = new Set(next.get(sectionId) || []);
            set.add(questionId);
            next.set(sectionId, set);

            // Check if all quizzes in this section are correct
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

  // Ceremony state
  const [showCeremony, setShowCeremony] = useState(false);

  const handleModuleComplete = useCallback(() => {
    addXP(5, "Module completed!");
    setShowCeremony(true);
  }, [addXP]);

  const { user, profile, refreshProfile } = useAuth();

  const handleCeremonyComplete = useCallback(async () => {
    addXP(150, "Topic mastered — +150 XP unlocked!");
    setTopicBonusAwarded(true);
    setShowCeremony(false);

    // Award badge
    if (user && profile) {
      const existingBadges = (profile.badges as any[]) || [];
      if (!existingBadges.some((b: any) => b.type === "topic-mastered" && b.topicSlug === slug)) {
        const newBadge = { type: "topic-mastered", topicSlug: slug, awardedAt: new Date().toISOString() };
        await supabase
          .from("profiles")
          .update({ badges: [...existingBadges, newBadge] } as any)
          .eq("user_id", user.id);
        refreshProfile();
        toast({
          title: "🏅 Badge unlocked!",
          description: "Topic mastered badge unlocked! +1 badge",
        });
      }
    }
  }, [addXP, user, profile, slug, refreshProfile]);

  // Find Knowledge Check section by pattern (not array position)
  const knowledgeCheckIndex = useMemo(() => {
    const sections = topic?.sections;
    if (!sections) return -1;
    return sections.findIndex(
      (s) =>
        s.title.toLowerCase().includes("knowledge check") ||
        s.id.includes("knowledge-check") ||
        s.id.endsWith("-quiz")
    );
  }, [topic]);

  // Gate Knowledge Check behind prior quiz mastery
  const allPriorQuizzesPerfect = useMemo(() => {
    const sections = topic?.sections;
    if (!sections || knowledgeCheckIndex < 1) return true;
    const priorSections = sections.slice(0, knowledgeCheckIndex);
    console.log('[GATE DEBUG] priorSections:', priorSections.length,
      'knowledgeCheckIndex:', knowledgeCheckIndex);
    for (const s of priorSections) {
      const quizIds = sectionQuizMap.get(s.id) || [];
      const correctSet = sectionCorrect.get(s.id);
      console.log(`  section ${s.id}: quizIds=${quizIds.length}, correct=${correctSet?.size || 0}`);
      if (quizIds.length > 0 && (!correctSet || correctSet.size < quizIds.length)) {
        return false;
      }
    }
    return true;
  }, [topic, knowledgeCheckIndex, sectionQuizMap, sectionCorrect]);

  // Check if Knowledge Check quizzes are all perfect
  const knowledgeCheckPerfect = useMemo(() => {
    const sections = topic?.sections;
    if (!sections || knowledgeCheckIndex < 0) return false;
    const kcSection = sections[knowledgeCheckIndex];
    const quizIds = sectionQuizMap.get(kcSection.id) || [];
    if (quizIds.length === 0) return false;
    const correctSet = sectionCorrect.get(kcSection.id);
    const result = correctSet ? correctSet.size >= quizIds.length : false;
    console.log('[KC DEBUG] kcSection:', kcSection.id,
      'quizIds:', quizIds.length, 'correct:', correctSet?.size || 0,
      'perfect:', result);
    return result;
  }, [topic, knowledgeCheckIndex, sectionQuizMap, sectionCorrect]);

  const handleTabViewed = useCallback((index: number) => {
    console.log("Tab viewed:", index);
  }, []);

  // Find first incorrect quiz section for retake CTA (must be before early return)
  const firstIncorrectSectionId = useMemo(() => {
    for (const [sectionId, quizIds] of sectionQuizMap.entries()) {
      for (const qId of quizIds) {
        if (allQuizAnswers.has(qId) && !allQuizAnswers.get(qId)) {
          return sectionId;
        }
      }
    }
    return null;
  }, [sectionQuizMap, allQuizAnswers]);

  // Section XP map for nav (must be before early return)
  const sectionXPMap = useMemo(() => {
    const m = new Map<string, { earned: number; total: number }>();
    if (!topic) return m;
    topic.sections.forEach((s) => {
      const quizIds = sectionQuizMap.get(s.id) || [];
      const quizCount = quizIds.length;
      // Count flashcards in this section
      const flashcardCount = s.blocks?.filter((b) => b.type === "flashcards")
        .reduce((sum, b) => sum + (b.flashcards?.length || 0), 0) || 0;
      // Count flipped cards belonging to this section
      const flippedInSection = Array.from(flashcardsFlipped).filter(
        (id) => id.startsWith(`${s.id}-card-`)
      ).length;
      const total = quizCount * 10 + flashcardCount * 2 + 15;
      const correct = sectionCorrect.get(s.id)?.size || 0;
      const mastered = masteredSections.has(s.id);
      const earned = correct * 10 + flippedInSection * 2 + (mastered ? 15 : 0);
      m.set(s.id, { earned, total });
    });
    return m;
  }, [topic, sectionQuizMap, sectionCorrect, masteredSections, flashcardsFlipped]);

  if (!topic) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Topic Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The topic you're looking for doesn't exist yet.
          </p>
          <Button asChild>
            <Link to="/topics">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Topics
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = topic.icon;

  // Accuracy for completion callout
  const totalAnswered = allQuizAnswers.size;
  const correctCount = Array.from(allQuizAnswers.values()).filter(Boolean).length;
  const accuracy = totalQuizCount > 0 ? Math.round((correctCount / totalQuizCount) * 100) : 0;
  const allQuizzesAttempted = totalAnswered >= totalQuizCount && totalQuizCount > 0;

  const navSections = topic.sections.map((s) => ({ id: s.id, title: s.title }));

  return (
    <Layout>
      {/* SectionNav */}
      {(() => {
        let totalEarned = 0, totalPossible = 0;
        sectionXPMap.forEach(({ earned, total }) => { totalEarned += earned; totalPossible += total; });
        // Reserve +5 for module completion button
        totalPossible += 5;
        if (topicBonusAwarded) totalEarned += 5;
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

      <div className="container mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:pl-[240px] lg:pr-8 max-w-3xl lg:max-w-[calc(240px+768px+2rem)]">
        {/* Disclaimer Banner - Top */}
        <DisclaimerBanner variant="top" />

        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/topics" className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  Topics
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Topic Header */}
        <header className="mb-8 pb-6 border-b border-border lg:max-w-3xl">
          {/* Progress indicator */}
          <LessonProgress
            sectionsViewed={sectionsViewed}
            totalSections={totalSections}
            flashcardsFlipped={flashcardsFlipped}
            totalFlashcards={interactiveCount.flashcards}
            quizzesPassed={quizzesPassed}
            totalQuizzes={interactiveCount.quizzes}
            className="mb-6"
          />

          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-16 sm:w-16">
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <DifficultyBadge difficulty={topic.difficulty} />
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{topic.estimatedMinutes} min read</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {topic.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {topic.description}
          </p>
        </header>

        {/* Linear Scrolling Sections */}
        <div className="mb-10 lg:max-w-3xl">
          {topic.sections.map((section, index) => {
              const isKnowledgeCheck = index === knowledgeCheckIndex;
              // Gate Knowledge Check section
              if (isKnowledgeCheck && !allPriorQuizzesPerfect) {
                return (
                  <section key={section.id} className="mb-6 rounded-2xl border-2 border-dashed border-xp/30 bg-xp/5 p-8 text-center">
                    <Lock className="h-8 w-8 text-xp/50 mx-auto mb-3" />
                    <p className="font-bold text-foreground mb-1">Final Knowledge Check</p>
                    <p className="text-sm text-muted-foreground">
                      Complete all prior knowledge checks 100% to unlock the final Knowledge Check section!
                    </p>
                  </section>
                );
              }
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
            })}

            {/* Done with Module button */}
            {allPriorQuizzesPerfect && knowledgeCheckPerfect && !topicBonusAwarded && (
              <div className="mt-8 space-y-3">
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Finish strong! Completing the module unlocks your +150 XP mastery bonus and badge.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-xp text-xp-foreground hover:bg-xp/90 rounded-2xl uppercase tracking-wide font-extrabold shadow-[0_4px_0_hsl(var(--xp)/0.6)] hover:shadow-[0_2px_0_hsl(var(--xp)/0.6)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
                  onClick={handleModuleComplete}
                >
                  Done with Module
                </Button>
              </div>
            )}
        </div>

        {/* Completion Section */}
        <div className="mb-10 py-8 border-t border-border space-y-6 lg:max-w-3xl relative">
          {/* Module Completion Ceremony */}
          <ModuleCompletionCeremony trigger={showCeremony} onComplete={handleCeremonyComplete} />

          {topicBonusAwarded ? (
            <TopicCallout type="youveGotThis">
              <div className="space-y-3">
                <p>🎉 Excellent work! You mastered {topic.title.toLowerCase()} and earned the +150 XP bonus!</p>
                <AchievementBadge variant="topic-mastered" size="md" />
              </div>
            </TopicCallout>
          ) : (
            <TopicCallout type="rememberThis">
              Complete all sections, flip all flashcards, and pass all quizzes to unlock the next lesson. Take your time—understanding beats speed every time.
            </TopicCallout>
          )}

          <ContinueButton
            nextTopicSlug={next?.slug || null}
            nextTopicTitle={next?.title || null}
            isUnlocked={isComplete}
          />
        </div>

        {/* Secondary Navigation */}
        <nav className="py-6 border-t border-border lg:max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-3">
            {prev && (
              <Button variant="outline" asChild className="flex-1">
                <Link to={`/topics/${prev.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Previous: {prev.title}
                </Link>
              </Button>
            )}
            <Button variant="ghost" asChild>
              <Link to="/topics" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                All Topics
              </Link>
            </Button>
          </div>
        </nav>

        {/* Disclaimer Banner - Bottom */}
        <DisclaimerBanner variant="bottom" />
      </div>
    </Layout>
  );
};

export default TopicDetail;
