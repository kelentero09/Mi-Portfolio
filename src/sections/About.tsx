import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { CheckIcon, ClockIcon, MailIcon, MapPinIcon } from '../components/Icons';
import { Monogram } from '../components/Logo';
import { TechBadge } from '../components/Primitives';
import { aboutContent, site } from '../data/site';

const factRows = [
  { icon: MapPinIcon, label: 'Location', value: site.location },
  { icon: ClockIcon, label: 'Experience', value: site.experience },
];

export function About() {
  return (
    <Section id="about" divided>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
          {/* ---------------- narrative ---------------- */}
          <div>
            <SectionHeading eyebrow={aboutContent.eyebrow} title={aboutContent.heading} />

            <Reveal delay={80}>
              <div className="mt-7 space-y-5">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-[62ch] text-lead text-pretty text-fg-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10">
                <p className="font-mono text-[0.68rem] tracking-[0.16em] text-fg-subtle uppercase">
                  How I work
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {aboutContent.focus.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.94rem] text-fg-muted">
                      <CheckIcon className="size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* ---------------- profile card ---------------- */}
          <Reveal delay={120} className="lg:pt-2">
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 size-56 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] blur-2xl"
              />

              <div className="relative flex items-center gap-4">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl border border-line bg-gradient-to-br from-surface-3 to-surface-2 text-accent">
                  <Monogram className="size-8" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[1.05rem] font-semibold tracking-tight">{site.name}</p>
                  <p className="mt-1 font-mono text-[0.68rem] tracking-[0.14em] text-fg-subtle uppercase">
                    {site.role}
                  </p>
                </div>
              </div>

              <dl className="relative mt-7 space-y-4 border-t border-line pt-6">
                {factRows.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-[0.88rem] text-fg-subtle">
                      <Icon className="size-4 text-accent/80" />
                      {label}
                    </dt>
                    <dd className="text-[0.88rem] font-medium text-fg">{value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2 text-[0.88rem] text-fg-subtle">
                    <MailIcon className="size-4 text-accent/80" />
                    Email
                  </dt>
                  <dd className="min-w-0">
                    <a
                      href={site.mailto}
                      className="block truncate text-[0.88rem] font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}