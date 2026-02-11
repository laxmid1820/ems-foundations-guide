import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, CheckCircle2 } from "lucide-react";
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
    // No next topic - show completion
    return (
      <div className="rounded-lg border-2 border-success/30 bg-success/10 p-6 text-center">
        <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-3" />
        <p className="font-semibold text-foreground text-lg mb-1">
          🎉 Congratulations!
        </p>
        <p className="text-muted-foreground">
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
                className="w-full"
              >
                <Lock className="h-4 w-4 mr-2" />
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
      size="lg" 
      className="w-full"
      onClick={onComplete}
    >
      <Link to={`/topics/${nextTopicSlug}`}>
        Continue to {nextTopicTitle}
        <ChevronRight className="h-5 w-5 ml-2" />
      </Link>
    </Button>
  );
}
