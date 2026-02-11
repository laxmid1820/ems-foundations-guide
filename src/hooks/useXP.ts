import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface XPState {
  total: number;
  lastGain: { amount: number; timestamp: number } | null;
}

export function useXP() {
  const { profile, user } = useAuth();
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
    async (amount: number) => {
      const newTotal = xp.total + amount;
      setXP({ total: newTotal, lastGain: { amount, timestamp: Date.now() } });

      if (user) {
        await supabase
          .from("profiles")
          .update({ xp_total: newTotal, updated_at: new Date().toISOString() })
          .eq("user_id", user.id);
      }
    },
    [xp.total, user],
  );

  const gainQuizXP = useCallback(
    (correct: boolean, isRetry = false) => {
      addXP(correct ? (isRetry ? 5 : 10) : 0);
    },
    [addXP],
  );

  const gainSectionXP = useCallback(() => addXP(5), [addXP]);
  const gainFlashcardXP = useCallback(() => addXP(2), [addXP]);

  return { xp: xp.total, lastGain: xp.lastGain, gainQuizXP, gainSectionXP, gainFlashcardXP, addXP };
}
