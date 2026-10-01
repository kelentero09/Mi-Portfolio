import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { ArrowRightIcon, GitHubIcon, MapPinIcon, ClockIcon, CodeIcon } from '../components/Icons';
import { heroContent, site } from '../data/site';

/* -------------------------------------------------------------------------- */
/*  Decorative code window                                                    */
/* -------------------------------------------------------------------------- */

type Tone = 'kw' | 'key' | 'string' | 'accent' | 'muted' | 'plain';

const toneClass: Record<Tone, string> = {
  kw: 'text-accent',
  key: 'text-fg-subtle',
  string: 'text-fg',
  accent: 'text-accent/80',
  muted: 'text-fg-subtle',
  plain: 'text-fg-muted',
};

const codeLines: { indent?: number; tokens: [string, Tone][] }[] = [
  { tokens: [['const', 'kw'], [' profile ', 'plain'], ['= {', 'plain']] },
  { tokens: [['name', 'key'], [': ', 'plain'], ["'Michael Entero'", 'string'], [',', 'plain']] },
  { tokens: [['role', 'key'], [': ', 'plain'], ["'Web Developer'", 'string'], [',', 'plain']] },
  { tokens: [['location', 'key'], [': ', 'plain'], ["'Davao City, PH'", 'string'], [',', 'plain']] },
  { tokens: [['experience', 'key'], [': ', 'plain'], ["'4+ years'", 'string'], [',', 'plain']] },
  { tokens: [['focus', 'key'], [': [', 'plain']] },
  { indent: 1, tokens: [["'Web Development'", 'string'], [',', 'plain']] },
  { indent: 1, tokens: [["'Frontend Development'", 'string'], [',', 'plain']] },
  { indent: 1, tokens: [["'Full-Stack Development'", 'string'], [',', 'plain']] },
  { indent: 1, tokens: [["'Business Websites'", 'string'], [',', 'plain']] },
  { tokens: [['],', 'plain']] },
  { tokens: [['stack', 'key'], [': [', 'plain'], ["'React'", 'string'], [', ', 'plain'], ["'Next.js'", 'string'], [', ', 'plain'], ["'TypeScript'", 'string'], [', ', 'plain'], ["'Node.js'", 'string'], ['],', 'plain']] },
  { tokens: [['}', 'plain'], [';', 'plain']] },
];

function CodeWindow() {
  return (
    <div className="relative" aria-hidden="true">
      {/* floating chips */}
      <div className="absolute -top-5 -left-4 hidden xl:block">
        <span className="inline-flex animate-float items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[0.68rem] text-fg-muted backdrop-blur-sm motion-reduce:animate-none">
          <span className="size-1.5 rounded-full bg-accent" />
          React
        </span>
      </div>
      <div className="absolute -right-3 -bottom-5 hidden xl:block">
        <span
          className="inline-flex animate-float items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[0.68rem] text-fg-muted backdrop-blur-sm motion-reduce:animate-none"
          style={{ animationDelay: '1.4s' }}
        >
          <span className="size-1.5 rounded-full bg-accent" />
          TypeScript
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface-2/70 shadow-[0_30px_70px_-40px_var(--glow)] backdrop-blur-sm">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-fg-subtle/50" />
            <span className="size-2.5 rounded-full bg-fg-subtle/35" />
            <span className="size-2.5 rounded-full bg-fg-subtle/25" />
          </span>
          <span className="ml-2 font-mono text-[0.7rem] text-fg-subtle">developer.ts</span>
        </div>

        <div className="overflow-x-auto px-4 py-4 sm:px-5">
          <pre className="font-mono text-[0.72rem] leading-[1.75] sm:text-[0.78rem]">
            <code>
              {codeLines.map((line, index) => (
                <span key={index} className="flex">
                  <span className="mr-4 w-4 shrink-0 text-right text-fg-subtle/60 select-none">
                    {index + 1}
                  </span>
                  <span className="whitespace-pre">
                    {line.indent ? '  ' : ''}
                    {line.tokens.map(([text, tone], tokenIndex) => (
                      <span key={tokenIndex} className={toneClass[tone]}>
                        {text}
                      </span>
                    ))}
                    {index === codeLines.length - 1 ? (
                      <span className="ml-0.5 inline-block h-[1.05em] w-[0.45em] translate-y-[0.15em] animate-caret bg-accent motion-reduce:animate-none" />
                    ) : null}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

const metaIcons = [MapPinIcon, ClockIcon, CodeIcon];

export function Hero() {
  const [before, after] = heroContent.heading.split(heroContent.headingAccent);

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      {/* backdrop: grid, glows, drifting light */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial-top absolute inset-0" />
        <div className="animate-drift absolute -top-40 -left-24 size-[34rem] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl motion-reduce:animate-none" />
        <div className="animate-drift absolute top-24 -right-40 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] opacity-70 blur-2xl [animation-delay:-6s] motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          {/* ---------------- copy ---------------- */}
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2/60 py-1.5 pr-4 pl-2.5 font-mono text-[0.68rem] tracking-[0.12em] text-fg-muted uppercase backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </p>

            <h1 className="mt-7 text-display text-balance">
              {before}
              <span className="text-accent">{heroContent.headingAccent}</span>
              {after}
            </h1>

            <p className="mt-6 max-w-[54ch] text-lead text-pretty text-fg-muted">
              {heroContent.supporting}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#projects" trailing={<ArrowRightIcon className="size-4" />}>
                View Projects
              </Button>
              <Button
                href={site.githubUrl}
                variant="secondary"
                leading={<GitHubIcon className="size-4" />}
              >
                GitHub Profile
              </Button>
            </div>

            <dl className="mt-11 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line pt-7 sm:grid-cols-3">
              {heroContent.meta.map((item, index) => {
                const Icon = metaIcons[index];
                return (
                  <div key={item.label}>
                    <dt className="flex items-center gap-2 font-mono text-[0.66rem] tracking-[0.14em] text-fg-subtle uppercase">
                      <Icon className="size-3.5 text-accent" />
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.92rem] font-medium text-fg">{item.value}</dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* ---------------- visual ---------------- */}
          <div className="lg:pl-4">
            <CodeWindow />
          </div>
        </div>
      </Container>
    </section>
  );
}