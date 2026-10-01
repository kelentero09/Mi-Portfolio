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
import { servicesContent } from '../data/site';

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
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_24px_48px_-32px_var(--glow)] motion-reduce:transition-none sm:p-7">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -right-14 size-44 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                  />

                  <span className="relative grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                    <Icon className="size-[1.15rem]" />
                  </span>

                  <h3 className="relative mt-6 text-h3">{service.title}</h3>
                  <p className="relative mt-3 flex-1 text-[0.92rem] leading-relaxed text-pretty text-fg-muted">
                    {service.description}
                  </p>

                  <p className="relative mt-6 border-t border-line pt-4 font-mono text-[0.68rem] tracking-[0.1em] text-fg-subtle">
                    {service.keywords}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}