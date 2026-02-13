import { Link } from "react-router-dom";
import { BookOpen, Heart, AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="mb-6 flex items-start gap-3 rounded-2xl bg-warning/8 border-2 border-warning/20 p-4 text-sm text-muted-foreground">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
          <p>
            <strong className="text-foreground font-bold">Educational Content Only:</strong> This material is supplemental 
            and not a substitute for official EMT training, NREMT certification, or medical advice. 
            Always verify with reliable sources and follow your local protocols. Content reflects widely accepted prehospital education standards as of 2024.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-success">
              <BookOpen className="h-4 w-4 text-success-foreground" />
            </div>
            <span className="text-sm font-bold">Prehospital Foundations</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <Link to="/topics" className="transition-colors hover:text-foreground">
              Topics
            </Link>
            <Link to="/simulations" className="transition-colors hover:text-foreground">
              Simulations
            </Link>
            <Link to="/quizzes" className="transition-colors hover:text-foreground">
              Quizzes
            </Link>
          </div>
          
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-destructive fill-current" /> for EMS providers
          </p>
        </div>
      </div>
    </footer>
  );
}
