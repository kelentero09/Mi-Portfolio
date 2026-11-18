import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { ContributionGraph } from '../components/ContributionGraph';
import { GitHubIcon, ArrowUpRightIcon } from '../components/Icons';
import { githubContent, site } from '../data/site';

export function GithubSection() {
  return (
    <Section id="github" divided>
      <Container>
        <SectionHeading
          eyebrow={githubContent.eyebrow}
          title={githubContent.heading}
          description={githubContent.text}
          aside={
            <Button
              href={site.githubUrl}
              variant="secondary"
              leading={<GitHubIcon className="size-4" />}
              trailing={<ArrowUpRightIcon className="size-4 opacity-60" />}
            >
              {githubContent.buttonLabel}
            </Button>
          }
        />

        {/* Real contribution data, refreshed on every deploy — see
            scripts/fetch-contributions.mjs. */}
        <Reveal delay={100} className="mt-12">
          <ContributionGraph />
        </Reveal>
      </Container>
    </Section>
  );
}
