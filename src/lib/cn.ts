export type ClassValue = string | number | null | undefined | false | ClassValue[];

/** Minimal classname joiner — avoids pulling in a dependency. */
export function cn(...values: ClassValue[]): string {
  const out: string[] = [];
  for (const value of values) {
    if (!value) continue;
    if (Array.isArray(value)) {
      const nested = cn(...value);
      if (nested) out.push(nested);
    } else {
      out.push(String(value));
    }
  }
  return out.join(' ');
}

/** Anchors that leave the site always open a new tab, safely. */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}

export function externalLinkProps(href: string) {
  return isExternalHref(href)
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};
}