Before implementing, add a short motivational teaser above or next to the "Done with Module" button when it appears: "Finish strong! Completing the module unlocks your +150 XP mastery bonus and badge." Use text-sm font-medium text-muted-foreground for subtlety.  
  
Silent Flashcard XP, Gated Last Section, Module Completion Ceremony

## Overview

Five changes: silence the flashcard toast, gate the final "Knowledge Check" section behind prior quiz mastery, show a "Done with Module" button after the last knowledge check is 100%, and on click trigger a full-screen completion ceremony (suspenseful ring fill to 100%, confetti, congrats message, badge award, +150 XP slam to navbar).

---

## 1. Silence Flashcard Toast

**What**: Change the `gainFlashcardXP` reason from `"Flashcard mastered!"` to an empty string or a silent marker so `XPToast` skips it. The +2 XP award stays.

**How**: In `src/hooks/useXP.ts` line 82, change the reason to `""`. Then in `src/components/gamification/XPToast.tsx`, add a guard: only show the toast when `gain.reason` is non-empty (line 11: `if (gain.amount > 0 && gain.reason)`).

**Files**: `src/hooks/useXP.ts`, `src/components/gamification/XPToast.tsx`

---

## 2. Gate the Last Section Behind Prior Knowledge Checks

**What**: The last section in every module is a "Knowledge Check" (the title always contains "Knowledge Check" and it is always the final section). Hide it until all quiz questions in ALL prior sections are answered 100% correctly.

**How**: In both `TopicDetail.tsx` and `SubsectionDetail.tsx`, compute a boolean `allPriorQuizzesPerfect`:

```
const allPriorQuizzesPerfect = useMemo(() => {
  if (!sections || sections.length < 2) return true;
  const priorSections = sections.slice(0, -1);
  for (const s of priorSections) {
    const quizIds = sectionQuizMap.get(s.id) || [];
    const correctSet = sectionCorrect.get(s.id);
    if (quizIds.length > 0 && (!correctSet || correctSet.size < quizIds.length)) {
      return false;
    }
  }
  return true;
}, [sections, sectionQuizMap, sectionCorrect]);
```

Then in the sections `.map()`, for the last section (index === sections.length - 1), conditionally render:

- If `!allPriorQuizzesPerfect`: show a locked placeholder card (amber border, lock icon, "Complete all knowledge checks above to unlock the final quiz")
- If unlocked: render the normal `TopicSection`

**Files**: `src/pages/TopicDetail.tsx`, `src/pages/SubsectionDetail.tsx`

---

## 3. "Done with Module" Button After Last Knowledge Check

**What**: After the last section is unlocked AND all its quizzes are answered 100% correctly, show a prominent "Done with Module" button below the last section.

**How**: Compute `lastSectionPerfect` -- check if the last section's quiz IDs are all in `sectionCorrect`. When both `allPriorQuizzesPerfect` and `lastSectionPerfect` are true, and `topicBonusAwarded` is false, render:

```
<Button variant="duo" size="lg" className="w-full" onClick={handleModuleComplete}>
  Done with Module
</Button>
```

The button is amber-styled (variant="duo" already uses the brand green -- may need a new `variant="xp"` or inline amber styling: `bg-xp text-xp-foreground hover:bg-xp/90`).

**Files**: `src/pages/TopicDetail.tsx`, `src/pages/SubsectionDetail.tsx`

---

## 4. Module Completion Ceremony (on button click)

**What**: Clicking "Done with Module" triggers a multi-step celebration sequence:

1. **+5 XP** awarded immediately (module completion tap reward)
2. **Full-screen overlay** appears with a large `TopicProgressRing` (size 160) that animates from current progress to 100% over ~2 seconds (suspenseful fill)
3. After ring hits 100%: **confetti burst** (big intensity) + congratulations message ("Module complete -- incredible work!") fades in
4. **Achievement badge** ("topic-mastered") appears with scale-in animation
5. After 1s pause: **+150 XP slam** animation fires (existing `XPSlam` component) -- bounces from center toward top-right global XP counter
6. After slam completes (~1s): overlay fades out, `topicBonusAwarded` is set to true

