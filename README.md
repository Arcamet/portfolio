# Jose Carlos Arce Camet — Portfolio

A recruiter-facing software-engineering portfolio that presents five distinct projects as one coherent full-stack product narrative. The site uses a dark editorial “Hybrid Archive-Tech” design system, centralized typed content, reusable case-study routes, accessible navigation, route metadata, and deterministic local assets.

## Stack

- React 19 and TypeScript
- Next.js App Router on the bundled Vinext/Vite runtime
- Maintainable custom CSS with local Fontsource assets
- Vitest for content integrity
- Node render tests for production HTML
- Playwright and axe-core for critical browser paths
- Vinext/Vite local tooling with a standard Next.js production build on Vercel

## Local setup

```bash
npm ci
npm run dev
```

The development server selects an available local port and prints its URL.

## Commands

```bash
npm run format          # apply Prettier
npm run format:check    # verify formatting
npm run lint            # ESLint
npm run typecheck       # TypeScript without output
npm run test            # Vitest content tests
npm run build           # production build
npm run test:render     # server-rendered HTML checks (after build)
npm run build:vercel    # Next.js production build used by Vercel
npm run test:e2e        # Playwright + axe critical paths
```

## Content architecture

- `app/content/profile.ts` owns verified identity, contact, navigation, availability, social, résumé, and site-level configuration.
- `app/content/projects.ts` is the single typed source for all five projects and every case-study section.
- `app/content/capabilities.ts` owns demonstrated engineering capability groups.
- `app/projects/[slug]/page.tsx` renders all project routes from the shared model.

Project content includes explicit current boundaries. External links render only when a verified HTTPS URL exists.

## Project imagery

The project galleries use genuine captures from the underlying applications. Each centralized image record includes a stable ID, role, intrinsic dimensions, meaningful alternative text, and a factual caption. Intern Hunt CRM uses one explicitly labeled interface study outside its screenshot gallery because a genuine product capture is not available.

## Résumé and links

The centralized values in `app/content/profile.ts` contain the verified GitHub and LinkedIn profiles. Both résumé downloads remain `null` because the final PDF files are not present in this checkout; this prevents dead or invented links from appearing.

Add verified values to:

```ts
socialLinks.github;
socialLinks.linkedin;
socialLinks.resumeSoftware;
socialLinks.resumeTechnical;
```

The release paths are prepared as:

- `public/resume/Jose_Carlos_Arce_Camet_SWE_Resume.pdf`
- `public/resume/Jose_Carlos_Arce_Camet_Remote_Tech_Resume.pdf`

When both final files are present, assign `resumePaths.software` and `resumePaths.technical` to the corresponding `socialLinks` values. Until then, the links remain `null` so the site cannot publish broken downloads.

## Accessibility

The site includes a skip link, semantic landmarks, visible focus, deterministic modal focus, Escape and focus restoration, reduced-motion and forced-colors support, semantic system-layer lists, 44px-class controls, and a responsive 320px layout. Playwright covers mobile navigation, horizontal overflow, failed images, keyboard-visible content, and axe scans on critical routes.

## Metadata and social previews

Each route defines a unique title, description, canonical path, Open Graph fields, and X/Twitter fields. The project includes robots, sitemap, manifest, `Person`, and `SoftwareApplication` structured data. The bespoke social card lives at `public/og.png`.

Set `NEXT_PUBLIC_SITE_URL` to the final Vercel production origin so canonical URLs and structured data use the correct host. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` system value is used as a deployment fallback; local development falls back to `http://localhost:3000`.

## Deployment

Vercel is the production deployment target. `vercel.json` runs the standard Next.js production build, while the Vinext/Vite commands remain available for local development and compatibility verification. `vercel.json` and `next.config.ts` define the same conservative browser security headers.

No runtime secrets, backend, database, analytics, or unavailable environment values are required.

## Verified public links

Verified destinations in the portfolio:

- GitHub profile: [Arcamet](https://github.com/Arcamet)
- LinkedIn: [Jose Carlos Arce Camet](https://www.linkedin.com/in/jose-carlos-arce-camet/)
- Personal Finance Tracker: [live product](https://personal-finance-tracker-taupe-nine.vercel.app/) and [source](https://github.com/Arcamet/personal-finance-tracker)
- YapOS: [live product](https://yapos-web.vercel.app/) and [source](https://github.com/Arcamet/yapos)
- Auralis: [source](https://github.com/Arcamet/auralis) only; no production deployment is claimed
- Intern Hunt CRM: [live product](https://intern-hunt-crm.vercel.app/) with a working sample workspace, plus [source](https://github.com/Arcamet/intern-hunt-crm)
- Local Matchroom: [live product](https://local-matchroom.vercel.app/) and [source](https://github.com/Arcamet/local-matchroom)

All rendered external project and professional-profile links use verified HTTPS destinations.

## License

Portfolio content and visual design © Jose Carlos Arce Camet. Project dependencies retain their respective licenses.
