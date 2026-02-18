import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/gamification/ProgressRing";
import { categories } from "@/data/categories";
import { topics } from "@/data/topics";
import {
  Zap, Flame, Heart, Trophy, BookOpen, ArrowRight, ChevronDown, ChevronUp,
  CheckCircle2, XCircle, Star, Shield, GraduationCap, ClipboardCheck, Play,
} from "lucide-react";

/* ── mock data ── */
const MOCK_XP = 285;
const MOCK_STREAK = 4;
const MOCK_HEARTS = 5;
const MOCK_LEVEL = "EMT Learner";

const emtCategory = categories.find(c => c.level === "emt")!;
const firstTopic = topics[0]; // Airway Management — has sections with quiz & flashcards

/* pick 4 quiz questions from first topic */
const sampleQuestions = firstTopic.sections
  .flatMap(s => (s.blocks ?? []).filter(b => b.type === "quiz").map(b => b.quiz!))
  .filter(Boolean)
  .slice(0, 4);

/* ── sub-components ── */

function DemoBanner() {
  return (
    <div className="sticky top-0 z-[60] flex items-center justify-center gap-3 bg-primary px-4 py-2 text-primary-foreground flex-wrap">
      <Star className="h-4 w-4 shrink-0" />
      <span className="text-sm font-semibold text-center">
        Public Demo Mode – Upgrade for saved progress &amp; full access
      </span>
      <Link to="/pricing">
        <Button size="sm" variant="secondary" className="h-7 gap-1 rounded-lg px-3 text-xs font-bold">
          Upgrade Now <ArrowRight className="h-3 w-3" />
        </Button>
      </Link>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
      <div className="flex items-center gap-1.5 rounded-full bg-xp/10 px-4 py-2 text-sm font-bold text-xp">
        <Zap className="h-4 w-4 fill-current" /> {MOCK_XP} XP
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive">
        <Flame className="h-4 w-4" /> {MOCK_STREAK}-day streak
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive">
        <Heart className="h-4 w-4 fill-current" /> {MOCK_HEARTS} hearts
      </div>
      <Badge variant="secondary" className="rounded-full font-bold text-sm px-4 py-2">
        <Trophy className="h-4 w-4 mr-1.5" /> {MOCK_LEVEL}
      </Badge>
    </div>
  );
}

