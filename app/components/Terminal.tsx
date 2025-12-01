'use client';

import { useEffect, useRef, useState } from 'react';

class TextScrambleEffect {
  el: HTMLElement;
  chars: string;
  frame: number;
  frameRequest: number | null;
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>;
  resolve?: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}?=+*^?#________';
    this.frame = 0;
    this.frameRequest = null;
    this.queue = [];
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => {
      this.resolve = resolve;
    });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 75);
      const end = start + Math.floor(Math.random() * 75);
      this.queue.push({ from, to, start, end });
    }
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
    }
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      if (this.resolve) {
        this.resolve();
      }
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const messages = [
  '> initializing dev environment...',
  '> compiling code... done.',
  '> running tests... all passed ✓',
  '> deploying to production...',
  '> building docker image...',
  '> npm install... dependencies resolved',
  '> git commit -m "feat: add cool feature"',
  '> fixing bugs... 0 errors found',
  '> optimizing bundle size...',
  '> running linter... no issues',
  '> connecting to database... connected',
  '> starting server... listening on port 3000',
  '> type checking... no errors',
  '> building for production...',
  '> analyzing code... 100% coverage',
  '> merging pull request...',
  '> code review complete... approved',
  '> pushing to remote... done',
  '> hot reload active... watching files',
  '> cache cleared... rebuilding',
];

export function Terminal() {
  const messageRef = useRef<HTMLSpanElement>(null);
  const fxRef = useRef<TextScrambleEffect | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!messageRef.current) return;

    if (!fxRef.current) {
      fxRef.current = new TextScrambleEffect(messageRef.current);
    }

    const fx = fxRef.current;
    const message = messages[messageIndex];
    setIsScrambling(true);

    let timer: NodeJS.Timeout | null = null;

    fx.setText(message).then(() => {
      setIsScrambling(false);
      // Wait before moving to next message
      const delay = Math.min(Math.max(message.length * 100, 2000), 4000);
      timer = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, delay);
    });

    // Cleanup
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (fxRef.current && fxRef.current.frameRequest) {
        cancelAnimationFrame(fxRef.current.frameRequest);
      }
    };
  }, [messageIndex]);

  return (
    <div className="border border-[var(--border-color)] p-4 bg-[var(--bg-secondary)] font-mono text-sm">
      <div className="text-[var(--text-secondary)]">
        <span className="text-[var(--accent)]">$</span>{' '}
        <span ref={messageRef}></span>
        {!isScrambling && <span className="animate-pulse">_</span>}
      </div>
    </div>
  );
}

