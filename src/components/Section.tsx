import type { ElementType, ReactNode } from 'react';
import { cn } from '../lib/cn';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: ElementType;
  spacing?: 'default' | 'compact' | 'roomy';
  /** Adds the hairline separator used between major blocks. */
  divided?: boolean;
}

const spacingMap = {
  compact: 'py-14 sm:py-16',
  default: 'py-20 sm:py-24 lg:py-28',
  roomy: 'py-24 sm:py-28 lg:py-36',
} as const;

export function Section({
  id,
  children,
  className,
  as: Tag = 'section',
  spacing = 'default',
  divided = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'relative scroll-mt-24',
        spacingMap[spacing],
        divided && 'border-t border-line',
        className,
      )}
    >
      {children}
    </Tag>
  );
}