import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../lib/cn';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { observeReveal, unobserveReveal } from '../lib/revealObserver';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Distance in pixels to travel on entry. */
  distance?: number;
  /** Render fully visible straight away, skipping the entrance. */
  disabled?: boolean;
  /** Extra inline styles, merged under the animated ones. */
  style?: CSSProperties;
}

/**
 * Fade, rise and sharpen on scroll. Uses the page-wide shared
 * IntersectionObserver and renders fully visible when the visitor prefers
 * reduced motion.
 *
 * Always renders a `div`, so wrap it in the semantic element you need
 * (for example an `<li>`) rather than relying on a polymorphic `as` prop.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  disabled = false,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const skip = reducedMotion || disabled;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Nothing to observe when the entrance is skipped: the inline style below
    // already renders the content fully visible, so the element is done.
    if (skip) return;

    const handle = (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;
      setShown(true);
      unobserveReveal(element);
    };

    observeReveal(element, handle);
    return () => unobserveReveal(element);
  }, [skip]);

  const visible = shown || skip;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform,filter] duration-[850ms] ease-out-soft motion-reduce:transition-none',
        className,
      )}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translate3d(0, ${distance}px, 0) scale(0.985)`,
        filter: visible ? 'none' : 'blur(6px)',
        // Once revealed, drop the stagger so later transitions are immediate.
        transitionDelay: visible && !shown ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
