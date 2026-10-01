type RevealHandler = (entry: IntersectionObserverEntry) => void;

const handlers = new WeakMap<Element, RevealHandler>();
let observer: IntersectionObserver | null = null;

/**
 * A single IntersectionObserver shared by every scroll-reveal on the page.
 * One observer with N callbacks is dramatically cheaper than N observers and
 * keeps the main thread free during scroll.
 */
function getObserver(): IntersectionObserver {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        handlers.get(entry.target)?.(entry);
      }
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -8% 0px',
    },
  );
  return observer;
}

export function observeReveal(element: Element, handler: RevealHandler): void {
  handlers.set(element, handler);
  getObserver().observe(element);
}

export function unobserveReveal(element: Element): void {
  handlers.delete(element);
  observer?.unobserve(element);
}