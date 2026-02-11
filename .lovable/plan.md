

# Duolingo-Inspired Style Evolution

## Overview
Restyle the app with Duolingo's energetic, motivating aesthetic while preserving the existing medical-credible structure (8-section modules, level tabs, flashcards, quizzes, callouts).

This plan is split into two phases: **Phase 1** applies the global visual foundation, and **Phase 2** adds gamification and micro-interactions.

---

## Phase 1 -- Visual Refresh (Global)

### 1. Color Palette Update (`src/index.css`)
Swap the current subdued blue palette for Duolingo-inspired vibrant colors:

| Token | Current | New |
|---|---|---|
| `--primary` | `217 91% 60%` (steel blue) | `197 93% 52%` (#1CB0F6 Duo blue) |
| `--success` | `142 76% 36%` (dark green) | `101 75% 40%` (#58CC02 Duo green) |
| `--destructive` | `0 84% 60%` | `0 72% 51%` (#CE2029 Duo red) |
| `--warning` | `38 92% 50%` | `40 96% 53%` (bright amber) |
| `--background` | near-white | `0 0% 100%` (pure white) |
| `--border` | gray | lighter, `220 20% 93%` |

Dark mode will be adjusted proportionally. A new `--xp` accent token (gold/amber) will be added for gamification elements.

### 2. Border Radius and Buttons (`tailwind.config.ts`, `button.tsx`)
- Increase `--radius` from `0.75rem` to `1rem` for rounder cards/inputs.
- Add a `"duo"` button variant: bold background, extra-rounded (`rounded-2xl`), larger padding, uppercase tracking, drop shadow -- used for CTAs like "Continue", "Check Answer", "Start Lesson".
- Default button gets slightly rounder corners.

### 3. Font Weight and Spacing
- Add `font-bold` emphasis to headings globally.
- Increase card padding and whitespace between sections for a more airy feel.

### 4. Component-Level Tweaks

| Component | Changes |
|---|---|
| **Navbar** | Logo icon uses Duo green background; active link gets a pill with filled primary background |
| **TopicCard** | Rounder corners, bolder hover shadow, green "Start" pill instead of text link |
| **TopicSection** | Section number badge becomes a filled circle (primary bg, white text) |
| **FlashcardItem** | Thicker border, slight scale-up on hover, brighter gradient backgrounds |
| **QuizBlock** | "Submit Answer" becomes the Duo-style CTA button; option cards get rounder corners |
| **ContinueButton** | Uses the new `"duo"` button variant, full-width, prominent green when unlocked |
| **LessonProgress / StickyProgressBar** | Progress bar uses Duo green; completed state gets a gold star icon |
| **TopicCallout** | Slightly rounder, emoji-sized icon area, warmer background tints |
| **Footer** | Lighter background, simpler divider |

---

## Phase 2 -- Gamification and Micro-Interactions

### 5. XP System (new component + hook)
- Create `src/hooks/useXP.ts` -- a lightweight local-state hook (with optional database persistence for logged-in users) that tracks:
  - XP earned per quiz answer (+10 correct, +5 for retry correct)
  - XP earned per section viewed (+5)
  - XP earned per flashcard flipped (+2)
- Create `src/components/gamification/XPCounter.tsx` -- a small pill displayed in the Navbar showing total XP with a sparkle icon.
- On XP gain, show a brief floating "+10 XP" animation near the action.

### 6. Streak Counter
- Create `src/components/gamification/StreakBadge.tsx` -- displays a fire icon with current day streak count in the Navbar/Dashboard.
- Track daily activity via a `last_active_date` field on profiles (database migration).
- Show motivational messages: "3-day streak -- keep it up!" on the Dashboard.

### 7. Feedback Animations
- **Correct quiz answer**: Green flash on the option, a brief confetti burst (CSS-only keyframe animation, no heavy library), and a "Nice work!" toast.
- **Wrong quiz answer**: Gentle horizontal shake animation on the selected option (CSS `@keyframes shake`).
- **Flashcard flip**: Keep existing 3D flip, add a subtle bounce on land.
- **Section complete**: Brief scale-in checkmark animation on the progress indicator.
- **Lesson complete**: Larger celebration -- animated stars/confetti around the completion callout, XP summary.

### 8. Motivational Nudges
- Add encouraging micro-copy into existing callouts and completion states:
  - Quiz: "You're on fire!" / "Almost -- give it another shot!"
  - Lesson complete: "Awesome work -- you earned 50 XP!"
  - Dashboard: "Welcome back! Your streak is alive!"
- Use a simple EMS-themed icon (a small ambulance or stethoscope with a smiley) as a "mascot hint" next to encouragement text -- implemented as an SVG or Lucide icon composition, not a heavy image.

### 9. Progress Ring (Dashboard)
- Replace the linear progress bar on the Dashboard overview card with a circular SVG progress ring showing overall completion percentage, styled in Duo green.

---

## Technical Details

### Files Modified
- `src/index.css` -- color tokens
- `tailwind.config.ts` -- radius, new keyframes (shake, confetti, float-up), animation utilities
- `src/components/ui/button.tsx` -- add `"duo"` variant
- `src/components/Navbar.tsx` -- XP counter, streak badge, updated active styles
- `src/components/topics/QuizBlock.tsx` -- Duo CTA, shake/confetti animations, motivational copy
- `src/components/topics/FlashcardItem.tsx` -- hover scale, bounce animation
- `src/components/topics/TopicSection.tsx` -- filled number badge, spacing
- `src/components/topics/TopicCard.tsx` -- rounder, bolder CTA
- `src/components/topics/ContinueButton.tsx` -- Duo-style green CTA
- `src/components/topics/LessonProgress.tsx` -- green bar, XP display
- `src/components/topics/StickyProgressBar.tsx` -- green bar, star icon
- `src/components/topics/TopicCallout.tsx` -- rounder, warmer
- `src/components/Footer.tsx` -- lighter style
- `src/pages/Dashboard.tsx` -- progress ring, streak, XP summary
- `src/pages/Index.tsx` -- brighter hero, Duo-style CTA buttons

### New Files
- `src/hooks/useXP.ts`
- `src/components/gamification/XPCounter.tsx`
- `src/components/gamification/StreakBadge.tsx`
- `src/components/gamification/ProgressRing.tsx`
- `src/components/gamification/ConfettiEffect.tsx` (CSS-only confetti burst)
- `src/components/gamification/XPFloater.tsx` (floating +XP animation)

### Database Migration
- Add `xp_total INTEGER DEFAULT 0` to profiles table
- Add `current_streak INTEGER DEFAULT 0` to profiles table
- Add `last_active_date DATE` to profiles table

### What Does NOT Change
- Content structure (8-section modules, subsections, topics data)
- Medical accuracy and clinical tone of text content
- Route structure and navigation hierarchy
- EMT/AEMT/Paramedic level tabs and accordions
- Authentication flow
- Existing data models (only additive columns)

