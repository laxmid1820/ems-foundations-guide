import { useAuth } from "@/contexts/AuthContext";
import { useLevelXP } from "@/hooks/useLevelXP";
import { GlobalXPCard } from "./GlobalXPCard";
import { LevelXPCard } from "./LevelXPCard";
import { Zap } from "lucide-react";

const LEVELS = ["emt", "aemt", "paramedic"] as const;

export function XPHeadquarters() {
  const { profile } = useAuth();
  const { levelXP, domainXP, isLoading } = useLevelXP();

  if (!profile) return null;

  return (
    <section className="space-y-6 mb-8">
      <div className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-xp fill-current" />
        <h2 className="text-xl font-extrabold text-foreground">XP Headquarters</h2>
      </div>

      <GlobalXPCard xpTotal={profile.xp_total} streak={profile.current_streak} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {LEVELS.map((level) => (
          <LevelXPCard
            key={level}
            level={level}
            totalXP={levelXP[level] ?? 0}
            domainBreakdown={domainXP[level] ?? {}}
          />
        ))}
      </div>
    </section>
  );
}
