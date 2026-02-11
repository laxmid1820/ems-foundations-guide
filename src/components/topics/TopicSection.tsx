import { TopicCallout } from "./TopicCallout";
import { LessonBlock } from "./LessonBlock";
import type { TopicSection as TopicSectionType } from "@/data/topics";

interface TopicSectionProps {
  section: TopicSectionType;
  index: number;
  onTabViewed?: (index: number) => void;
  onCardFlip?: (cardId: string) => void;
  onQuizAnswer?: (questionId: string, correct: boolean) => void;
}

export function TopicSection({ 
  section, 
  index,
  onTabViewed,
  onCardFlip,
  onQuizAnswer 
}: TopicSectionProps) {
  // Helper to render content with markdown-style formatting
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      // Check if this is a bullet list
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

      // Check if this is a numbered list
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

      // Regular paragraph with possible bold formatting
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
          {renderInlineFormatting(paragraph)}
        </p>
      );
    });
  };

  // Render inline bold formatting
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
      className="mb-6 last:mb-0 rounded-lg border border-border bg-card shadow-sm overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex items-start gap-4 p-5 sm:p-6 pb-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-lg">
          {index + 1}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight pt-1">
          {section.title}
        </h2>
      </div>

      {/* Main Content */}
      <div className="p-5 sm:p-6 pt-4 space-y-6">
        {/* Body Text */}
        <div className="text-base sm:text-lg">
          {renderContent(section.content)}
        </div>

        {/* Interactive Blocks */}
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

        {/* Key Points */}
        {section.keyPoints && section.keyPoints.length > 0 && (
          <div className="rounded-lg bg-secondary/50 p-5 sm:p-6">
            <p className="font-semibold text-foreground mb-3">Key Points</p>
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

        {/* Callouts */}
        {section.proTip && (
          <TopicCallout type="proTip">{section.proTip}</TopicCallout>
        )}
        
        {section.rememberThis && (
          <TopicCallout type="rememberThis">{section.rememberThis}</TopicCallout>
        )}
      </div>
    </section>
  );
}
