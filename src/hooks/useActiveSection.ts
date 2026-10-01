import { useEffect, useState } from 'react';

/** Matches the fixed site header. */
const HEADER_SELECTOR = 'header';

/**
 * How far below the header a section must start before it counts as current.
 * Needed because an anchor jump lands the target just under the header, which
 * is *above* a line placed at the header's edge — without the buffer the
 * highlight would lag a section behind the one you just clicked.
 */
const READING_BUFFER = 24;

function readHeaderHeight(): number {
  const header = document.querySelector<HTMLElement>(HEADER_SELECTOR);
  return header?.getBoundingClientRect().height ?? 0;
}

/**
 * Scroll-spy for the header. Reports the last section whose top edge has
 * passed the reading line, which is more predictable than a plain
 * IntersectionObserver when sections have very different heights. The line is
 * measured from the live header height so it stays correct as the header
 * changes size between mobile (`h-16`) and desktop (`h-20`). Work is batched
 * into one animation frame per scroll.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      const readingLine = window.scrollY + readHeaderHeight() + READING_BUFFER;
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
  }, [ids]);

  return active;
}
