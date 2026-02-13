import { useEffect, useState } from "react";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { XPSlam } from "@/components/gamification/XPSlam";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
import { ProgressRing } from "@/components/gamification/ProgressRing";

type Phase = "idle" | "ring-fill" | "celebrate" | "slam" | "done";

interface ModuleCompletionCeremonyProps {
  trigger: boolean;
  onComplete: () => void;
  initialProgress?: number;
}

export function ModuleCompletionCeremony({ trigger, onComplete, initialProgress = 85 }: ModuleCompletionCeremonyProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ringProgress, setRingProgress] = useState(initialProgress);

  useEffect(() => {
    if (trigger && phase === "idle") {
      setRingProgress(initialProgress);
      setPhase("ring-fill");
    }
  }, [trigger, phase, initialProgress]);

  // Ring fill animation
  useEffect(() => {
    if (phase !== "ring-fill") return;
    const start = Date.now();
    const duration = 2000;
    const startProg = initialProgress;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setRingProgress(startProg + (100 - startProg) * eased);
      if (t >= 1) {
        clearInterval(interval);
        setPhase("celebrate");
      }
    }, 16);
    return () => clearInterval(interval);
  }, [phase, initialProgress]);

  // Celebrate -> slam
  useEffect(() => {
    if (phase !== "celebrate") return;
    const timer = setTimeout(() => setPhase("slam"), 1500);
    return () => clearTimeout(timer);
  }, [phase]);

  // Slam -> done
  useEffect(() => {
    if (phase !== "slam") return;
    const timer = setTimeout(() => {
      setPhase("done");
      onComplete();
      // Reset for potential re-use
      setTimeout(() => setPhase("idle"), 100);
    }, 1000);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  if (phase === "idle" || phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center gap-6">
        {/* Progress Ring */}
        <ProgressRing
          progress={ringProgress}
          size={160}
          strokeWidth={12}
          strokeColor="hsl(var(--xp))"
        />

        {/* Celebrate phase content */}
        {(phase === "celebrate" || phase === "slam") && (
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <p className="text-xl font-extrabold text-foreground text-center">
              Module complete — incredible work! 🎉
            </p>
            <AchievementBadge variant="topic-mastered" size="md" className="animate-scale-in" />
          </div>
        )}

        {/* Confetti */}
        <ConfettiEffect trigger={phase === "celebrate"} intensity="big" />

        {/* XP Slam */}
        <XPSlam trigger={phase === "slam"} amount={150} />
      </div>
    </div>
  );
}
