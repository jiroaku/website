'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format, isValid, parseISO } from 'date-fns';
import type { BlogPost } from '@/lib/blog';

interface BlogClientProps {
  posts: BlogPost[];
  categories: string[];
  allTags: string[];
}

function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    if (isValid(date)) {
      return format(date, 'MMM d, yyyy');
    }
    return dateString;
  } catch {
    return dateString;
  }
}

export function BlogClient({ posts, categories, allTags }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.frontmatter.category === selectedCategory;
      const matchesTag = !selectedTag || post.frontmatter.tags.includes(selectedTag);
      const matchesSearch =
        !searchQuery ||
        post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.frontmatter.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery]);

  return (
    <div className="bg-[var(--bg-primary)]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 h-fit space-y-6">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] font-mono">categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedTag(null);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-lg transition-all font-mono ${
                      selectedCategory === category
                        ? 'bg-[var(--bg-tertiary)] text-[var(--text-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] font-mono">tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(selectedTag === tag ? null : tag);
                      setSelectedCategory('all');
                    }}
                    className={`px-3 py-1.5 text-sm border rounded-lg transition-all font-mono ${
                      selectedTag === tag
                        ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] font-mono">search</h2>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search posts..."
                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors text-sm font-mono"
              />
            </div>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-[var(--text-primary)] font-mono">recent posts</h2>
              <div className="space-y-3">
                {posts.slice(0, 5).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {post.frontmatter.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <div className="mb-4">
                <span className="font-mono text-base text-[var(--text-muted)]">$</span>
                <span className="font-mono text-lg text-[var(--accent)] ml-2">cat blog.txt</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
                blog
              </h1>
              <p className="text-base text-[var(--text-secondary)] mb-6">
                thoughts, tutorials, and experiences from my journey.
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <p className="text-[var(--text-secondary)]">no posts found.</p>
            ) : (
              <div className="space-y-4">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="border-b border-[var(--border-color)] pb-4 last:border-0"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.frontmatter.featureImage && (
                        <div className="relative w-full max-w-md h-32 mb-4 rounded-lg overflow-hidden border border-[var(--border-color)]">
                          <Image
                            src={`/api/blog-image/${post.slug}/${post.frontmatter.featureImage}${post.imageMtime ? `?v=${post.imageMtime}` : ''}`}
                            alt={post.frontmatter.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 448px"
                            unoptimized
                          />
                        </div>
                      )}
                      <h2 className="text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors mb-3">
                        {post.frontmatter.title}
                      </h2>
                    </Link>
                    <p className="text-base text-[var(--text-secondary)] mb-3">{post.frontmatter.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                      <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <div className="flex flex-wrap gap-1.5">
                        {post.frontmatter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

