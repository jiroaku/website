import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

// Helper function to ensure date is always a string in YYYY-MM-DD format
function normalizeDate(date: any): string {
  if (!date) {
    return new Date().toISOString().split('T')[0];
  }
  if (date instanceof Date) {
    return date.toISOString().split('T')[0];
  }
  const dateStr = String(date);
  // If it's already in YYYY-MM-DD format, return it
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  // Try to parse and format it
  try {
    const parsed = new Date(dateStr);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split('T')[0];
    }
  } catch {
    // If parsing fails, return today's date
  }
  return new Date().toISOString().split('T')[0];
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  published?: boolean;
  featureImage?: string; // Optional feature image path relative to post folder
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  readTime: string;
  folderPath: string; // Path to the post folder for accessing assets
  imageMtime?: number; // Modification time of feature image for cache busting
}

// Helper to get image modification time for cache busting
function getImageMtime(slug: string, imageName: string): number | null {
  try {
    const imagePath = path.join(postsDirectory, slug, imageName);
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      return stats.mtime.getTime();
    }
  } catch {
    // Ignore errors
  }
  return null;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const allPostsData: BlogPost[] = [];

  for (const entry of entries) {
    // Skip template and README files
    if (entry.name.toUpperCase() === 'TEMPLATE.MD' || entry.name.toUpperCase() === 'TEMPLATE.MDX' || entry.name === 'README.md') {
      continue;
    }

    let slug: string;
    let postPath: string;
    let folderPath: string;

    if (entry.isDirectory()) {
      // Folder-based post: look for index.md or index.mdx
      slug = entry.name;
      folderPath = path.join(postsDirectory, entry.name);
      const indexMd = path.join(folderPath, 'index.md');
      const indexMdx = path.join(folderPath, 'index.mdx');

      if (fs.existsSync(indexMd)) {
        postPath = indexMd;
      } else if (fs.existsSync(indexMdx)) {
        postPath = indexMdx;
      } else {
        continue; // Skip folders without index file
      }
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      // Legacy single-file post
      slug = entry.name.replace(/\.(md|mdx)$/, '');
      postPath = path.join(postsDirectory, entry.name);
      folderPath = postsDirectory; // Use blog directory as base for legacy posts
    } else {
      continue;
    }

    try {
      const fileContents = fs.readFileSync(postPath, 'utf8');
      const { data, content } = matter(fileContents);

      const frontmatter = {
        title: data.title || '',
        date: normalizeDate(data.date),
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        category: data.category || 'uncategorized',
        published: data.published !== false,
        featureImage: data.featureImage || undefined,
      } as BlogPostFrontmatter;

      const stats = readingTime(content);
      const imageMtime = frontmatter.featureImage
        ? getImageMtime(slug, frontmatter.featureImage)
        : undefined;

      allPostsData.push({
        slug,
        frontmatter,
        content,
        readTime: stats.text,
        folderPath,
        imageMtime,
      });
    } catch (error) {
      console.error(`Error reading post ${slug}:`, error);
    }
  }

  return allPostsData
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // First, try folder-based post
    const folderPath = path.join(postsDirectory, slug);
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      const indexMd = path.join(folderPath, 'index.md');
      const indexMdx = path.join(folderPath, 'index.mdx');

      let postPath: string | null = null;
      if (fs.existsSync(indexMd)) {
        postPath = indexMd;
      } else if (fs.existsSync(indexMdx)) {
        postPath = indexMdx;
      }

      if (postPath) {
        const fileContents = fs.readFileSync(postPath, 'utf8');
        const { data, content } = matter(fileContents);

        const frontmatter = {
          title: data.title || '',
          date: normalizeDate(data.date),
          excerpt: data.excerpt || '',
          tags: data.tags || [],
          category: data.category || 'uncategorized',
          published: data.published !== false,
          featureImage: data.featureImage || undefined,
        } as BlogPostFrontmatter;

        const stats = readingTime(content);
        const imageMtime = frontmatter.featureImage
          ? getImageMtime(slug, frontmatter.featureImage)
          : undefined;

        return {
          slug,
          frontmatter,
          content,
          readTime: stats.text,
          folderPath,
          imageMtime,
        };
      }
    }

    // Fallback to legacy single-file post
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const frontmatter = {
        title: data.title || '',
        date: normalizeDate(data.date),
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        category: data.category || 'uncategorized',
        published: data.published !== false,
        featureImage: data.featureImage || undefined,
      } as BlogPostFrontmatter;

      const stats = readingTime(content);

      return {
        slug,
        frontmatter,
        content,
        readTime: stats.text,
        folderPath: postsDirectory,
      };
    }

    // Try .mdx extension
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    if (fs.existsSync(mdxPath)) {
      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContents);

      const frontmatter = {
        title: data.title || '',
        date: normalizeDate(data.date),
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        category: data.category || 'uncategorized',
        published: data.published !== false,
        featureImage: data.featureImage || undefined,
      } as BlogPostFrontmatter;

      const stats = readingTime(content);

      return {
        slug,
        frontmatter,
        content,
        readTime: stats.text,
        folderPath: postsDirectory,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const slugs: string[] = [];

  for (const entry of entries) {
    if (entry.name.toUpperCase() === 'TEMPLATE.MD' || entry.name.toUpperCase() === 'TEMPLATE.MDX' || entry.name === 'README.md') {
      continue;
    }

    if (entry.isDirectory()) {
      // Folder-based post
      const indexMd = path.join(postsDirectory, entry.name, 'index.md');
      const indexMdx = path.join(postsDirectory, entry.name, 'index.mdx');
      if (fs.existsSync(indexMd) || fs.existsSync(indexMdx)) {
        slugs.push(entry.name);
      }
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      // Legacy single-file post
      slugs.push(entry.name.replace(/\.(md|mdx)$/, ''));
    }
  }

  return slugs;
}

