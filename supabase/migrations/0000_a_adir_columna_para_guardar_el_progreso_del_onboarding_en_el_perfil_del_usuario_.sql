ALTER TABLE public.profiles
ADD COLUMN onboarding_steps TEXT[] DEFAULT ARRAY[]::TEXT[];