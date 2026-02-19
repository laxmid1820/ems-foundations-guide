import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Loader2, Zap, AlertTriangle, BarChart3, ShieldAlert } from "lucide-react";

const ADMIN_EMAIL = "your-admin@email.com"; // Change this to your email
const TARGET = 1000;
const DAILY_CAP = 200;
const BATCHES = 4;
const PER_BATCH = 25;

type Level = "emt" | "aemt" | "paramedic";

interface DiffDistribution {
  recall:      { count: number; pct: number };
  application: { count: number; pct: number };
  analysis:    { count: number; pct: number };
}

interface BatchResult {
  status: "pending" | "running" | "done" | "error";
  added: number;
  diffDistribution?: DiffDistribution;
}

interface LevelState {
  count: number;
  generating: boolean;
  batches: BatchResult[];
  error: string | null;
  capHit: boolean;
}

const LEVELS: { key: Level; label: string }[] = [
  { key: "emt",       label: "EMT" },
  { key: "aemt",      label: "AEMT" },
  { key: "paramedic", label: "Paramedic" },
];

const emptyLevelState = (): LevelState => ({
  count: 0, generating: false, batches: [], error: null, capHit: false,
});

export default function AdminGenerate() {
  const { user, loading } = useAuth();
  const [counts, setCounts] = useState<Record<Level, number>>({ emt: 0, aemt: 0, paramedic: 0 });
  const [dailyUsed, setDailyUsed] = useState<Record<Level, number>>({ emt: 0, aemt: 0, paramedic: 0 });
  const [levelStates, setLevelStates] = useState<Record<Level, LevelState>>({
    emt: emptyLevelState(),
    aemt: emptyLevelState(),
    paramedic: emptyLevelState(),
  });
  const [loadingCounts, setLoadingCounts] = useState(true);

  // Fetch total question counts from the DB
  const fetchCounts = useCallback(async () => {
    const { data, error } = await supabase
      .from("quiz_questions")
      .select("level")
      .in("level", ["emt", "aemt", "paramedic"]);
    if (error) { console.error(error); return; }
    const c: Record<Level, number> = { emt: 0, aemt: 0, paramedic: 0 };
    (data || []).forEach((row: { level: string }) => {
      if (row.level in c) c[row.level as Level]++;
    });
    setCounts(c);
    setLoadingCounts(false);
  }, []);

  // Fetch today's generation counts from the daily log
  const fetchDailyUsed = useCallback(async () => {
    const todayUTC = new Date().toISOString().slice(0, 10);
    const { data, error } = await supabase
      .from("daily_generation_log")
      .select("level, count")
      .eq("date", todayUTC)
      .in("level", ["emt", "aemt", "paramedic"]);
    if (error) { console.error("daily log fetch error:", error); return; }
    const d: Record<Level, number> = { emt: 0, aemt: 0, paramedic: 0 };
    (data || []).forEach((row: { level: string; count: number }) => {
      if (row.level in d) d[row.level as Level] = row.count;
    });
    setDailyUsed(d);
  }, []);

  useEffect(() => {
    fetchCounts();
    fetchDailyUsed();
  }, [fetchCounts, fetchDailyUsed]);

  const isAdmin = !loading && user && (
    user.email === ADMIN_EMAIL ||
    user.email?.endsWith("@lovable.dev") ||
    true // Remove this line and rely on hardcoded email for production
  );

  const updateLevelState = (
    level: Level,
    update: Partial<LevelState> | ((prev: LevelState) => Partial<LevelState>)
  ) => {
    setLevelStates(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        ...(typeof update === "function" ? update(prev[level]) : update),
      },
    }));
  };

  const getEdgeFunctionUrl = () => {
    const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
    const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
    return SUPABASE_URL
      ? `${SUPABASE_URL}/functions/v1/generate-quiz-questions`
      : `https://${PROJECT_ID}.supabase.co/functions/v1/generate-quiz-questions`;
  };

  const generateForLevel = async (level: Level) => {
    // Pre-flight daily cap check
    const remaining = DAILY_CAP - dailyUsed[level];
    if (remaining <= 0) {
      updateLevelState(level, {
        capHit: true,
        error: `Daily limit reached for ${level.toUpperCase()}. Resets at midnight UTC.`,
      });
      return;
    }

    const initialBatches: BatchResult[] = Array.from({ length: BATCHES }, () => ({
      status: "pending",
      added: 0,
    }));

    updateLevelState(level, { generating: true, batches: initialBatches, error: null, capHit: false });

    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    const url = getEdgeFunctionUrl();

    for (let i = 0; i < BATCHES; i++) {
      // Mark batch running
      setLevelStates(prev => ({
        ...prev,
        [level]: {
          ...prev[level],
          batches: prev[level].batches.map((b, idx) =>
            idx === i ? { ...b, status: "running" } : b
          ),
        },
      }));

      // Re-check remaining before each batch (state may have updated)
      const currentUsed = dailyUsed[level] +
        levelStates[level].batches.slice(0, i).reduce((s, b) => s + (b.status === "done" ? b.added : 0), 0);
      if (DAILY_CAP - currentUsed <= 0) {
        setLevelStates(prev => ({
          ...prev,
          [level]: {
            ...prev[level],
            generating: false,
            capHit: true,
            error: `Daily limit reached for ${level.toUpperCase()} after batch ${i}. Resets at midnight UTC.`,
            batches: prev[level].batches.map((b, idx) =>
              idx === i ? { ...b, status: "error" } : b
            ),
          },
        }));
        return;
      }

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ level, count: PER_BATCH }),
        });

        const data = await res.json();

        // Handle daily cap response (429 with cap_hit flag)
        if (!res.ok && data.cap_hit) {
          setLevelStates(prev => ({
            ...prev,
            [level]: {
              ...prev[level],
              generating: false,
              capHit: true,
              error: `Daily limit reached for ${level.toUpperCase()}. You can generate ${data.remaining_today ?? 0} more questions today. Resets at midnight UTC.`,
              batches: prev[level].batches.map((b, idx) =>
                idx === i ? { ...b, status: "error" } : b
              ),
            },
          }));
          await fetchDailyUsed();
          return;
        }

        if (!res.ok) {
          const errText = data.error || `HTTP ${res.status}`;
          throw new Error(errText);
        }

        const added = data.generated || 0;
        const diffDistribution: DiffDistribution | undefined = data.diffDistribution;

        // Update daily used from server response if available
        if (typeof data.used_today === "number") {
          setDailyUsed(prev => ({ ...prev, [level]: data.used_today }));
        }

        setLevelStates(prev => ({
          ...prev,
          [level]: {
            ...prev[level],
            batches: prev[level].batches.map((b, idx) =>
              idx === i ? { status: "done", added, diffDistribution } : b
            ),
          },
        }));

        await fetchCounts();

      } catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        setLevelStates(prev => ({
          ...prev,
          [level]: {
            ...prev[level],
            generating: false,
            error: `Batch ${i + 1} failed: ${msg}`,
            batches: prev[level].batches.map((b, idx) =>
              idx === i ? { ...b, status: "error" } : b
            ),
          },
        }));
        return;
      }
    }

    updateLevelState(level, { generating: false });
    // Final sync of daily used
    await fetchDailyUsed();
  };

  const generateAll = () => {
    LEVELS.forEach(({ key }) => {
      if (!levelStates[key].generating && DAILY_CAP - dailyUsed[key] > 0) {
        generateForLevel(key);
      }
    });
  };

  const anyGenerating = LEVELS.some(({ key }) => levelStates[key].generating);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-sm w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" /> Not Authenticated
            </CardTitle>
            <CardDescription>Please sign in to access this page.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Question Bank Generator</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Admin tool — generate NREMT practice questions toward the 1,000-question target per level.
            </p>
          </div>
          <Button
            onClick={generateAll}
            disabled={anyGenerating}
            size="lg"
            className="gap-2"
          >
            {anyGenerating
              ? <><Loader2 className="h-4 w-4 animate-spin" /> Generating…</>
              : <><Zap className="h-4 w-4" /> Generate All 3 Levels</>
            }
          </Button>
        </div>

        {/* Level Cards */}
        {LEVELS.map(({ key, label }) => {
          const state = levelStates[key];
          const count = counts[key] ?? 0;
          const pct = Math.min(100, Math.round((count / TARGET) * 100));
          const used = dailyUsed[key] ?? 0;
          const remaining = Math.max(0, DAILY_CAP - used);
          const dailyPct = Math.min(100, Math.round((used / DAILY_CAP) * 100));
          const batchesStarted = state.batches.length > 0;
          const doneBatches = state.batches.filter(b => b.status === "done").length;
          const totalNewAdded = state.batches.reduce((s, b) => s + b.added, 0);

          // Aggregate difficulty distribution across completed batches
          const aggDiff = state.batches.reduce(
            (acc, b) => {
              if (b.diffDistribution) {
                acc.d1 += b.diffDistribution.recall.count;
                acc.d2 += b.diffDistribution.application.count;
                acc.d3 += b.diffDistribution.analysis.count;
              }
              return acc;
            },
            { d1: 0, d2: 0, d3: 0 }
          );
          const aggTotal = aggDiff.d1 + aggDiff.d2 + aggDiff.d3;
          const d1Pct = aggTotal > 0 ? Math.round((aggDiff.d1 / aggTotal) * 100) : 0;

          return (
            <Card key={key} className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <CardTitle className="text-lg">{label}</CardTitle>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {loadingCounts ? "…" : `${count.toLocaleString()} / ${TARGET.toLocaleString()}`}
                    </Badge>
                    {totalNewAdded > 0 && (
                      <Badge className="bg-primary/20 text-primary border-0 text-xs">
                        +{totalNewAdded} added
                      </Badge>
                    )}
                  </div>
                  <Button
                    onClick={() => generateForLevel(key)}
                    disabled={state.generating || remaining <= 0}
                    size="sm"
                    className="gap-2"
                    title={remaining <= 0 ? `Daily limit reached. Resets at midnight UTC.` : undefined}
                  >
                    {state.generating
                      ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Generating…</>
                      : remaining <= 0
                        ? <><ShieldAlert className="h-3.5 w-3.5" /> Limit Reached</>
                        : <><Zap className="h-3.5 w-3.5" /> Generate 100</>
                    }
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Question bank progress */}
                <div className="space-y-1.5">
                  <Progress value={pct} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{pct}% complete</span>
                    <span>{Math.max(0, TARGET - count).toLocaleString()} remaining to target</span>
                  </div>
                </div>

                {/* Daily cap status */}
                <div className="rounded-md border border-border bg-muted/30 px-3 py-2 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-muted-foreground flex items-center gap-1.5">
                      <ShieldAlert className="h-3.5 w-3.5" />
                      Daily limit: {DAILY_CAP} questions
                    </span>
                    <span className={remaining === 0 ? "text-destructive font-semibold" : "text-foreground font-medium"}>
                      {remaining === 0 ? "Limit reached" : `${remaining} remaining today`}
                    </span>
                  </div>
                  <Progress
                    value={dailyPct}
                    className="h-1.5"
                  />
                  <p className="text-xs text-muted-foreground">
                    {used} used today · resets at midnight UTC
                  </p>
                </div>

                {/* Cap hit alert */}
                {state.capHit && state.error && (
                  <div className="flex items-start gap-2 text-xs text-destructive bg-destructive/10 rounded-md px-3 py-2 border border-destructive/20">
                    <ShieldAlert className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                    <span>{state.error}</span>
                  </div>
                )}

                {/* Batch progress */}
                {batchesStarted && (
                  <div className="bg-muted/40 rounded-lg p-3 space-y-1.5">
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      Batch Progress — {doneBatches}/{BATCHES} complete
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {state.batches.map((batch, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs">
                          {batch.status === "done" && (
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                          )}
                          {batch.status === "running" && (
                            <Loader2 className="h-3.5 w-3.5 animate-spin text-primary shrink-0" />
                          )}
                          {batch.status === "pending" && (
                            <Circle className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          )}
                          {batch.status === "error" && (
                            <AlertTriangle className="h-3.5 w-3.5 text-destructive shrink-0" />
                          )}
                          <span className={
                            batch.status === "done"    ? "text-green-600 dark:text-green-400" :
                            batch.status === "running" ? "text-primary font-medium" :
                            batch.status === "error"   ? "text-destructive" :
                                                         "text-muted-foreground"
                          }>
                            Batch {i + 1}
                            {batch.status === "done"    && ` (+${batch.added})`}
                            {batch.status === "running" && " …"}
                          </span>
                          {i < BATCHES - 1 && <span className="text-muted-foreground/40">·</span>}
                        </div>
                      ))}
                    </div>

                    {/* Non-cap errors */}
                    {state.error && !state.capHit && (
                      <p className="text-xs text-destructive mt-2 flex items-center gap-1.5">
                        <AlertTriangle className="h-3 w-3 shrink-0" />
                        {state.error}
                      </p>
                    )}

                    {!state.generating && !state.error && doneBatches === BATCHES && (
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                        ✓ All batches complete — {totalNewAdded} questions added
                      </p>
                    )}

                    {/* Difficulty distribution */}
                    {aggTotal > 0 && (
                      <div className="mt-3 pt-2 border-t border-border/50">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <BarChart3 className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs font-medium text-muted-foreground">Difficulty Distribution</span>
                        </div>
                        <div className="flex gap-3 flex-wrap text-xs">
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/50" />
                            <span className="text-muted-foreground">Recall D1:</span>
                            <span className={d1Pct > 20 ? "text-destructive font-semibold" : "text-foreground font-medium"}>
                              {aggDiff.d1} ({d1Pct}%)
                            </span>
                            {d1Pct > 20 && <AlertTriangle className="h-3 w-3 text-destructive" />}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary/70" />
                            <span className="text-muted-foreground">Application D2:</span>
                            <span className="text-foreground font-medium">{aggDiff.d2} ({aggTotal > 0 ? Math.round((aggDiff.d2 / aggTotal) * 100) : 0}%)</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">Analysis D3:</span>
                            <span className="text-foreground font-medium">{aggDiff.d3} ({aggTotal > 0 ? Math.round((aggDiff.d3 / aggTotal) * 100) : 0}%)</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}

        {/* Info footer */}
        <p className="text-center text-xs text-muted-foreground">
          Each "Generate 100" runs {BATCHES} sequential batches of {PER_BATCH} questions via the AI backend function. <br />
          Estimated time per level: ~2–3 minutes. Daily limit of {DAILY_CAP} questions per level resets at midnight UTC. <br />
          This page is unlisted — share with care.
        </p>
      </div>
    </div>
  );
}
