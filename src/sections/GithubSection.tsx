import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { GitHubIcon, ArrowUpRightIcon } from '../components/Icons';
import { githubContent, site } from '../data/site';

export function GithubSection() {
  return (
    <Section id="github" divided spacing="compact">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-2/40 px-6 py-14 text-center sm:px-10 sm:py-16">
            {/* decorative dot field — no fabricated statistics */}
            <div
              aria-hidden="true"
              className="bg-dots pointer-events-none absolute inset-0 opacity-60 mask-radial-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] blur-2xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent">
                <GitHubIcon className="size-6" />
              </span>

              <h2 className="mt-7 text-h2 text-balance">{githubContent.heading}</h2>
              <p className="mx-auto mt-5 max-w-[46ch] text-lead text-pretty text-fg-muted">
                {githubContent.text}
              </p>

              <div className="mt-9 flex justify-center">
                <Button
                  href={site.githubUrl}
                  trailing={<ArrowUpRightIcon className="size-4" />}
                >
                  {githubContent.buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}