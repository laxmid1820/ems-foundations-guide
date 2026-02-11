import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

interface XPFloaterProps {
  amount: number | null;
  timestamp: number | null;
}

export function XPFloater({ amount, timestamp }: XPFloaterProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (amount && timestamp) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1100);
      return () => clearTimeout(timer);
    }
  }, [amount, timestamp]);

  if (!visible || !amount) return null;

  return (
    <div className="pointer-events-none absolute -top-2 right-0 z-50 animate-float-up">
      <div className="flex items-center gap-1 rounded-full bg-xp px-2.5 py-1 text-xs font-extrabold text-xp-foreground shadow-lg">
        <Zap className="h-3 w-3 fill-current" />
        +{amount} XP
      </div>
    </div>
  );
}
