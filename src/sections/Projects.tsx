import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { cn } from '../lib/cn';
import { projects } from '../data/projects';
import { projectsContent } from '../data/site';

export function Projects() {
  return (
    <Section id="projects" divided>
      <Container size="wide">
        <SectionHeading
          eyebrow={projectsContent.eyebrow}
          title={projectsContent.heading}
          description={projectsContent.text}
        />

        {/* Below `md` the grid is a single column. From `md` it is two columns,
            and from `lg` a 6-column editorial grid driven by each project's
            `size` — see the note in data/projects.ts for the row arithmetic. */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 3) * 80}
              className={cn(
                'md:col-span-1',
                // The final card takes the whole `md` row so the two-column
                // layout never leaves a gap in the last line.
                index === projects.length - 1 && 'md:col-span-2',
                project.size === 'feature' ? 'lg:col-span-4' : 'lg:col-span-2',
              )}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}