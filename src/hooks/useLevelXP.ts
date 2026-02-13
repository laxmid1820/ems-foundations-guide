import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface LevelXPData {
  levelXP: Record<string, number>;
  domainXP: Record<string, Record<string, number>>;
}

export function useLevelXP() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery<LevelXPData>({
    queryKey: ["level-xp", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data: rows, error } = await supabase
        .from("quiz_attempts")
        .select("level, domain_filter, xp_earned")
        .eq("user_id", user!.id);

      if (error) throw error;

      const levelXP: Record<string, number> = {};
      const domainXP: Record<string, Record<string, number>> = {};

      for (const row of rows ?? []) {
        const level = row.level?.toLowerCase() ?? "unknown";
        const domain = row.domain_filter ?? "General";
        const xp = row.xp_earned ?? 0;

        levelXP[level] = (levelXP[level] ?? 0) + xp;

        if (!domainXP[level]) domainXP[level] = {};
        domainXP[level][domain] = (domainXP[level][domain] ?? 0) + xp;
      }

      return { levelXP, domainXP };
    },
  });

  return {
    levelXP: data?.levelXP ?? {},
    domainXP: data?.domainXP ?? {},
    isLoading,
  };
}
