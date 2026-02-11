import { Zap } from "lucide-react";

interface XPCounterProps {
  xp: number;
}

export function XPCounter({ xp }: XPCounterProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-xp/10 px-3 py-1.5 text-sm font-bold text-xp">
      <Zap className="h-4 w-4 fill-current" />
      <span>{xp} XP</span>
    </div>
  );
}
