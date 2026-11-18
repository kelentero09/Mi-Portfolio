import { useState } from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { cn } from '../lib/cn';
import { withViewTransition } from '../lib/motion';
import { projectFilters, projects } from '../data/projects';
import type { ProjectFilter } from '../data/projects';
import { projectsContent } from '../data/site';

const countFor = (filter: ProjectFilter) =>
  filter === 'all' ? projects.length : projects.filter((p) => p.stack === filter).length;

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  // Once a filter has been used, cards appear through the view transition
  // instead of the scroll reveal, so the two animations never stack.
  const [touched, setTouched] = useState(false);

  const filtered = filter !== 'all';
  const visible = filtered ? projects.filter((project) => project.stack === filter) : projects;

  const select = (next: ProjectFilter) => {
    if (next === filter) return;
    withViewTransition(() => {
      setFilter(next);
      setTouched(true);
    });
  };

  return (
    <Section id="projects" divided>
      <Container size="wide">
        <SectionHeading
          eyebrow={projectsContent.eyebrow}
          title={projectsContent.heading}
          description={projectsContent.text}
          aside={
            <p className="font-mono text-[0.72rem] tracking-[0.14em] text-fg-subtle uppercase">
              {projects.length} projects
            </p>
          }
        />

        <Reveal delay={80} className="mt-10">
          <div
            role="group"
            aria-label="Filter projects by stack"
            className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible"
          >
            {projectFilters.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => select(item.id)}
                  className={cn(
                    'inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-[0.84rem] font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-300 ease-out-soft active:scale-[0.97]',
                    isActive
                      ? 'border-accent/50 bg-accent-soft text-accent'
                      : 'border-line bg-surface-2/60 text-fg-muted hover:border-line-strong hover:text-fg',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'font-mono text-[0.66rem] transition-colors duration-300',
                      isActive ? 'text-accent' : 'text-fg-subtle',
                    )}
                  >
                    {countFor(item.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Below `md` the grid is a single column. From `md` it is two columns,
            and from `lg` a 6-column editorial grid driven by each project's
            `size` — see the note in data/projects.ts for the row arithmetic.
            While a filter is active every card uses the compact layout, so any
            subset still fills its rows. */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
          {visible.map((project, index) => {
            const feature = project.size === 'feature' && !filtered;
            const isLast = index === visible.length - 1;
            return (
              <Reveal
                key={project.slug}
                delay={(index % 3) * 80}
                disabled={touched}
                // Named so the browser can morph each card to its new grid
                // position when the filter changes.
                style={{ viewTransitionName: `project-${project.slug}` }}
                className={cn(
                  'md:col-span-1',
                  // An odd final card takes the whole `md` row so the
                  // two-column layout never leaves a gap in the last line.
                  isLast && visible.length % 2 === 1 && 'md:col-span-2',
                  feature ? 'lg:col-span-4' : 'lg:col-span-2',
                )}
              >
                <ProjectCard
                  project={project}
                  index={projects.indexOf(project) + 1}
                  compact={filtered}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
