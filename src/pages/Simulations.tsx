import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { Stethoscope, Heart, Construction, Play, Lock } from "lucide-react";

const simulations = [
  {
    id: "cardiac-arrest",
    title: "Cardiac Arrest Walkthrough",
    description:
      "Walk through a BLS cardiac arrest scenario step-by-step with guided explanations and feedback.",
    icon: Heart,
    difficulty: "Beginner",
    estimatedMinutes: 10,
    available: true,
    href: "/simulations/cardiac-arrest",
  },
  {
    id: "respiratory-distress",
    title: "Respiratory Distress",
    description:
      "Assess and manage a patient experiencing difficulty breathing. Coming soon.",
    icon: Stethoscope,
    difficulty: "Intermediate",
    estimatedMinutes: 12,
    available: false,
    href: "#",
  },
];

const Simulations = () => {
  const { profile } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Stethoscope className="h-8 w-8" />
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Interactive Simulations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practice your decision-making with guided scenarios. Each simulation walks you
              through a realistic patient encounter with explanations at every step.
            </p>
          </div>

          {/* Simulation Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {simulations.map((sim) => {
              const Icon = sim.icon;
              const simProgress =
                sim.id === "cardiac-arrest" ? profile?.cardiac_arrest_sim_progress || 0 : 0;

              return (
                <Card
                  key={sim.id}
                  className={`border-border bg-card transition-all ${
                    sim.available ? "hover:border-primary/30 hover:shadow-md" : "opacity-60"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                          sim.available
                            ? "bg-destructive/10 text-destructive"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={sim.available ? "secondary" : "outline"}>
                          {sim.difficulty}
                        </Badge>
                        {!sim.available && (
                          <Badge variant="outline" className="gap-1">
                            <Lock className="h-3 w-3" />
                            Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg mt-3">{sim.title}</CardTitle>
                    <CardDescription>{sim.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {sim.available && (
                      <div className="flex items-center gap-3 mb-4">
                        <Progress value={simProgress} className="flex-1 h-2" />
                        <span className="text-sm font-medium text-foreground">{simProgress}%</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        ~{sim.estimatedMinutes} min
                      </span>
                      {sim.available ? (
                        <Button asChild className="gap-2">
                          <Link to={sim.href}>
                            <Play className="h-4 w-4" />
                            {simProgress > 0 ? "Continue" : "Start"}
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled variant="outline">
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Coming Soon Message */}
          <Card className="mt-8 border-border bg-card">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <Construction className="h-6 w-6" />
              </div>
              <CardTitle className="text-center">More Simulations Coming</CardTitle>
              <CardDescription className="text-center text-base">
                We're building more interactive scenarios covering trauma, medical emergencies,
                and advanced procedures. Check back soon!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Simulations;
