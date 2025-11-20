import Image from 'next/image';
import Link from 'next/link';

interface VoiceEvent {
  id: string;
  name: string;
  year: string;
  role: string;
  description: string[];
  clientName: string;
  clientUrl: string;
  clientImage?: string;
  logo?: string;
}

interface VoiceVideo {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  thumbnail?: string;
  clientName?: string;
  clientImage?: string;
  embedUrl?: string;
}

const voiceEvents: VoiceEvent[] = [
  {
    id: 'silver-games-2024',
    name: 'SilverGames',
    year: '2025',
    role: 'Lead Voice Narrator ',
    description: [
      'I served as the main voice of the entire event. Continuous narration during the live experience, providing context for each phase and maintaining a recognizable vocal identity throughout the project’s cinematic presentation.',
    ],
    clientName: 'Drufete',
    clientUrl: 'https://www.twitch.tv/drufete',
    clientImage: '/voice-events/drufete.png',
    logo: '/voice-events/silver-games.png',
  },
  {
    id: 'shadoune-games-2023',
    name: 'Shadoune Games',
    year: '2025',
    role: 'Cinematic Narrator & Character Voice Actor (Bomber Guard) ',
    description: [
      'Official narrator for the event’s cinematics, bringing cohesion and an epic tone to the lore.',
      'I also voice the Bomber Guard, an in-universe character, adding personality, presence, and dramatic performance to key scenes.',
    ],
    clientName: 'Shadoune',
    clientUrl: 'https://www.twitch.tv/shadoune666',
    clientImage: '/voice-events/shadoune.png',
    logo: '/voice-events/shadoune-games.png',
  },
  {
    id: 'steal-games-2025',
    name: 'Steal Games',
    year: '2025',
    role: 'Event Introducer & Hype Voice ',
    description: [
      'I perform the opening voice lines that introduce the event and set the overall energy.',
      'My work includes the official event intro voiceover.',
    ],
    clientName: 'LaosOneView',
    clientUrl: 'https://www.twitch.tv/laosoneview',
    clientImage: '/voice-events/laosoneview.png',
    logo: '/voice-events/steal-games.png',
  },
];

const voiceVideos: VoiceVideo[] = [
  {
    id: 'imitadores-actor',
    title: '10 Imitadores vs 1 Actor de Doblaje (VRChat)',
    subtitle: '10 impressionists vs 1 voice actor',
    description: 'VRChat guessing show where I performed as Thanos, matching the MCU tone live.',
    url: 'https://youtu.be/VGpnb7uGXng?si=macR_l81tikG4535',
    embedUrl: 'https://www.youtube.com/embed/VGpnb7uGXng?si=7yvFeFBFXouIctnL',
    clientName: 'Tiroloco',
    clientImage: '/voice-events/tiroloco.png',
    thumbnail: '/voice-events/imitadores-actor.jpg',
  },
];

export default function VoicePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-16 py-16 space-y-12">
        <header className="space-y-4">
          <div>
            <span className="font-mono text-base text-[var(--text-muted)]">$</span>
            <span className="font-mono text-lg text-[var(--accent)] ml-2">cat voice.txt</span>
          </div>
          <p className="font-mono text-sm text-[var(--text-muted)]">voice acting</p>
          <h1 className="text-5xl font-bold text-[var(--text-primary)]">minecraft events & roles</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
            Stories, characters, and experiences performed with intention, presence, and style.
          </p>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
            I work on live events, cinematics, narrative projects, videos, roleplay series, and more.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="https://x.com/jiroaku"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              dm me on x.com
            </Link>
            <div className="px-6 py-3 text-sm font-mono text-[var(--text-secondary)] border border-dashed border-[var(--border-color)]">
              discord: <span className="text-[var(--text-primary)]">jiroaku</span>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">featured projects</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {voiceEvents.map((event) => (
              <article
                key={event.id}
                className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 space-y-6"
              >
                <div className="flex flex-col gap-6">
                  <div className="relative h-44 w-full overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-lg">
                    {event.logo ? (
                      <Image
                        src={event.logo}
                        alt={`${event.name} logo`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-6"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-mono text-[var(--text-muted)]">
                        logo coming soon
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-[var(--text-primary)] leading-tight">
                      {event.name}
                    </h3>
                    <p className="font-mono text-base text-[var(--text-muted)]">{event.year}</p>
                    <div className="pt-3 flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]">
                        {event.clientImage ? (
                          <Image
                            src={event.clientImage}
                            alt={`${event.clientName} avatar`}
                            fill
                            sizes="60px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[var(--text-muted)] text-xs font-mono">
                            img
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[var(--text-secondary)] text-xs uppercase tracking-wide font-mono">
                          client
                        </span>
                        <div>
                          <Link
                            href={event.clientUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-[var(--accent)] underline-offset-2 hover:underline"
                          >
                            {event.clientName}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-base font-mono text-[var(--accent)]">{event.role}</p>
                  {event.description.map((paragraph, index) => (
                    <p key={index} className="text-[var(--text-secondary)] text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">videos</h2>
          </div>
          {voiceVideos.length === 0 ? (
            <p className="text-[var(--text-muted)] text-sm font-mono">videos coming soon.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {voiceVideos.map((video) => (
                <article
                  key={video.id}
                  className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 space-y-4"
                >
                  <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)]">
                    {video.embedUrl ? (
                      <div className="relative w-full pt-[56.25%]">
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          className="absolute inset-0 h-full w-full rounded-2xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : video.thumbnail ? (
                      <div className="relative h-48 w-full">
                        <Image
                          src={video.thumbnail}
                          alt={`${video.title} thumbnail`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-48 w-full items-center justify-center text-sm font-mono text-[var(--text-muted)]">
                        video
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{video.title}</h3>
                    {video.subtitle && (
                      <p className="text-sm text-[var(--text-muted)] font-mono uppercase tracking-wide">
                        {video.subtitle}
                      </p>
                    )}
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {video.clientName && (
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]">
                            {video.clientImage ? (
                              <Image
                                src={video.clientImage}
                                alt={`${video.clientName} avatar`}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-[var(--text-muted)] text-xs font-mono">
                                img
                              </div>
                            )}
                          </div>
                          <div>
                            <span className="text-[var(--text-secondary)] text-xs uppercase tracking-wide font-mono">
                              client
                            </span>
                            <p className="text-sm font-semibold text-[var(--text-primary)]">
                              {video.clientName}
                            </p>
                          </div>
                        </div>
                      )}
                      <Link
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-[var(--accent)] hover:underline ml-auto"
                      >
                        watch on youtube →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

