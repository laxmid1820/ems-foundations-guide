import { useState, useCallback, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useStreak } from "@/hooks/useStreak";

interface XPGainEvent {
  amount: number;
  reason: string;
  timestamp: number;
}

interface XPState {
  total: number;
  lastGain: XPGainEvent | null;
}

// Global custom event for XP gains so any component can listen
const XP_GAIN_EVENT = "xp-gain";

export function dispatchXPGain(detail: XPGainEvent) {
  window.dispatchEvent(new CustomEvent(XP_GAIN_EVENT, { detail }));
}

export function useXPListener(callback: (e: XPGainEvent) => void) {
  useEffect(() => {
    const handler = (e: Event) => callback((e as CustomEvent<XPGainEvent>).detail);
    window.addEventListener(XP_GAIN_EVENT, handler);
    return () => window.removeEventListener(XP_GAIN_EVENT, handler);
  }, [callback]);
}

export function useXP() {
  const { profile, user, refreshProfile } = useAuth();
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
      const gain: XPGainEvent = { amount, timestamp: Date.now(), reason };
      setXP({ total: newTotal, lastGain: gain });

      // Broadcast globally so XPToast (and any listener) can pick it up
      dispatchXPGain(gain);

      if (user) {
        await supabase
          .from("profiles")
          .update({ xp_total: newTotal, updated_at: new Date().toISOString() })
          .eq("user_id", user.id);

        // Refresh profile so navbar/dashboard update
        refreshProfile();
      }

      // Record daily activity for streak tracking
      recordActivity();
    },
    [xp.total, user, recordActivity, refreshProfile],
  );

  const gainQuizXP = useCallback(
    (correct: boolean, isRetry = false) => {
      if (!correct) return;
      addXP(isRetry ? 5 : 10, isRetry ? "Nice retry!" : "Great answer!");
    },
    [addXP],
  );

  const gainSectionXP = useCallback(() => addXP(5, "Section viewed!"), [addXP]);
  const gainSectionMasteryXP = useCallback(() => addXP(15, "Congrats — mastered the section!"), [addXP]);
  const gainFlashcardXP = useCallback(() => addXP(2, ""), [addXP]);

  return { xp: xp.total, lastGain: xp.lastGain, gainQuizXP, gainSectionXP, gainSectionMasteryXP, gainFlashcardXP, addXP };
}
