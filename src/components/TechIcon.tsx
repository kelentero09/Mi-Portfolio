import type { ReactElement, SVGProps } from 'react';
import type { SkillIconName } from '../types';

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
} as const;

/**
 * Compact, licence-safe marks for each technology. Shapes are simplified
 * geometric interpretations rather than exact brand logos, which keeps the
 * set visually consistent in a single accent colour. Names are always shown
 * as text alongside, so the mark is decoration, not the only identifier.
 */
const marks: Record<SkillIconName, (props: IconProps) => ReactElement> = {
  javascript: () => (
    <svg {...stroke}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
      <path d="M11 10.2a2.6 2.6 0 1 0 0 3.6" />
      <path d="M15.4 9.6h2.1v5.2c0 1.3-.8 2.1-2 2.1-.9 0-1.5-.4-1.8-1.1" />
    </svg>
  ),
  typescript: () => (
    <svg {...stroke}>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4" />
      <path d="M6.6 10.6h4.6M8.9 10.6v5.6" />
      <path d="M12.9 16.2v-4.3c0-.8.5-1.4 1.4-1.4s1.4.5 1.4 1.4v4.3M15.7 13.6h2.9" />
    </svg>
  ),
  react: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="1.9" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M8.8 15.6V8.4l6.9 9.9M15 8.4h1.6v3.2" />
    </svg>
  ),
  html: () => (
    <svg {...stroke}>
      <path d="M6.5 3.5h7.5l4 4v13h-11.5v-17Z" />
      <path d="M14 3.5v4h4" />
      <path d="m9 11.5-1.8 2.4L9 16.5M13.4 11.5h2.2M15.6 11.5l-1.6 5" />
    </svg>
  ),
  css: () => (
    <svg {...stroke}>
      <path d="M6.5 3.5h11l-1 13.2-4.5 1.8-4.5-1.8L6.5 3.5Z" />
      <path d="M9 8.6h6.6M8.6 12.2h6.6M10.3 16.3l3.4.9v1.9" />
    </svg>
  ),
  tailwind: () => (
    <svg {...stroke} strokeWidth={1.5}>
      <path d="M12 6.2c-2.7 0-4.3 1.3-5 4 1-1.4 2.2-1.9 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1.1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.4-2.2 1.9-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-1.1-2.1-2.2-4.6-2.2Z" />
      <path d="M7 12.2c-2.7 0-4.3 1.3-5 4 1-1.4 2.2-1.9 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1.1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.4-2.2 1.9-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-1.1-2.1-2.2-4.6-2.2Z" />
    </svg>
  ),
  node: () => (
    <svg {...stroke}>
      <path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" />
      <path d="M9.4 15.4V8.6l5.2 6.8V8.6" />
    </svg>
  ),
  rest: () => (
    <svg {...stroke}>
      <path d="M6.5 8 3 12l3.5 4M17.5 8 21 12l-3.5 4M14 5l-4 14" />
    </svg>
  ),
  integration: () => (
    <svg {...stroke}>
      <circle cx="5.5" cy="18" r="2.3" />
      <circle cx="18.5" cy="6" r="2.3" />
      <circle cx="18.5" cy="18" r="2.3" />
      <path d="m7.4 16.7 9.4-9.4M7.8 18h8.4" />
    </svg>
  ),
  postgres: () => (
    <svg {...stroke}>
      <ellipse cx="12" cy="5.6" rx="7.2" ry="3.1" />
      <path d="M4.8 5.6v6c0 1.7 3.2 3.1 7.2 3.1s7.2-1.4 7.2-3.1v-6" />
      <path d="M4.8 11.6v6c0 1.7 3.2 3.1 7.2 3.1s7.2-1.4 7.2-3.1v-6" />
    </svg>
  ),
  prisma: () => (
    <svg {...stroke}>
      <path d="M12 3.4 21.5 20H2.5L12 3.4Z" />
      <path d="M12 10.6 16.4 18H7.6l4.4-7.4Z" />
    </svg>
  ),
  git: () => (
    <svg {...stroke}>
      <circle cx="6.5" cy="5" r="2.3" />
      <circle cx="6.5" cy="19" r="2.3" />
      <circle cx="17.5" cy="8" r="2.3" />
      <path d="M6.5 7.3v9.4M17.5 10.3c0 3.6-2.6 5.2-6.6 5.4" />
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.9 17.7 3.9 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  vercel: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" aria-hidden focusable="false">
      <path d="M12 3.2 21.8 20.8H2.2L12 3.2Z" />
      <path d="M12 9.6 16.8 18.4H7.2L12 9.6Z" />
    </svg>
  ),
  supabase: () => (
    <svg {...stroke}>
      <path d="M13.6 2.4 4.2 13.6h6.1L10 21.6l9.8-11.7h-6.4l.2-7.5Z" />
    </svg>
  ),
  linux: () => (
    <svg {...stroke}>
      <rect x="2.75" y="4.25" width="18.5" height="15.5" rx="3" />
      <path d="m7 10 2.5 2.5L7 15M13 15.5h4" />
    </svg>
  ),
  wordpress: () => (
    <svg {...stroke}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m7.1 9.5 1.8 5.9 2.1-4.2 1.7 4.2 2-5.9" />
    </svg>
  ),
  elementor: () => (
    <svg {...stroke}>
      <rect x="3.25" y="4.25" width="17.5" height="15.5" rx="2.5" />
      <path d="M3.25 8.75h17.5" />
      <rect x="6" y="11.75" width="4.5" height="4.5" rx="1" />
      <path d="M13.5 12.5h4.5M13.5 15.5h3" />
    </svg>
  ),
  webflow: () => (
    <svg {...stroke}>
      <path d="M2.9 9.4c1.9 0 2.7 5.1 4.5 5.1 1.5 0 2.1-3.2 3.4-3.2 1.3 0 1.9 3.2 3.4 3.2 1.8 0 2.6-5.1 4.5-5.1" />
      <path d="M4.6 6.4 12 3.9l7.4 2.5" />
    </svg>
  ),
};

export function TechIcon({ name, className }: { name: SkillIconName; className?: string }) {
  const Mark = marks[name];
  return <Mark className={className} />;
}