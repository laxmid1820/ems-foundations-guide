import { Layout } from "@/components/Layout";
import { useQuiz } from "@/hooks/useQuiz";
import { QuizLevelCard } from "@/components/quiz/QuizLevelCard";
import { QuizConfigPanel } from "@/components/quiz/QuizConfigPanel";
import { QuizSession } from "@/components/quiz/QuizSession";
import { QuizResults } from "@/components/quiz/QuizResults";
import { useXP } from "@/hooks/useXP";
import { ClipboardCheck, Shield, Stethoscope, Activity, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LEVELS = [
  {
    level: "emt",
    label: "EMT",
    description: "Foundational knowledge for Emergency Medical Technicians",
    badgeLabel: "EMT-B",
    badgeClass: "border-success/30 text-success bg-success/5",
    icon: <Shield className="h-7 w-7" />,
  },
  {
    level: "aemt",
    label: "AEMT",
    description: "Advanced EMT concepts including IV therapy and medication administration",
    badgeLabel: "AEMT",
    badgeClass: "border-warning/30 text-warning bg-warning/5",
    icon: <Stethoscope className="h-7 w-7" />,
  },
  {
    level: "paramedic",
    label: "Paramedic",
    description: "Comprehensive paramedic-level assessment, pharmacology, and interventions",
    badgeLabel: "NRP",
    badgeClass: "border-primary/30 text-primary bg-primary/5",
    icon: <Activity className="h-7 w-7" />,
  },
];

const Quizzes = () => {
  const { user } = useAuth();
  const quiz = useQuiz();
  const { addXP } = useXP();

  const handleSubmit = async () => {
    await quiz.submitQuiz();
    // XP is awarded server-side, profile will refresh
  };

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <ClipboardCheck className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">NREMT Practice Quizzes</h1>
          <p className="text-muted-foreground mb-6">Sign in to start practicing</p>
          <Button asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Loading */}
        {quiz.phase === "loading" && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading quiz...</p>
          </div>
        )}

        {/* Error */}
        {quiz.error && (
          <div className="mx-auto max-w-md rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-center mb-6">
            <p className="text-sm text-destructive">{quiz.error}</p>
          </div>
        )}

        {/* Level selection */}
        {quiz.phase === "select" && (
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ClipboardCheck className="h-8 w-8" />
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                NREMT Practice Quizzes
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                NREMT-style practice questions aligned with current National EMS Education Standards.
                For self-assessment only — confirm your knowledge with{" "}
                <a href="https://nremt.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  nremt.org
                </a>{" "}
                and your certification program.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LEVELS.map((l) => (
                <QuizLevelCard
                  key={l.level}
                  {...l}
                  onClick={() => quiz.configureQuiz(l.level)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Configure phase */}
        {quiz.phase === "configure" && (
          <QuizConfigPanel
            level={quiz.selectedLevel}
            levelLabel={LEVELS.find((l) => l.level === quiz.selectedLevel)?.label || quiz.selectedLevel}
            bankSize={quiz.bankSize}
            quizLength={quiz.quizLength}
            immediateAnswers={quiz.immediateAnswers}
            onQuizLengthChange={quiz.setQuizLength}
            onImmediateAnswersChange={quiz.setImmediateAnswers}
            onStart={() => quiz.startQuiz()}
            onBack={quiz.resetQuiz}
          />
        )}

        {/* Active quiz session */}
        {quiz.phase === "session" && (
          <QuizSession
            questions={quiz.questions}
            currentIndex={quiz.currentIndex}
            answers={quiz.answers}
            onAnswer={quiz.setAnswer}
            onNext={quiz.nextQuestion}
            onPrev={quiz.prevQuestion}
            onSubmit={handleSubmit}
          />
        )}

        {/* Results */}
        {quiz.phase === "results" && quiz.submission && (
          <QuizResults
            submission={quiz.submission}
            level={quiz.selectedLevel}
            onRetry={() => quiz.startQuiz(quiz.selectedLevel)}
            onBack={quiz.resetQuiz}
          />
        )}
      </div>
    </Layout>
  );
};

export default Quizzes;
