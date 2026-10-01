import { cn } from '../lib/cn';
import { site } from '../data/site';

/** Monogram mark, matching `public/favicon.svg`. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false" className={className}>
      <g stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 20 13 32l11 12" />
        <path d="M40 20l11 12-11 12" />
      </g>
      <path d="M35 17 29 47" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  showRole = true,
}: {
  className?: string;
  showRole?: boolean;
}) {
  return (
    <a
      href="#home"
      className={cn('group flex items-center gap-3 rounded-lg', className)}
      aria-label={`${site.name} — back to top`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent-soft">
        <Monogram className="size-5" />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate text-[0.92rem] font-semibold tracking-tight text-fg">
          {site.name}
        </span>
        {showRole ? (
          <span className="mt-1 font-mono text-[0.6rem] tracking-[0.16em] text-fg-subtle uppercase">
            {site.role}
          </span>
        ) : null}
      </span>
    </a>
  );
}