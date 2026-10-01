import { useEffect, useState } from 'react';

/**
 * Scroll-spy for the header. Reports the last section whose top edge has
 * passed the reading line (header height + breathing room), which is more
 * predictable than a plain IntersectionObserver when sections have very
 * different heights. Work is batched into one animation frame per scroll.
 */
export function useActiveSection(ids: readonly string[], offset = 130): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const readingLine = window.scrollY + offset;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current = ids[0] ?? '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= readingLine) current = id;
      }

      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActive((previous) => (previous === current ? previous : current));
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ids, offset]);

  return active;
}