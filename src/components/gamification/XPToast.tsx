import { useCallback, useState } from "react";
import { Zap } from "lucide-react";
import { useXPListener } from "@/hooks/useXP";

export function XPToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<{ amount: number; reason: string; timestamp: number } | null>(null);

  useXPListener(
    useCallback((gain) => {
      if (gain.amount > 0 && gain.reason) {
        setCurrent(gain);
        setVisible(true);
        // Auto-hide after animation completes
        setTimeout(() => setVisible(false), 2500);
      }
    }, [])
  );

  if (!visible || !current) return null;

  return (
    <div
      key={current.timestamp}
      className="fixed bottom-6 left-1/2 z-[60] pointer-events-none animate-xp-toast"
    >
      <div className="flex items-center gap-1.5 rounded-full bg-xp px-4 py-2 text-sm font-extrabold text-xp-foreground shadow-xl">
        <Zap className="h-4 w-4 fill-current" />
        +{current.amount} XP — {current.reason}
      </div>
    </div>
  );
}
