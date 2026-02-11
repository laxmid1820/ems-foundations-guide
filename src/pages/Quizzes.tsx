import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Construction } from "lucide-react";

const Quizzes = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ClipboardCheck className="h-8 w-8" />
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quizzes
            </h1>
            <p className="text-lg text-muted-foreground">
              Test your knowledge with NREMT-style questions and get instant feedback.
            </p>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10 text-warning">
                <Construction className="h-6 w-6" />
              </div>
              <CardTitle>Coming Soon</CardTitle>
              <CardDescription className="text-base">
                Self-assessment quizzes are being developed. You'll soon have access to practice questions 
                covering all certification levels, with detailed explanations for each answer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our quizzes focus on understanding concepts, not just memorizing answers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Quizzes;
