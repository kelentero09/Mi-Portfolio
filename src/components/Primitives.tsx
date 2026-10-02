import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

/* -------------------------------------------------------------------------- */
/*  Badge                                                                     */
/* -------------------------------------------------------------------------- */

export function Badge({
  children,
  className,
  tone = 'neutral',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'neutral' | 'accent';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.66rem] font-medium tracking-[0.08em] uppercase',
        tone === 'accent'
          ? 'border-accent/35 bg-accent-soft text-accent'
          : 'border-line bg-surface-2 text-fg-subtle',
        className,
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  TechBadge — technologies listed on project cards                           */
/* -------------------------------------------------------------------------- */

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface-2/80 px-2 py-1 font-mono text-[0.68rem] leading-none text-fg-muted">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card                                                                      */
/* -------------------------------------------------------------------------- */

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-line-strong bg-surface-2 shadow-soft',
        interactive &&
          'transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_24px_48px_-30px_var(--glow)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow                                                                   */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-fg-subtle uppercase',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-accent/70" />
      {children}
    </p>
  );
}