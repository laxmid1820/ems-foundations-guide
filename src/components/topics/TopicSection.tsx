import { TopicCallout } from "./TopicCallout";
import { LessonBlock } from "./LessonBlock";
import { TopicProgressRing } from "./TopicProgressRing";
import { ConfettiEffect } from "@/components/gamification/ConfettiEffect";
import { Zap, Check } from "lucide-react";
import type { TopicSection as TopicSectionType } from "@/data/topics";

interface TopicSectionProps {
  section: TopicSectionType;
  index: number;
  sectionXPEarned?: number;
  sectionXPTotal?: number;
  sectionProgress?: number;
  isMastered?: boolean;
  onTabViewed?: (index: number) => void;
  onCardFlip?: (cardId: string) => void;
  onQuizAnswer?: (questionId: string, correct: boolean) => void;
}

export function TopicSection({ 
  section, 
  index,
  sectionXPEarned = 0,
  sectionXPTotal = 0,
  sectionProgress = 0,
  isMastered = false,
  onTabViewed,
  onCardFlip,
  onQuizAnswer 
}: TopicSectionProps) {
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n');
        return (
          <ul key={i} className="space-y-2 mb-4 last:mb-0">
            {lines.map((line, j) => {
              if (line.trim().startsWith('•')) {
                return (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{renderInlineFormatting(line.replace('•', '').trim())}</span>
                  </li>
                );
              }
              return (
                <p key={j} className="text-muted-foreground leading-relaxed mb-2">
                  {renderInlineFormatting(line)}
                </p>
              );
            })}
          </ul>
        );
      }

      if (/^\d+\./.test(paragraph.trim())) {
        const lines = paragraph.split('\n');
        return (
          <ol key={i} className="space-y-2 mb-4 last:mb-0 list-decimal list-inside">
            {lines.map((line, j) => {
              const match = line.match(/^(\d+)\.\s*(.+)/);
              if (match) {
                return (
                  <li key={j} className="text-muted-foreground leading-relaxed pl-2">
                    <span className="ml-2">{renderInlineFormatting(match[2])}</span>
                  </li>
                );
              }
              return (
                <p key={j} className="text-muted-foreground leading-relaxed mb-2">
                  {renderInlineFormatting(line)}
                </p>
              );
            })}
          </ol>
        );
      }

      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
          {renderInlineFormatting(paragraph)}
        </p>
      );
    });
  };

  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section 
      id={section.id}
      className="mb-6 last:mb-0 rounded-2xl border-2 border-border bg-card shadow-sm overflow-hidden relative"
    >
      {/* Section Header */}
      <div className="flex items-start gap-4 p-5 sm:p-6 pb-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-extrabold text-lg shadow-sm">
          {index + 1}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight pt-1">
          {section.title}
        </h2>
      </div>

      {/* Main Content */}
      <div className="p-5 sm:p-6 pt-4 space-y-6">
        <div className="text-base sm:text-lg">
          {renderContent(section.content)}
        </div>

        {section.blocks && section.blocks.length > 0 && (
          <div className="space-y-6">
            {section.blocks.map((block, blockIndex) => (
              <LessonBlock
                key={`${section.id}-block-${blockIndex}`}
                block={block}
                sectionId={section.id}
                onTabViewed={onTabViewed}
                onCardFlip={onCardFlip}
                onQuizAnswer={onQuizAnswer}
              />
            ))}
          </div>
        )}

        {section.keyPoints && section.keyPoints.length > 0 && (
          <div className="rounded-xl bg-secondary/50 p-5 sm:p-6">
            <p className="font-bold text-foreground mb-3">Key Points</p>
            <ul className="space-y-2">
              {section.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {section.proTip && (
          <TopicCallout type="proTip">{section.proTip}</TopicCallout>
        )}
        
        {section.rememberThis && (
          <TopicCallout type="rememberThis">{section.rememberThis}</TopicCallout>
        )}
      </div>

      {/* XP Footer */}
      {sectionXPTotal > 0 && (
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/30">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Zap className="h-3.5 w-3.5 text-xp" />
            <span className="text-muted-foreground">
              {sectionXPEarned}/{sectionXPTotal} XP
            </span>
          </div>
          <div className="relative">
            <TopicProgressRing
              progress={sectionProgress}
              size={32}
              strokeWidth={3}
              showMessage={false}
            />
            {isMastered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-xp" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confetti on mastery */}
      <ConfettiEffect trigger={isMastered} />
    </section>
  );
}
