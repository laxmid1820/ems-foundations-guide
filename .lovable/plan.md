

# Script to Fix All Flashcard IDs in subtopicContent.ts

## Approach

A Node.js script that reads `subtopicContent.ts` as raw text and uses a two-pass regex strategy to find every flashcard block, determine its parent section ID, and rewrite the card `id` fields in place.

## Why a text-based approach (not import)

The file uses TypeScript types (`TopicSection[]`) and path aliases (`@/data/topics`), so it can't be directly `require()`d by Node. A regex-based find-and-replace on the raw file text is the safest and simplest approach.

## Script logic

1. Read `src/data/subtopicContent.ts` as a UTF-8 string
2. Build a map of every section's `id` by scanning for the pattern: `{\n    id: "some-section-id",` (top-level section objects)
3. For each `type: "flashcards"` block, walk backwards to find the nearest parent section `id`
4. Within each flashcards array, find every card `id: "..."` and replace it with `{sectionId}-card-{index}`
5. Skip cards already matching `{sectionId}-card-\d+`
6. Write the result to `src/data/subtopicContent.fixed.ts` for review (not overwriting the original)
7. Print a summary: how many blocks processed, how many IDs renamed, how many skipped

## The script file

Create: `scripts/fix-flashcard-ids.mjs` (ES module, runs with `node scripts/fix-flashcard-ids.mjs`)

```javascript
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/data/subtopicContent.ts');
let src = readFileSync(filePath, 'utf-8');

let totalRenamed = 0;
let totalSkipped = 0;
let blocksProcessed = 0;

// Match each flashcards block with its flashcards array content
// Strategy: find `type: "flashcards"` then capture the flashcards array
const flashcardsBlockRe = /type:\s*"flashcards",\s*\n\s*flashcards:\s*\[([\s\S]*?)\]\s*\n\s*\}/g;

let match;
while ((match = flashcardsBlockRe.exec(src)) !== null) {
  const blockStart = match.index;
  
  // Walk backwards from blockStart to find the parent section id
  const preceding = src.slice(0, blockStart);
  const sectionIdMatch = preceding.match(/id:\s*"([^"]+)"[^]*$/);
  
  // Find the nearest section-level id (indented at 4 spaces, top-level in array)
  const allSectionIds = [...preceding.matchAll(/^\s{4}id:\s*"([^"]+)"/gm)];
  const parentSectionId = allSectionIds.length > 0 
    ? allSectionIds[allSectionIds.length - 1][1] 
    : null;
  
  if (!parentSectionId) continue;
  
  blocksProcessed++;
  
  // Find all card ids within this flashcards array
  const arrayContent = match[1];
  let cardIndex = 0;
  const fixedArray = arrayContent.replace(/id:\s*"([^"]+)"/g, (idMatch, oldId) => {
    const correctId = `${parentSectionId}-card-${cardIndex}`;
    cardIndex++;
    if (oldId === correctId) {
      totalSkipped++;
      return idMatch;
    }
    totalRenamed++;
    return `id: "${correctId}"`;
  });
  
  // Replace the array content in the source
  src = src.slice(0, match.index + match[0].indexOf(arrayContent)) 
      + fixedArray 
      + src.slice(match.index + match[0].indexOf(arrayContent) + arrayContent.length);
}

// Write to .fixed.ts for review
const outPath = resolve('src/data/subtopicContent.fixed.ts');
writeFileSync(outPath, src, 'utf-8');

console.log(`Done!`);
console.log(`Blocks processed: ${blocksProcessed}`);
console.log(`IDs renamed: ${totalRenamed}`);  
console.log(`IDs already correct (skipped): ${totalSkipped}`);
console.log(`Output: ${outPath}`);
console.log(`\nReview the .fixed.ts file, then rename it to replace the original.`);
```

## How to apply safely

1. Run: `node scripts/fix-flashcard-ids.mjs`
2. Review `src/data/subtopicContent.fixed.ts` -- diff it against the original
3. Verify no content (text, questions, answers) was changed -- only `id: "..."` fields inside flashcard objects
4. Replace: `mv src/data/subtopicContent.fixed.ts src/data/subtopicContent.ts`
5. Test in browser: open any topic, flip flashcards, confirm sidebar rings update correctly
6. Delete the script: `rm scripts/fix-flashcard-ids.mjs`

## Files created

| File | Purpose |
|------|---------|
| `scripts/fix-flashcard-ids.mjs` | One-time fix script |

## Files NOT touched

- `TopicDetail.tsx`, `SubsectionDetail.tsx`, `SectionNav.tsx`
- Any hooks, components, or UI files
- No database migrations
- The original `subtopicContent.ts` is not overwritten (script outputs to `.fixed.ts`)

## Edge cases handled

- Cards already matching the correct pattern are skipped (idempotent)
- Multiple flashcard blocks in the same section get independent zero-based indexing per block
- Section IDs at different nesting levels (the script matches 4-space indented `id:` lines, which are the section-level objects in the arrays)

