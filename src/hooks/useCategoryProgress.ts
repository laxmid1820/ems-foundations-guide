import { useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";

const categoryFieldMap: Record<string, string[]> = {
  "emt-foundations": ["airway_progress", "cardiac_progress", "shock_progress"],
  "aemt-bridge": ["airway_progress", "cardiac_progress", "shock_progress"],
  "paramedic-foundations": ["airway_progress", "cardiac_progress", "shock_progress"],
};

export function useCategoryProgress(categorySlug: string | undefined) {
  const { profile } = useAuth();

  const progress = useMemo(() => {
    if (!profile || !categorySlug) return 0;
    const fields = categoryFieldMap[categorySlug];
    if (!fields || fields.length === 0) return 0;

    const sum = fields.reduce((acc, field) => {
      const value = (profile as unknown as Record<string, unknown>)[field];
      return acc + (typeof value === "number" ? value : 0);
    }, 0);

    return Math.min(100, Math.round(sum / fields.length));
  }, [profile, categorySlug]);

  return { progress, isLoading: !profile };
}
