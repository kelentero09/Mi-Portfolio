import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** `wide` is used by the editorial project grid. */
  size?: 'default' | 'wide';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-7',
        size === 'wide' ? 'max-w-7xl' : 'max-w-6xl',
        'lg:px-10',
        className,
      )}
    >
      {children}
    </div>
  );
}