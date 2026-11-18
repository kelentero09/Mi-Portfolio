import { cn, externalLinkProps } from '../lib/cn';
import { trackSpotlight } from '../lib/motion';
import { primaryLink, secondaryLink } from '../data/projects';
import { placeholderFor } from '../data/previewPlaceholders';
import type { Project } from '../types';
import { ArrowUpRightIcon, GitHubIcon } from './Icons';
import { TechBadge } from './Primitives';

/** `kelentero09.github.io/AAA` — shown in the mock browser bar. */
function displayUrl(href: string): string {
  return href.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

const PreviewFrame = ({ project, feature }: { project: Project; feature: boolean }) => {
  const placeholder = placeholderFor(project.slug);
  const link = primaryLink(project);

  const image = (
    <img
      src={project.preview}
      alt={project.previewAlt}
      width={1440}
      height={900}
      loading="lazy"
      decoding="async"
      className="relative size-full object-cover object-top transition-transform duration-[1100ms] ease-out-soft group-hover:scale-[1.04] motion-reduce:transition-none"
    />
  );

  return (
    <div className={cn('flex flex-col bg-surface-3', feature && 'xl:h-full')}>
      {/* mock browser bar */}
      <div
        aria-hidden="true"
        className="flex h-8 shrink-0 items-center gap-3 border-b border-line bg-surface-2 px-3.5"
      >
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong transition-colors duration-500 group-hover:bg-accent/70" />
          <span className="size-2 rounded-full bg-line-strong transition-colors delay-75 duration-500 group-hover:bg-accent/45" />
          <span className="size-2 rounded-full bg-line-strong transition-colors delay-150 duration-500 group-hover:bg-accent/25" />
        </span>
        {link ? (
          <span className="min-w-0 flex-1 truncate font-mono text-[0.62rem] text-fg-subtle">
            {displayUrl(link.href)}
          </span>
        ) : null}
      </div>

      <div
        className={cn(
          'relative overflow-hidden',
          // Featured cards fill their column on wide screens; standard cards
          // keep a consistent 16:10 ratio.
          feature ? 'aspect-[16/10] xl:aspect-auto xl:min-h-0 xl:flex-1' : 'aspect-[16/10]',
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-110 bg-cover bg-center blur-xl"
          style={placeholder ? { backgroundImage: `url(${placeholder})` } : undefined}
        />
        {link ? (
          <a
            href={link.href}
            className="absolute inset-0 block"
            {...externalLinkProps(link.href)}
            tabIndex={-1}
            aria-hidden="true"
          >
            {image}
          </a>
        ) : (
          image
        )}

        {/* Edge fade keeps the screenshot inside the card. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-2/90 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-25"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-3.5 right-3.5 grid size-9 translate-y-1 scale-90 place-items-center rounded-full border border-line bg-surface/85 text-accent opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-500 ease-out-soft group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
        >
          <ArrowUpRightIcon className="size-4" />
        </span>
      </div>
    </div>
  );
};

const ActionLink = ({
  href,
  children,
  variant,
  label,
}: {
  href: string;
  children: string;
  variant: 'primary' | 'secondary';
  label: string;
}) => {
  const isRepo = href.includes('github.com');
  const classes = cn(
    'group/link inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-[0.8rem] font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-soft active:translate-y-px',
    variant === 'primary'
      ? 'border-accent/40 bg-accent-soft text-accent hover:border-accent hover:bg-accent hover:text-accent-contrast'
      : 'border-line text-fg-muted hover:border-line-strong hover:text-fg',
  );

  return (
    <a href={href} className={classes} aria-label={label} {...externalLinkProps(href)}>
      {isRepo ? (
        <GitHubIcon className="size-3.5" />
      ) : (
        <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 ease-out-soft group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      )}
      {children}
    </a>
  );
};

interface ProjectCardProps {
  project: Project;
  /** 1-based position in the full list, shown as an editorial index. */
  index: number;
  /** Forces the compact layout, e.g. while a filter is active. */
  compact?: boolean;
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const feature = project.size === 'feature' && !compact;
  const primary = primaryLink(project);
  const secondary = secondaryLink(project);

  return (
    <article
      onPointerMove={trackSpotlight}
      className={cn(
        'spotlight relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface-2',
        'group transition-[border-color,box-shadow,transform] duration-500 ease-out-soft',
        'shadow-soft',
        'hover:-translate-y-1.5 hover:border-accent/45',
        'hover:shadow-[0_32px_60px_-32px_var(--glow)]',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        // Featured cards split into preview + copy side by side on wide screens.
        feature && 'xl:grid xl:grid-cols-[1.12fr_1fr]',
      )}
    >
      <PreviewFrame project={project} feature={feature} />

      <div
        className={cn(
          'relative z-10 flex flex-1 flex-col p-5 sm:p-6',
          feature && 'xl:justify-center xl:p-8',
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[0.64rem] font-medium tracking-[0.16em] text-accent uppercase">
            {project.category}
          </span>
          <span
            aria-hidden="true"
            className="font-mono text-[0.64rem] tracking-[0.12em] text-fg-subtle transition-colors duration-500 group-hover:text-accent"
          >
            {String(index).padStart(2, '0')}
          </span>
        </div>

        <h3 className={cn('mt-2.5 font-semibold text-balance', feature ? 'text-h2' : 'text-h3')}>
          {project.name}
        </h3>

        <p
          className={cn(
            'mt-3 text-pretty text-fg-muted',
            feature ? 'text-[0.98rem] leading-relaxed' : 'text-[0.9rem] leading-relaxed',
          )}
        >
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechBadge>{technology}</TechBadge>
            </li>
          ))}
        </ul>

        {primary || secondary ? (
          // `mt-auto` keeps the CTAs aligned to the bottom when cards in the
          // same grid row have different heights.
          <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
            {primary ? (
              <ActionLink
                href={primary.href}
                variant="primary"
                label={`${primary.label}: ${project.name}`}
              >
                {primary.label}
              </ActionLink>
            ) : null}
            {secondary ? (
              <ActionLink
                href={secondary.href}
                variant="secondary"
                label={`${secondary.label}: ${project.name}`}
              >
                {secondary.label}
              </ActionLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
