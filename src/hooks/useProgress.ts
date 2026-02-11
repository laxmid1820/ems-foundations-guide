import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useCallback } from "react";

type ProgressField = 
  | "airway_progress"
  | "cardiac_progress"
  | "shock_progress"
  | "cardiac_arrest_sim_progress";

export function useProgress() {
  const { user, profile, refreshProfile } = useAuth();

  const updateProgress = useCallback(
    async (field: ProgressField, value: number) => {
      if (!user) {
        console.warn("Cannot update progress: user not logged in");
        return { error: new Error("Not authenticated") };
      }

      // Ensure value is within bounds
      const clampedValue = Math.max(0, Math.min(100, value));

      const { error } = await supabase
        .from("profiles")
        .update({ [field]: clampedValue })
        .eq("user_id", user.id);

      if (error) {
        console.error("Error updating progress:", error);
        return { error };
      }

      // Refresh profile to get updated data
      await refreshProfile();
      return { error: null };
    },
    [user, refreshProfile]
  );

  const incrementProgress = useCallback(
    async (field: ProgressField, amount: number) => {
      if (!profile) {
        console.warn("Cannot increment progress: no profile loaded");
        return { error: new Error("Profile not loaded") };
      }

      const currentValue = profile[field] || 0;
      const newValue = Math.min(100, currentValue + amount);

      return updateProgress(field, newValue);
    },
    [profile, updateProgress]
  );

  const getProgress = useCallback(
    (field: ProgressField): number => {
      return profile?.[field] || 0;
    },
    [profile]
  );

  return {
    updateProgress,
    incrementProgress,
    getProgress,
    profile,
  };
}
