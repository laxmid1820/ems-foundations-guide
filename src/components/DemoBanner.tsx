import { Link } from "react-router-dom";
import { useDemo } from "@/contexts/DemoContext";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, X } from "lucide-react";

export function DemoBanner() {
  const { isDemoMode, exitDemoMode } = useDemo();

  if (!isDemoMode) return null;

  return (
    <div className="sticky top-0 z-[60] flex items-center justify-center gap-3 bg-primary px-4 py-2 text-primary-foreground">
      <Eye className="h-4 w-4 shrink-0" />
      <span className="text-sm font-semibold">
        Demo Mode – Upgrade for full access &amp; saving progress
      </span>
      <Link to="/pricing">
        <Button
          size="sm"
          variant="secondary"
          className="h-7 gap-1 rounded-lg px-3 text-xs font-bold"
        >
          Upgrade Now
          <ArrowRight className="h-3 w-3" />
        </Button>
      </Link>
      <button
        onClick={exitDemoMode}
        className="ml-1 rounded-md p-1 transition-colors hover:bg-primary-foreground/20"
        aria-label="Exit demo mode"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
