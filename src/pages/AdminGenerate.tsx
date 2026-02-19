import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Loader2, Zap, AlertTriangle } from "lucide-react";

const ADMIN_EMAIL = "your-admin@email.com"; // Change this to your email
const TARGET = 1000;
const BATCHES = 4;
const PER_BATCH = 25;

type Level = "emt" | "aemt" | "paramedic";

interface LevelState {
  count: number;
  generating: boolean;
  batches: { status: "pending" | "running" | "done" | "error"; added: number }[];
  error: string | null;
}

const LEVELS: { key: Level; label: string; color: string }[] = [
  { key: "emt", label: "EMT", color: "hsl(var(--primary))" },
  { key: "aemt", label: "AEMT", color: "hsl(var(--chart-2))" },
  { key: "paramedic", label: "Paramedic", color: "hsl(var(--chart-3))" },
];

export default function AdminGenerate() {
  const { user, loading } = useAuth();
  const [counts, setCounts] = useState<Record<Level, number>>({ emt: 0, aemt: 0, paramedic: 0 });
  const [levelStates, setLevelStates] = useState<Record<Level, LevelState>>({
    emt: { count: 0, generating: false, batches: [], error: null },
    aemt: { count: 0, generating: false, batches: [], error: null },
    paramedic: { count: 0, generating: false, batches: [], error: null },
  });
  const [loadingCounts, setLoadingCounts] = useState(true);

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

  useEffect(() => { fetchCounts(); }, [fetchCounts]);

  const isAdmin = !loading && user && (
    user.email === ADMIN_EMAIL ||
    user.email?.endsWith("@lovable.dev") ||
    true // Remove this line and rely on hardcoded email for production
  );

  const updateLevelState = (level: Level, update: Partial<LevelState> | ((prev: LevelState) => Partial<LevelState>)) => {
    setLevelStates(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        ...(typeof update === "function" ? update(prev[level]) : update),
      },
    }));
  };

  const generateForLevel = async (level: Level) => {
    const initialBatches = Array.from({ length: BATCHES }, () => ({
      status: "pending" as const,
      added: 0,
    }));

    updateLevelState(level, { generating: true, batches: initialBatches, error: null });

    let totalAdded = 0;

    for (let i = 0; i < BATCHES; i++) {
      // Mark batch as running
      setLevelStates(prev => ({
        ...prev,
        [level]: {
          ...prev[level],
          batches: prev[level].batches.map((b, idx) =>
            idx === i ? { ...b, status: "running" } : b
          ),
        },
      }));

      try {
        const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
        const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
        const url = SUPABASE_URL
          ? `${SUPABASE_URL}/functions/v1/generate-quiz-questions`
          : `https://${PROJECT_ID}.supabase.co/functions/v1/generate-quiz-questions`;

        const session = await supabase.auth.getSession();
        const token = session.data.session?.access_token;

        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ level, count: PER_BATCH }),
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || `HTTP ${res.status}`);
        }

        const data = await res.json();
        const added = data.generated || 0;
        totalAdded += added;

        // Mark batch done and refresh counts
        setLevelStates(prev => ({
          ...prev,
          [level]: {
            ...prev[level],
            batches: prev[level].batches.map((b, idx) =>
              idx === i ? { status: "done", added } : b
            ),
          },
        }));

        // Refresh count from DB
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
  };

  const generateAll = () => {
    LEVELS.forEach(({ key }) => {
      if (!levelStates[key].generating) generateForLevel(key);
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
            <CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-destructive" /> Not Authenticated</CardTitle>
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
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Question Bank Generator</h1>
            </div>
            <p className="text-sm text-muted-foreground">Admin tool — generate NREMT practice questions toward the 1,000-question target per level.</p>
          </div>
          <Button
            onClick={generateAll}
            disabled={anyGenerating}
            size="lg"
            className="gap-2"
          >
            {anyGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Zap className="h-4 w-4" />}
            Generate All 3 Levels
          </Button>
        </div>

        {/* Level Cards */}
        {LEVELS.map(({ key, label }) => {
          const state = levelStates[key];
          const count = counts[key] ?? 0;
          const pct = Math.min(100, Math.round((count / TARGET) * 100));
          const batchesStarted = state.batches.length > 0;
          const doneBatches = state.batches.filter(b => b.status === "done").length;
          const totalNewAdded = state.batches.reduce((s, b) => s + b.added, 0);

          return (
            <Card key={key} className="border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{label}</CardTitle>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {loadingCounts ? "..." : `${count.toLocaleString()} / ${TARGET.toLocaleString()}`}
                    </Badge>
                    {totalNewAdded > 0 && (
                      <Badge className="bg-primary/20 text-primary border-0 text-xs">
                        +{totalNewAdded} added
                      </Badge>
                    )}
                  </div>
                  <Button
                    onClick={() => generateForLevel(key)}
                    disabled={state.generating}
                    size="sm"
                    className="gap-2"
                  >
                    {state.generating
                      ? <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Generating…</>
                      : <><Zap className="h-3.5 w-3.5" /> Generate 100</>
                    }
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress bar */}
                <div className="space-y-1.5">
                  <Progress value={pct} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{pct}% complete</span>
                    <span>{Math.max(0, TARGET - count).toLocaleString()} remaining</span>
                  </div>
                </div>

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
                            batch.status === "done" ? "text-green-600 dark:text-green-400" :
                            batch.status === "running" ? "text-primary font-medium" :
                            batch.status === "error" ? "text-destructive" :
                            "text-muted-foreground"
                          }>
                            Batch {i + 1}
                            {batch.status === "done" && ` (+${batch.added})`}
                            {batch.status === "running" && " …"}
                          </span>
                          {i < BATCHES - 1 && <span className="text-muted-foreground/40">·</span>}
                        </div>
                      ))}
                    </div>
                    {state.error && (
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
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}

        {/* Info footer */}
        <p className="text-center text-xs text-muted-foreground">
          Each "Generate 100" runs 4 sequential batches of 25 questions via the AI backend function. <br />
          Estimated time per level: ~2–3 minutes. This page is unlisted — share with care.
        </p>
      </div>
    </div>
  );
}
