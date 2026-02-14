import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/data/subtopicContent.ts');
let src = readFileSync(filePath, 'utf-8');

let totalRenamed = 0;
let totalAdded = 0;
let totalSkipped = 0;
let blocksProcessed = 0;
const examples = [];

// Match each flashcards block with its flashcards array content
const flashcardsBlockRe = /type:\s*"flashcards",\s*\n\s*flashcards:\s*\[([\s\S]*?)\]\s*\n\s*\}/g;

let match;
while ((match = flashcardsBlockRe.exec(src)) !== null) {
  const blockStart = match.index;

  // Walk backwards from blockStart to find the parent section id
  const preceding = src.slice(0, blockStart);

  // Find the nearest section-level id (indented at 4 spaces, top-level in array)
  const allSectionIds = [...preceding.matchAll(/^\s{4}id:\s*"([^"]+)"/gm)];
  const parentSectionId = allSectionIds.length > 0
    ? allSectionIds[allSectionIds.length - 1][1]
    : null;

  if (!parentSectionId) continue;

  blocksProcessed++;

  const arrayContent = match[1];
  let cardIndex = 0;

  // First, handle cards that HAVE id fields
  let fixedArray = arrayContent.replace(/id:\s*"([^"]+)"/g, (idMatch, oldId) => {
    const correctId = `${parentSectionId}-card-${cardIndex}`;
    cardIndex++;
    if (oldId === correctId) {
      totalSkipped++;
      return idMatch;
    }
    if (examples.length < 3) {
      examples.push({ section: parentSectionId, oldId, newId: correctId });
    }
    totalRenamed++;
    return `id: "${correctId}"`;
  });

  // Second, handle cards MISSING id fields entirely
  // Reset cardIndex and count existing ids to see if we need to add any
  const existingIds = [...fixedArray.matchAll(/id:\s*"/g)].length;
  const cardObjects = [...fixedArray.matchAll(/\{\s*\n/g)].length;

  if (cardObjects > existingIds) {
    // Some cards are missing ids — re-process the entire array
    let addCardIndex = 0;
    fixedArray = fixedArray.replace(/\{\s*\n(\s*)(id:\s*"[^"]+",\s*\n\s*)?front:/g, (m, indent, existingId) => {
      const correctId = `${parentSectionId}-card-${addCardIndex}`;
      addCardIndex++;
      if (existingId) {
        // Already has an id (already fixed above), keep it
        return m;
      }
      // Missing id — add it
      totalAdded++;
      if (examples.length < 3) {
        examples.push({ section: parentSectionId, oldId: '(missing)', newId: correctId });
      }
      return `{\n${indent}id: "${correctId}",\n${indent}front:`;
    });
  }

  // Replace the array content in the source
  src = src.slice(0, match.index + match[0].indexOf(arrayContent))
      + fixedArray
      + src.slice(match.index + match[0].indexOf(arrayContent) + arrayContent.length);
}

// Write to .id-fixed.ts for review
const outPath = resolve('src/data/subtopicContent.id-fixed.ts');
writeFileSync(outPath, src, 'utf-8');

console.log(`\n✅ Done!\n`);
console.log(`Blocks processed: ${blocksProcessed}`);
console.log(`IDs renamed:      ${totalRenamed}`);
console.log(`IDs added:        ${totalAdded}`);
console.log(`IDs skipped:      ${totalSkipped} (already correct)`);
console.log(`\nExamples:`);
examples.forEach(e => {
  console.log(`  Section: ${e.section}`);
  console.log(`    ${e.oldId} → ${e.newId}`);
});
console.log(`\nOutput: ${outPath}`);
console.log(`Backup: src/data/subtopicContent.backup-before-id-fix.ts`);
console.log(`\nTo review: diff src/data/subtopicContent.ts src/data/subtopicContent.id-fixed.ts`);
console.log(`To apply:  cp src/data/subtopicContent.id-fixed.ts src/data/subtopicContent.ts`);
