import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const levelConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline"; tagline: string }> = {
  emt: { label: "EMT", variant: "default", tagline: "You're crushing EMT Foundations!" },
  aemt: { label: "AEMT", variant: "secondary", tagline: "AEMT skills leveling up!" },
  paramedic: { label: "Paramedic", variant: "outline", tagline: "Paramedic-level knowledge unlocked!" },
};

interface LevelXPCardProps {
  level: string;
  totalXP: number;
  domainBreakdown: Record<string, number>;
}

export function LevelXPCard({ level, totalXP, domainBreakdown }: LevelXPCardProps) {
  const config = levelConfig[level] ?? { label: level, variant: "outline" as const, tagline: "" };
  const domains = Object.entries(domainBreakdown).sort(([, a], [, b]) => b - a);
  const maxDomainXP = domains.length > 0 ? domains[0][1] : 1;

  return (
    <Card className="rounded-2xl border-2">
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Badge variant={config.variant} className="rounded-full font-bold text-sm px-3">
            {config.label}
          </Badge>
          {totalXP > 0 && (
            <span className="text-xl font-extrabold text-foreground">{totalXP} XP</span>
          )}
        </div>

        {totalXP === 0 ? (
          /* Empty state */
          <div className="text-center py-4 space-y-3">
            <p className="text-sm text-muted-foreground font-medium">
              Ready to earn your first {config.label} XP? Dive into a quiz now!
            </p>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/quizzes">
                Start Quiz <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        ) : (
          /* Domain breakdown */
          <div className="space-y-2.5">
            <p className="text-xs text-muted-foreground font-medium">{config.tagline}</p>
            {domains.map(([domain, xp]) => (
              <div key={domain} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground truncate mr-2">{domain}</span>
                  <span className="font-bold text-foreground shrink-0">{xp}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-xp rounded-full transition-all duration-500"
                    style={{ width: `${(xp / maxDomainXP) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
