import { useCallback, useEffect, useRef, useState } from 'react';
import { navigation, navigationIds } from '../data/navigation';
import { site } from '../data/site';
import { cn } from '../lib/cn';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { Container } from '../components/Container';
import { CloseIcon, GitHubIcon, MenuIcon } from '../components/Icons';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';

/** Top hairline showing reading progress through the page. */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const bar = barRef.current;
      if (!bar) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-accent/70"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(12);
  const active = useActiveSection(navigationIds);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lock background scroll and wire up Escape while the mobile panel is open.
  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Close the panel if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!menuOpen) return;
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled || menuOpen
          ? 'border-b border-line bg-surface/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <ScrollProgress />

      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          {/* ---------------- desktop navigation ---------------- */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface-2/50 p-1 backdrop-blur-sm">
              {navigation.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'relative block rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-300',
                        isActive ? 'text-accent' : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-accent transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]',
                          isActive ? 'scale-x-100' : 'scale-x-0',
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ---------------- right-hand actions ---------------- */}
          <div className="flex items-center gap-2">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden size-10 place-items-center rounded-full border border-line bg-surface-2/70 text-fg-muted transition-[color,border-color] duration-300 hover:border-line-strong hover:text-accent sm:grid"
              aria-label={`${site.name} on GitHub`}
            >
              <GitHubIcon className="size-[1.15rem]" />
            </a>

            <ThemeToggle />

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface-2/70 text-fg transition-[color,border-color] duration-300 hover:text-accent lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* ---------------- mobile panel ---------------- */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!menuOpen}
        className="lg:hidden"
      >
        <div className="border-t border-line bg-surface/95 backdrop-blur-xl">
          <Container>
            <nav aria-label="Mobile" className="py-6">
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <li key={item.id} className="border-b border-line last:border-b-0">
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className="flex items-baseline justify-between gap-4 py-4 text-lg font-medium tracking-tight text-fg"
                    >
                      {item.label}
                      <span className="font-mono text-[0.7rem] text-fg-subtle">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[0.9rem] font-medium text-fg"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
                <a
                  href={site.mailto}
                  className="inline-flex h-11 items-center rounded-full bg-fg px-5 text-[0.9rem] font-medium text-surface dark:bg-accent dark:text-accent-contrast"
                >
                  Email me
                </a>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}