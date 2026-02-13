import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

interface XPSlamProps {
  trigger: boolean;
  amount?: number;
}

export function XPSlam({ trigger, amount = 150 }: XPSlamProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (trigger) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] pointer-events-none">
      <div className="absolute left-1/2 top-1/2 animate-xp-slam">
        <div className="flex items-center gap-2 rounded-full bg-xp px-5 py-3 text-lg font-extrabold text-xp-foreground shadow-2xl">
          <Zap className="h-6 w-6 fill-current" />
          +{amount} XP
        </div>
      </div>
    </div>
  );
}
