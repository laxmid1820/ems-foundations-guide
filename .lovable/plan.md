

# Fix: Remove Scroll-Based XP and Correct XP Math

## Problem

Two bugs exist in both `TopicDetail.tsx` and `SubsectionDetail.tsx`:

1. **Scroll-based XP**: The `IntersectionObserver` auto-masters quiz-free sections when they scroll into view, awarding +15 XP (`gainSectionMasteryXP()`) passively. This means simply scrolling through a topic awards XP for every section that has no quizzes.

2. **XP math mismatch**: The inline `xpTotal`/`xpEarned` values passed to each `TopicSection` component omit flashcard XP, while the `sectionXPMap` (used by `SectionNav`) correctly includes it. This causes the section cards and the sidebar to show different numbers.

## Root Cause

**Bug 1** -- In both files, the `IntersectionObserver` callback (TopicDetail line ~114, SubsectionDetail line ~143) checks `quizIds.length === 0` and immediately calls `gainSectionMasteryXP()` + marks the section mastered. This fires +15 XP just for scrolling past a text-only section.

**Bug 2** -- In the `.map()` render loop, `xpTotal` is calculated as `quizCount * 10 + 15` (missing `flashcardCount * 2`), and `xpEarned` is `correctCount * 10 + (mastered ? 15 : 0)` (missing `flippedInSection * 2`). The `sectionXPMap` used by `SectionNav` correctly includes both.

## Fix

### Rule: Section mastery (+15 XP) only for sections with quizzes, only on 100% correctness

- Quiz-free sections get **no mastery bonus** and **no scroll XP**
- They can still earn flashcard XP (+2 per flip) if they contain flashcards
- They are visually marked as "complete" (checkmark in nav) once viewed, but award 0 mastery XP
- Their `total` XP is `flashcardCount * 2` (no +15 bonus)
- Sections with quizzes keep: `total = quizCount * 10 + flashcardCount * 2 + 15`

### Changes in both `TopicDetail.tsx` and `SubsectionDetail.tsx`:

#### 1. IntersectionObserver -- Remove XP award, keep visual tracking

Remove `gainSectionMasteryXP()` from the observer. Keep `setMasteredSections` for quiz-free sections (visual checkmark only, no XP):

```typescript
// Before (awards XP on scroll):
if (quizIds.length === 0 && !masteredRef.current.has(sectionId)) {
  gainSectionMasteryXP();                    // REMOVE THIS
  setMasteredSections((ms) => new Set(ms).add(sectionId));  // keep for visual
}

// After (no XP, visual only):
if (quizIds.length === 0 && !masteredRef.current.has(sectionId)) {
  setMasteredSections((ms) => new Set(ms).add(sectionId));
}
```

#### 2. sectionXPMap -- Conditional mastery bonus

Only include +15 in `total` when the section has quizzes:

```typescript
const masteryBonus = quizCount > 0 ? 15 : 0;
const total = quizCount * 10 + flashcardCount * 2 + masteryBonus;
const earned = correct * 10 + flippedInSection * 2 + (mastered && quizCount > 0 ? 15 : 0);
```

#### 3. Inline render XP values -- Include flashcards, conditional mastery

Fix the `.map()` render loop to match `sectionXPMap` logic:

```typescript
const flashcardCount = section.blocks?.filter(b => b.type === "flashcards")
  .reduce((sum, b) => sum + (b.flashcards?.length || 0), 0) || 0;
const flippedInSection = flashcardsFlipped.filter(id => id.startsWith(`${section.id}-card-`)).length;
// In SubsectionDetail: use Array.from(flippedCards).filter(...)
const masteryBonus = quizCount > 0 ? 15 : 0;
const xpTotal = quizCount * 10 + flashcardCount * 2 + masteryBonus;
const xpEarned = correctCount * 10 + flippedInSection * 2 + (mastered && quizCount > 0 ? 15 : 0);
```

## Files Modified

| File | Change |
|------|--------|
| `src/pages/TopicDetail.tsx` | Remove `gainSectionMasteryXP()` from observer; fix `sectionXPMap` and inline XP math |
| `src/pages/SubsectionDetail.tsx` | Same fixes |

## What Stays the Same

- Quiz-based mastery (+15 XP on 100% section quiz correctness) -- unchanged
- Flashcard XP (+2 per unique flip) -- unchanged
- Quiz XP (+10 correct, +5 retry) -- unchanged
- Knowledge Check gating -- unchanged
- Done with Module ceremony (+5 and +150 XP) -- unchanged
- Visual checkmarks for quiz-free sections in SectionNav -- unchanged (just no XP)

