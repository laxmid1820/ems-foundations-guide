import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useDemo } from "@/contexts/DemoContext";
import { 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Stethoscope, 
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Zap,
  Eye
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Simplify Tough Concepts",
    description: "Complex topics broken down into clear, digestible explanations that build true understanding.",
  },
  {
    icon: Target,
    title: "Build Confidence",
    description: "Master foundational knowledge so you can perform confidently in school, exams, and the field.",
  },
  {
    icon: Users,
    title: "Learn at Your Pace",
    description: "Self-paced learning designed for busy schedules—study when and where it works for you.",
  },
];

const features = [
  "Step-by-step foundational explanations",
  "NREMT-aligned content",
  "Interactive simulations & case studies",
  "Self-assessment quizzes",
];

const Index = () => {
  const { enterDemoMode } = useDemo();
  const navigate = useNavigate();

  const handleTryDemo = () => {
    enterDemoMode();
    navigate("/topics");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              <Sparkles className="h-4 w-4" />
              Built for EMS Providers
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Prehospital{" "}
              <span className="text-primary">Foundations</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Clear, foundational explanations for prehospital medicine — helping 
              EMTs, AEMTs, and Paramedics master the basics and beyond.
            </p>

            {/* Feature List */}
            <div className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {features.map((feature) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Demo CTA */}
            <div className="mb-6">
              <Button
                onClick={handleTryDemo}
                size="lg"
                className="gap-2 text-base px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-extrabold shadow-[0_4px_0_hsl(var(--accent)/0.5)] hover:shadow-[0_2px_0_hsl(var(--accent)/0.5)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wide"
              >
                <Eye className="h-5 w-5" />
                Try Demo Mode – No Account Needed
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/auth">
                <Button variant="duo" size="lg" className="gap-2 text-base px-10">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/topics">
                <Button variant="outline" size="lg" className="gap-2 text-base">
                  <BookOpen className="h-4 w-4" />
                  Browse Topics
                </Button>
              </Link>
            </div>

            {/* XP teaser */}
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <Zap className="h-4 w-4 text-xp fill-current" />
              Earn XP as you learn — track your progress and build streaks!
            </div>
          </div>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -bottom-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Who It's For Section */}
      <section className="border-b border-border bg-card py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold">EMT Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold">Practicing EMTs</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold">AEMTs & Paramedics</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold">Career Advancers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Why Choose Prehospital Foundations?
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in building understanding, not just memorization. 
              Let's walk through concepts together, step by step.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border-2 border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-success py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-extrabold text-success-foreground sm:text-3xl">
            Ready to strengthen your foundations?
          </h2>
          <p className="mb-8 text-lg text-success-foreground/80">
            Join fellow EMS providers on the journey to mastering prehospital medicine.
          </p>
          <Link to="/auth">
            <Button 
              size="lg" 
              className="gap-2 text-base bg-background text-foreground hover:bg-background/90 rounded-2xl font-extrabold shadow-[0_4px_0_hsl(101_75%_25%)] hover:shadow-[0_2px_0_hsl(101_75%_25%)] hover:translate-y-[2px]"
            >
              Start Learning Today
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
