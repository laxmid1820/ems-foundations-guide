

# Fix: Topic XP Ring Premature 100%

## Problem

The large Topic XP ring in the SectionNav hits 100% as soon as all section quizzes and flashcards are completed, **before** the user clicks "Done with Module." This undermines the ceremony's suspenseful ring-fill moment.

**Root cause**: `topicXPTotal` is the sum of all per-section totals (`quizCount * 10 + flashcardCount * 2 + 15`). Once all sections are mastered, `topicXPEarned` equals `topicXPTotal` -- the +5 completion bonus isn't factored in.

## Fix

Add a +5 "module completion" slot to the ring's total, and only credit it to earned after the button is clicked.

### Changes in `TopicDetail.tsx` (lines 309-321)

Where the SectionNav is rendered, add +5 to `totalPossible`, and +5 to `totalEarned` only when `topicBonusAwarded` is true:

```typescript
{(() => {
  let totalEarned = 0, totalPossible = 0;
  sectionXPMap.forEach(({ earned, total }) => { totalEarned += earned; totalPossible += total; });
  // Reserve +5 for module completion button
  totalPossible += 5;
  if (topicBonusAwarded) totalEarned += 5;
  return (
    <SectionNav
      sections={navSections}
      masteredSections={masteredSections}
      activeSectionId={activeSectionId}
      sectionXPMap={sectionXPMap}
      topicXPEarned={totalEarned}
      topicXPTotal={totalPossible}
    />
  );
})()}
```

This means:
- Before button click: ring maxes at `totalSectionXP / (totalSectionXP + 5)` -- e.g., 97-99%
- On button click: `handleModuleComplete` sets `topicBonusAwarded` (indirectly via ceremony), ring jumps to 100%

### Same change in `SubsectionDetail.tsx`

Apply the identical +5 logic wherever the SectionNav `topicXPEarned`/`topicXPTotal` are computed.

## Files Modified

| File | Change |
|------|--------|
| `src/pages/TopicDetail.tsx` | Add +5 to `totalPossible`, conditionally to `totalEarned` |
| `src/pages/SubsectionDetail.tsx` | Same |

## Result

The ring stays at ~97-99% until the user clicks "Done with Module," preserving the suspenseful ceremony moment where it fills to 100%.
