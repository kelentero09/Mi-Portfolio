import type { ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Eyebrow } from './Primitives';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  /** Rendered on the right when the heading is left-aligned. */
  aside?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  aside,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6',
        centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'flex flex-col items-center')}>
        <Eyebrow className={cn(centered && 'justify-center')}>{eyebrow}</Eyebrow>
        <h2 className="mt-5 text-h2 text-balance">{title}</h2>
        {description ? (
          <p className="mt-5 text-lead text-pretty text-fg-muted">{description}</p>
        ) : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </Reveal>
  );
}