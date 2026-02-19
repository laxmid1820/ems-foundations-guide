
## Goal
Generate 100 new questions for each of the 3 certification levels (EMT, AEMT, Paramedic), bringing each bank from its current count (~239, ~265, ~234) significantly closer to the new 1,000-question target. This requires a batch-orchestration approach since the edge function is capped at 50 questions per call.

## Current State
- EMT: ~239 questions
- AEMT: ~265 questions
- Paramedic: ~234 questions
- Edge function cap: 50 questions per single call (hardcoded `Math.min(..., 50)`)
- New target: 1,000 per level

## Approach: Admin Generation Panel

Since generating 100 questions per level requires multiple sequential calls (e.g., 4 batches of 25), the cleanest solution is to build a hidden admin panel at `/admin/generate` that:

1. **Shows current bank counts** per level with a progress bar toward 1,000
2. **Has a "Generate 100" button** per level (or "Generate All 3 Levels")
3. **Runs batches automatically** — fires 4 sequential calls of 25 questions each per level, showing real-time progress (e.g., "Batch 2/4 complete — 50 questions added")
4. **Shows a live running total** after each batch completes

## What Changes

### 1. New page: `src/pages/AdminGenerate.tsx`
- Protected by checking if the logged-in user is the project owner (can use a hardcoded allowed email or just keep the page unlisted)
- Displays a card per level (EMT / AEMT / Paramedic) showing:
  - Current count / 1,000 target with a progress bar
  - "Generate 100" button
  - Live status log (batch progress)
- Orchestrates 4× calls to the `generate-quiz-questions` edge function (25 questions per batch) per level
- Refreshes counts after each batch

### 2. Update `supabase/functions/generate-quiz-questions/index.ts`
- Raise the per-call cap from 50 → 50 (keeping it at 50 is fine; batches of 25 are safer and stay well within timeout limits)
- No change needed here — 25 per batch is already within the current cap

### 3. Update `src/App.tsx`
- Add route `/admin/generate` → `<AdminGenerate />`

## Generation Math
```text
100 questions per level = 4 batches × 25 questions each
3 levels × 4 batches = 12 total API calls
Each call ~15-30 seconds → sequential per level, all 3 levels can run in parallel
Estimated total time: ~2-3 minutes
```

## UI Flow
```text
[Admin Generate Page]
  ├── EMT  [239 / 1000] [████░░░░░░░] [Generate 100 ▶]
  │         Generating... Batch 1/4 ✓  Batch 2/4 ✓  Batch 3/4...
  ├── AEMT [265 / 1000] [████░░░░░░░] [Generate 100 ▶]
  └── NRP  [234 / 1000] [████░░░░░░░] [Generate 100 ▶]
  
  [Generate All Levels] — triggers all 3 simultaneously
```

## Security
The admin page will be unlisted (no nav link), accessible only by direct URL. For additional protection, the page can check the logged-in user's email matches a hardcoded admin email before showing any controls.
