
-- Daily generation log: tracks how many questions were generated per level per calendar day.
-- Writes are restricted to the service role (edge function); authenticated users can only SELECT
-- so the admin panel can display the remaining daily quota.

CREATE TABLE public.daily_generation_log (
  id         uuid        NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date       date        NOT NULL,
  level      text        NOT NULL CHECK (level IN ('emt', 'aemt', 'paramedic')),
  count      integer     NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (date, level)
);

-- Enable RLS
ALTER TABLE public.daily_generation_log ENABLE ROW LEVEL SECURITY;

-- Authenticated users can read (to show remaining quota in admin panel)
CREATE POLICY "Authenticated users can read daily generation log"
  ON public.daily_generation_log
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Block all direct writes from authenticated clients (edge function uses service role, bypassing RLS)
CREATE POLICY "Block direct insert on daily generation log"
  ON public.daily_generation_log
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "Block direct update on daily generation log"
  ON public.daily_generation_log
  FOR UPDATE
  USING (false);

CREATE POLICY "Block direct delete on daily generation log"
  ON public.daily_generation_log
  FOR DELETE
  USING (false);