**How**: Create a new component `ModuleCompletionCeremony`:

```typescript
interface ModuleCompletionCeremonyProps {
  trigger: boolean;
  onComplete: () => void;
}
```

Internal state machine with phases: `idle` -> `ring-fill` -> `celebrate` -> `slam` -> `done`

- `ring-fill` (0-2s): Render full-screen backdrop with centered ring, animate progress from current to 100 using `requestAnimationFrame` or CSS transition
- `celebrate` (2-3.5s): Show confetti + congrats text + badge with fade-in
- `slam` (3.5-4.5s): Trigger `XPSlam` component
- `done` (4.5s): Call `onComplete()`, unmount

The ring animation uses a state variable that increments from `currentProgress` to 100 over 2 seconds via `useEffect` + `setInterval(16ms)`.

**File**: New `src/components/gamification/ModuleCompletionCeremony.tsx`

---

## 5. Wire It All Together

In `TopicDetail.tsx` and `SubsectionDetail.tsx`:

```typescript
const [showCeremony, setShowCeremony] = useState(false);

const handleModuleComplete = useCallback(() => {
  addXP(5, "Module completed!");
  setShowCeremony(true);
}, [addXP]);

const handleCeremonyComplete = useCallback(() => {
  addXP(150, "Topic mastered — +150 XP unlocked!");
  setTopicBonusAwarded(true);
  setShowCeremony(false);
}, [addXP]);
```

Remove the existing auto-trigger `useEffect` for topicBonusAwarded (the one that checks `allQuizAnswers.size >= totalQuizCount && accuracy > 80`). The bonus is now only awarded through the ceremony flow.

Render:

```
<ModuleCompletionCeremony trigger={showCeremony} onComplete={handleCeremonyComplete} />
```

**Files**: `src/pages/TopicDetail.tsx`, `src/pages/SubsectionDetail.tsx`

---

## Files Summary


| File                                                       | Changes                                                                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `src/hooks/useXP.ts`                                       | Change flashcard reason to "" (silent)                                                    |
| `src/components/gamification/XPToast.tsx`                  | Skip toast when reason is empty                                                           |
| `src/pages/TopicDetail.tsx`                                | Gate last section, add "Done with Module" button, wire ceremony, remove auto-bonus effect |
| `src/pages/SubsectionDetail.tsx`                           | Same gating + button + ceremony wiring                                                    |
| `src/components/gamification/ModuleCompletionCeremony.tsx` | New -- full-screen ceremony overlay with phased animations                                |


---

## Technical Details

### Gated section locked placeholder

```text
<section className="mb-6 rounded-2xl border-2 border-dashed border-xp/30 bg-xp/5 p-8 text-center">
  <Lock className="h-8 w-8 text-xp/50 mx-auto mb-3" />
  <p className="font-bold text-foreground mb-1">Final Knowledge Check</p>
  <p className="text-sm text-muted-foreground">
    Answer all section quizzes correctly to unlock
  </p>
</section>
```

### ModuleCompletionCeremony animation phases

```text
Phase timeline:
0ms      -> ring-fill starts (progress animates currentProg -> 100)
2000ms   -> confetti + "Module complete!" + badge fade in
3500ms   -> XPSlam fires (+150 XP)
4500ms   -> overlay fades out, onComplete() called
```

The ring fill uses:

```typescript
useEffect(() => {
  if (phase !== 'ring-fill') return;
  const start = Date.now();
  const duration = 2000;
  const startProg = initialProgress;
  const interval = setInterval(() => {
    const elapsed = Date.now() - start;
    const t = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    setRingProgress(startProg + (100 - startProg) * eased);
    if (t >= 1) {
      clearInterval(interval);
      setPhase('celebrate');
    }
  }, 16);
  return () => clearInterval(interval);
}, [phase]);
```

### Preserving existing completion callouts

The existing completion callout section (lines 360-400 in TopicDetail.tsx) should be simplified: remove the accuracy-based conditional branches and just show the ceremony trigger or post-ceremony badge. After `topicBonusAwarded` is true, show the existing mastery callout with the `AchievementBadge`.