import { Container } from '../components/Container';
import { ArrowUpRightIcon, GitHubIcon, MailIcon } from '../components/Icons';
import { Monogram } from '../components/Logo';
import { footerNav } from '../data/navigation';
import { footerContent, site } from '../data/site';

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container>
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between lg:py-14">
          {/* identity */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                <Monogram className="size-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.95rem] font-semibold tracking-tight">{site.name}</span>
                <span className="mt-1 font-mono text-[0.62rem] tracking-[0.16em] text-fg-subtle uppercase">
                  {site.role}
                </span>
              </span>
            </div>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-fg-subtle">
              {footerContent.note}
            </p>
          </div>

          {/* navigation */}
          <nav aria-label="Footer" className="lg:text-right">
            <p className="font-mono text-[0.66rem] tracking-[0.16em] text-fg-subtle uppercase">
              Sections
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 lg:justify-end">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[0.88rem] text-fg-muted transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact links */}
          <div>
            <p className="font-mono text-[0.66rem] tracking-[0.16em] text-fg-subtle uppercase">
              Connect
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
              <li>
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.88rem] text-fg-muted transition-colors duration-300 hover:text-accent"
                >
                  <GitHubIcon className="size-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.mailto}
                  className="inline-flex items-center gap-1.5 text-[0.88rem] text-fg-muted transition-colors duration-300 hover:text-accent"
                >
                  <MailIcon className="size-3.5" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-[0.88rem] text-fg-muted transition-colors duration-300 hover:text-accent"
                >
                  <ArrowUpRightIcon className="size-3.5" />
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] text-fg-subtle">
            &copy; {YEAR} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.72rem] text-fg-subtle">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}