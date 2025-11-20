import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format, isValid, parseISO } from 'date-fns';
import { BlogPostClient } from './BlogPostClient';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';

function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    if (isValid(date)) {
      return format(date, 'MMMM d, yyyy');
    }
    return dateString;
  } catch {
    return dateString;
  }
}

// Enable dynamic rendering and revalidation
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Revalidate on every request

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-12">
        <article className="space-y-8 max-w-6xl mx-auto">
          <header className="space-y-4 border-b border-[var(--border-color)] pb-6">
            <Link
              href="/blog"
              className="text-sm text-[var(--accent)] hover:underline inline-block mb-4"
            >
              ← back to blog
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">{post.frontmatter.title}</h1>
            {post.frontmatter.featureImage && (
              <div className="relative w-full max-w-md h-40 md:h-56 mb-6 rounded-lg overflow-hidden border border-[var(--border-color)]">
                <Image
                  src={`/api/blog-image/${post.slug}/${post.frontmatter.featureImage}${post.imageMtime ? `?v=${post.imageMtime}` : ''}`}
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 448px"
                  unoptimized
                />
              </div>
            )}
            <div className="flex flex-wrap items-center gap-4 text-base text-[var(--text-muted)]">
              <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <div className="flex flex-wrap gap-1.5">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <BlogPostClient content={post.content} />
        </article>
      </div>
    </div>
  );
}
