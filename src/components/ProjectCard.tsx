import { cn, externalLinkProps } from '../lib/cn';
import { primaryLink, secondaryLink } from '../data/projects';
import { placeholderFor } from '../data/previewPlaceholders';
import type { Project } from '../types';
import { ArrowUpRightIcon, GitHubIcon } from './Icons';
import { TechBadge } from './Primitives';

const PreviewFrame = ({ project, className }: { project: Project; className?: string }) => {
  const placeholder = placeholderFor(project.slug);
  const link = primaryLink(project);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-surface-3',
        // Featured cards fill their column on wide screens; standard cards keep
        // a consistent 16:10 ratio.
        project.size === 'feature' ? 'aspect-[16/10] xl:aspect-auto xl:h-full' : 'aspect-[16/10]',
        className,
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
          className="group/preview absolute inset-0 block"
          {...externalLinkProps(link.href)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            src={project.preview}
            alt={project.previewAlt}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="relative size-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/preview:scale-[1.035] motion-reduce:transition-none"
          />
        </a>
      ) : (
        <img
          src={project.preview}
          alt={project.previewAlt}
          width={1440}
          height={900}
          loading="lazy"
          decoding="async"
          className="relative size-full object-cover object-top"
        />
      )}

      {/* Edge fades keep the screenshot inside the card. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/85 via-transparent to-transparent opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <span className="absolute top-3.5 right-3.5 grid size-9 place-items-center rounded-full border border-line bg-surface/80 text-fg-muted opacity-0 backdrop-blur-sm transition-[opacity,transform,color] duration-400 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transition-none">
        <ArrowUpRightIcon className="size-4" />
      </span>
    </div>
  );
};

const ActionLink = ({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: 'primary' | 'secondary';
}) => {
  const isRepo = href.includes('github.com');
  const classes = cn(
    'inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-[0.8rem] font-medium transition-[background-color,border-color,color] duration-300',
    variant === 'primary'
      ? 'border-accent/40 bg-accent-soft text-accent hover:border-accent hover:bg-accent hover:text-accent-contrast'
      : 'border-line text-fg-muted hover:border-line-strong hover:text-fg',
  );

  return (
    <a href={href} className={classes} {...externalLinkProps(href)}>
      {isRepo ? <GitHubIcon className="size-3.5" /> : <ArrowUpRightIcon className="size-3.5" />}
      {children}
    </a>
  );
};

export function ProjectCard({ project }: { project: Project }) {
  const feature = project.size === 'feature';
  const primary = primaryLink(project);
  const secondary = secondaryLink(project);

  return (
    <article
      className={cn(
        'relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface',
        'group transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:-translate-y-1 hover:border-line-strong',
        'hover:shadow-[0_28px_52px_-30px_var(--glow)]',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        // Featured cards split into preview + copy side by side on wide screens.
        feature && 'xl:grid xl:grid-cols-[1.12fr_1fr]',
      )}
    >
      <PreviewFrame project={project} />

      <div
        className={cn(
          'flex flex-1 flex-col p-5 sm:p-6',
          feature && 'xl:justify-center xl:p-8',
        )}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.64rem] font-medium tracking-[0.16em] text-accent uppercase">
            {project.category}
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
              <ActionLink href={primary.href} variant="primary">
                {primary.label}
              </ActionLink>
            ) : null}
            {secondary ? (
              <ActionLink href={secondary.href} variant="secondary">
                {secondary.label}
              </ActionLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}