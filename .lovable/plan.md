Before implementing, add a small motivational label under the large topic XP ring (size 80) in the header that updates dynamically with progress tiers (0%: "Start earning XP — every quiz counts!", 1–49%: "Building strong foundations — keep going!", 50–79%: "Halfway there — mastery is close!", 80–99%: "Almost mastered — one more push!", 100%: "Topic complete — incredible work!"). Use text-xs font-medium text-muted-foreground for subtlety.  
  
Layout, XP Rings, and Completion Fix

## Overview

Four targeted fixes to improve the desktop layout, add visual XP progress rings, and fix the completion calculation so topics can actually reach 100%.

---

## 1. Center Main Content on Desktop

**Problem**: The main content container uses `lg:pl-[240px] lg:max-w-none`, which pushes content to start after the sidebar but lets it stretch to the full viewport width. This makes the content area look off-center and too wide.

**Fix in `SubsectionDetail.tsx` and `TopicDetail.tsx**`: Replace the current layout approach with a properly centered content column.

```text
Current:  lg:pl-[240px] lg:pr-8 max-w-4xl lg:max-w-none
Proposed: lg:pl-[240px] lg:pr-8 lg:max-w-[calc(240px+768px+2rem)]
```

This constrains the content to ~768px wide (readable width) while accounting for the sidebar offset, keeping it visually centered in the remaining viewport space. The `lg:max-w-3xl` constraints on inner sections can then be removed since the container itself is bounded.

**Files**: `src/pages/SubsectionDetail.tsx` (line 275), `src/pages/TopicDetail.tsx` (line 260)

---

## 2. Mini XP Progress Ring in SectionNav

**What**: Add a tiny `TopicProgressRing` (size 24, strokeWidth 3) to each section nav item, replacing the numbered circle when progress exists.

**How**: In `SectionNavList`, for each section, compute progress from `sectionXPMap` (earned/total). Show the mini ring between the number badge and the title. The ring uses amber (`hsl(var(--xp))`) and shows no percentage text at this size -- just a visual fill indicator.

**Layout**: Replace the current number circle (`h-6 w-6`) with:

- If mastered: keep the green checkmark circle (current behavior)
- If in-progress (earned > 0 but not mastered): show `TopicProgressRing` (size 24, no message, no percentage text)
- If not started: keep the numbered circle (current behavior)

**File**: `src/components/topics/SectionNav.tsx`

---

## 3. Topic Header XP Ring (size 80)

**What**: Add a large `TopicProgressRing` (size 80, strokeWidth 6) to the topic header area, showing overall topic XP progress.

**How**: Compute total earned XP and total possible XP across all sections from `sectionXPMap`. Display the ring in the header next to (or replacing) the icon area.

**Layout**: Place the ring in the header section of both `SubsectionDetail.tsx` and `TopicDetail.tsx`, to the right of the title block, aligned with the top. Shows `{totalEarned}/{totalPossible} XP` below the ring in small amber text.

**Derived values** (no new state):

```text
totalEarnedXP = sum of all sectionXPMap entries' earned values
totalPossibleXP = sum of all sectionXPMap entries' total values
topicProgress = (totalEarnedXP / totalPossibleXP) * 100
```

**Files**: `src/pages/SubsectionDetail.tsx`, `src/pages/TopicDetail.tsx`

---

## 4. Fix Completion Not Reaching 100%

**Problem**: In `SubsectionDetail.tsx`, the progress calculation (line 219) only considers sections viewed:

```
progress = (sectionsViewed.size / totalSections) * 100
```

This ignores flashcards flipped and quizzes answered, so even after completing everything, the weighted progress never accounts for interactive elements.

**Fix**: Apply the same weighted formula used in `LessonProgress.tsx`:

```text
sectionWeight  = (sectionsViewed / totalSections) * 40
flashcardWeight = (flippedCards / totalFlashcards) * 30   (or 30 if no flashcards)
quizWeight      = (answeredQuizzes / totalQuizzes) * 30   (or 30 if no quizzes)
progress = sectionWeight + flashcardWeight + quizWeight
```

This requires counting total flashcards and quizzes from `richSections` blocks (similar to `getTopicInteractiveCount` used in `TopicDetail.tsx`).

**File**: `src/pages/SubsectionDetail.tsx`

---

## Files to Modify


| File                                          | Changes                                                               |
| --------------------------------------------- | --------------------------------------------------------------------- |
| `src/pages/SubsectionDetail.tsx`              | Fix container width classes; add header XP ring; fix progress formula |
| `src/pages/TopicDetail.tsx`                   | Fix container width classes; add header XP ring                       |
| `src/components/topics/SectionNav.tsx`        | Add mini XP ring per section item                                     |
| `src/components/topics/TopicProgressRing.tsx` | Add variant for tiny size (hide percentage text when size <= 28)      |


---

## Technical Details

### TopicProgressRing size adaptation

The component already handles `size <= 44` for smaller text. Add a condition: when `size <= 28`, hide the percentage text entirely and just show the ring fill. This keeps the ring clean at nav-item scale.

### SectionNav ring placement

```text
<span className="shrink-0">
  {mastered ? (
    <CheckCircle in green>
  ) : earnedXP > 0 ? (
    <TopicProgressRing size={24} strokeWidth={3} showMessage={false} />
  ) : (
    <NumberCircle>{index + 1}</NumberCircle>
  )}
</span>
```

### Header ring placement (both pages)

```text
<div className="flex items-start gap-4 mb-4">
  <!-- existing icon + title block -->
  <div className="flex-1 min-w-0">...</div>
  
  <!-- New: Topic XP ring, right-aligned -->
  <div className="hidden sm:flex flex-col items-center gap-1 shrink-0">
    <TopicProgressRing size={80} strokeWidth={6} progress={topicProgress} showMessage={false} />
    <span className="text-xs font-bold text-xp">{totalEarned}/{totalPossible} XP</span>
  </div>
</div>
```

Hidden on mobile (`hidden sm:flex`) to avoid crowding the header.

### Completion progress fix

Add to `SubsectionDetail.tsx`:

```text
const totalFlashcards = richSections
  ? richSections.reduce((sum, s) => 
      sum + (s.blocks?.filter(b => b.type === 'flashcards').flatMap(b => b.flashcards || []).length || 0), 0)
  : 0;

const sectionWeight = totalSections > 0 ? (sectionsViewed.size / totalSections) * 40 : 40;
const flashcardWeight = totalFlashcards > 0 ? (flippedCards.size / totalFlashcards) * 30 : 30;
const quizWeight = totalQuizCount > 0 ? (answeredQuizzes.size / totalQuizCount) * 30 : 30;
const progress = Math.round(sectionWeight + flashcardWeight + quizWeight);
```