ALTER TABLE public.profiles
ADD COLUMN badges jsonb DEFAULT '[]'::jsonb;