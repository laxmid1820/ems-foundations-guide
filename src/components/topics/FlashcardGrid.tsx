import { FlashcardItem } from "./FlashcardItem";
import type { Flashcard } from "@/data/topics";

interface FlashcardGridProps {
  flashcards: Flashcard[];
  sectionId: string;
  onCardFlip?: (cardId: string) => void;
}

export function FlashcardGrid({ flashcards, sectionId, onCardFlip }: FlashcardGridProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Click each card to reveal the answer. Flip all cards to complete this section.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {flashcards.map((card, index) => (
          <FlashcardItem
            key={`${sectionId}-card-${index}`}
            id={`${sectionId}-card-${index}`}
            front={card.front}
            back={card.back}
            onFlip={onCardFlip}
          />
        ))}
      </div>
    </div>
  );
}
