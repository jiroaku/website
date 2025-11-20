'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/portfolio', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-mono"
            aria-label="Home"
          >
            jiroaku
          </Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-base transition-all font-mono border-b-2 ${
                    pathname === item.href
                      ? 'border-[var(--accent)] text-[var(--accent)]'
                      : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-6 pl-6 border-l border-[var(--border-color)] text-sm text-[var(--text-muted)] font-mono">
              <Link
                href="https://github.com/jiroaku"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                github
              </Link>
              <Link
                href="https://x.com/jiroaku"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                x.com
              </Link>
            </div>
            <div className="pl-4 border-l border-[var(--border-color)]">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden px-2 py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-color)] py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm transition-colors font-mono ${
                  pathname === item.href
                    ? 'text-[var(--accent)] border-l-2 border-[var(--accent)] pl-4'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

