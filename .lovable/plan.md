Before implementing, add a subtle floating toast notification (amber background, fades out after 2–3 seconds) every time XP is gained, using/extending XPFloater. Examples: "+15 XP — section mastered!", "+150 XP — topic complete! Badge unlocked!". Keep it non-intrusive and encouraging.  
  
Declutter Sections, Relocate Topic Ring, Replace XP Badges with Rings, Add Slam Animation

## Overview

Four focused changes: remove the bottom XP footer from each section card (the sidebar already shows per-section XP), move the large topic XP ring from the page header down to the bottom of the SectionNav sidebar, replace the text XP badges in nav items with small amber progress rings (size 24), and add a "slam" animation that fires on topic mastery (+150 XP) where a badge visually flies toward the global XP counter in the navbar.

---

## 1. Remove Section Footer from TopicSection.tsx

**What**: Delete the entire XP footer block (lines 161-199) -- the `border-t bg-muted/30` bar showing `{earned}/{total} XP`, the mini progress ring, and the checkmark overlay. Keep the `ConfettiEffect` on mastery (line 202) since that fires independently.

**Why**: The SectionNav sidebar already shows per-section XP progress with rings and badges. The footer is redundant visual noise inside each card.

**Props kept**: `sectionXPEarned`, `sectionXPTotal`, `sectionProgress`, `isMastered` remain on the component interface -- they are still passed by parent pages and used for confetti triggering. No parent changes needed.

**File**: `src/components/topics/TopicSection.tsx` -- remove lines 160-199

---

## 2. Move Large Topic XP Ring to Bottom of SectionNav Sidebar

**What**: Remove the `TopicProgressRing` (size 80) from the page header in both `TopicDetail.tsx` and `SubsectionDetail.tsx`, and instead render it at the bottom of the `SectionNav` sidebar.

**How**:

- Add two new props to `SectionNavProps`: `topicXPEarned?: number` and `topicXPTotal?: number`
- In the `SectionNavList` component, after the section list, render a divider + the ring block:
  ```
  {topicXPTotal > 0 && (
    <div className="mt-4 pt-4 border-t border-border flex flex-col items-center gap-1.5">
      <TopicProgressRing size={80} strokeWidth={6} progress={topicProgress} showMessage={false} />
      <span className="text-xs font-bold text-xp">{topicXPEarned}/{topicXPTotal} XP</span>
      <span className="text-xs font-medium text-muted-foreground text-center max-w-[140px]">
        {motivationalLabel}
      </span>
    </div>
  )}
  ```
- Motivational labels (same tiers as before): 0% = "Start earning XP -- every quiz counts!", <50% = "Building strong foundations -- keep going!", <80% = "Halfway there -- mastery is close!", <100% = "Almost mastered -- one more push!", 100% = "Topic complete -- incredible work!"
- In `TopicDetail.tsx` header (lines 307-329): remove the `hidden sm:flex` div containing the ring, keep the icon + title block unchanged
- In `SubsectionDetail.tsx` header (lines 348-352): same removal
- Pass `topicXPEarned` and `topicXPTotal` from both pages when rendering `<SectionNav>`

**Files**: `src/components/topics/SectionNav.tsx`, `src/pages/TopicDetail.tsx`, `src/pages/SubsectionDetail.tsx`

---

## 3. Replace XP Text Badges with Small Amber Rings in SectionNav

**What**: Replace the `<Badge>` showing `"10/25 XP"` or `"25 XP"` (lines 78-99 in SectionNav.tsx) with a `TopicProgressRing` (size 24, strokeWidth 3, amber, no text/message). This replaces text with a purely visual ring that fills as XP is earned.

**Current behavior**: Each nav item shows three possible states via the left icon (number / ring / check) AND a right-side XP badge. The badge is redundant with the ring.

**New behavior**:

