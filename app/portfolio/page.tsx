'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  live?: string;
  role: 'cofounder' | 'solo' | 'contributor';
  tags: ('open-source' | 'commercial' | 'college-project' | 'voice-work')[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'windots',
    description: 'custom windows 11 dotfiles with catppuccin theming, ui refinements, terminal configs, and productivity optimizations.',
    tech: ['Windows', 'PowerShell', 'Terminal', 'Catppuccin'],
    repo: 'https://github.com/jiroaku/windots',
    role: 'solo',
    tags: ['open-source'],
  },
  {
    id: '2',
    title: 'unfollowr',
    description: 'simple and safe twitch unfollow tool (browser extension).',
    tech: ['JavaScript', 'Browser Extension'],
    repo: 'https://github.com/jiroaku/unfollowr',
    role: 'solo',
    tags: ['open-source'],
  },
  {
    id: '3',
    title: 'vanity',
    description: 'a discord vanity role automation bot.',
    tech: ['Node.js', 'Discord.js', 'JavaScript'],
    repo: 'https://github.com/jiroaku/vanity',
    role: 'solo',
    tags: ['open-source'],
  },
  {
    id: '4',
    title: 'ticketr',
    description: 'modern event ticketing with role sync (college project).',
    tech: ['Java', 'Spring Boot', 'SQLite'],
    repo: 'https://github.com/jiroaku/ticketr',
    role: 'solo',
    tags: ['open-source', 'college-project'],
  },
  {
    id: '5',
    title: 'aura-kit',
    description: 'opensource web app toolkit for content creators (in progress).',
    tech: ['Next.js', 'TypeScript', 'React'],
    repo: 'https://github.com/jiroaku/aura-kit',
    role: 'solo',
    tags: ['open-source'],
  },
  {
    id: '6',
    title: 'tridnio',
    description: 'tridnio studios website.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://tridniostudios.com',
    role: 'cofounder',
    tags: ['commercial'],
  },
];

export default function Portfolio() {
  const [selectedTags, setSelectedTags] = useState<Set<Project['tags'][number]>>(new Set());

  // Dynamically get all unique tags from projects
  const tagFilters: Project['tags'][number][] = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const toggleTag = (tag: Project['tags'][number]) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filteredProjects =
    selectedTags.size === 0
      ? projects
      : projects.filter((project) => project.tags.some((tag) => selectedTags.has(tag)));

  return (
    <div className="bg-[var(--bg-primary)]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-base text-[var(--text-muted)]">$</span>
                <span className="font-mono text-lg text-[var(--accent)] ml-2">cat projects.txt</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-[var(--text-primary)]">
                projects
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-4xl">
                a collection of things i&apos;ve built, contributed to, or worked on.
              </p>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <h2 className="text-base font-medium text-[var(--text-secondary)] font-mono">filter by tag:</h2>
              <div className="flex flex-wrap gap-3">
                {tagFilters.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 text-base border transition-colors font-mono ${
                      selectedTags.has(tag)
                        ? 'bg-[var(--accent)] text-white border-[var(--accent)]'
                        : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                    }`}
                    aria-pressed={selectedTags.has(tag)}
                  >
                    {tag}
                  </button>
                ))}
                {selectedTags.size > 0 && (
                  <button
                    onClick={() => setSelectedTags(new Set())}
                    className="px-3 py-1.5 text-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-colors"
                  >
                    clear
                  </button>
                )}
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="border border-[var(--border-color)] p-6 hover:border-[var(--accent)] transition-all flex flex-col"
                  aria-label={`Project: ${project.title}`}
                >
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono flex-shrink-0">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                    {project.repo && (
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono"
                      >
                        repo
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono"
                      >
                        demo
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-mono"
                      >
                        live
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

