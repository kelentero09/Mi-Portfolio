import { useCallback, useLayoutEffect, useState } from 'react';
import { withViewTransition } from '../lib/motion';
import type { Theme } from '../types';

const STORAGE_KEY = 'theme';

function readInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* Storage blocked (private mode) — fall through to the system preference. */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/**
 * Theme state. The correct theme is already applied to <html> by the inline
 * script in index.html, so this hook only keeps React in sync and persists
 * the choice — no flash of the wrong theme on first paint.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  // Layout effect so the class is on <html> before a View Transition takes
  // its "after" snapshot.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Ignore write failures — the theme still applies for this session. */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    withViewTransition(() => {
      setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    });
  }, []);

  return { theme, setTheme, toggleTheme };
}