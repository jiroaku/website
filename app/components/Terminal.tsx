'use client';

import { useEffect, useState } from 'react';

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
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const message = messages[messageIndex];

    if (isTyping) {
      if (charIndex < message.length) {
        const timer = setTimeout(() => {
          setCurrentMessage(message.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait before clearing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      // Clear message
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setCurrentMessage(message.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        // Move to next message
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [messageIndex, charIndex, isTyping]);

  return (
    <div className="border border-[var(--border-color)] p-4 bg-[var(--bg-secondary)] font-mono text-sm">
      <div className="text-[var(--text-secondary)]">
        <span className="text-[var(--accent)]">$</span>{' '}
        <span>{currentMessage}</span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}

