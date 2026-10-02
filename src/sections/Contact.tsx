import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { Eyebrow, Card } from '../components/Primitives';
import { ArrowUpRightIcon, GitHubIcon, MailIcon, MapPinIcon } from '../components/Icons';
import { Monogram } from '../components/Logo';
import { contactContent, site } from '../data/site';

export function Contact() {
  return (
    <Section id="contact" divided spacing="roomy">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 sm:px-12 sm:py-18 lg:px-16">
            {/* gradient hairline border */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_120%_at_50%_-20%,var(--glow),transparent_58%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />

            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
              <div>
                <Eyebrow>{contactContent.eyebrow}</Eyebrow>

                <h2 className="mt-6 text-h2 text-balance lg:text-[3.15rem]">
                  {contactContent.heading}
                </h2>

                <p className="mt-6 max-w-[48ch] text-lead text-pretty text-fg-muted">
                  {contactContent.text}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={site.mailto} leading={<MailIcon className="size-4" />}>
                    Email Me
                  </Button>
                  <Button
                    href={site.githubUrl}
                    variant="secondary"
                    leading={<GitHubIcon className="size-4" />}
                    trailing={<ArrowUpRightIcon className="size-4 opacity-60" />}
                  >
                    GitHub
                  </Button>
                </div>
              </div>

              {/* details card */}
              <Card className="p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent">
                    <Monogram className="size-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold tracking-tight">{site.name}</p>
                    <p className="mt-0.5 font-mono text-[0.66rem] tracking-[0.14em] text-fg-subtle uppercase">
                      {site.role}
                    </p>
                  </div>
                </div>

                <dl className="mt-7 space-y-4 border-t border-line pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-[0.86rem] text-fg-subtle">
                      <MapPinIcon className="size-4 text-accent/80" />
                      Location
                    </dt>
                    <dd className="text-[0.86rem] font-medium text-fg">{site.location}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-[0.86rem] text-fg-subtle">
                      <MailIcon className="size-4 text-accent/80" />
                      Email
                    </dt>
                    <dd className="min-w-0">
                      <a
                        href={site.mailto}
                        className="block truncate text-[0.86rem] font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                      >
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="flex items-center gap-2 text-[0.86rem] text-fg-subtle">
                      <GitHubIcon className="size-4 text-accent/80" />
                      GitHub
                    </dt>
                    <dd className="min-w-0">
                      <a
                        href={site.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block truncate font-mono text-[0.8rem] font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                      >
                        @{site.githubHandle}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Card>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}