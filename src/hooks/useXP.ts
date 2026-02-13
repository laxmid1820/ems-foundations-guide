import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useStreak } from "@/hooks/useStreak";

interface XPState {
  total: number;
  lastGain: { amount: number; timestamp: number; reason: string } | null;
}

export function useXP() {
  const { profile, user } = useAuth();
  const { recordActivity } = useStreak();
  const [xp, setXP] = useState<XPState>({
    total: profile?.xp_total ?? 0,
    lastGain: null,
  });

  useEffect(() => {
    if (profile?.xp_total !== undefined) {
      setXP((prev) => ({ ...prev, total: profile.xp_total }));
    }
  }, [profile?.xp_total]);

  const addXP = useCallback(
    async (amount: number, reason = "XP earned!") => {
      if (amount <= 0) return;
      const newTotal = xp.total + amount;
      setXP({ total: newTotal, lastGain: { amount, timestamp: Date.now(), reason } });

      if (user) {
        await supabase
          .from("profiles")
          .update({ xp_total: newTotal, updated_at: new Date().toISOString() })
          .eq("user_id", user.id);
      }

      // Record daily activity for streak tracking
      recordActivity();
    },
    [xp.total, user, recordActivity],
  );

  const gainQuizXP = useCallback(
    (correct: boolean, isRetry = false) => {
      if (!correct) return;
      addXP(isRetry ? 5 : 10, isRetry ? "Nice retry!" : "Great answer!");
    },
    [addXP],
  );

  const gainSectionXP = useCallback(() => addXP(5, "Section viewed!"), [addXP]);
  const gainFlashcardXP = useCallback(() => addXP(2, "Flashcard mastered!"), [addXP]);

  return { xp: xp.total, lastGain: xp.lastGain, gainQuizXP, gainSectionXP, gainFlashcardXP, addXP };
}
