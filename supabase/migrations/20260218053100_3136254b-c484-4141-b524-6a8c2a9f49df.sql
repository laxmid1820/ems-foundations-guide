
-- Block authenticated users from writing to quiz_questions (only service role via edge functions can write)
CREATE POLICY "Block direct insert on quiz questions"
  ON public.quiz_questions FOR INSERT
  TO authenticated
  WITH CHECK (false);

CREATE POLICY "Block direct update on quiz questions"
  ON public.quiz_questions FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "Block direct delete on quiz questions"
  ON public.quiz_questions FOR DELETE
  TO authenticated
  USING (false);
