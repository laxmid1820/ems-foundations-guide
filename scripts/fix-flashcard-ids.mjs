import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/data/subtopicContent.ts');
let src = readFileSync(filePath, 'utf-8');

let totalRenamed = 0;
let totalSkipped = 0;
let blocksProcessed = 0;

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
