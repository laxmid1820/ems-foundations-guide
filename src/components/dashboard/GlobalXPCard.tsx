import { Card, CardContent } from "@/components/ui/card";
import { ProgressRing } from "@/components/gamification/ProgressRing";
import { StreakBadge } from "@/components/gamification/StreakBadge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Lock, Zap } from "lucide-react";

function getMilestoneMessage(xp: number): string {
  if (xp === 0) return "Your journey starts now — every question counts!";
  if (xp < 100) return "First steps taken — you're already ahead of most!";
  if (xp < 250) return "First 100 down — momentum is building!";
  if (xp < 500) return "Quarter-thousand club — seriously impressive!";
  if (xp < 1000) return "Halfway to a thousand — unstoppable!";
  if (xp < 2500) return "1,000+ EXP — future paramedic energy!";
  return "Legend status — you're inspiring others!";
}

interface GlobalXPCardProps {
  xpTotal: number;
  streak: number;
}

export function GlobalXPCard({ xpTotal, streak }: GlobalXPCardProps) {
  const nextMilestone = Math.ceil(xpTotal / 500) * 500 || 500;
  const milestoneProgress = (xpTotal / nextMilestone) * 100;

  return (
    <Card className="rounded-2xl border-2 border-xp/30 bg-gradient-to-br from-xp/5 to-xp/10">
      <CardContent className="p-6 flex flex-col items-center gap-4 relative">
        {/* Streak badge top-right */}
        <div className="absolute top-4 right-4">
          <StreakBadge streak={streak} />
        </div>

        {/* Ring */}
        <ProgressRing
          progress={milestoneProgress}
          size={140}
          strokeWidth={12}
          strokeColor="hsl(var(--xp))"
        />

        {/* XP number + lock tooltip */}
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-xp fill-current" />
          <span className="text-3xl font-extrabold text-foreground">{xpTotal.toLocaleString()}</span>
          <span className="text-lg font-bold text-muted-foreground">XP</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Lock className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Total locked EXP — includes quizzes, content progress, and flashcards.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Milestone message */}
        <p className="text-sm text-muted-foreground font-medium text-center">
          {getMilestoneMessage(xpTotal)}
        </p>

        {/* Next milestone hint */}
        <p className="text-xs text-muted-foreground/70">
          Next milestone: {nextMilestone.toLocaleString()} XP
        </p>
      </CardContent>
    </Card>
  );
}
