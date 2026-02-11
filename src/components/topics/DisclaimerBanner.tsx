import { AlertTriangle } from "lucide-react";

interface DisclaimerBannerProps {
  variant?: "top" | "bottom";
}

export function DisclaimerBanner({ variant = "top" }: DisclaimerBannerProps) {
  if (variant === "top") {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 p-4">
        <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground text-sm">Educational Content Only</p>
          <p className="text-sm text-muted-foreground">
            This material is supplemental and not a substitute for official EMT training, NREMT certification, or medical advice. Always follow your local protocols.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
      <p className="text-sm text-muted-foreground text-center">
        This content is for educational purposes only. It does not replace hands-on training, certification courses, or guidance from licensed medical professionals. When in doubt, consult your instructor or follow your local protocols.
      </p>
    </div>
  );
}
