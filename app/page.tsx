import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './components/ThemeToggle';
import { Terminal } from './components/Terminal';
import { getAllPosts } from '@/lib/blog';
import { format, isValid, parseISO } from 'date-fns';

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

const projects = [
  {
    id: '1',
    title: 'windots',
    description: 'custom windows 11 dotfiles with catppuccin theming',
    tech: ['Windows', 'PowerShell', 'Terminal'],
    category: 'software',
  },
  {
    id: '2',
    title: 'unfollowr',
    description: 'simple and safe twitch unfollow tool',
    tech: ['JavaScript', 'Browser Extension'],
    category: 'software',
  },
];

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/portfolio', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

const posts = getAllPosts().slice(0, 2);
const featuredProjects = projects.slice(0, 2);

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-12">
        {/* Top Bar - Minimal */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-base text-[var(--text-muted)]">$</span>
            <span className="font-mono text-lg text-[var(--accent)]">whoami</span>
          </div>
          <ThemeToggle />
        </div>

        {/* Main Grid - Wide Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Column - Hero & Info */}
          <div className="lg:col-span-6 space-y-8">
            {/* Hero Section */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity"></div>
                  <div className="relative">
                    <Image
                      src="/asd.jpg"
                      alt="jiroaku"
                      width={240}
                      height={240}
                      className="rounded-2xl border-2 border-[var(--border-color)] group-hover:border-[var(--accent)] transition-all shadow-lg"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-6xl md:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                      jiroaku
                    </h1>
                    <div className="space-y-4 text-[var(--text-secondary)]">
                      <p className="text-lg leading-relaxed">
                        i'm <span className="text-[var(--accent)] font-semibold">jiro</span>, a 21-year-old computer science student. started with web development, now transitioning to backend and automation.
                      </p>
                      <p className="text-base leading-relaxed">
                        cofounder @{' '}
                        <Link
                          href="https://tridniostudios.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] hover:underline transition-colors"
                        >
                          Tridnio Studios
                        </Link>
                        {' • '}
                        founder @{' '}
                        <Link
                          href="https://euxorasoft.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-purple)] hover:underline"
                        >
                          EuxoraSoft
                        </Link>
                      </p>
                      <p className="text-base leading-relaxed text-[var(--text-muted)]">
                        voice actor • gamer • developer • interested in cybersecurity, ai, rust, and low-level stuff
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <Link
                          href="https://github.com/jiroaku"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                          aria-label="GitHub"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                        </Link>
                        <Link
                          href="https://x.com/jiroaku"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                          aria-label="X"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-color)]">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-6 py-3 text-base border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Terminal */}
            <div className="pt-6">
              <Terminal />
            </div>
          </div>

          {/* Right Column - Projects & Posts */}
          <div className="lg:col-span-4 space-y-8">
            {/* Projects */}
            <div className="border border-[var(--border-color)] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] font-mono">
                  ./projects
                </h2>
                <Link href="/portfolio" className="text-sm text-[var(--accent)] hover:underline font-mono">
                  view all →
                </Link>
              </div>
              <div className="space-y-5">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href="/portfolio"
                    className="block border-l-2 border-[var(--border-color)] pl-5 py-3 hover:border-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-all group"
                  >
                    <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="border border-[var(--border-color)] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[var(--text-primary)] font-mono">
                  ./blog
                </h2>
                <Link href="/blog" className="text-sm text-[var(--accent)] hover:underline font-mono">
                  view all →
                </Link>
              </div>
              <div className="space-y-5">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block border-l-2 border-[var(--border-color)] pl-5 py-3 hover:border-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-all group"
                  >
                    <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] font-mono">
                      {formatDate(post.frontmatter.date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
