// Seed posts to Supabase
const { createClient } = require('@supabase/supabase-js');

// Import the posts from data file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// All posts data
const allPosts = [
  // SOCIAL POSTS
  {
    id: 1, tab: 'social', category: 'ADHD Wins',
    title: 'My ADHD superpower made me $50K this month',
    short: `Most people see my ADHD as a liability.

I see it as my competitive advantage.

The "Problem":
- Can't focus on boring tasks
- Get distracted constantly
- Brain jumps between ideas

The Plot Twist:
These aren't bugs. They're features.

• Pattern recognition = spotting opportunities
• Hyperfocus = 12-hour productive sprints  
• Need for novelty = constant innovation

This month: $50K revenue from 3-day hyperfocus session.

Your ADHD isn't holding you back.
You're just using neurotypical systems.

#ADHDEntrepreneur`,
    medium: `Most people see my ADHD as a liability.

I see it as my competitive advantage.

Here's what happened:

The "Problem":
- I can't focus on boring tasks for more than 10 minutes
- I get distracted by literally everything  
- My brain jumps from idea to idea constantly

The Plot Twist:
These aren't bugs. They're features.

What I realized:
• Pattern recognition from jumping between ideas = seeing opportunities others miss
• Hyperfocus when something interests me = 12-hour productive sprints
• Need for novelty = always innovating and staying ahead

This Month's Results:
- $50K in revenue from a product I hyperfocused on for 3 days
- Spotted a market trend 2 months before competitors
- Created 6 new income streams

The ADHD entrepreneur advantage:
• We see connections neurotypical brains miss
• We pivot faster when something isn't working
• We think outside boxes that don't exist to us

Your ADHD isn't holding you back.
You're just trying to succeed in neurotypical systems.

Build your own system. Play to your strengths.

#ADHDEntrepreneur #Neurodivergent`,
    long: `Most people see my ADHD as a liability. I see it as my competitive advantage. Here's the full story and framework that generated $50K in one month using ADHD traits as superpowers rather than limitations.`
  },
  // Add more posts here - this is just a sample
];

async function seedPosts() {
  try {
    console.log('Starting posts migration to Supabase...');

    // Clear existing posts first
    const { error: deleteError } = await supabase
      .from('content_posts')
      .delete()
      .neq('id', 0);

    if (deleteError && deleteError.code !== 'PGRST116') {
      console.error('Error clearing existing posts:', deleteError);
    }

    // Insert all posts
    const { data, error } = await supabase
      .from('content_posts')
      .insert(allPosts);

    if (error) {
      console.error('Error inserting posts:', error);
      return;
    }

    console.log(`Successfully migrated ${allPosts.length} posts to Supabase!`);
    console.log('Posts are now available in the content_posts table');

  } catch (err) {
    console.error('Seed script error:', err);
  }
}

seedPosts();