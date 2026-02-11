import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, CheckCircle2, PartyPopper } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContinueButtonProps {
  nextTopicSlug: string | null;
  nextTopicTitle: string | null;
  isUnlocked: boolean;
  onComplete?: () => void;
}

export function ContinueButton({ 
  nextTopicSlug, 
  nextTopicTitle, 
  isUnlocked,
  onComplete 
}: ContinueButtonProps) {
  if (!nextTopicSlug || !nextTopicTitle) {
    return (
      <div className="rounded-2xl border-2 border-success/30 bg-success/10 p-8 text-center animate-celebration-pop">
        <PartyPopper className="h-14 w-14 text-success mx-auto mb-3" />
        <p className="font-extrabold text-foreground text-xl mb-1">
          🎉 Congratulations!
        </p>
        <p className="text-muted-foreground font-medium">
          You've completed all available lessons. More content coming soon!
        </p>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <Button 
                size="lg" 
                disabled 
                className="w-full rounded-2xl h-14 text-base"
              >
                <Lock className="h-5 w-5 mr-2" />
                Continue to {nextTopicTitle}
              </Button>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p>Complete all sections, flip all flashcards, and pass all quizzes to continue.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Button 
      asChild 
      variant="duo"
      size="lg" 
      className="w-full h-14 text-base"
      onClick={onComplete}
    >
      <Link to={`/topics/${nextTopicSlug}`}>
        Continue
        <ChevronRight className="h-5 w-5 ml-2" />
      </Link>
    </Button>
  );
}
