import { cn } from "@/lib/utils";
import { Lightbulb, CheckCircle, Star, Sparkles } from "lucide-react";

type CalloutType = "breakDown" | "proTip" | "rememberThis" | "youveGotThis";

interface TopicCalloutProps {
  type: CalloutType;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig: Record<CalloutType, { 
  icon: React.ElementType; 
  title: string;
  bgClass: string;
  borderClass: string;
  iconClass: string;
  titleClass: string;
}> = {
  breakDown: {
    icon: Lightbulb,
    title: "Let's Break This Down",
    bgClass: "bg-primary/5",
    borderClass: "border-primary/20",
    iconClass: "text-primary",
    titleClass: "text-primary"
  },
  proTip: {
    icon: CheckCircle,
    title: "Pro Tip",
    bgClass: "bg-success/5",
    borderClass: "border-success/20",
    iconClass: "text-success",
    titleClass: "text-success"
  },
  rememberThis: {
    icon: Star,
    title: "Remember This",
    bgClass: "bg-warning/5",
    borderClass: "border-warning/20",
    iconClass: "text-warning",
    titleClass: "text-warning"
  },
  youveGotThis: {
    icon: Sparkles,
    title: "You've Got This!",
    bgClass: "bg-success/5",
    borderClass: "border-success/20",
    iconClass: "text-success",
    titleClass: "text-success"
  }
};

export function TopicCallout({ type, children, className }: TopicCalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "rounded-lg border p-4 mt-4",
        config.bgClass,
        config.borderClass,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn("mt-0.5 shrink-0", config.iconClass)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className={cn("font-semibold text-sm mb-1", config.titleClass)}>
            {config.title}
          </p>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
