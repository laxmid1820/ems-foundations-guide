

# Dashboard XP Breakdown -- Refined with Motivational Polish

## Overview

Add a "XP Headquarters" section to the Dashboard with a global XP ring, three certification-level cards, and per-domain breakdowns. All data derived from existing `profiles.xp_total` and `quiz_attempts` tables -- no migrations needed.

## Refinements Applied

### 1. Warmer Milestone Messages (Global Ring)

Tiered messages displayed beneath the global XP ring:

- 0: "Your journey starts now -- every question counts!"
- 1-99: "First steps taken -- you're already ahead of most!"
- 100-249: "First 100 down -- momentum is building!"
- 250-499: "Quarter-thousand club -- seriously impressive!"
- 500-999: "Halfway to a thousand -- unstoppable!"
- 1000-2499: "1,000+ EXP -- future paramedic energy!"
- 2500+: "Legend status -- you're inspiring others!"

### 2. Locked EXP Tooltip on Global XP

Next to the global XP number, a small Lock icon wrapped in a Tooltip:

"Total locked EXP -- includes quizzes, content progress, and flashcards."

Uses the existing `Tooltip` / `TooltipTrigger` / `TooltipContent` components and the `Lock` icon from lucide-react. Keeps tone informative and positive.

### 3. Encouraging Empty State per Level

When a level has 0 quiz XP, the level card shows a friendly empty state instead of empty bars:

- EMT: "Ready to earn your first EMT XP? Dive into a quiz now!"
- AEMT: "Ready to earn your first AEMT XP? Dive into a quiz now!"
- Paramedic: "Ready to earn your first Paramedic XP? Dive into a quiz now!"

Each includes a small "Start Quiz" button linking to `/quizzes`. The domain breakdown is hidden when XP is 0 to keep it clean.

### 4. Mobile-First Level Card Layout

Level cards use `grid-cols-1 sm:grid-cols-3` so they stack vertically on mobile and sit side-by-side on desktop. Each card gets full width on small screens with consistent padding.

## Technical Details

### Files to create

| File | Purpose |
|---|---|
| `src/hooks/useLevelXP.ts` | React Query hook aggregating quiz XP by level and domain |
| `src/components/dashboard/XPHeadquarters.tsx` | Main wrapper: global card + level cards grid |
| `src/components/dashboard/GlobalXPCard.tsx` | Hero ring with amber accents, locked EXP tooltip, milestone message |
| `src/components/dashboard/LevelXPCard.tsx` | Per-level card with domain bars or empty state |

### Files to modify

| File | Change |
|---|---|
| `src/components/gamification/ProgressRing.tsx` | Add optional `strokeColor` prop (default: success, override: xp amber) |
| `src/pages/Dashboard.tsx` | Replace stats row with `<XPHeadquarters />` |

### `useLevelXP` hook

```text
SELECT level, domain_filter, SUM(xp_earned) as xp
FROM quiz_attempts
WHERE user_id = $userId
GROUP BY level, domain_filter
```

Returns `{ levelXP, domainXP, isLoading }`. Uses `@tanstack/react-query` with key `["level-xp", userId]`.

### ProgressRing change

Add `strokeColor?: string` prop. Defaults to `hsl(var(--success))`. GlobalXPCard passes `hsl(var(--xp))` for gold/amber.

### Milestone progress calculation

```text
const nextMilestone = Math.ceil(xp / 500) * 500 || 500;
const milestoneProgress = (xp / nextMilestone) * 100;
```

Ring fills toward milestones at 500, 1000, 1500, etc.

### GlobalXPCard structure

- Large ProgressRing (size 140, amber stroke)
- XP number with Lock icon + Tooltip beside it
- Milestone message below in `text-muted-foreground`
- Streak badge integrated in top-right corner

### LevelXPCard structure

- Level badge header (EMT / AEMT / Paramedic)
- If XP > 0: total XP number + domain breakdown bars (amber fill, proportional to max domain)
- If XP = 0: encouraging message + "Start Quiz" link button
- Motivational tagline when XP > 0 (e.g., "You're crushing EMT Foundations!")

### Domain breakdown bars

Horizontal bars for each NREMT domain within a level. Gold/amber fill using `bg-xp`. Width proportional to the highest-XP domain in that level. Labels: domain name left, XP number right.

### Visual tokens used

- `text-xp`, `bg-xp/10`, `bg-xp/20` for amber accents
- `border-2 rounded-2xl` card style
- `font-extrabold` for numbers
- `p-6` / `gap-6` spacing

### Implementation sequence

1. Add `strokeColor` prop to ProgressRing
2. Create `useLevelXP` hook
3. Create GlobalXPCard with milestone messages and locked tooltip
4. Create LevelXPCard with empty state and domain bars
5. Create XPHeadquarters wrapper
6. Update Dashboard to use XPHeadquarters, remove old stats row

