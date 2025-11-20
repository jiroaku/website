'use client';

import { AudioPlayer } from '../components/AudioPlayer';

interface VoiceDemo {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  project: string;
  timestamp?: string;
  notes?: string;
}

const demos: VoiceDemo[] = [
  {
    id: '1',
    title: 'Minecraft Event - Character Introduction',
    description: 'character introduction for a minecraft community event.',
    audioUrl: '/audio/demo1.mp3',
    duration: '0:45',
    project: 'Minecraft Community Event 2024',
    notes: 'energetic, friendly tone',
  },
  {
    id: '2',
    title: 'Narrative Voiceover - Story Opening',
    description: 'opening narration for a story-driven minecraft mod.',
    audioUrl: '/audio/demo2.mp3',
    duration: '1:20',
    project: 'Story Mod Project',
    notes: 'mysterious, engaging',
  },
  {
    id: '3',
    title: 'Commercial Voice - Studio Promo',
    description: 'promotional voiceover for tridnio studios.',
    audioUrl: '/audio/demo3.mp3',
    duration: '0:30',
    project: 'Tridnio Studios',
    notes: 'professional, clear',
  },
  {
    id: '4',
    title: 'Character Voice - NPC Dialogue',
    description: 'npc dialogue lines for a minecraft adventure map.',
    audioUrl: '/audio/demo4.mp3',
    duration: '2:15',
    project: 'Adventure Map Project',
    notes: 'character-specific voice, multiple lines',
  },
];

export default function VoiceDemos() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-12rem)]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
              voice demos
            </h1>
            <p className="text-[var(--text-secondary)]">
              collection of voice acting work for minecraft events and studio projects.
            </p>
          </div>

          <div className="space-y-6">
            {demos.map((demo) => (
              <article
                key={demo.id}
                className="border-b border-[var(--border-color)] pb-6 last:border-0"
                aria-label={`Voice demo: ${demo.title}`}
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {demo.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-sm text-[var(--text-secondary)]">{demo.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                    <span>
                      <strong>project:</strong> {demo.project}
                    </span>
                    <span>•</span>
                    <span>
                      <strong>duration:</strong> {demo.duration}
                    </span>
                  </div>
                  {demo.notes && (
                    <p className="text-xs text-[var(--text-secondary)] italic">
                      <strong>notes:</strong> {demo.notes}
                    </p>
                  )}
                  <AudioPlayer src={demo.audioUrl} title={demo.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

