import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
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
}

/**
 * Fade-and-rise on scroll. Uses the page-wide shared IntersectionObserver and
 * renders fully visible when the visitor prefers reduced motion.
 *
 * Always renders a `div`, so wrap it in the semantic element you need
 * (for example an `<li>`) rather than relying on a polymorphic `as` prop.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Nothing to observe when motion is reduced: the inline style below
    // already renders the content fully visible, so the element is done.
    if (reducedMotion) return;

    const handle = (entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return;
      setShown(true);
      unobserveReveal(element);
    };

    observeReveal(element, handle);
    return () => unobserveReveal(element);
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        className,
      )}
      style={{
        opacity: shown || reducedMotion ? 1 : 0,
        transform: shown || reducedMotion ? 'none' : `translate3d(0, ${distance}px, 0)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}