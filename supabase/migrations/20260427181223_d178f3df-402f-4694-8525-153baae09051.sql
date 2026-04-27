CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a quote request (public site contact form)
CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 100
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND char_length(message) > 0 AND char_length(message) <= 2000
  );

-- No one can read via the public API (owner views in backend dashboard)
-- Intentionally no SELECT policy.