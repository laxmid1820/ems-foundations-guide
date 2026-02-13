Before implementing, add a motivational retake CTA in the topic completion callout when accuracy is 70–79%: "You're at X% — retake missed questions to unlock the +150 XP mastery bonus!" with a "Review Missed" duo-button that jumps to the first incorrect quiz/section.  
  
Section Mastery XP + Jump-To Navigation

## Overview

Replace the current "XP on scroll" model with a mastery-based reward system: sections award +15 XP only when all embedded quiz questions are answered correctly (100%), and completing an entire topic with >80% quiz accuracy awards a +150 XP bonus. Add a persistent left-side jump-to-section sidebar that shows per-section XP status and updates live.

---

## 1. Mastery-Based Section XP (+15 XP)

### Current behavior

- +5 XP is awarded the moment a section scrolls into view (IntersectionObserver).
- Quiz answers award +10/+5 XP independently.

### New behavior

- **Remove** automatic +5 XP on section view. Sections are still tracked as "viewed" for progress rings, but no XP fires on scroll.
- Each section earns **+15 XP** when ALL quiz questions within that section are answered correctly (100%).
- Sections with no quiz blocks are marked "mastered" automatically once viewed (still +15 XP on view, since there's nothing to test).
- Toast: "Congrats -- mastered the section! +15 XP"
- Retakes are allowed: if a user retries a quiz and gets it right, the section mastery still counts (but only awards once).

### Implementation

- Add a new `useXP` helper: `gainSectionMasteryXP()` that calls `addXP(15, "Congrats -- mastered the section!")`.
- In `TopicDetail` and `SubsectionDetail`, track per-section quiz correctness:
  - New state: `sectionQuizResults: Map<sectionId, { total: number, correct: Set<questionId> }>`.
  - When `onQuizAnswer` fires with `correct: true`, update the map. If `correct.size === total` for that section, call `gainSectionMasteryXP()` and add section to `masteredSections` Set.
- The IntersectionObserver still marks sections as "viewed" for progress tracking, but only awards XP for quiz-free sections.
- Individual quiz answer XP (+10/+5) is kept as-is for immediate gratification.

---

## 2. Topic Completion Bonus (+150 XP at >80%)

### New behavior

- When all sections are viewed and all quizzes attempted, calculate overall accuracy: `totalCorrect / totalQuizzes`.
- If accuracy > 80%, award **+150 XP** with toast: "Topic mastered at {accuracy}% -- +150 XP unlocked!"
- If accuracy is 80% or below, show an encouraging callout: "You're at {accuracy}% -- retake missed questions to earn the +150 XP bonus!"
- The bonus is awarded once per topic per session (tracked in a `topicBonusAwarded` boolean).

### Implementation

- In `TopicDetail` / `SubsectionDetail`, add a `useEffect` that watches `quizzesPassed.size` vs total quizzes.
- When all quizzes are attempted and accuracy > 80%:
  - Call `addXP(150,` Topic mastered at ${accuracy}% -- +150 XP unlocked!`)`.
  - Set `topicBonusAwarded = true` to prevent double award.
- Update the completion callout section to show accuracy percentage and bonus status.

---

## 3. Left-Side Jump-To-Section Navigation

### New component: `SectionNav`

A fixed/sticky sidebar on the left that lists all sections in the current topic with live XP status.

### Design

- Positioned `fixed left-0 top-[4rem]` (below navbar), width ~220px.
- Only visible on desktop (hidden below `lg` breakpoint via `hidden lg:block`).
- Each item shows:
  - Section number + truncated title.
  - XP badge: gray "0 XP" by default, amber "15 XP" with checkmark when mastered.
  - Active section highlighted with amber left border (tracked via IntersectionObserver).
- Clicking a section smoothly scrolls to it (`scrollIntoView({ behavior: 'smooth' })`).
- On mobile, collapses to a small floating button that opens a sheet/drawer with the section list.

### Layout changes

- `TopicDetail` and `SubsectionDetail` page layouts shift from `max-w-3xl` centered to a two-column layout on desktop: `lg:pl-[240px]` for content, with `SectionNav` fixed on the left.
- Content column stays centered and readable on mobile (no change).

### Live updates

- `SectionNav` receives `masteredSections: Set<string>` and `activeSectionId: string` as props.
- `activeSectionId` is tracked by the existing IntersectionObserver (whichever section is most recently intersecting).
- When a section is mastered, the nav item transitions from gray to amber with a subtle scale animation.

---

## Files to Create


| File                                   | Purpose                                                  |
| -------------------------------------- | -------------------------------------------------------- |
| `src/components/topics/SectionNav.tsx` | Left-side jump-to-section navigation with live XP badges |


## Files to Modify


| File                                     | Change                                                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/hooks/useXP.ts`                     | Add `gainSectionMasteryXP()` helper (+15 XP with mastery message)                                                                                         |
| `src/pages/TopicDetail.tsx`              | Replace scroll-XP with mastery tracking; add per-section quiz result map; render `SectionNav`; two-column layout on desktop; topic completion bonus logic |
| `src/pages/SubsectionDetail.tsx`         | Same mastery tracking and `SectionNav` integration                                                                                                        |
| `src/components/topics/TopicSection.tsx` | Pass section quiz count down so parent can track per-section totals                                                                                       |
| `src/components/topics/QuizBlock.tsx`    | Ensure `onAnswer` always fires (not just on correct) so parent can track attempts                                                                         |


---

## Technical Details

### Per-section quiz tracking

```text
State shape:
  sectionQuizMap: Map<sectionId, { total: number, correct: Set<questionId> }>
  masteredSections: Set<sectionId>

On mount: build sectionQuizMap from topic.sections by counting quiz blocks per section.
On quiz answer (correct): add questionId to correct Set. If correct.size === total, fire gainSectionMasteryXP().
On quiz answer (incorrect): track attempt but don't add to correct Set.
Sections with 0 quizzes: auto-master on IntersectionObserver view.
```

### SectionNav component

```text
Props:
  sections: { id: string; title: string }[]
  masteredSections: Set<string>
  activeSectionId: string | null

Renders:
  <nav className="fixed left-0 top-16 w-56 h-[calc(100vh-4rem)] overflow-y-auto hidden lg:block border-r border-border bg-background/95 backdrop-blur-sm p-4">
    {sections.map(s => (
      <button onClick={() => scrollTo(s.id)} className={active ? "border-l-2 border-xp" : ""}>
        <span>{s.title}</span>
        <Badge>{mastered ? "15 XP" : "0 XP"}</Badge>
      </button>
    ))}
  </nav>
```

### Topic completion bonus

```text
useEffect:
  if all quizzes attempted AND !topicBonusAwarded:
    accuracy = correctCount / totalQuizCount * 100
    if accuracy > 80:
      addXP(150, `Topic mastered at ${Math.round(accuracy)}% -- +150 XP unlocked!`)
      setTopicBonusAwarded(true)
```

### Guardrails

- Section mastery XP (+15) only fires once per section per session (tracked in `masteredSections` Set).
- Topic bonus (+150) only fires once per topic per session (boolean flag).
- Individual quiz XP (+10/+5) continues to fire independently for immediate feedback.
- All XP gains go through `useXP.addXP` which handles dedup, DB persistence, global event dispatch, and streak recording.
- `SectionNav` is purely presentational -- no XP logic inside it, just reads state from parent.
- Mobile users get the same mastery rewards without the sidebar (section nav hidden on small screens).
- Progress rings continue using the existing weighted formula; mastery status feeds into the "quizzes correct" count.