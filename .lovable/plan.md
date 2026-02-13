

# Reusable Agent Prompt: Standardize All Topics to A&P Basics Pattern

## Key Finding

**No component, hook, or page-level changes are needed.** Both `TopicDetail.tsx` and `SubsectionDetail.tsx` are shared pages that already apply the full pattern (XP math, gating, ceremony, sidebar rings, badges, confetti) to every topic via slug routing.

The **only issue** is that many existing content arrays in `subtopicContent.ts` have flashcard IDs that don't follow the `{sectionId}-card-{index}` convention (e.g., `"para-card-1"` instead of `"coronary-anatomy-card-0"`). This breaks flashcard XP attribution to sections, causing sidebar rings to undercount earned XP.

---

## The Agent Prompt (Copy-Paste Ready)

---

**Prompt:**

> **Task: Fix flashcard ID prefixes across ALL topic content arrays in `src/data/subtopicContent.ts`.**
>
> **Context:** The XP system attributes flashcard flips to sections by matching card ID prefixes: `id.startsWith(\`${sectionId}-card-\`)`. Many existing content arrays have flashcard IDs that DON'T follow this convention (e.g., `"aemt-perf-1"`, `"para-card-2"`, `"resp-fc-1"`). This means flashcard XP is not counted toward section progress rings in the sidebar.
>
> **What to do:**
> For every `type: "flashcards"` block in every content array, rename each flashcard's `id` to follow the pattern: `{sectionId}-card-{zeroBasedIndex}`
>
> Example — if a section has `id: "coronary-anatomy"` and contains flashcards:
> - Before: `id: "para-card-1"`, `id: "para-card-2"`, `id: "para-card-3"`
> - After: `id: "coronary-anatomy-card-0"`, `id: "coronary-anatomy-card-1"`, `id: "coronary-anatomy-card-2"`
>
> **Rules:**
> 1. ONLY change flashcard `id` fields. Do NOT change any other content (text, questions, answers, explanations, section IDs, titles, key points, callouts).
> 2. The section ID is the `id` field of the parent section object that contains the flashcard block.
> 3. Index is zero-based within each flashcard block.
> 4. If a section already uses the correct `{sectionId}-card-{index}` pattern, skip it.
> 5. Process ALL content arrays: `emtHeartContent`, `emtRespiratoryContent`, `emtPharmacologyContent`, `emtRespiratoryEmergenciesContent`, `emtPatientAssessmentContent`, `emtShockManagementContent`, `emtPathophysiologyContent`, `emtCopdVsChfContent`, `emtAsthmaAnaphylaxisContent`, `emtPulmonaryEdemaPneumoniaEffusionContent`, `emtAnatomyPhysiologyContent`, and all AEMT (`aemt*Content`) and Paramedic (`paramedic*Content`) arrays.
> 6. Do NOT touch: `TopicDetail.tsx`, `SubsectionDetail.tsx`, `SectionNav.tsx`, `useXP.ts`, `AuthContext.tsx`, `Navbar.tsx`, or any component/hook files.
> 7. Do NOT create database migrations.
> 8. Do NOT delete or rewrite any content — this is a find-and-replace on flashcard IDs only.
>
> **Verification:** After changes, every flashcard `id` in the file should match the regex `^{its-parent-section-id}-card-\d+$`.

---

## Why This Is the Only Change Needed

| Concern | Status |
|---------|--------|
| SectionNav sidebar with rings | Already shared via `SectionNav.tsx` -- works for all topics |
| XP math (quiz +10, retry +5, flashcard +2, mastery +15) | Already fixed in both page files |
| No scroll-based XP | Already removed from both page files |
| Knowledge Check gating | Already implemented in both page files (matches section title/ID) |
| Module Completion Ceremony | Already wired in both page files |
| Badge awarding on ceremony | Already wired in both page files |
| BadgeCounter in Navbar | Already rendered from `profile.badges` |
| Confetti on section mastery | Already in `TopicSection.tsx` |
| Desktop centering layout | Already applied in both page files |

The entire UX pattern is **slug-agnostic**. The only data conformance gap is flashcard ID prefixes.

## Content Arrays to Process

There are ~35 content arrays across EMT, AEMT, and Paramedic levels. Each needs its flashcard IDs audited and renamed. The file is ~14,270 lines, so this should be done in batches (e.g., all EMT arrays first, then AEMT, then Paramedic).
