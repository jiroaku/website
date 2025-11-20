import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-8 lg:px-12 py-20">
        <div className="space-y-8 text-center">
          <div>
            <span className="font-mono text-base text-[var(--text-muted)]">$</span>
            <span className="font-mono text-lg text-[var(--accent)] ml-2">cat 404.txt</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)]">
            lost in the void
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist, was moved, or never made it out of
            dev. Grab a coffee, double-check the URL, or jump back to a safe sector.
          </p>

          <div className="relative w-full overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <Image
              src="/404.jpg"
              alt="Custom 404 artwork"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-6 py-3 border border-[var(--border-color)] font-mono text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            >
              return home →
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              view projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

