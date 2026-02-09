-- Recess Affiliate System - Supabase Table Setup
-- Run this SQL in your Supabase SQL Editor

-- Affiliate Payments Table
CREATE TABLE IF NOT EXISTS affiliate_payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  skool_username TEXT NOT NULL,
  payment_method TEXT NOT NULL CHECK (payment_method IN ('paypal', 'venmo', 'zelle')),
  payment_handle TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin Sessions Table
CREATE TABLE IF NOT EXISTS admin_sessions (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_affiliate_payments_email ON affiliate_payments(email);
CREATE INDEX IF NOT EXISTS idx_affiliate_payments_created_at ON affiliate_payments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_created_at ON admin_sessions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE affiliate_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- Policies for affiliate_payments (service role can do everything)
CREATE POLICY "Service role can manage affiliate_payments"
  ON affiliate_payments
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Policies for admin_sessions (service role can do everything)
CREATE POLICY "Service role can manage admin_sessions"
  ON admin_sessions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Quiz Submissions
CREATE TABLE quiz_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  track TEXT NOT NULL,
  archetype TEXT NOT NULL,
  archetype_name TEXT NOT NULL,
  bottleneck TEXT,
  recommended_tier TEXT,
  strike_zone TEXT,
  focus TEXT[],
  ignore_list TEXT,
  sixty_day_path TEXT,
  answers JSONB NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_quiz_submissions_email ON quiz_submissions(email);
CREATE INDEX idx_quiz_submissions_created_at ON quiz_submissions(created_at);
CREATE INDEX idx_quiz_submissions_archetype ON quiz_submissions(archetype);
CREATE INDEX idx_quiz_submissions_track ON quiz_submissions(track);

ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access quiz" ON quiz_submissions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Content Library Posts Table
CREATE TABLE IF NOT EXISTS content_posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  short TEXT NOT NULL,
  medium TEXT NOT NULL,
  long TEXT NOT NULL,
  category TEXT NOT NULL,
  tab TEXT NOT NULL CHECK (tab IN ('social', 'community', 'skool')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_content_posts_tab ON content_posts(tab);
CREATE INDEX IF NOT EXISTS idx_content_posts_category ON content_posts(category);

ALTER TABLE content_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access content_posts" ON content_posts
  FOR SELECT
  USING (true);

CREATE POLICY "Service role full access content_posts" ON content_posts
  FOR ALL
  USING (auth.role() = 'service_role');

-- Insert sample posts (run manually in Supabase SQL editor)
INSERT INTO content_posts (id, title, short, medium, long, category, tab) VALUES
-- SOCIAL POSTS (50 total)
(1, 'My ADHD superpower made me $50K this month', 'Most people see my ADHD as a liability. I see it as my competitive advantage. The "Problem": - Can''t focus on boring tasks - Get distracted constantly - Brain jumps between ideas. The Plot Twist: These aren''t bugs. They''re features. • Pattern recognition = spotting opportunities • Hyperfocus = 12-hour productive sprints • Need for novelty = constant innovation. This month: $50K revenue from 3-day hyperfocus session. Your ADHD isn''t holding you back. You''re just using neurotypical systems. #ADHDEntrepreneur', 'Most people see my ADHD as a liability. I see it as my competitive advantage. Here''s what happened: The "Problem": - I can''t focus on boring tasks for more than 10 minutes - I get distracted by literally everything - My brain jumps from idea to idea constantly. The Plot Twist: These aren''t bugs. They''re features. What I realized: • Pattern recognition from jumping between ideas = seeing opportunities others miss • Hyperfocus when something interests me = 12-hour productive sprints • Need for novelty = always innovating and staying ahead. This Month''s Results: - $50K in revenue from a product I hyperfocused on for 3 days - Spotted a market trend 2 months before competitors - Created 6 new income streams. The ADHD entrepreneur advantage: • We see connections neurotypical brains miss • We pivot faster when something isn''t working • We think outside boxes that don''t exist to us. Your ADHD isn''t holding you back. You''re just trying to succeed in neurotypical systems. Build your own system. Play to your strengths. #ADHDEntrepreneur #Neurodivergent', 'Most people see my ADHD as a liability. I see it as my competitive advantage. Here''s the full story of how ADHD traits generated $50K in one month by leveraging neurodivergent strengths as superpowers rather than fighting them. The complete framework for ADHD entrepreneurs to build systems that work WITH their brain, not against it. Stop trying to cure your ADHD. Start celebrating it. #ADHDEntrepreneur #NeurodivergentSuccess', 'ADHD Wins', 'social'),

(2, 'The ADHD entrepreneur''s guide to pricing when your brain says "everything or nothing"', 'ADHD pricing logic: "This is amazing! $5,000!" *client hesitates* "Actually, $500 is fine." *immediate regret*. The ADHD Pricing Framework: • Set prices when hyperfocused (confidence high) • Never negotiate when emotional • Create price anchors beforehand • Use the "pause and breathe" rule. My rule: If I want to change price in the moment, I sleep on it. Confidence pricing = ADHD superpower. #ADHDPricing #BusinessStrategy', 'ADHD pricing is emotional chaos: Monday: "This is incredible work! $5,000!" Tuesday: *client questions one thing* "Actually, maybe $2,000 is more fair..." Wednesday: "You know what, just pay me $500." *immediate regret and shame spiral*. The ADHD Pricing Framework that saved my business: 1. Set prices during hyperfocus (when confidence is high) 2. Create price anchors and stick to them 3. Never negotiate when emotional or seeking approval 4. Use the 24-hour rule for any price changes 5. Have a "pricing buddy" to reality-check me. Results: • Average project value increased 300% • Stopped undervaluing my ADHD superpowers • Clients respect confident pricing. Your ADHD intensity creates incredible value. Price like you believe it. #ADHDPricing #BusinessStrategy', 'Complete ADHD pricing framework with emotional regulation strategies, confidence building techniques, and systematic approaches to value-based pricing that work with ADHD brain patterns instead of against them. #ADHDPricing #BusinessStrategy', 'Business Strategy', 'social');

-- Add the rest via manual insertion or API call