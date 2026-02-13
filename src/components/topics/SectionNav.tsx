import { useCallback } from "react";
import { Check, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface SectionNavProps {
  sections: { id: string; title: string }[];
  masteredSections: Set<string>;
  activeSectionId: string | null;
}

function SectionNavList({ sections, masteredSections, activeSectionId, onSelect }: SectionNavProps & { onSelect?: () => void }) {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onSelect?.();
  }, [onSelect]);

  return (
    <nav className="space-y-1">
      <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground mb-3 px-2">Sections</p>
      {sections.map((s, i) => {
        const mastered = masteredSections.has(s.id);
        const active = activeSectionId === s.id;
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
            <span className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              mastered ? "bg-xp text-xp-foreground" : "bg-muted text-muted-foreground"
            )}>
              {mastered ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <span className="flex-1 truncate">{s.title}</span>
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] font-bold px-1.5 py-0 shrink-0 transition-all",
                mastered
                  ? "border-xp/40 bg-xp/10 text-xp"
                  : "border-border text-muted-foreground"
              )}
            >
              {mastered ? "15 XP" : "0 XP"}
            </Badge>
          </button>
        );
      })}
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
            <SectionNavList {...props} onSelect={() => {
              // Close sheet by clicking overlay — handled by Radix
            }} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
