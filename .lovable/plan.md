

# Per-Section XP Display, Mastery Rings, Confetti Bursts, and Achievement Badges

## Overview

Add visible XP potential and live mastery feedback at the section, topic, and quiz levels. Each section shows its total possible XP, a small progress ring that fills as quizzes are answered correctly, and a confetti burst + toast when mastery is achieved. Topic-level mastery triggers a bigger confetti burst and updates the global XP counter. New badge icons reward completed modules, topics, and quiz lengths.

No big layout changes -- everything slots into existing components with amber/gold styling.

---

## 1. Per-Section XP Display + Live Mastery Ring

### What changes in `TopicSection.tsx`

Add a footer bar inside each section card showing:
- "Total XP: 45 XP" (sum of quiz XP + 15 mastery bonus, calculated from quiz count)
- "Earned: 25 XP" (live counter from parent)
- A small `TopicProgressRing` (size=36) that fills as quizzes are answered correctly
- When mastery is achieved (ring hits 100%), trigger `ConfettiEffect` inside the section card and the ring gets a checkmark overlay

### New props on `TopicSection`
- `sectionXPEarned: number` -- current XP earned in this section (quiz correct * 10 + mastery bonus if achieved)
- `sectionXPTotal: number` -- max possible XP (quizCount * 10 + 15 mastery)
- `isMastered: boolean` -- whether section mastery has been achieved
- `sectionProgress: number` -- 0-100 for the ring (correctInSection / totalInSection * 100)

### Parent pages (`TopicDetail.tsx`, `SubsectionDetail.tsx`)
Compute `sectionXPEarned`, `sectionXPTotal`, `sectionProgress`, and `isMastered` per section from existing `sectionCorrect` and `sectionQuizMap` state, then pass as props. No new state needed -- these are derived values.

---

## 2. Section Mastery Confetti + Toast

### Current behavior
When all quizzes in a section are correct, `gainSectionMasteryXP()` fires the "+15 XP -- Congrats -- mastered the section!" toast. No confetti.

### New behavior
- Add `ConfettiEffect` inside each `TopicSection` card, triggered by `isMastered` prop
- The confetti reuses the existing `ConfettiEffect` component (relative positioned inside the section card which already has `overflow-hidden`)
- The ring transitions from partial fill to full fill with a brief scale-up animation (CSS `animate-scale-in`)
- A checkmark icon replaces the percentage text inside the ring on mastery

---

## 3. Topic Mastery: Big Confetti + Global XP Update

### Current behavior
When accuracy exceeds 80% and all quizzes are attempted, `addXP(150, ...)` fires a toast. The navbar XP updates via `refreshProfile()`.

### New behavior
- Add a full-page `ConfettiEffect` (doubled particle count: 40 pieces) in the completion callout area when `topicBonusAwarded` becomes true
- The completion callout already shows the message; enhance it with a large `TopicProgressRing` (size=80) at 100% with a star/trophy icon
- The existing `refreshProfile()` call already updates the navbar XP counter -- no changes needed there

### Implementation
- In `TopicDetail.tsx` and `SubsectionDetail.tsx`, render a `ConfettiEffect` inside the completion section with `trigger={topicBonusAwarded}`
- Create a variant of `ConfettiEffect` that accepts a `size` prop ("normal" | "big") to control particle count (20 vs 40)

---

## 4. SectionNav XP Badges Enhancement

### Current behavior
SectionNav shows "15 XP" (mastered) or "0 XP" (not mastered).

### New behavior
Show "X/Y XP" where X is earned and Y is total possible for that section. On mastery, show a filled checkmark badge with "45 XP" in amber.

### Props change
- `SectionNav` receives additional `sectionXPMap: Map<string, { earned: number; total: number }>` prop
- Each nav item shows the fraction or total based on mastery state

---

## 5. Achievement Badge Icons

### New component: `AchievementBadge.tsx`

A small reusable badge component with icon + label. Variants:
- **Module Complete**: BookOpen icon with amber ring, shown on category cards when all topics in a module are done
- **Topic Mastered**: Star icon with amber fill, shown on topic cards when >80% accuracy achieved
- **Quiz Length Badges**: Shield icon with text overlay for quiz completions:
  - "10Q" -- completed a 10-question quiz
  - "20Q" -- completed a 20-question quiz
  - "50Q" -- completed a 50-question quiz
  - "Mock" -- completed a mock exam

