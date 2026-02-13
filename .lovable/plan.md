
# XP Toast Notification -- Contextual Messages

## Overview

Extend the existing `XPFloater` component and `useXP` hook so that every XP gain shows a small floating toast with a contextual message (e.g., "+5 XP -- Section viewed!"). The toast uses amber/gold styling, fades out after 2.5 seconds, and stays non-intrusive. No new libraries needed.

## What Changes

### 1. Extend `useXP` hook to carry a reason string

The `lastGain` object currently stores `{ amount, timestamp }`. Add a `reason` field so downstream components know what to display.

- `gainSectionXP()` sets reason to `"Section viewed!"`
- `gainFlashcardXP()` sets reason to `"Flashcard mastered!"`
- `gainQuizXP(correct, isRetry)` sets reason to `"Great answer!"` (correct) or `"Nice retry!"` (retry correct)
- `addXP(amount, reason?)` accepts an optional reason string

### 2. Create `XPToast` -- a global fixed-position notification

A new component `src/components/gamification/XPToast.tsx` that:

- Is rendered once at the app level (in `Layout.tsx` or `App.tsx`)
- Listens to `useXP().lastGain` changes
- Shows a small pill in the bottom-center of the screen: amber background, Zap icon, "+5 XP -- Section viewed!"
- Fades in, holds for ~2 seconds, then fades out (total ~2.5s visible)
- Uses `position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%)` so it floats above content without blocking interaction
- `pointer-events-none` to stay non-intrusive
- Stacks with the existing inline `XPFloater` (which stays as the local "+X XP" bubble on quiz blocks)

### 3. Add fade-in-out keyframe animation

Add to `src/index.css`:

```text
@keyframes xp-toast {
  0%   { opacity: 0; transform: translateX(-50%) translateY(10px); }
  15%  { opacity: 1; transform: translateX(-50%) translateY(0); }
  80%  { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

.animate-xp-toast {
  animation: xp-toast 2.5s ease-in-out forwards;
}
```

### 4. Render `XPToast` globally

Add `<XPToast />` inside `Layout.tsx` so it appears on every page without needing per-page wiring.

## Technical Details

### useXP changes

```text
interface LastGain {
  amount: number;
  timestamp: number;
  reason: string;        // NEW
}

addXP(amount, reason = "XP earned!")   // optional reason param
gainSectionXP()     -> addXP(5, "Section viewed!")
gainFlashcardXP()   -> addXP(2, "Flashcard mastered!")
gainQuizXP(correct, isRetry)  -> addXP(10, "Great answer!") or addXP(5, "Nice retry!")
```

### XPToast component structure

```text
- fixed bottom-6 left-1/2 z-[60]
- pointer-events-none
- Pill: bg-xp text-xp-foreground rounded-full px-4 py-2 shadow-xl
- Content: <Zap icon> +{amount} XP -- {reason}
- Uses animate-xp-toast class
- Visible for 2.5s, auto-hides via state + timeout
- Keyed by timestamp to restart animation on each new gain
```

### Files to create

| File | Purpose |
|---|---|
| `src/components/gamification/XPToast.tsx` | Global fixed-position XP notification |

### Files to modify

| File | Change |
|---|---|
| `src/hooks/useXP.ts` | Add `reason` to `lastGain`, thread reason through `addXP`/`gainSectionXP`/etc. |
| `src/index.css` | Add `@keyframes xp-toast` and `.animate-xp-toast` |
| `src/components/Layout.tsx` | Render `<XPToast />` once globally |

### Existing XPFloater unchanged

The inline `XPFloater` (positioned absolutely inside quiz blocks) stays as-is for local feedback. `XPToast` is the new global overlay for all XP sources.

### Guardrails

- Toast only shows for amounts > 0
- Each toast is keyed by `timestamp` so rapid gains re-trigger the animation
- `pointer-events-none` ensures it never blocks clicks
- 2.5s duration keeps it subtle -- long enough to notice, short enough to not annoy
- No new dependencies required
