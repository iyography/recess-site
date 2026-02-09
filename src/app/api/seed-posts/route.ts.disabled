import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST() {
  try {
    // Import posts data dynamically
    const { socialPosts, communityPosts, skoolPosts } = await import('../../content-library/data');
    
    // Combine all posts
    const allPosts = [...socialPosts, ...communityPosts, ...skoolPosts];
    
    // Clear existing posts
    await supabase.from('content_posts').delete().neq('id', 0);
    
    // Insert all posts
    const { error } = await supabase
      .from('content_posts')
      .insert(allPosts);
    
    if (error) {
      console.error('Error inserting posts:', error);
      return NextResponse.json({ error: 'Failed to insert posts' }, { status: 500 });
    }
    
    return NextResponse.json({ 
      message: `Successfully seeded ${allPosts.length} posts to Supabase`,
      count: allPosts.length 
    });
    
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}