

# Liability-Reducing Qualifiers — Additive-Only Changes

This plan adds confident, authority-reinforcing qualifiers and attributions throughout the Respiratory Emergencies content and shared UI components. No content is rewritten, no tone is shifted, and no "AI-assisted" language is introduced.

---

## Strategy Overview

There are three categories of changes:

1. **Component-level qualifiers** — small, positive text additions to `DisclaimerBanner`, `QuizBlock`, and `Footer`
2. **Content-level attributions** — inline source nods in `subtopicContent.ts` for mnemonics and clinical values
3. **Quiz explanation qualifiers** — short "confirm with your protocol" taglines appended to quiz explanations that reference specific dosages or interventions

---

## 1. DisclaimerBanner — Strengthen with Positive Framing

**File:** `src/components/topics/DisclaimerBanner.tsx`

- **Top variant:** Change subtitle from the current passive phrasing to:
  *"Built to align with current NREMT and prehospital standards. For the best results, cross-reference with your local protocols and instructor guidance."*
- **Bottom variant:** Append:
  *"Pair this with hands-on practice and your certification course for peak performance."*
- No icon, color, or layout changes.

## 2. Footer Disclaimer — Add Protocol-Positive Line

**File:** `src/components/Footer.tsx`

- After "Always verify with reliable sources and follow your local protocols," append:
  *"Content reflects widely accepted prehospital education standards as of 2024."*
- This anchors the content to a time reference without claiming official endorsement.

## 3. QuizBlock — Add Self-Assessment Qualifier

**File:** `src/components/topics/QuizBlock.tsx`

- Below the "Knowledge Check" label (line 68), add a single line of small muted text:
  *"Self-assessment — confirm clinical decisions with your local protocols"*
- This appears on every quiz without disrupting the gamified UI.

## 4. LEMON Mnemonic Attribution

**File:** `src/data/subtopicContent.ts`

- In every instance where the LEMON mnemonic is introduced (approximately 3 locations), append to the paragraph or bullet intro:
  *"(adapted from Walls & Murphy, Manual of Emergency Airway Management)"*
- This is a brief inline attribution, not a footnote or citation block.

## 5. Dosage & Intervention Quiz Explanation Taglines

**File:** `src/data/subtopicContent.ts`

- For quiz explanations that reference specific drug doses (e.g., Albuterol 2.5mg, Epinephrine 1:1,000), ventilator settings (Vt 6-8 mL/kg, PEEP), or intervention thresholds (pH > 7.20), append to the explanation string:
  *"Verify dosing and parameters per your agency's standing orders."*
- This applies to roughly 10-15 quiz explanations across the three Respiratory modules. Each gets the same short tagline appended to the existing `explanation` field.

---

## Technical Summary

| File | Change Type | Scope |
|---|---|---|
| `DisclaimerBanner.tsx` | Edit 2 text strings | Lines 14-16, 25 |
| `Footer.tsx` | Append 1 sentence | Line 14 |
| `QuizBlock.tsx` | Add 1 small text element | After line 68 |
| `subtopicContent.ts` | Append attribution (~3 spots) | LEMON mnemonic intros |
| `subtopicContent.ts` | Append tagline (~10-15 spots) | Quiz explanations with dosages/interventions |

No structural, layout, or tonal changes. All additions are additive qualifiers using confident, positive phrasing.