### Where badges appear
- `QuizResults.tsx`: Show earned quiz-length badge after completing a quiz (e.g., amber shield with "20Q")
- `QuizLevelCard.tsx`: Show small badge icons for completed quiz lengths next to the level card
- `TopicDetail.tsx` completion callout: Show "Topic Mastered" star badge when bonus is awarded
- Dashboard `LevelXPCard`: Show count of mastered topics per level

### Badge data
Badges are session-based for topic/section mastery (derived from state). Quiz-length badges can be derived from `quiz_attempts` table data (already queried by `useLevelXP`).

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/gamification/AchievementBadge.tsx` | Reusable badge component with icon variants |

## Files to Modify

| File | Change |
|------|--------|
| `src/components/topics/TopicSection.tsx` | Add footer with XP display, progress ring, and confetti trigger |
| `src/components/topics/SectionNav.tsx` | Show earned/total XP per section instead of just 0/15 |
| `src/components/gamification/ConfettiEffect.tsx` | Add `size` prop for "normal" (20 pieces) vs "big" (40 pieces) |
| `src/pages/TopicDetail.tsx` | Compute per-section XP props; add big confetti on topic mastery; show achievement badge in completion callout |
| `src/pages/SubsectionDetail.tsx` | Same per-section XP computation and big confetti |
| `src/components/quiz/QuizResults.tsx` | Show quiz-length achievement badge |
| `src/components/quiz/QuizLevelCard.tsx` | Show earned quiz-length badges |

---

## Technical Details

### Per-section XP calculation (in parent pages)

```text
For each section:
  quizCount = sectionQuizMap.get(sectionId).length
  sectionXPTotal = quizCount * 10 + 15  (quiz answers + mastery bonus)
  
  correctCount = sectionCorrect.get(sectionId)?.size || 0
  sectionXPEarned = correctCount * 10 + (isMastered ? 15 : 0)
  
  sectionProgress = quizCount > 0 
    ? (correctCount / quizCount) * 100 
    : (isMastered ? 100 : 0)

For quiz-free sections: sectionXPTotal = 15, sectionXPEarned = isMastered ? 15 : 0
```

### TopicSection footer layout

```text
<div className="flex items-center justify-between px-5 py-3 border-t border-border bg-muted/30">
  <!-- Left: XP text -->
  <div className="flex items-center gap-2 text-xs font-bold">
    <Zap className="h-3.5 w-3.5 text-xp" />
    <span>{earned}/{total} XP</span>
  </div>
  
  <!-- Right: Mini progress ring -->
  <TopicProgressRing progress={sectionProgress} size={32} strokeWidth={3} showMessage={false} />
</div>

<!-- Confetti layer (inside section card, relative positioned) -->
<ConfettiEffect trigger={isMastered} />
```

### AchievementBadge component

```text
Props:
  variant: "topic-mastered" | "module-complete" | "quiz-10" | "quiz-20" | "quiz-50" | "quiz-mock"
  size?: "sm" | "md"  (default "sm")

Renders:
  Amber-outlined pill with icon + label
  topic-mastered: Star icon + "Mastered"
  module-complete: BookOpen icon + "Complete"  
  quiz-*: Shield icon + "10Q" / "20Q" / "50Q" / "Mock"
  
  Styling: rounded-full, border-xp/40, bg-xp/10, text-xp, font-bold
```

### ConfettiEffect size variant

```text
Add optional prop: intensity?: "normal" | "big"  (default "normal")
- "normal": 20 pieces (current behavior)
- "big": 40 pieces, slightly larger sizes (6-10px vs 4-6px)
```

### Guardrails

- All XP values are derived from existing state (sectionCorrect, masteredSections, sectionQuizMap) -- no new state or DB calls
- Confetti reuses the existing ConfettiEffect component with minimal extension (size prop only)
- Section footer is inside the existing card border -- no layout shift
- Ring uses existing TopicProgressRing at smaller size -- no new SVG component
- Achievement badges are purely visual indicators with no XP logic
- Quiz-length badges are derived from quiz_attempts data already fetched by useLevelXP
- Mobile: section footer stacks naturally; badges wrap; no special handling needed
- All new amber styling uses existing `--xp` CSS variable

