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
  const [justLanded, setJustLanded] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      onFlip?.(id);
    }
    setIsFlipped(!isFlipped);
    setJustLanded(true);
    setTimeout(() => setJustLanded(false), 500);
  };

  return (
    <div 
      className="perspective-1000 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <div 
        className={cn(
          "relative h-44 sm:h-52 transition-transform duration-500 transform-style-preserve-3d",
          isFlipped && "rotate-y-180",
          justLanded && "animate-bounce-land"
        )}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/15 to-primary/5 p-5 flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="font-bold text-foreground text-sm sm:text-base leading-snug">{front}</p>
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5 font-medium">
            <RotateCcw className="h-3 w-3" />
            Tap to flip
          </p>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl border-2 border-success/40 bg-gradient-to-br from-success/15 to-success/5 p-5 flex items-center justify-center text-center shadow-sm"
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
