import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import CategoryDetail from "./pages/CategoryDetail";
import SubsectionDetail from "./pages/SubsectionDetail";
import TopicOverview from "./pages/TopicOverview";
import TopicDetail from "./pages/TopicDetail";
import Simulations from "./pages/Simulations";
import CardiacArrestSim from "./pages/CardiacArrestSim";
import Quizzes from "./pages/Quizzes";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:level" element={<CategoryDetail />} />
            <Route path="/topics/:level/:topicSlug" element={<TopicOverview />} />
            <Route path="/topics/:level/:topicSlug/:subsectionSlug" element={<SubsectionDetail />} />
            {/* Legacy route for old topic structure */}
            <Route path="/topic/:slug" element={<TopicDetail />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/simulations/cardiac-arrest" element={<CardiacArrestSim />} />
            <Route path="/quizzes" element={<Quizzes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