function ProgressRoadmap() {
  const mockProgress = [72, 45, 30, 15, 0];
  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-foreground mb-1 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary" /> EMT Foundations Roadmap
      </h2>
      <p className="text-muted-foreground text-sm mb-4 font-medium">
        All {emtCategory.subtopics.length} modules unlocked for demo
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {emtCategory.subtopics.map((sub, i) => {
          const Icon = sub.icon;
          const progress = mockProgress[i] ?? 0;
          return (
            <Card key={sub.slug} className="border-2 rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {progress > 0 && (
                    <Badge variant="default" className="rounded-full text-xs font-bold">
                      {progress}%
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-base mt-2 font-bold">{sub.title}</CardTitle>
                <CardDescription className="text-xs">{sub.description.replace("[Placeholder] ", "")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{sub.estimatedMinutes} min · {sub.whatYoullLearn.length} objectives</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function ModulePreview() {
  const [expandedSection, setExpandedSection] = useState<string | null>(firstTopic.sections[0]?.id ?? null);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-foreground mb-1 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" /> Module Preview: {firstTopic.title}
      </h2>
      <p className="text-muted-foreground text-sm mb-4 font-medium">
        {firstTopic.encouragingTagline}
      </p>

      <div className="space-y-3">
        {firstTopic.sections.map((section, i) => {
          const open = expandedSection === section.id;
          return (
            <Card key={section.id} className="border-2 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedSection(open ? null : section.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success text-sm font-bold">
                    {i + 1}
                  </div>
                  <span className="font-bold text-foreground text-sm">{section.title}</span>
                </div>
                {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </button>

              {open && (
                <CardContent className="pt-0 pb-5 px-5 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content.slice(0, 500)}{section.content.length > 500 ? "…" : ""}
                  </p>

                  {section.keyPoints && (
                    <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
                      <p className="text-xs font-bold text-primary mb-2">Key Points</p>
                      <ul className="space-y-1">
                        {section.keyPoints.map((kp, j) => (
                          <li key={j} className="text-xs text-foreground flex gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" /> {kp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.proTip && (
                    <div className="rounded-xl bg-xp/5 border border-xp/20 p-4">
                      <p className="text-xs font-bold text-xp">💡 Pro Tip</p>
                      <p className="text-xs text-foreground mt-1">{section.proTip}</p>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function QuizPreview() {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleSelect = (qi: number, oi: number) => {
    if (revealed[qi]) return;
    setSelected(prev => ({ ...prev, [qi]: oi }));
  };

  const handleCheck = (qi: number) => {
    setRevealed(prev => ({ ...prev, [qi]: true }));
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-foreground mb-1 flex items-center gap-2">
        <ClipboardCheck className="h-5 w-5 text-primary" /> Sample Quiz
      </h2>
      <p className="text-muted-foreground text-sm mb-4 font-medium">
        Try these NREMT-style questions — immediate feedback included!
      </p>

      <div className="space-y-4">
        {sampleQuestions.map((q, qi) => (
          <Card key={q.id} className="border-2 rounded-2xl">
            <CardContent className="p-5 space-y-3">
              <p className="font-bold text-sm text-foreground">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = selected[qi] === oi;
                  const isCorrect = oi === q.correctIndex;
                  const showResult = revealed[qi];
                  let optionClass = "border-2 rounded-xl p-3 text-sm cursor-pointer transition-all ";
                  if (showResult && isCorrect) {
                    optionClass += "border-success bg-success/10 text-foreground font-bold";
                  } else if (showResult && isSelected && !isCorrect) {
                    optionClass += "border-destructive bg-destructive/10 text-foreground";
                  } else if (isSelected) {
                    optionClass += "border-primary bg-primary/10 text-foreground font-medium";
                  } else {
                    optionClass += "border-border hover:border-primary/40 text-foreground";
                  }

                  return (
                    <button
                      key={oi}
                      className={`${optionClass} w-full text-left flex items-center gap-2`}
                      onClick={() => handleSelect(qi, oi)}
                    >
                      {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-success shrink-0" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                      {opt}
                    </button>
                  );
                })}
              </div>
              {selected[qi] !== undefined && !revealed[qi] && (
                <Button size="sm" variant="duo" onClick={() => handleCheck(qi)} className="gap-1">
                  Check Answer
                </Button>
              )}
              {revealed[qi] && (
                <div className="rounded-xl bg-muted p-3 text-xs text-muted-foreground">
                  <p className="font-bold text-foreground mb-1">Explanation</p>
                  {q.explanation}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function GamificationShowcase() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-foreground mb-1 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-xp" /> Gamification Features
      </h2>
      <p className="text-muted-foreground text-sm mb-4 font-medium">
        Learning is more fun with XP, streaks, and progress tracking!
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: <Zap className="h-6 w-6 text-xp fill-current" />, title: "XP System", desc: "Earn XP for quizzes, flashcards, and completing sections" },
          { icon: <Flame className="h-6 w-6 text-destructive" />, title: "Daily Streaks", desc: "Keep your streak alive by studying every day" },
          { icon: <Heart className="h-6 w-6 text-destructive fill-current" />, title: "Hearts", desc: "Miss a question and lose a heart — keeps you sharp!" },
          { icon: <Shield className="h-6 w-6 text-success" />, title: "Spaced Repetition", desc: "Flashcards resurface at optimal intervals for retention" },
        ].map((item, i) => (
          <Card key={i} className="border-2 rounded-2xl text-center">
            <CardContent className="p-5 space-y-2">
              <div className="flex justify-center">{item.icon}</div>
              <p className="font-bold text-sm text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* ── main page ── */

const Demo = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2">
              Welcome to Your EMT Dashboard 👋
            </h1>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto">
              This is what your learning experience looks like — XP, streaks, modules, quizzes, and more. Everything unlocked.
            </p>
          </div>

          {/* Stats bar */}
          <StatsBar />

          {/* XP Ring */}
          <div className="flex justify-center mb-10">
            <Card className="rounded-2xl border-2 border-xp/30 bg-gradient-to-br from-xp/5 to-xp/10 w-full max-w-sm">
              <CardContent className="p-6 flex flex-col items-center gap-3">
                <ProgressRing progress={(MOCK_XP / 500) * 100} size={120} strokeWidth={10} strokeColor="hsl(var(--xp))" />
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-xp fill-current" />
                  <span className="text-2xl font-extrabold text-foreground">{MOCK_XP}</span>
                  <span className="text-lg font-bold text-muted-foreground">XP</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">First 100 down — momentum is building!</p>
                <p className="text-xs text-muted-foreground/70">Next milestone: 500 XP</p>
              </CardContent>
            </Card>
          </div>

          {/* Module roadmap */}
          <ProgressRoadmap />

          {/* Module 1 preview */}
          <ModulePreview />

          {/* Quiz preview */}
          <QuizPreview />

          {/* Gamification showcase */}
          <GamificationShowcase />

          {/* CTA */}
          <div className="text-center py-8 space-y-4">
            <h2 className="text-2xl font-extrabold text-foreground">Ready to start for real?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Create a free account to save your progress, track streaks, and unlock personalized learning.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="duo" size="lg" className="gap-2">
                <Link to="/auth">
                  <Play className="h-4 w-4" /> Create Free Account
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/pricing">
                  View Pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
