import { useCallback } from "react";
import { Check, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TopicProgressRing } from "@/components/topics/TopicProgressRing";
import { cn } from "@/lib/utils";

interface SectionNavProps {
  sections: { id: string; title: string }[];
  masteredSections: Set<string>;
  activeSectionId: string | null;
  sectionXPMap?: Map<string, { earned: number; total: number }>;
  topicXPEarned?: number;
  topicXPTotal?: number;
}

function getMotivation(p: number): string {
  if (p <= 0) return "Start earning XP — every quiz counts!";
  if (p < 50) return "Building strong foundations — keep going!";
  if (p < 80) return "Halfway there — mastery is close!";
  if (p < 100) return "Almost mastered — one more push!";
  return "Topic complete — incredible work!";
}

function SectionNavList({ sections, masteredSections, activeSectionId, sectionXPMap, topicXPEarned = 0, topicXPTotal = 0, onSelect }: SectionNavProps & { onSelect?: () => void }) {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onSelect?.();
  }, [onSelect]);

  const topicProgress = topicXPTotal > 0 ? (topicXPEarned / topicXPTotal) * 100 : 0;

  return (
    <nav className="flex flex-col h-full">
      <div className="space-y-1 flex-1">
        <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-3 px-2">Sections</p>
        {sections.map((s, i) => {
          const mastered = masteredSections.has(s.id);
          const active = activeSectionId === s.id;
          const xpData = sectionXPMap?.get(s.id);
          const earned = xpData?.earned ?? (mastered ? 15 : 0);
          const total = xpData?.total ?? 15;
          const sectionProgress = total > 0 ? (earned / total) * 100 : 0;

          const icon = mastered ? (
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-xp text-xp-foreground text-xs font-bold cursor-help">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">{total} XP earned</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : earned > 0 ? (
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="shrink-0 cursor-help">
                    <TopicProgressRing size={24} strokeWidth={3} progress={sectionProgress} showMessage={false} />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right">{earned}/{total} XP</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs font-bold">
              {i + 1}
            </span>
          );

          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-sm transition-all",
                active && "border-l-[3px] border-xp bg-xp/5 font-semibold",
                !active && "border-l-[3px] border-transparent hover:bg-muted/50",
              )}
            >
              {icon}
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex-1 truncate cursor-default">{s.title}</span>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-[280px]">
                    {s.title}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          );
        })}
      </div>

      {/* Topic XP Ring at bottom */}
      {topicXPTotal > 0 && (
        <div className="mt-4 pt-4 border-t border-border flex flex-col items-center gap-1.5">
          <TopicProgressRing size={80} strokeWidth={6} progress={topicProgress} showMessage={false} />
          <span className="text-xs font-bold text-xp">{topicXPEarned}/{topicXPTotal} XP</span>
          <span className="text-xs font-medium text-muted-foreground text-center max-w-[140px]">
            {getMotivation(topicProgress)}
          </span>
        </div>
      )}
    </nav>
  );
}

export function SectionNav(props: SectionNavProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-16 w-56 h-[calc(100vh-4rem)] overflow-y-auto hidden lg:block border-r border-border bg-background/95 backdrop-blur-sm p-4 z-30">
        <SectionNavList {...props} />
      </aside>

      {/* Mobile floating button + sheet */}
      <div className="lg:hidden fixed bottom-20 left-4 z-40">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="rounded-full shadow-lg bg-background/95 backdrop-blur-sm h-11 w-11">
              <List className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 pt-10">
            <SheetTitle className="sr-only">Section Navigation</SheetTitle>
            <SectionNavList {...props} onSelect={() => {}} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
