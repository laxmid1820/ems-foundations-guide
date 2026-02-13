import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/gamification/ProgressRing";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
import { Zap, RotateCcw, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizSubmission } from "@/hooks/useQuiz";

interface QuizResultsProps {
  submission: QuizSubmission;
  level: string;
  onRetry: () => void;
  onBack: () => void;
  immediateMode?: boolean;
}

export function QuizResults({ submission, level, onRetry, onBack, immediateMode = false }: QuizResultsProps) {
  const { score, total, xp_earned, results } = submission;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;

  // Determine quiz-length badge
  const quizBadgeVariant = total >= 50 ? "quiz-50" : total >= 20 ? "quiz-20" : total >= 10 ? "quiz-10" : null;

  // Domain breakdown
  const domainMap = new Map<string, { correct: number; total: number }>();
  for (const r of results) {
    const d = domainMap.get(r.nremt_domain) || { correct: 0, total: 0 };
    d.total++;
    if (r.is_correct) d.correct++;
    domainMap.set(r.nremt_domain, d);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <ConfettiEffect trigger={passed} />

      {/* Score card */}
      <Card className="text-center border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <p className="text-sm text-muted-foreground mt-1 capitalize">{level} Level</p>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 py-6">
          <ProgressRing progress={pct} size={140} strokeWidth={12} />

          <div className="space-y-1">
            <p className="text-lg font-bold text-foreground">
              {score}/{total} correct
            </p>
            <div className="flex items-center justify-center gap-2 text-xp font-bold">
              <Zap className="h-5 w-5 fill-current" />
              +{xp_earned} XP earned
            </div>
            {quizBadgeVariant && (
              <AchievementBadge variant={quizBadgeVariant} size="md" />
            )}
          </div>

          <p className="text-sm text-muted-foreground max-w-md">
            {immediateMode && (
              <span className="block mb-1 font-medium text-foreground">Answers were reviewed during the quiz.</span>
            )}
            Your score reflects practice performance only. Official NREMT certification requires
            approved coursework and proctored examination.
          </p>
        </CardContent>
      </Card>

      {/* Domain breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Domain Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from(domainMap.entries()).map(([domain, stats]) => {
            const domainPct = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={domain} className="flex items-center justify-between gap-4">
                <span className="text-sm text-foreground flex-1 truncate">{domain}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stats.correct}/{stats.total}
                  </span>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs",
                      domainPct >= 70
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-destructive/10 text-destructive border-destructive/20"
                    )}
                  >
                    {domainPct}%
                  </Badge>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Per-question review */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Question Review</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {results.map((r, i) => (
            <div
              key={r.question_id}
              className={cn(
                "rounded-xl border p-4 space-y-2",
                r.is_correct ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
              )}
            >
              <div className="flex items-start gap-2">
                {r.is_correct ? (
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                )}
                <span className="text-sm font-medium text-foreground">Question {i + 1}</span>
              </div>
              {!r.is_correct && (
                <p className="text-xs text-muted-foreground">
                  Your answer: {r.selected_answer} · Correct: {r.correct_answer}
                </p>
              )}
              <p className="text-sm text-muted-foreground">{r.explanation}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
          Back to Levels
        </Button>
        <Button variant="duo" size="lg" onClick={onRetry}>
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
