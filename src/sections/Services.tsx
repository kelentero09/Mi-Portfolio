import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import {
  BriefcaseIcon,
  CodeIcon,
  LayersIcon,
  LayoutIcon,
  PlugIcon,
  WrenchIcon,
} from '../components/Icons';
import type { ServiceIconName } from '../types';
import { services } from '../data/services';
import { experienceRoles, educationEntries } from '../data/experience';
import { servicesContent } from '../data/site';
import { trackSpotlight } from '../lib/motion';

const serviceIcons: Record<ServiceIconName, typeof CodeIcon> = {
  code: CodeIcon,
  briefcase: BriefcaseIcon,
  layers: LayersIcon,
  plug: PlugIcon,
  wrench: WrenchIcon,
  layout: LayoutIcon,
};

export function Services() {
  return (
    <Section id="experience" divided>
      <Container>
        <SectionHeading
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.heading}
          description={servicesContent.text}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={(index % 3) * 80}>
                <article
                  onPointerMove={trackSpotlight}
                  className="spotlight group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-500 ease-out-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-32px_var(--glow)] motion-reduce:transition-none sm:p-7"
                >
                  <span className="relative z-10 grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent transition-[transform,border-color,background-color] duration-500 ease-out-soft group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:border-accent/45 group-hover:bg-accent-soft">
                    <Icon className="size-[1.15rem]" />
                  </span>

                  <h3 className="relative z-10 mt-6 text-h3">{service.title}</h3>
                  <p className="relative z-10 mt-3 flex-1 text-[0.92rem] leading-relaxed text-pretty text-fg-muted">
                    {service.description}
                  </p>

                  <p className="relative z-10 mt-6 border-t border-line pt-4 font-mono text-[0.68rem] tracking-[0.1em] text-fg-subtle">
                    {service.keywords}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ---------------- professional experience (appended, existing grid above untouched) ---------------- */}
        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-fg-subtle uppercase">
              Professional Experience
            </p>
            <h3 className="mt-3 text-h3 text-balance">Where I have worked.</h3>
          </Reveal>

          <ol className="mt-8 space-y-5">
            {experienceRoles.map((role, index) => (
              <Reveal key={`${role.company}-${role.title}`} delay={(index % 3) * 60}>
                <li className="rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-500 ease-out-soft hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[0_24px_48px_-34px_var(--glow)] sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[1rem] font-semibold tracking-tight text-fg">
                        {role.title}{' '}
                        <span className="font-normal text-fg-subtle">· {role.company}</span>
                      </p>
                      <p className="mt-1.5 font-mono text-[0.7rem] tracking-[0.1em] text-fg-subtle uppercase">
                        {role.period}
                      </p>
                    </div>
                    {role.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent-soft px-2.5 py-1 font-mono text-[0.64rem] font-medium tracking-[0.08em] text-accent uppercase">
                        <span className="size-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    ) : null}
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-fg-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent/70"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ---------------- education (appended) ---------------- */}
        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-fg-subtle uppercase">
              Education
            </p>
            <h3 className="mt-3 text-h3 text-balance">Academic background.</h3>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-1">
            {educationEntries.map((entry) => (
              <Reveal key={entry.degree}>
                <article className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="text-[1rem] font-semibold tracking-tight text-fg">
                        {entry.degree}
                      </h4>
                      <p className="mt-1.5 text-[0.9rem] text-fg-muted">
                        {entry.school} · {entry.detail}
                      </p>
                    </div>
                    <p className="font-mono text-[0.7rem] tracking-[0.1em] text-fg-subtle uppercase">
                      {entry.period}
                    </p>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    {entry.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="inline-flex items-center rounded-md border border-line bg-surface-2/80 px-2 py-1 font-mono text-[0.68rem] leading-none text-fg-muted"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}