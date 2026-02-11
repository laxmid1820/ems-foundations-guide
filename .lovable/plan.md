

# Fix Missing Level Progression Buttons

## Problem
The `LevelProgressionButton` in `TopicOverview.tsx` is guarded by a slug-based filter (line 337) that only allows it to render for three specific comparison modules (`copd-vs-chf`, `asthma-vs-anaphylaxis`, `pulmonary-edema`). This means any other flat topics with progression entries in the map will never show the buttons, even though the component itself already returns `null` when no matching key is found.

## Solution
Remove the slug-based filter entirely and always render `LevelProgressionButton`. The component already has a built-in guard (`if (!progression) return null`) that handles topics without progression entries, making the filter redundant and restrictive.

## Changes

### `src/pages/TopicOverview.tsx` (line 337)

**Before:**
```tsx
{(topicSlug?.includes("copd-vs-chf") || topicSlug?.includes("asthma-vs-anaphylaxis") || topicSlug?.includes("pulmonary-edema")) && (
  <LevelProgressionButton 
    currentLevel={category.level}
    topicSlug={topicSlug}
    variant="card"
  />
)}
```

**After:**
```tsx
<LevelProgressionButton 
  currentLevel={category.level}
  topicSlug={topicSlug}
  variant="card"
/>
```

This single change ensures that ANY flat topic registered in the `progressionMap` will automatically display the Level Up and witty return buttons -- no more manually updating the filter every time a new topic chain is added.

## Why This Works
- `LevelProgressionButton` already returns `null` when the key is not found in `progressionMap` (line 326)
- Removing the filter makes the system self-maintaining: just add entries to `progressionMap` and they work everywhere
- All existing comparison modules continue to work exactly as before
