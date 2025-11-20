export default function About() {
  const skills = [
    'C++',
    'Java',
    'Spring Boot',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vite',
    'Python',
    'PHP',
    'WordPress',
    'C#',
    '.NET',
    'Docker',
    'Git',
    'Netlify',
    'Networking',
    'CCNA (in progress)',
    'Voice Acting',
  ];

  const interests = ['Low Level', 'Reverse Engineering', 'Cybersecurity', 'AI', 'Rust'];
  const currentlyLearning = ['Java', 'Networks'];

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-16">
        <div className="space-y-12">
          <div className="space-y-8">
            <div>
              <span className="font-mono text-base text-[var(--text-muted)]">$</span>
              <span className="font-mono text-lg text-[var(--accent)] ml-2">cat about.txt</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-[var(--text-primary)]">
              about
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--text-secondary)] max-w-4xl">
              <p>
                i'm <span className="text-[var(--accent)] font-semibold">jiro</span> (jiroaku), a 21-year-old computer science student (systems engineering). started with web development, now transitioning to backend and automation. cofounder @{' '}
                <a
                  href="https://tridniostudios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Tridnio Studios
                </a>{' '}
                and founder @{' '}
                <a
                  href="https://euxorasoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-purple)] hover:underline"
                >
                  EuxoraSoft
                </a>
                .
              </p>
              <p>
                voice actor, gamer, and developer. fan of anime, music, kdramas, and videogames. interested in cybersecurity, math, and music. i love singing. btw, i'm a son of god.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--border-color)] pt-10">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-base font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--border-color)] pt-10">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./journey</h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] max-w-4xl">
              <p>
                started programming at 16 when i went to a vocational highschool to study software development. we started with <span className="text-[var(--accent)]">c++</span> in the first year, then <span className="text-[var(--accent)]">c# mvc .net</span> in the second year, and web dev (<span className="text-[var(--accent)]">js + php</span>) in the final year. that's when i decided to become a web dev.
              </p>
              <p>
                currently doing <span className="text-[var(--accent)]">ccna</span> to learn about networks. i primarily use <span className="text-[var(--accent)]">windows</span> on my desktop (college programs and gaming), but i do use <span className="text-[var(--accent)]">linux</span> on 2 laptops — currently trying <span className="text-[var(--accent)]">arch</span> (omarchy) and <span className="text-[var(--accent)]">ubuntu</span> with omakube.
              </p>
              <p>
                i normally use <span className="text-[var(--accent)]">typescript</span> for my web projects and <span className="text-[var(--accent)]">java</span> because of college.
              </p>
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--border-color)] pt-10">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./interests</h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((item) => (
                <span
                  key={item}
                  className="px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-base font-mono hover:border-[var(--accent-purple)] hover:text-[var(--accent-purple)] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--border-color)] pt-10">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./currently-learning</h2>
            <div className="flex flex-wrap gap-3">
              {currentlyLearning.map((item) => (
                <span
                  key={item}
                  className="px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-base font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-[var(--border-color)] pt-10">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] font-mono">./fun</h2>
            <div className="space-y-3 text-lg text-[var(--text-secondary)]">
              <p>
                <strong className="text-[var(--text-primary)]">favorite anime:</strong>{' '}
                <span className="text-[var(--accent)]">Shingeki no Kyojin</span>
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">favorite games:</strong> Minecraft, Valorant
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">interests:</strong> anime, music, kdramas, videogames, cybersecurity, math, singing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

