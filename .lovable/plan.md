

# Expand Quiz Questions Across All Topics

## Overview
Expand all Knowledge Check sections to 5 quiz questions each, and add 2 quiz questions to every content section that currently has no quiz. This applies to both `src/data/topics.ts` (3 legacy topics) and `src/data/subtopicContent.ts` (the main content file with ~11,000 lines).

---

## Scope Summary

### File 1: `src/data/topics.ts` (3 topics)

**Knowledge Check sections to expand from 3 to 5 questions:**
- Airway Management: `knowledge-check` (3 questions, add 2)
- Cardiac Physiology: `knowledge-check-cardiac` (3 questions, add 2)
- Shock and Perfusion: `knowledge-check-shock` (3 questions, add 2)

**Content sections to add 2 quiz questions each:**
- Airway: `why-airway-first`, `open-vs-closed`, `go-to-techniques`, `airway-tools`, `putting-it-together` (5 sections x 2 = 10 questions)
- Cardiac: `meet-the-heart`, `electrical-system`, `blood-flow`, `what-normal-looks-like`, `common-questions` (5 sections x 2 = 10 questions)
- Shock: `what-is-perfusion`, `understanding-shock`, `four-types`, `recognizing-shock`, `what-you-can-do` (5 sections x 2 = 10 questions)

### File 2: `src/data/subtopicContent.ts` (~25+ modules across all levels)

**Knowledge Check sections to expand to 5 questions:**
Each module's quiz section currently has 2-3 questions. Every one needs to be brought up to 5. This includes all EMT, AEMT, and Paramedic level content across:
- Heart/Cardiac (EMT: 2 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Respiratory (EMT: 2 Qs, AEMT: 3 Qs, Paramedic: 2 Qs)
- Anatomy and Physiology (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Pharmacology (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Respiratory Assessment (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Patient Assessment (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Shock Management (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Pathophysiology (EMT: 3 Qs, AEMT: 3 Qs, Paramedic: 3 Qs)
- Airway Management (AEMT: 3 Qs, Paramedic: 3 Qs)
- Comparison modules (PE vs Pneumonia vs Effusion: EMT 3 Qs, AEMT 3 Qs, Paramedic 3 Qs)

**Content sections to add 2 quiz questions each:**
Every non-quiz section across all modules that covers testable knowledge will get a 2-question quiz block appended to its `blocks` array. This covers dozens of sections spanning all topic areas.

---

## Implementation Approach

Due to the massive volume of content (~200+ new quiz questions), this will be implemented in batches:

**Batch 1:** `topics.ts` -- expand 3 Knowledge Checks to 5 Qs each, add 2 Qs to all 15 content sections (36 new questions)

**Batch 2:** `subtopicContent.ts` EMT-level modules -- expand all Knowledge Checks to 5 Qs, add 2 Qs per content section

**Batch 3:** `subtopicContent.ts` AEMT-level modules -- same treatment

**Batch 4:** `subtopicContent.ts` Paramedic-level modules -- same treatment

**Batch 5:** `subtopicContent.ts` Comparison modules and any remaining content

---

## Quiz Question Guidelines

All new questions will:
- Be medically accurate and appropriate to the certification level
- Use 4 answer options with one correct answer
- Include a clear explanation for the correct answer
- Have unique IDs following existing naming patterns (e.g., `airway-q4`, `emt-heart-q3`)
- Test recall, application, or clinical reasoning depending on level
- Avoid trick questions -- focus on reinforcing key concepts

---

## Technical Notes

- No schema or structural changes needed -- quiz blocks already support multiple questions per section
- Sections without a `blocks` array will get one created with the quiz entries
- All quiz IDs must be unique across the entire application
- The `getTopicInteractiveCount` helper automatically counts quizzes, so progress tracking will update automatically
- The existing `QuizBlock` component renders one question at a time and already handles any number of quiz blocks per section

