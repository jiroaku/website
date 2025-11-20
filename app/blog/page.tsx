import { getAllPosts } from '@/lib/blog';
import { BlogClient } from './BlogClient';

// Enable dynamic rendering and revalidation
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Revalidate on every request

export default function Blog() {
  const posts = getAllPosts();
  const categories = ['all', ...Array.from(new Set(posts.map((p) => p.frontmatter.category)))];
  const allTags = Array.from(new Set(posts.flatMap((p) => p.frontmatter.tags)));

  return <BlogClient posts={posts} categories={categories} allTags={allTags} />;
}
