import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function readInitial(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(QUERY).matches;
}

/** Initialised synchronously so motion-sensitive UI never flashes. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(readInitial);

  // Only subscribes to later changes: the initial value was already read
  // synchronously by `readInitial`, so re-reading it here would be a
  // redundant setState that triggers a second render pass.
  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reduced;
}