import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "All EMT, AEMT & Paramedic modules",
  "Full question bank with explanations",
  "Progress tracking & XP streaks",
  "Spaced repetition flashcards",
  "Interactive simulations",
  "Save progress across devices",
];

const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles className="h-7 w-7" />
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Unlock Full Access
          </h1>
          <p className="text-lg text-muted-foreground">
            Create a free account to save your progress, earn XP, and track your learning journey.
          </p>
        </div>

        <Card className="mx-auto max-w-md ring-2 ring-primary/30 border-primary/20">
          <CardHeader className="text-center pb-4">
            <h2 className="text-2xl font-bold text-foreground">Free Account</h2>
            <p className="text-muted-foreground">Everything you need to master EMS foundations</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/auth" className="block">
              <Button variant="duo" size="lg" className="w-full gap-2">
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <p className="text-center text-xs text-muted-foreground">
              No credit card required. Start learning in seconds.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Pricing;
