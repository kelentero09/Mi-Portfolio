import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { processSteps } from '../data/services';
import { processContent } from '../data/site';

export function Process() {
  return (
    <Section id="process" divided spacing="compact">
      <Container>
        <SectionHeading
          eyebrow={processContent.eyebrow}
          title={processContent.heading}
          align="center"
        />

        <div className="relative mt-14">
          {/* connector rail — desktop only */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[0.7rem] hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block"
          />

          <ol className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <li key={step.step}>
                <Reveal delay={index * 90}>
                  <div className="relative">
                    <span className="relative z-10 inline-flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full border border-line bg-surface">
                        <span className="size-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="font-mono text-[0.72rem] tracking-[0.16em] text-accent">
                        {step.step}
                      </span>
                    </span>

                    <h3 className="mt-5 text-h4">{step.title}</h3>
                    <p className="mt-2 max-w-[34ch] text-[0.9rem] leading-relaxed text-pretty text-fg-muted">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}