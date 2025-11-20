'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';

export function ConditionalNav() {
  const pathname = usePathname();

  // Hide navigation on homepage since it has its own integrated navbar
  if (pathname === '/') {
    return null;
  }

  return <Navigation />;
}

