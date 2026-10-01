import type { MouseEventHandler, ReactNode } from 'react';
import { cn, externalLinkProps } from '../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: Variant;
  size?: Size;
  /** Rendered before the label. */
  leading?: ReactNode;
  /** Rendered after the label. */
  trailing?: ReactNode;
  className?: string;
  'aria-label'?: string;
  title?: string;
}

const base =
  'group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-px disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-surface hover:shadow-[0_10px_30px_-12px_var(--glow)] hover:brightness-110 dark:bg-accent dark:text-accent-contrast dark:hover:brightness-110',
  secondary:
    'border border-line-strong bg-surface-2/60 text-fg hover:border-accent/55 hover:bg-accent-soft hover:text-accent',
  ghost: 'text-fg-muted hover:bg-surface-2 hover:text-fg',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[0.82rem]',
  md: 'h-11 px-5 text-[0.92rem] sm:h-12 sm:px-6 sm:text-[0.95rem]',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  leading,
  trailing,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {leading}
      <span>{children}</span>
      {trailing}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...externalLinkProps(href)} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}