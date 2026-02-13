Before implementing, update the locked placeholder text to: "Complete all prior knowledge checks 100% to unlock the final Knowledge Check section!" for clearer guidance.  
  
Fix: Gated Knowledge Check and "Done with Module" Button

## Root Cause

The gating logic currently assumes the **last section** in the content array is the Knowledge Check. In reality, many modules have a **"wrap-up" section after the Knowledge Check** (e.g., `emtAnatomyPhysiologyContent` ends with id `"wrap-up"` which has zero quizzes). This means:

- `lastSectionPerfect` always returns `false` (wrap-up has no quizzes)
- The "Done with Module" button can **never appear**
- The locked placeholder gates the wrong section

## The Fix

Instead of using array position (`sections.length - 1`), find the Knowledge Check section by matching its **id or title**. The pattern across all content is: section id contains `"knowledge-check"` or `"quiz"`, and/or title contains `"Knowledge Check"`.

## Changes Required

### 1. Both `TopicDetail.tsx` and `SubsectionDetail.tsx` -- Find Knowledge Check by pattern

Add a `useMemo` to locate the Knowledge Check section index:

```typescript
const knowledgeCheckIndex = useMemo(() => {
  const sections = richSections || topic?.sections;
  if (!sections) return -1;
  return sections.findIndex(
    (s) =>
      s.title.toLowerCase().includes("knowledge check") ||
      s.id.includes("knowledge-check") ||
      s.id.endsWith("-quiz")
  );
}, [richSections, topic]);
```

### 2. Update `allPriorQuizzesPerfect`

Change from `sections.slice(0, -1)` to `sections.slice(0, knowledgeCheckIndex)` -- only check sections **before** the Knowledge Check:

```typescript
const allPriorQuizzesPerfect = useMemo(() => {
  const sections = richSections || topic?.sections;
  if (!sections || knowledgeCheckIndex < 1) return true;
  const priorSections = sections.slice(0, knowledgeCheckIndex);
  for (const s of priorSections) {
    const quizIds = sectionQuizMap.get(s.id) || [];
    const correctSet = sectionCorrect.get(s.id);
    if (quizIds.length > 0 && (!correctSet || correctSet.size < quizIds.length)) {
      return false;
    }
  }
  return true;
}, [sections, knowledgeCheckIndex, sectionQuizMap, sectionCorrect]);
```

### 3. Update `lastSectionPerfect` to check the Knowledge Check section

```typescript
const knowledgeCheckPerfect = useMemo(() => {
  const sections = richSections || topic?.sections;
  if (!sections || knowledgeCheckIndex < 0) return false;
  const kcSection = sections[knowledgeCheckIndex];
  const quizIds = sectionQuizMap.get(kcSection.id) || [];
  if (quizIds.length === 0) return false;
  const correctSet = sectionCorrect.get(kcSection.id);
  return correctSet ? correctSet.size >= quizIds.length : false;
}, [sections, knowledgeCheckIndex, sectionQuizMap, sectionCorrect]);
```

### 4. Update the gating condition in the `.map()` render

Change from:

```typescript
const isLast = index === sections.length - 1;
if (isLast && !allPriorQuizzesPerfect) { ... locked placeholder ... }
```

To:

```typescript
const isKnowledgeCheck = index === knowledgeCheckIndex;
if (isKnowledgeCheck && !allPriorQuizzesPerfect) { ... locked placeholder ... }
```

### 5. Update the "Done with Module" button condition

Change from:

```typescript
{allPriorQuizzesPerfect && lastSectionPerfect && !topicBonusAwarded && ( ... )}
```

To:

```typescript
{allPriorQuizzesPerfect && knowledgeCheckPerfect && !topicBonusAwarded && ( ... )}
```

### 6. Add temporary debug console.logs

Inside `allPriorQuizzesPerfect`:

```typescript
console.log('[GATE DEBUG] priorSections:', priorSections.length,
  'knowledgeCheckIndex:', knowledgeCheckIndex);
priorSections.forEach(s => {
  const qIds = sectionQuizMap.get(s.id) || [];
  const cSet = sectionCorrect.get(s.id);
  console.log(`  section ${s.id}: quizIds=${qIds.length}, correct=${cSet?.size || 0}`);
});
```

Inside `knowledgeCheckPerfect`:

```typescript
console.log('[KC DEBUG] kcSection:', kcSection.id,
  'quizIds:', quizIds.length, 'correct:', correctSet?.size || 0,
  'perfect:', result);
```

## Files Modified


| File                             | Change                                                             |
| -------------------------------- | ------------------------------------------------------------------ |
| `src/pages/TopicDetail.tsx`      | Add `knowledgeCheckIndex`, fix gating/button logic, add debug logs |
| `src/pages/SubsectionDetail.tsx` | Same fixes                                                         |


## Why This Fixes It

- The Knowledge Check is correctly identified regardless of whether a wrap-up section follows it
- `knowledgeCheckPerfect` checks the right section (one with 5 quiz questions, not 0)
- The "Done with Module" button will appear once all 5 Knowledge Check questions are answered correctly
- Debug logs will confirm the exact state at each step