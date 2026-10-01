# Michael Entero — Portfolio

Static, single-page portfolio site for **Michael Entero**, Web Developer based in
Davao City, Philippines.

Built with React 19, TypeScript, Vite, and Tailwind CSS. There is no backend,
database, authentication, or CMS — the built output is plain files that can be
hosted anywhere.

## Live links

| Project | Link |
| --- | --- |
| CMF Works | https://kelentero09.github.io/CMF-Works/ |
| CLM Electronics | https://clmelectronics.vercel.app/ |
| SureParts OPC | https://sureparts.vercel.app/ |
| Buildfolio | https://buildfolio-show.vercel.app/ |
| ApexBuild | https://kelentero09.github.io/Apexbuild/ |
| Aoda Gensets | https://kelentero09.github.io/Aoda/ |
| AI Tools Hub | https://ai-tools-hub-eta-lilac.vercel.app/ |

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with hot module replacement |
| `npm run build` | Type-checks, then emits a static `dist/` |
| `npm run preview` | Serves the built `dist/` to verify the production output |
| `npm run typecheck` | TypeScript only, no emit |
| `npm run lint` | ESLint across the project |
| `npm run previews` | Checks the preview manifest (see [Project previews](#project-previews)) |

## Editing content

All copy and data live in `src/data/`, separate from the components that render
them. You should not need to touch a component to change what the site says.

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, email, GitHub, location, canonical URL, and every section heading |
| `src/data/projects.ts` | The project list, descriptions, technologies, and links |
| `src/data/skills.ts` | Skill groups shown in the Skills section |
| `src/data/services.ts` | Capabilities and the development process steps |
| `src/data/navigation.ts` | Header and footer anchor links |

### Adding a project

1. Append an entry to `projects` in `src/data/projects.ts`.
2. Save a screenshot at `public/previews/<slug>.jpg`.
3. Run `npm run previews` to confirm the manifest is complete.

The `size` field controls the editorial grid. At `lg` the grid is six columns
wide, so the ordering should always fill complete rows — a `feature` card spans
four columns and a `standard` card spans two. Order the array so each row adds
up:

```
feature(4) + standard(2) | standard(2) x3 | feature(4) + standard(2)
```

### Changing the domain

The canonical URL is hard-coded in two places. Update both when the domain
changes:

- `site.url` in `src/data/site.ts` (used for JSON-LD structured data)
- the `canonical` link and the `og:` / `twitter:` tags in `index.html`
- the `<loc>` entries in `public/sitemap.xml`

`vite.config.ts` uses `base: './'`, so asset paths are relative and the same
`dist/` works on a GitHub Pages project sub-path, a custom domain, or Vercel
without rebuilding.

### Updating the screenshots

Screenshots live in `public/previews/` and are lazy-loaded with a blurred inline
placeholder (`src/data/previewPlaceholders.ts`) so cards do not flash an empty
box. The manifest check in `npm run previews` verifies that every project has
both.

To re-encode the placeholders after replacing a screenshot:

```bash
npm i -D sharp
npm run previews
```

`sharp` is intentionally not a dependency — without it the script still runs
every check and simply reports that placeholders were left alone.

## Design notes

The palette is defined once as CSS custom properties in `src/index.css`
(`--surface`, `--fg`, `--accent`, and friends) and exposed to Tailwind as
semantic color names. Components only ever use the semantic names, so the
entire light/dark theme switch is a single `.dark` class on `<html>` with no
component changes.

A theme script in `index.html` applies the stored preference before first paint
to avoid a flash of the wrong theme.

A few details worth knowing before editing:

- **Motion.** Scroll reveals share a single `IntersectionObserver`
  (`src/lib/revealObserver.ts`) rather than one per element, and every animation
  is disabled under `prefers-reduced-motion`.
- **Typography.** Inter and JetBrains Mono are self-hosted as variable fonts in
  `src/assets/fonts/`, so there are no third-party font requests. The type scale
  is fluid (`clamp()`) rather than breakpoint-specific.
- **Icons.** The marks in `src/components/TechIcon.tsx` are simplified
  geometric interpretations, not official brand logos, which keeps the set
  visually consistent in a single accent color. Technology names always appear
  as text, so the mark is decoration rather than the only identifier.
- **SEO.** Meta tags, Open Graph, and Twitter cards are in `index.html`;
  JSON-LD (`src/components/StructuredData.tsx`) declares the person, the site,
  and the project list.

## Content policy

Everything on this site is verifiable. The site deliberately contains no
employers, job titles with company names, certifications, awards, usage
statistics, client testimonials, or skill proficiency percentages. Capability is
communicated through the project work and its links.

The same rule applies to the code: if you cannot link to it, it does not belong
on the site. Please keep it that way when editing.

## Deployment

### GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` to
Pages on every push to `main`. Enable **Settings → Pages → Source: GitHub
Actions** in the repository to activate it.

### Vercel

Import the repository. The defaults are correct — framework preset Vite, build
command `npm run build`, output directory `dist`.

## Project structure

```
public/
  previews/          Project screenshots (lazy-loaded)
  favicon.svg        Site mark
  og-image.png       Social share image
  robots.txt
  sitemap.xml
  site.webmanifest
scripts/
  generate-previews.mjs   Preview manifest check / placeholder generator
src/
  assets/fonts/      Self-hosted variable fonts
  components/        Reusable presentational pieces
  data/              All site content and copy
  hooks/             Small, focused React hooks
  lib/               Framework-free helpers
  sections/          One component per page section
  App.tsx            Section order
  index.css          Design tokens, fonts, base styles
```
