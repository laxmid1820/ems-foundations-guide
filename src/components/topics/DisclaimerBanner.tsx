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
            Built to align with current NREMT and prehospital standards. For the best results, cross-reference with your local protocols and instructor guidance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
      <p className="text-sm text-muted-foreground text-center">
        This content is for educational purposes only. It does not replace hands-on training, certification courses, or guidance from licensed medical professionals. When in doubt, consult your instructor or follow your local protocols. Pair this with hands-on practice and your certification course for peak performance.
      </p>
    </div>
  );
}
