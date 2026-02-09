'use client';

import { useState, useMemo, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */
interface Post {
  id: number;
  title: string;
  short: string;
  medium: string;
  long: string;
  category: string;
  tab: 'social' | 'community' | 'skool';
}

type TabKey = 'social' | 'community' | 'skool';
type VersionKey = 'short' | 'medium' | 'long';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/* ──────────────────────────────────────────────
   CONTENT LIBRARY COMPONENT
   ────────────────────────────────────────────── */
export default function ContentLibrary() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabKey>('social');
  const [activeVersion, setActiveVersion] = useState<VersionKey>('short');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('content_posts')
          .select('*')
          .order('id');
        
        if (error) {
          console.error('Error fetching posts:', error);
          return;
        }
        
        setPosts(data || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Filter posts by tab
  const socialPosts = posts.filter(post => post.tab === 'social');
  const communityPosts = posts.filter(post => post.tab === 'community');  
  const skoolPosts = posts.filter(post => post.tab === 'skool');

  // Get posts for current tab
  const currentPosts = activeTab === 'social' ? socialPosts : 
                      activeTab === 'community' ? communityPosts : skoolPosts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>Loading content library...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Focus Founders Content Library</h1>
          <p className="text-gray-300">ADHD entrepreneur content ready to copy and share</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('social')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'social' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Social Media ({socialPosts.length})
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'community' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Community ({communityPosts.length})
          </button>
          <button
            onClick={() => setActiveTab('skool')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'skool' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Skool Posts ({skoolPosts.length})
          </button>
        </div>

        {/* Version Toggle */}
        <div className="flex space-x-2 mb-6">
          {(['short', 'medium', 'long'] as VersionKey[]).map(version => (
            <button
              key={version}
              onClick={() => setActiveVersion(version)}
              className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                activeVersion === version
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {version}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {currentPosts.length === 0 ? (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-400">No posts found for {activeTab} tab.</p>
              <p className="text-sm text-gray-500 mt-2">
                Run the SQL commands in supabase-setup.sql to populate the database.
              </p>
            </div>
          ) : (
            currentPosts.map(post => (
              <div key={post.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(post[activeVersion]);
                    }}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    Copy {activeVersion}
                  </button>
                </div>
                <div className="prose prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-300 text-sm">
                    {post[activeVersion]}
                  </pre>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
