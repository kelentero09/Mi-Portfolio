import type { PointerEvent } from 'react';
import { flushSync } from 'react-dom';

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

/**
 * Runs a state update inside a View Transition so the browser animates
 * between the before and after layouts (cross-fade, plus position morphs for
 * elements that carry a `view-transition-name`).
 *
 * Falls back to a plain update where the API is missing or the visitor
 * prefers reduced motion.
 */
export function withViewTransition(update: () => void): void {
  const doc = document as ViewTransitionDocument;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || typeof doc.startViewTransition !== 'function') {
    update();
    return;
  }

  doc.startViewTransition(() => flushSync(update));
}

/**
 * Pointer handler for `.spotlight` surfaces: records the cursor position as
 * CSS variables so the glow in index.css can follow it. Writes straight to
 * the element — no React state, no re-render.
 */
export function trackSpotlight(event: PointerEvent<HTMLElement>): void {
  if (event.pointerType === 'touch') return;
  const target = event.currentTarget;
  const bounds = target.getBoundingClientRect();
  target.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
  target.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
}
