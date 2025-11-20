import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-16">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <div>
              <span className="font-mono text-base text-[var(--text-muted)]">$</span>
              <span className="font-mono text-lg text-[var(--accent)] ml-2">cat contact.txt</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[var(--text-primary)]">
              contact
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-4xl">
              want to collaborate? have a project in mind? just want to say hi? reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="border border-[var(--border-color)] p-8 hover:border-[var(--accent)] transition-all group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] font-mono">email</h3>
                </div>
                <p className="text-base text-[var(--text-secondary)]">
                  best for formal inquiries and project proposals
                </p>
                <Link
                  href="mailto:jiroaku@proton.me"
                  className="inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-mono text-base"
                >
                  jiroaku@proton.me →
                </Link>
              </div>
            </div>

            {/* GitHub */}
            <div className="border border-[var(--border-color)] p-8 hover:border-[var(--accent)] transition-all group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] font-mono">github</h3>
                </div>
                <p className="text-base text-[var(--text-secondary)]">
                  check out my code and open source contributions
                </p>
                <Link
                  href="https://github.com/jiroaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-mono text-base"
                >
                  github.com/jiroaku →
                </Link>
              </div>
            </div>

            {/* X */}
            <div className="border border-[var(--border-color)] p-8 hover:border-[var(--accent)] transition-all group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] font-mono">x.com</h3>
                </div>
                <p className="text-base text-[var(--text-secondary)]">
                  quick messages and casual conversations
                </p>
                <Link
                  href="https://x.com/jiroaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-mono text-base"
                >
                  x.com/jiroaku →
                </Link>
              </div>
            </div>

            {/* Discord */}
            <div className="border border-[var(--border-color)] p-8 hover:border-[var(--accent)] transition-all group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors"
                    >
                      <path d="M21 16a1 1 0 0 0 1-1.18l-1.2-6A2 2 0 0 0 18.85 7c-1.37-.63-3.3-1-6.85-1s-5.48.37-6.85 1a2 2 0 0 0-1.94 1.82l-1.2 6A1 1 0 0 0 3 16h2.35l.3 1.2A2 2 0 0 0 7.57 18h8.86a2 2 0 0 0 1.92-1.8L18.65 16z" />
                      <path d="M7 8s1.5 2 5 2 5-2 5-2" />
                      <path d="M8 12h.01" />
                      <path d="M16 12h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] font-mono">discord</h3>
                </div>
                <p className="text-base text-[var(--text-secondary)]">
                  voice or text chats, fast collaboration, and community events
                </p>
                <div className="inline-flex items-center gap-2 text-[var(--accent)] font-mono text-base">
                  <span>jiroaku</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-[var(--border-color)] pt-10 space-y-6">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-[var(--text-secondary)]">
              <div>
                <p className="font-medium text-[var(--text-primary)] mb-2">response time</p>
                <p>usually within 24-48 hours</p>
              </div>
              <div>
                <p className="font-medium text-[var(--text-primary)] mb-2">availability</p>
                <p>open to collaborations, freelance work, and interesting projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
