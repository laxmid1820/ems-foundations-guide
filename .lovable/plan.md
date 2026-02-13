

# UX Enhancements for Quiz Configuration

Three small additions to the Quiz Config Panel (from the approved plan), all positive and encouraging in tone.

## 1. Dynamic Mock Count Display

After the user selects "Full Mock," the pill button updates to show the randomized count:

**Full Mock (87)**

This count is computed immediately on selection using the existing `getMockCount()` logic and displayed in parentheses on the pill itself.

## 2. Bank Size Fallback Note

When Full Mock is selected, if the question bank for that level has fewer questions than the minimum mock range (EMT: 70, AEMT: 135, Paramedic: 110), show a friendly note below the pills:

> "You'll get every question we have -- great for a full review!"

To determine this, `get-quiz` already returns however many questions are available. The client computes the mock count, passes it as `limit`, and if the returned question count is less than requested, the note appears on the session screen header. Alternatively, a lightweight count query can be done at configure time.

**Recommended approach:** When entering the configure phase, run a quick count query against `quiz_questions` for the selected level. Store it in `useQuiz` state as `bankSize`. Then in `QuizConfigPanel`:

- If `bankSize < mockCount`, show the note
- The pill still shows the target count but with the note clarifying the actual availability

## 3. Tooltip on Immediate-Answers Toggle

Wrap the toggle label or an info icon next to it with the existing `Tooltip` component from `@/components/ui/tooltip`:

> "See explanations instantly to reinforce learning -- turn off for timed simulation."

Uses the existing `Tooltip`, `TooltipTrigger`, `TooltipContent`, and `TooltipProvider` components already in the project.

## Technical Details

### Files affected (all within the upcoming implementation)

| File | Change |
|---|---|
| `src/hooks/useQuiz.ts` | Add `bankSize` state; fetch count when entering configure phase |
| `src/components/quiz/QuizConfigPanel.tsx` | (1) Show computed mock count on pill, (2) conditionally render bank-size note, (3) add Tooltip to toggle |

### `useQuiz.ts` additions

- New state: `bankSize: number | null`
- In `configureQuiz(level)`: query `select count from quiz_questions where level = $level` via Supabase client, store result in `bankSize`
- Expose `bankSize` from the hook

### `QuizConfigPanel.tsx` additions

**Mock count on pill:**
```text
quizLength === "mock"
  ? `Full Mock (${mockCount})`
  : "Full Mock"
```
Where `mockCount` is computed once on selection and held in local state.

**Bank size note (conditionally rendered):**
```text
{quizLength === "mock" && bankSize !== null && bankSize < mockCount && (
  <p className="text-sm text-muted-foreground ...">
    You'll get every question we have -- great for a full review!
  </p>
)}
```

**Tooltip on toggle:**
```text
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
    </TooltipTrigger>
    <TooltipContent>
      See explanations instantly to reinforce learning --
      turn off for timed simulation.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Sequencing

These are incorporated directly into the implementation of `QuizConfigPanel.tsx` and `useQuiz.ts` from the main plan -- no separate steps needed. They will be built as part of steps 2 and 3 of the existing plan sequence.

