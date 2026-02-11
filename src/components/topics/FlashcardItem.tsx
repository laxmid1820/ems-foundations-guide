import { useState } from "react";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";

interface FlashcardItemProps {
  front: string;
  back: string;
  id: string;
  onFlip?: (id: string) => void;
}

export function FlashcardItem({ front, back, id, onFlip }: FlashcardItemProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      onFlip?.(id);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="perspective-1000 cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <div 
        className={cn(
          "relative h-40 sm:h-48 transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-4 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="font-semibold text-foreground text-sm sm:text-base leading-snug">{front}</p>
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
            <RotateCcw className="h-3 w-3" />
            Tap to flip
          </p>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg border-2 border-success/30 bg-gradient-to-br from-success/10 to-success/5 p-4 flex items-center justify-center text-center"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  );
}