- Remove the entire right-side Badge + Tooltip block (lines 70-100)
- The left-side icon already shows: number (unstarted), ring (in-progress), check (mastered) -- this is sufficient
- Add XP tooltip to the existing left-side ring/check icon so users can still see exact XP on hover
- For the mastered state, keep the amber check circle but wrap it in a tooltip showing `"{total} XP earned"`
- For the in-progress state, wrap the existing ring in a tooltip showing `"{earned}/{total} XP"`

**File**: `src/components/topics/SectionNav.tsx`

---

## 4. "Slam" Animation on Topic Mastery

**What**: When the +150 XP topic mastery bonus fires, animate a badge/XP icon that scales up at the center of the viewport, then "slams" (shrinks + translates) toward the top-right navbar XP counter position.

**How**:

- Create a new component `src/components/gamification/XPSlam.tsx`
- Props: `trigger: boolean`, `amount: number` (default 150)
- When `trigger` flips to true:
  1. Render a fixed-position overlay element at viewport center with the Zap icon + "+150 XP" text
  2. Apply a two-phase CSS animation:
    - Phase 1 (0-400ms): scale from 0 to 1.2 with opacity fade-in (the "pop")
    - Phase 2 (400-800ms): scale down to 0.3, translate to top-right corner (approximate navbar XP counter position: `top: 16px, right: 120px`), then fade out
  3. After 1s, unmount
- Add keyframes to `tailwind.config.ts`:
  ```
  "xp-slam": {
    "0%": { transform: "translate(-50%, -50%) scale(0)", opacity: "0" },
    "40%": { transform: "translate(-50%, -50%) scale(1.3)", opacity: "1" },
    "100%": { transform: "translate(calc(50vw - 120px), calc(-50vh + 24px)) scale(0.3)", opacity: "0" }
  }
  ```
  And animation: `"xp-slam": "xp-slam 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"`
- Usage: In both `TopicDetail.tsx` and `SubsectionDetail.tsx`, render `<XPSlam trigger={topicBonusAwarded} amount={150} />` alongside the existing `<ConfettiEffect trigger={topicBonusAwarded} intensity="big" />`

**File**: new `src/components/gamification/XPSlam.tsx`, `tailwind.config.ts`, `src/pages/TopicDetail.tsx`, `src/pages/SubsectionDetail.tsx`

---

## Files Summary


| File                                     | Changes                                                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `src/components/topics/TopicSection.tsx` | Remove XP footer block (lines 160-199), keep confetti                                                                     |
| `src/components/topics/SectionNav.tsx`   | Add topic ring at sidebar bottom; replace XP badges with tooltip-wrapped icons; new props `topicXPEarned`, `topicXPTotal` |
| `src/pages/TopicDetail.tsx`              | Remove header ring; pass topic XP totals to SectionNav; add XPSlam                                                        |
| `src/pages/SubsectionDetail.tsx`         | Remove header ring; pass topic XP totals to SectionNav; add XPSlam                                                        |
| `src/components/gamification/XPSlam.tsx` | New component -- slam animation on mastery                                                                                |
| `tailwind.config.ts`                     | Add `xp-slam` keyframe + animation                                                                                        |


---

## Technical Notes

### XPSlam animation mechanics

The component uses a single CSS animation with `forwards` fill mode. The translate values use viewport-relative calc() to target the approximate position of the navbar XP counter (top-right area). The cubic-bezier curve gives an elastic "pop" feel consistent with the Duolingo aesthetic.

### SectionNav prop additions

```typescript
interface SectionNavProps {
  sections: { id: string; title: string }[];
  masteredSections: Set<string>;
  activeSectionId: string | null;
  sectionXPMap?: Map<string, { earned: number; total: number }>;
  topicXPEarned?: number;   // NEW
  topicXPTotal?: number;    // NEW
}
```

### TopicSection interface unchanged

All XP props remain on TopicSectionProps -- only the JSX rendering of the footer is removed. This avoids any breaking changes in parent components.