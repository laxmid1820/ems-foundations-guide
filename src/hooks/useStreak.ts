import { useCallback, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

/**
 * Tracks daily streaks. Call `recordActivity()` whenever the user does something meaningful.
 * - Same day → no-op
 * - Consecutive day → streak + 1
 * - Missed a day → streak resets to 1
 */
export function useStreak() {
  const { user, profile, refreshProfile } = useAuth();
  const updatingRef = useRef(false);

  const recordActivity = useCallback(async () => {
    if (!user || !profile || updatingRef.current) return;

    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const lastActive = profile.last_active_date; // already YYYY-MM-DD or null

    if (lastActive === today) return; // already recorded today

    updatingRef.current = true;

    let newStreak = 1;
    if (lastActive) {
      const lastDate = new Date(lastActive + "T00:00:00");
      const todayDate = new Date(today + "T00:00:00");
      const diffDays = Math.round((todayDate.getTime() - lastDate.getTime()) / 86400000);

      if (diffDays === 1) {
        // Consecutive day
        newStreak = profile.current_streak + 1;
      }
      // diffDays > 1 → streak resets to 1 (already set)
    }

    await supabase
      .from("profiles")
      .update({
        current_streak: newStreak,
        last_active_date: today,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user.id);

    await refreshProfile();
    updatingRef.current = false;
  }, [user, profile, refreshProfile]);

  return { recordActivity };
}
