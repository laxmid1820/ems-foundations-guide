

# NREMT Prep Quiz Section

## Overview

Replace the current "Coming Soon" Quizzes page with a full NREMT-style practice quiz experience. Users pick a certification level (EMT / AEMT / Paramedic), then take randomized quizzes drawn from a question bank stored in the database. The UI keeps the Duolingo-inspired feel with progress bars, XP rewards, confetti, and streak tracking.

---

## Architecture

The question bank lives in a new `quiz_questions` database table (not hardcoded). An edge function powered by Lovable AI generates the initial 500 questions per level (1,500 total) in batches. Quiz attempts and per-question results are tracked in two additional tables so users see their domain-level strengths/weaknesses.

```text
+------------------+       +-------------------+       +------------------+
| quiz_questions   |       | quiz_attempts     |       | quiz_responses   |
|------------------|       |-------------------|       |------------------|
| id (uuid)        |<------| id (uuid)         |<------| id (uuid)        |
| level (text)     |       | user_id (uuid)    |       | attempt_id (uuid)|
| domain (text)    |       | level (text)      |       | question_id(uuid)|
| question_type    |       | score (int)       |       | selected_answer  |
| question_text    |       | total (int)       |       | is_correct (bool)|
| options (jsonb)  |       | xp_earned (int)   |       | created_at       |
| correct_answer   |       | started_at        |       +------------------+
| explanation      |       | completed_at      |
| nremt_domain     |       +-------------------+
| difficulty (1-3) |
| tags (text[])    |
| created_at       |
+------------------+
```

## Implementation Steps

### 1. Database Migration

Create three new tables with RLS policies:

- **quiz_questions** -- stores the question bank (public read, admin-only write)
- **quiz_attempts** -- one row per quiz session (user can only see their own)
- **quiz_responses** -- per-question answers within an attempt (user can only see their own)

RLS: Authenticated users can SELECT from `quiz_questions`. Users can INSERT/SELECT their own rows in `quiz_attempts` and `quiz_responses`.

### 2. Edge Function: `generate-quiz-questions`

A backend function that calls Lovable AI (google/gemini-3-flash-preview) with a structured tool-call prompt to generate batches of 25 questions at a time. It writes directly to the `quiz_questions` table using the service role key.

**Guardrails baked into the system prompt:**

- "You are an EMS education content specialist. Generate NREMT-style practice questions aligned to the current National EMS Education Standards."
- "Do NOT reproduce verbatim questions from any published NREMT exam, textbook test bank, or copyrighted source."
- "Each question must include a detailed explanation referencing the clinical reasoning, not just the correct answer."
- "For drug dosages or clinical thresholds, append: 'Verify with your agency protocols.'"
- "Tag each question with its NREMT domain (Airway/Respiration/Ventilation, Cardiology/Resuscitation, Trauma, Medical/OB-GYN, EMS Operations)."
- "Question types: multiple-choice (4 options), multiple-response (select-all-that-apply), and technology-enhanced items (ordered-response/drag-drop described as numbered ranking)."
- "Difficulty: 1 (recall), 2 (application), 3 (analysis)."
- "Never include: 'AI-generated', 'created by AI', or similar disclosures."

This function is called manually (or via an admin button) to seed/expand the bank. It is NOT exposed to end users.

### 3. Edge Function: `get-quiz`

A lightweight function that:
- Accepts `level` (emt/aemt/paramedic) and optional `domain` filter
- Randomly selects 20 questions from the bank using `ORDER BY random() LIMIT 20`
- Returns them to the client (without `correct_answer` -- answers are validated server-side)

### 4. Edge Function: `submit-quiz`

Accepts the user's answers, validates against the database, calculates score, awards XP, and writes to `quiz_attempts` + `quiz_responses`. Returns results with explanations.

### 5. New Page: `/quizzes` (Replace Current Placeholder)

**Level Selection Screen:**
- Three large cards (EMT / AEMT / Paramedic) styled like the existing `CategoryCard`
- Each shows: total questions available, user's average score, domain breakdown progress ring
- Disclaimer banner at top: "Practice only -- verify with nremt.org and your certification program."

**Quiz Session Screen:**
- One question at a time (swipe/next button)
- Progress bar at top showing question X of 20
- Radio buttons for MC, checkboxes for multiple-response, numbered drag for ordered-response
- "Check Answer" duo button awards XP with confetti on correct
- After all 20: results summary with domain breakdown, total XP earned, and "Try Again" button

**Quiz History (Dashboard integration):**
- Add a "Recent Quizzes" card to the existing Dashboard page
- Shows last 5 attempts with score, level, and date

### 6. Navigation

The existing `/quizzes` route and Navbar link already exist -- just replace the placeholder page content.

### 7. Disclaimers (Integrated, No "AI-Assisted" Language)

- **Quiz page header:** "NREMT-style practice questions aligned with current National EMS Education Standards. For self-assessment only -- confirm your knowledge with nremt.org and your certification program."
- **Per-question footer (in QuizBlock):** Already has "Self-assessment -- confirm clinical decisions with your local protocols" from the previous update.
- **Results screen:** "Your score reflects practice performance only. Official NREMT certification requires approved coursework and proctored examination."
- **Footer:** Already updated with "Content reflects widely accepted prehospital education standards as of 2024."

### 8. XP and Streak Integration

- Reuse the existing `useXP` hook: +10 XP per correct answer (first attempt), +5 on retry
- Reuse `useStreak` hook: quiz completion counts as daily activity
- XP floater animation on each correct answer (existing `XPFloater` component)

---

## Technical Details

### Question Type Schema (JSONB `options` field)

```text
MC:       { "type": "mc", "choices": ["A", "B", "C", "D"] }
Multi:    { "type": "multi", "choices": ["A", "B", "C", "D", "E"], "correctCount": 2 }
Ordered:  { "type": "ordered", "items": ["Step 1", "Step 2", "Step 3", "Step 4"] }
```

### NREMT Domains (tags)

- Airway, Respiration, and Ventilation
- Cardiology and Resuscitation
- Trauma
- Medical / Obstetrics and Gynecology
- EMS Operations

### New Files Created

| File | Purpose |
|---|---|
| `src/pages/Quizzes.tsx` | Rewritten: level select + quiz session + results |
| `src/components/quiz/QuizLevelCard.tsx` | Level selection card |
| `src/components/quiz/QuizSession.tsx` | Active quiz UI (one question at a time) |
| `src/components/quiz/QuizResults.tsx` | Score summary + domain breakdown |
| `src/components/quiz/QuizQuestionCard.tsx` | Single question renderer (MC/multi/ordered) |
| `src/hooks/useQuiz.ts` | Quiz state management + API calls |
| `supabase/functions/get-quiz/index.ts` | Fetch random questions |
| `supabase/functions/submit-quiz/index.ts` | Validate + score + persist |
| `supabase/functions/generate-quiz-questions/index.ts` | AI question generation (admin) |

### Database Migration

- 3 new tables with RLS
- No changes to existing `profiles` table

### Sequencing

1. Database migration (3 tables)
2. Edge functions (generate, get-quiz, submit-quiz)
3. Frontend components and hooks
4. Seed initial question batch (call generate function)
5. Test end-to-end flow

