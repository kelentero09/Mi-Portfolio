import type { CSSProperties } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { ArrowRightIcon, GitHubIcon, MapPinIcon, ClockIcon, CodeIcon } from '../components/Icons';
import { heroContent, site } from '../data/site';

/* -------------------------------------------------------------------------- */
/*  Profile photo                                                             */
/* -------------------------------------------------------------------------- */

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
      {/* floating chips */}
      <div className="absolute -top-5 -left-4 z-10 hidden xl:block">
        <span className="inline-flex animate-float items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[0.68rem] text-fg-muted backdrop-blur-sm motion-reduce:animate-none">
          <span className="size-1.5 rounded-full bg-accent" />
          React
        </span>
      </div>
      <div className="absolute -right-3 -bottom-5 z-10 hidden xl:block">
        <span
          className="inline-flex animate-float items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[0.68rem] text-fg-muted backdrop-blur-sm motion-reduce:animate-none"
          style={{ animationDelay: '1.4s' }}
        >
          <span className="size-1.5 rounded-full bg-accent" />
          TypeScript
        </span>
      </div>

      {/* gradient hairline frame */}
      <div className="group rounded-[1.6rem] bg-gradient-to-br from-accent/55 via-line to-accent-2/45 p-px shadow-[0_36px_80px_-40px_var(--glow)] transition-shadow duration-700 hover:shadow-[0_44px_90px_-36px_var(--glow)]">
       <div className="overflow-hidden rounded-[calc(1.6rem-1px)] bg-surface-2">
        <img
          src={site.profileImage}
          alt="Portrait of Michael Entero, Web Developer"
          width={640}
          height={640}
          fetchPriority="high"
          className="aspect-square w-full object-cover brightness-100 transition-transform duration-[1400ms] ease-out-soft group-hover:scale-[1.03] motion-reduce:transition-none dark:brightness-95 dark:contrast-[1.02]"
        />
        <div className="relative flex items-center justify-between gap-4 border-t border-line bg-surface px-5 py-4">
          <div className="min-w-0">
            <p className="truncate text-[0.95rem] font-semibold tracking-tight text-fg">
              {site.name}
            </p>
            <p className="mt-0.5 font-mono text-[0.66rem] tracking-[0.14em] text-fg-subtle uppercase">
              {site.role} · Davao City, PH
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/35 bg-accent-soft px-2.5 py-1 font-mono text-[0.64rem] font-medium tracking-[0.08em] text-accent uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Remote
          </span>
        </div>
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
            <p
              style={{ '--i': 0 } as CSSProperties}
              className="hero-in inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2/60 py-1.5 pr-4 pl-2.5 font-mono text-[0.68rem] tracking-[0.12em] text-fg-muted uppercase backdrop-blur-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for Remote Work
            </p>

            <h1 style={{ '--i': 1 } as CSSProperties} className="hero-in mt-7 text-display text-balance">
              {before}
              <span className="text-gradient-accent">{heroContent.headingAccent}</span>
              {after}
            </h1>

            <p
              style={{ '--i': 2 } as CSSProperties}
              className="hero-in mt-6 max-w-[54ch] text-lead text-pretty text-fg-muted"
            >
              {heroContent.supporting}
            </p>

            <div
              style={{ '--i': 3 } as CSSProperties}
              className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
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

            <dl
              style={{ '--i': 4 } as CSSProperties}
              className="hero-in mt-11 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line pt-7 sm:grid-cols-3"
            >
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
          <div style={{ '--i': 2 } as CSSProperties} className="hero-in lg:pl-4">
            <ProfilePhoto />
          </div>
        </div>
      </Container>
    </section>
  );
}