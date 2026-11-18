import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-accent to-accent-2"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}

/**
 * Desktop links with a pill that slides to the active item. The pill is
 * positioned by writing to the DOM directly, so scrolling between sections
 * never re-renders the list just to move it.
 */
function DesktopNav({ active }: { active: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const placedRef = useRef(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    const pill = pillRef.current;
    if (!list || !pill) return;

    const place = () => {
      const link = list.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      if (!link || link.offsetWidth === 0) {
        pill.style.opacity = '0';
        return;
      }
      // Snap into place the first time; animate every move after that.
      if (!placedRef.current) pill.style.transitionDuration = '0s';
      pill.style.width = `${link.offsetWidth}px`;
      pill.style.transform = `translate3d(${link.offsetLeft}px, 0, 0)`;
      pill.style.opacity = '1';
      if (!placedRef.current) {
        placedRef.current = true;
        void pill.offsetWidth;
        pill.style.transitionDuration = '';
      }
    };

    place();
    // Re-measure when fonts load or the bar is resized / un-hidden.
    const observer = new ResizeObserver(place);
    observer.observe(list);
    return () => observer.disconnect();
  }, [active]);

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul
        ref={listRef}
        className="relative flex items-center gap-1 rounded-full border border-line bg-surface-2/50 p-1 backdrop-blur-sm"
      >
        <span
          ref={pillRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 left-0 rounded-full border border-accent/25 bg-accent-soft opacity-0 transition-[transform,width,opacity] duration-500 ease-out-soft motion-reduce:transition-none"
        />
        {navigation.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-nav={item.id}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative block rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-300',
                  isActive ? 'text-accent' : 'text-fg-muted hover:text-fg',
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
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
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 [view-transition-name:site-header]',
        scrolled || menuOpen
          ? 'border-b border-line bg-surface/80 shadow-[0_12px_32px_-24px_hsl(var(--shadow-color)/0.5)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <ScrollProgress />

      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo />

          {/* ---------------- desktop navigation ---------------- */}
          <DesktopNav active={active} />

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
              className="relative grid size-10 place-items-center rounded-full border border-line bg-surface-2/70 text-fg transition-[color,border-color,transform] duration-300 hover:text-accent active:scale-90 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <MenuIcon
                className={cn(
                  'absolute size-5 transition-[opacity,transform] duration-400 ease-out-soft motion-reduce:transition-none',
                  menuOpen ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
                )}
              />
              <CloseIcon
                className={cn(
                  'absolute size-5 transition-[opacity,transform] duration-400 ease-out-soft motion-reduce:transition-none',
                  menuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0',
                )}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* ---------------- mobile panel ---------------- */}
      <div
        id="mobile-navigation"
        ref={panelRef}
        // `inert` keeps the collapsed links out of the tab order and away
        // from assistive tech, as `hidden` did, while still allowing the
        // height to animate.
        inert={!menuOpen}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft motion-reduce:transition-none lg:hidden',
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="max-h-[calc(100dvh-4rem)] min-h-0 overflow-hidden overflow-y-auto bg-surface/95 backdrop-blur-xl">
          <Container>
            <nav aria-label="Mobile" className="py-6">
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <li
                    key={item.id}
                    className={cn(
                      'border-b border-line transition-[opacity,transform] duration-500 ease-out-soft last:border-b-0 motion-reduce:transition-none',
                      menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                    )}
                    style={{ transitionDelay: menuOpen ? `${90 + index * 45}ms` : '0ms' }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={active === item.id ? 'true' : undefined}
                      className={cn(
                        'flex items-baseline justify-between gap-4 py-4 text-lg font-medium tracking-tight transition-colors duration-300',
                        active === item.id ? 'text-accent' : 'text-fg',
                      )}
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