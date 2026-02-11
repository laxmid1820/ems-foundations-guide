import { TabsBlock } from "./TabsBlock";
import { FlashcardGrid } from "./FlashcardGrid";
import { QuizBlock } from "./QuizBlock";
import type { ContentBlock } from "@/data/topics";

interface LessonBlockProps {
  block: ContentBlock;
  sectionId: string;
  onTabViewed?: (index: number) => void;
  onCardFlip?: (cardId: string) => void;
  onQuizAnswer?: (questionId: string, correct: boolean) => void;
}

export function LessonBlock({ 
  block, 
  sectionId, 
  onTabViewed,
  onCardFlip,
  onQuizAnswer 
}: LessonBlockProps) {
  switch (block.type) {
    case "tabs":
      if (!block.tabs) return null;
      return <TabsBlock tabs={block.tabs} onTabViewed={onTabViewed} />;
    
    case "flashcards":
      if (!block.flashcards) return null;
      return (
        <FlashcardGrid 
          flashcards={block.flashcards} 
          sectionId={sectionId}
          onCardFlip={onCardFlip}
        />
      );
    
    case "quiz":
      if (!block.quiz) return null;
      return <QuizBlock question={block.quiz} onAnswer={onQuizAnswer} />;
    
    case "text":
      if (!block.content) return null;
      return (
        <div className="text-muted-foreground leading-relaxed">
          {block.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
          ))}
        </div>
      );
    
    default:
      return null;
  }
}
