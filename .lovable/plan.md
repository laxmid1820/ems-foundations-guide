
# Add Section Title Tooltips to SectionNav

## Overview

Wrap each section title `<span>` in `SectionNav.tsx` with a `Tooltip` that shows the full, untruncated title on hover. Since titles are CSS-truncated (`truncate` class) in the narrow sidebar (w-56), the tooltip always appears regardless of length -- keeping it simple and consistent.

## Change

**File: `src/components/topics/SectionNav.tsx`** (line 44)

Replace the plain title span:
```tsx
<span className="flex-1 truncate">{s.title}</span>
```

With a tooltip-wrapped version:
```tsx
<TooltipProvider delayDuration={300}>
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="flex-1 truncate cursor-default">{s.title}</span>
    </TooltipTrigger>
    <TooltipContent side="right" className="max-w-[280px]">
      {s.title}
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Details

- Reuses the existing `Tooltip` imports already at line 6 -- no new imports needed
- `side="right"` so it doesn't overlap the sidebar
- `max-w-[280px]` allows long titles to wrap naturally in the tooltip
- `cursor-default` signals the element is hoverable without suggesting it's clickable (the parent button handles clicks)
- No layout changes -- the `flex-1 truncate` classes stay identical
- Applied universally (not conditionally) since the sidebar is narrow enough that most titles will truncate
