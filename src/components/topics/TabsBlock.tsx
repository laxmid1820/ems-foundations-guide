import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TabItem } from "@/data/topics";

interface TabsBlockProps {
  tabs: TabItem[];
  onTabViewed?: (index: number) => void;
}

export function TabsBlock({ tabs, onTabViewed }: TabsBlockProps) {
  return (
    <Tabs 
      defaultValue={tabs[0]?.label} 
      className="w-full"
      onValueChange={(value) => {
        const index = tabs.findIndex(t => t.label === value);
        if (index !== -1) {
          onTabViewed?.(index);
        }
      }}
    >
      <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-secondary/50 p-1">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.label} 
            value={tab.label}
            className="flex-1 min-w-[120px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent 
          key={tab.label} 
          value={tab.label} 
          className="mt-4 rounded-lg border border-border bg-card p-4 sm:p-6"
        >
          {tab.content && (
            <p className="text-muted-foreground leading-relaxed mb-4">{tab.content}</p>
          )}
          
          {tab.bullets && tab.bullets.length > 0 && (
            <ul className="space-y-2">
              {tab.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          
          {tab.imagePlaceholder && (
            <div className="mt-4 rounded-lg bg-muted/50 border-2 border-dashed border-border p-8 text-center">
              <p className="text-sm text-muted-foreground">{tab.imagePlaceholder}</p>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
