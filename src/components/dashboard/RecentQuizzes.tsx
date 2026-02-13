import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight } from "lucide-react";
import { format } from "date-fns";

const levelLabels: Record<string, string> = {
  emt: "EMT",
  aemt: "AEMT",
  paramedic: "Paramedic",
};

export const RecentQuizzes = () => {
  const { user } = useAuth();

  const { data: attempts, isLoading } = useQuery({
    queryKey: ["recent-quiz-attempts", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quiz_attempts")
        .select("id, level, score, total, xp_earned, completed_at")
        .order("started_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  if (!user) return null;

  return (
    <Card className="border-2 rounded-2xl mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 font-extrabold">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              Recent Quizzes
            </CardTitle>
            <CardDescription>Your last quiz attempts</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild className="rounded-xl">
            <Link to="/quizzes" className="gap-2">
              All Quizzes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : !attempts || attempts.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-sm text-muted-foreground mb-3">No quizzes taken yet.</p>
            <Button variant="duo" size="sm" asChild>
              <Link to="/quizzes">Start a Quiz</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {attempts.map((a) => {
              const pct = a.total > 0 ? Math.round((a.score / a.total) * 100) : 0;
              return (
                <div
                  key={a.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="rounded-full font-bold">
                      {levelLabels[a.level] || a.level}
                    </Badge>
                    <span className="text-sm font-bold text-foreground">
                      {a.score}/{a.total}
                    </span>
                    <span className="text-xs text-muted-foreground">({pct}%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {a.xp_earned > 0 && (
                      <span className="text-xs font-bold text-xp">+{a.xp_earned} XP</span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {a.completed_at
                        ? format(new Date(a.completed_at), "MMM d")
                        : "In progress"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
