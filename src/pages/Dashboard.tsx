import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { topics } from "@/data/topics";
import { ProgressRing } from "@/components/gamification/ProgressRing";
import {
  BookOpen,
  Heart,
  ArrowRight,
  LogOut,
  Sparkles,
  Play,
} from "lucide-react";
import { RecentQuizzes } from "@/components/dashboard/RecentQuizzes";
import { XPHeadquarters } from "@/components/dashboard/XPHeadquarters";

const progressFieldMap: Record<string, "airway_progress" | "cardiac_progress" | "shock_progress"> = {
  "airway-management": "airway_progress",
  "cardiac-physiology": "cardiac_progress",
  "shock-and-perfusion": "shock_progress",
};

const Dashboard = () => {
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const overallProgress = profile
    ? Math.round(
        (profile.airway_progress + profile.cardiac_progress + profile.shock_progress) / 3
      )
    : 0;

  const streakMessage = profile && profile.current_streak > 0
    ? `${profile.current_streak}-day streak — keep it up! 🔥`
    : "Start your streak today!";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* User Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            {user ? (
              <>
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  Welcome back, {profile?.display_name || user.email?.split("@")[0]}! 👋
                </h1>
                <p className="text-muted-foreground mt-1 font-medium">
                  {streakMessage}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  Your Learning Dashboard
                </h1>
                <p className="text-muted-foreground mt-1">
                  <Link to="/auth" className="text-primary hover:underline font-bold">
                    Sign in
                  </Link>{" "}
                  to track your progress across devices.
                </p>
              </>
            )}
          </div>

          {user && (
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          )}
        </div>

        {/* XP Headquarters */}
        {user && <XPHeadquarters />}

        {/* Progress Overview (non-logged-in) */}
        {!user && (
          <Card className="mb-8 border-2 rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-extrabold">
                <BookOpen className="h-5 w-5 text-primary" />
                Overall Progress
              </CardTitle>
              <CardDescription>Your journey through prehospital foundations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <ProgressRing progress={overallProgress} />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Progress saves automatically when signed in</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Simulations CTA */}
        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive shrink-0">
                <Heart className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-extrabold text-foreground mb-1">
                  NEW: Cardiac Arrest Simulation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Walk through a BLS cardiac arrest scenario step-by-step with guided explanations.
                </p>
              </div>
              <Button asChild variant="duo" size="lg" className="shrink-0">
                <Link to="/simulations/cardiac-arrest">
                  <Play className="h-4 w-4" />
                  Start Sim
                </Link>
              </Button>
            </div>
            {profile && (
              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">Sim Progress:</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-success rounded-full transition-all duration-500"
                    style={{ width: `${profile.cardiac_arrest_sim_progress}%` }}
                  />
                </div>
                <span className="text-sm font-extrabold">{profile.cardiac_arrest_sim_progress}%</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Topic Progress Cards */}
        <div className="mb-4">
          <h2 className="text-xl font-extrabold text-foreground mb-1">Topic Modules</h2>
          <p className="text-muted-foreground text-sm font-medium">
            Work through these foundational topics at your own pace.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const progressField = progressFieldMap[topic.slug];
            const progress = profile?.[progressField] || 0;

            return (
              <Card
                key={topic.slug}
                className="group border-2 rounded-2xl bg-card hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant={
                        topic.difficulty === "start-here"
                          ? "default"
                          : topic.difficulty === "getting-comfortable"
                          ? "secondary"
                          : "outline"
                      }
                      className="rounded-full font-bold"
                    >
                      {topic.difficulty === "start-here"
                        ? "Start Here"
                        : topic.difficulty === "getting-comfortable"
                        ? "Intermediate"
                        : "Advanced"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-3 font-bold">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-success rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-extrabold text-foreground">{progress}%</span>
                  </div>
                  <Button asChild variant={progress > 0 ? "duo" : "outline"} className="w-full gap-2">
                    <Link to={`/topics/${topic.slug}`}>
                      {progress > 0 ? "Continue" : "Start"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Quizzes */}
        {user && <RecentQuizzes />}

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="outline" asChild className="rounded-xl">
            <Link to="/topics" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Browse All Topics
            </Link>
          </Button>
          <Button variant="outline" asChild className="rounded-xl">
            <Link to="/quizzes" className="gap-2">
              Quiz Practice
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
