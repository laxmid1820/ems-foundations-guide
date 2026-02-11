import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
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
import { getTopicBySlug, getAdjacentTopics, getTopicInteractiveCount } from "@/data/topics";
import { Clock, ArrowLeft, BookOpen } from "lucide-react";

const TopicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentTopics(slug) : { prev: null, next: null };

  // Progress tracking state
  const [sectionsViewed, setSectionsViewed] = useState<string[]>([]);
  const [flashcardsFlipped, setFlashcardsFlipped] = useState<string[]>([]);
  const [quizzesPassed, setQuizzesPassed] = useState<string[]>([]);

  // Get interactive element counts
  const interactiveCount = topic ? getTopicInteractiveCount(topic) : { flashcards: 0, quizzes: 0 };
  const totalSections = topic?.sections.length || 0;

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
  }, [slug]);

  // Intersection Observer for section tracking
  useEffect(() => {
    if (!topic) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setSectionsViewed((prev) => 
              prev.includes(sectionId) ? prev : [...prev, sectionId]
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all section elements
    topic.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [topic]);

  // Handlers for interactive elements
  const handleCardFlip = useCallback((cardId: string) => {
    setFlashcardsFlipped((prev) => 
      prev.includes(cardId) ? prev : [...prev, cardId]
    );
  }, []);

  const handleQuizAnswer = useCallback((questionId: string, correct: boolean) => {
    if (correct) {
      setQuizzesPassed((prev) => 
        prev.includes(questionId) ? prev : [...prev, questionId]
      );
    }
  }, []);

  const handleTabViewed = useCallback((index: number) => {
    // Tab viewing is tracked but doesn't affect completion
    console.log("Tab viewed:", index);
  }, []);

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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 max-w-3xl">
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
        <header className="mb-8 pb-6 border-b border-border">
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
        <div className="mb-10">
          {topic.sections.map((section, index) => (
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

        {/* Completion Section */}
        <div className="mb-10 py-8 border-t border-border space-y-6">
          {isComplete ? (
            <TopicCallout type="youveGotThis">
              🎉 Excellent work! You've completed all sections, flipped all flashcards, and passed all quizzes for {topic.title.toLowerCase()}. You're ready to move on!
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
        <nav className="py-6 border-t border-border">
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
