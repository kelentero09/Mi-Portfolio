import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { TechIcon } from '../components/TechIcon';
import { CodeIcon, LayersIcon, WrenchIcon, LayoutIcon } from '../components/Icons';
import { skillGroups } from '../data/skills';
import { skillsContent } from '../data/site';

const groupIcons = [CodeIcon, LayersIcon, WrenchIcon, LayoutIcon];

export function Skills() {
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  return (
    <Section id="skills" divided>
      <Container>
        <SectionHeading
          eyebrow={skillsContent.eyebrow}
          title={skillsContent.heading}
          description={skillsContent.text}
          aside={
            <p className="font-mono text-[0.72rem] tracking-[0.14em] text-fg-subtle uppercase">
              {totalSkills} technologies
            </p>
          }
        />

        {/* Two columns from `md` up: the four groups fill a balanced 2x2 grid
            at every width, so the last row is never left with a gap. */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = groupIcons[groupIndex] ?? CodeIcon;
            return (
              <Reveal key={group.id} delay={groupIndex * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[0_24px_48px_-34px_var(--glow)] sm:p-7">
                  <header className="flex items-start gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-colors duration-300 group-hover:border-accent/45">
                      <GroupIcon className="size-[1.15rem]" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-h3">{group.title}</h3>
                      <p className="mt-1.5 text-[0.85rem] leading-relaxed text-fg-subtle">
                        {group.summary}
                      </p>
                    </div>
                  </header>

                  <ul className="mt-7 flex-1 space-y-4 border-t border-line pt-6">
                    {group.skills.map((skill) => (
                      <li key={skill.name} className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-fg-muted">
                          <TechIcon name={skill.icon} className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.9rem] font-medium text-fg">{skill.name}</span>
                          <span className="mt-0.5 block text-[0.78rem] leading-snug text-fg-subtle">
                            {skill.note}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}