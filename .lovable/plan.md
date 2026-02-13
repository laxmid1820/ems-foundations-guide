Before implementing, add a brief "Badge unlocked!" toast (amber background, fades out after 2–3s) when the badge is awarded in handleCeremonyComplete. Reuse/extend XPToast or XPFloater. Example: "Topic mastered badge unlocked! +1 badge". Keep it subtle and encouraging.  
  
Badge System: Topic Mastery Badges with Navbar Counter

## Overview

Add a persistent badge tracking system that awards a "topic-mastered" badge when the +150 XP ceremony fires, stores badges in the database, and displays a live amber badge counter next to the XP counter in the navbar.

## Architecture Decision: Database vs Local State

Badges should be stored in the **database** (not local state) so they persist across sessions and devices. The simplest approach: add a `badges` column (JSONB array) to the existing `profiles` table.

## Changes Required

### 1. Database Migration

Add a `badges` JSONB column to `profiles`:

```sql
ALTER TABLE public.profiles
ADD COLUMN badges jsonb DEFAULT '[]'::jsonb;
```

Each badge entry:

```json
{ "type": "topic-mastered", "topicSlug": "airway-management", "awardedAt": "2026-02-13T..." }
```

### 2. Update AuthContext (`src/contexts/AuthContext.tsx`)

Add `badges` to the `Profile` interface:

```typescript
badges: Array<{ type: string; topicSlug: string; awardedAt: string }>;
```

### 3. Create `BadgeCounter` Component (`src/components/gamification/BadgeCounter.tsx`)

A small amber pill next to the XP counter showing badge count:

```typescript
// Amber/gold pill with Star icon + count
// Style: rounded-full bg-amber-500/10 text-amber-500 font-bold
// Shows "2" (count of badges array)
// Animate scale-in on increment
```

### 4. Update `handleCeremonyComplete` in `TopicDetail.tsx` and `SubsectionDetail.tsx`

After awarding +150 XP, write the badge to the database:

```typescript
const handleCeremonyComplete = useCallback(async () => {
  addXP(150, "Topic mastered — +150 XP unlocked!");
  setTopicBonusAwarded(true);
  setShowCeremony(false);

  // Award badge
  if (user && profile) {
    const newBadge = { type: "topic-mastered", topicSlug: slug, awardedAt: new Date().toISOString() };
    const existingBadges = profile.badges || [];
    // Prevent duplicates
    if (!existingBadges.some(b => b.type === "topic-mastered" && b.topicSlug === slug)) {
      await supabase
        .from("profiles")
        .update({ badges: [...existingBadges, newBadge] })
        .eq("user_id", user.id);
      refreshProfile();
    }
  }
}, [addXP, user, profile, slug, refreshProfile]);
```

### 5. Update Navbar (`src/components/Navbar.tsx`)

Add `BadgeCounter` next to `XPCounter` and `StreakBadge`:

```tsx
{user && profile && (
  <>
    <XPCounter xp={profile.xp_total} />
    <BadgeCounter count={(profile.badges || []).length} />
    <StreakBadge streak={profile.current_streak} />
  </>
)}
```

Same update in the mobile menu section.

### 6. Update Dashboard (`src/pages/Dashboard.tsx`)

Show earned badges in the XP Headquarters or as a dedicated section.

## Files Modified


| File                                           | Change                                            |
| ---------------------------------------------- | ------------------------------------------------- |
| Database migration                             | Add `badges` JSONB column to `profiles`           |
| `src/contexts/AuthContext.tsx`                 | Add `badges` to Profile interface                 |
| `src/components/gamification/BadgeCounter.tsx` | **New file** -- amber pill with Star icon + count |
| `src/components/Navbar.tsx`                    | Add BadgeCounter next to XPCounter                |
| `src/pages/TopicDetail.tsx`                    | Write badge on ceremony complete                  |
| `src/pages/SubsectionDetail.tsx`               | Same badge write logic                            |


## Visual Design

- **BadgeCounter**: Amber/gold pill matching Duolingo aesthetic -- `bg-amber-500/10 text-amber-500` with a Star icon and count number
- On new badge: brief `animate-scale-in` pulse
- Counter only renders when count > 0
- Uses the existing `xp` CSS variable color for consistency with the amber theme