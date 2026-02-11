import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import type { TopicSection } from "@/data/topics";

interface LessonProgressState {
  sectionsViewed: Set<string>;
  flashcardsFlipped: Set<string>;
  quizzesCorrect: Set<string>;
}

interface UseLessonProgressReturn {
  // State
  sectionsViewed: Set<string>;
  flashcardsFlipped: Set<string>;
  quizzesCorrect: Set<string>;
  
  // Calculated values
  progress: number;
  totalSections: number;
  totalFlashcards: number;
  totalQuizzes: number;
  
  // Actions
  markSectionViewed: (sectionId: string) => void;
  markFlashcardFlipped: (cardId: string) => void;
  markQuizCorrect: (quizId: string) => void;
  resetProgress: () => void;
}

export function useLessonProgress(sections: TopicSection[] | undefined): UseLessonProgressReturn {
  const [state, setState] = useState<LessonProgressState>({
    sectionsViewed: new Set(),
    flashcardsFlipped: new Set(),
    quizzesCorrect: new Set(),
  });

  // Calculate totals from sections
  const { totalSections, totalFlashcards, totalQuizzes } = useMemo(() => {
    if (!sections) return { totalSections: 0, totalFlashcards: 0, totalQuizzes: 0 };

    let flashcardCount = 0;
    let quizCount = 0;

    sections.forEach(section => {
      section.blocks?.forEach(block => {
        if (block.type === "flashcards" && block.flashcards) {
          flashcardCount += block.flashcards.length;
        }
        if (block.type === "quiz" && block.quiz) {
          quizCount += 1;
        }
      });
    });

    return {
      totalSections: sections.length,
      totalFlashcards: flashcardCount,
      totalQuizzes: quizCount,
    };
  }, [sections]);

  // Calculate overall progress (weighted: 40% sections, 30% flashcards, 30% quizzes)
  const progress = useMemo(() => {
    const sectionWeight = 40;
    const flashcardWeight = 30;
    const quizWeight = 30;

    const sectionProgress = totalSections > 0 
      ? (state.sectionsViewed.size / totalSections) * sectionWeight 
      : sectionWeight;
    
    const flashcardProgress = totalFlashcards > 0 
      ? (state.flashcardsFlipped.size / totalFlashcards) * flashcardWeight 
      : flashcardWeight;
    
    const quizProgress = totalQuizzes > 0 
      ? (state.quizzesCorrect.size / totalQuizzes) * quizWeight 
      : quizWeight;

    return sectionProgress + flashcardProgress + quizProgress;
  }, [state, totalSections, totalFlashcards, totalQuizzes]);

  // Actions
  const markSectionViewed = useCallback((sectionId: string) => {
    setState(prev => ({
      ...prev,
      sectionsViewed: new Set([...prev.sectionsViewed, sectionId]),
    }));
  }, []);

  const markFlashcardFlipped = useCallback((cardId: string) => {
    setState(prev => ({
      ...prev,
      flashcardsFlipped: new Set([...prev.flashcardsFlipped, cardId]),
    }));
  }, []);

  const markQuizCorrect = useCallback((quizId: string) => {
    setState(prev => ({
      ...prev,
      quizzesCorrect: new Set([...prev.quizzesCorrect, quizId]),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState({
      sectionsViewed: new Set(),
      flashcardsFlipped: new Set(),
      quizzesCorrect: new Set(),
    });
  }, []);

  return {
    sectionsViewed: state.sectionsViewed,
    flashcardsFlipped: state.flashcardsFlipped,
    quizzesCorrect: state.quizzesCorrect,
    progress,
    totalSections,
    totalFlashcards,
    totalQuizzes,
    markSectionViewed,
    markFlashcardFlipped,
    markQuizCorrect,
    resetProgress,
  };
}

// Hook for IntersectionObserver-based section tracking
export function useSectionObserver(
  sections: TopicSection[] | undefined,
  onSectionViewed: (sectionId: string) => void
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!sections) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            onSectionViewed(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections, onSectionViewed]);
}
