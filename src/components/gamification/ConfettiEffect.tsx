import { useEffect, useState } from "react";

interface ConfettiEffectProps {
  trigger: boolean;
}

const COLORS = [
  "hsl(101 75% 40%)", // success green
  "hsl(197 93% 52%)", // primary blue
  "hsl(45 93% 47%)",  // xp gold
  "hsl(0 72% 51%)",   // red
  "hsl(280 70% 55%)", // purple
];

export function ConfettiEffect({ trigger }: ConfettiEffectProps) {
  const [pieces, setPieces] = useState<Array<{ id: number; left: number; delay: number; color: string; size: number }>>([]);

  useEffect(() => {
    if (trigger) {
      const newPieces = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 4 + Math.random() * 6,
      }));
      setPieces(newPieces);
      const timer = setTimeout(() => setPieces([]), 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti rounded-sm"
          style={{
            left: `${p.left}%`,
            top: 0,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
