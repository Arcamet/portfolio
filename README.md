# Jose Carlos Arce Camet — Portfolio

A recruiter-facing software-engineering portfolio that presents five distinct projects as one coherent full-stack product narrative. The site uses a dark editorial “Hybrid Archive-Tech” design system, centralized typed content, reusable case-study routes, accessible navigation, route metadata, and deterministic local assets.

## Stack

- React 19 and TypeScript
- Next.js App Router on the bundled Vinext/Vite runtime
- Maintainable custom CSS with local Fontsource assets
- Vitest for content integrity
- Node render tests for production HTML
- Playwright and axe-core for critical browser paths
- Sites/Cloudflare-compatible build output with Vercel headers included

## Local setup

```bash
npm install
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
npm run test:e2e        # Playwright + axe critical paths
```

## Content architecture

- `app/content/profile.ts` owns verified identity, contact, navigation, availability, social, résumé, and site-level configuration.
- `app/content/projects.ts` is the single typed source for all five projects and every case-study section.
- `app/content/capabilities.ts` owns demonstrated engineering capability groups.
- `app/projects/[slug]/page.tsx` renders all project routes from the shared model.

Project content includes explicit current boundaries. External links render only when a verified HTTPS URL exists.

## Project imagery

Verified screenshots are intentionally not fabricated. Until real assets are supplied, each project uses a clearly labeled visual placeholder.

To replace one:

1. Add an optimized WebP or AVIF asset under `public/images/projects/<slug>/`.
2. Update the project’s `images` record in `app/content/projects.ts` with the public path, accurate alt text, intrinsic width and height, and a factual caption.
3. Keep sensitive or personally identifying data out of screenshots.

Recommended first assets are the YapOS dashboard and chat trace, the Auralis recognition result, the finance dashboard, the Intern Hunt CRM dashboard, and an active Local Matchroom game.

## Résumé and links

The centralized values in `app/content/profile.ts` currently remain `null` for GitHub, LinkedIn, and both résumé downloads. This prevents dead or invented links from appearing.

Add verified values to:

```ts
socialLinks.github;
socialLinks.linkedin;
socialLinks.resumeSoftware;
socialLinks.resumeTechnical;
```

Place résumé PDFs under `public/resume/` when ready and use root-relative paths such as `/resume/jose-arce-software-engineering.pdf`.

## Accessibility

The site includes a skip link, semantic landmarks, visible focus, native modal mobile navigation with Escape and focus restoration, reduced-motion and forced-colors support, text-first diagrams, labeled image placeholders, 44px-class controls, and a responsive 320px layout. Playwright covers mobile navigation, horizontal overflow, keyboard-visible content, and axe scans on critical routes.

## Metadata and social previews

Each route defines a unique title, description, canonical path, Open Graph fields, and X/Twitter fields. The project includes robots, sitemap, manifest, `Person`, and `SoftwareApplication` structured data. The bespoke social card lives at `public/og.png`.

Set `NEXT_PUBLIC_SITE_URL` to the final production origin before a non-Sites deployment so canonical URLs and structured data use the correct host.

## Deployment

The project preserves `.openai/hosting.json` and the Sites Vite plugin for Cloudflare-compatible publication. `vercel.json` and `next.config.ts` also define conservative browser security headers for Vercel deployment.

No runtime secrets, backend, database, analytics, or unavailable environment values are required.

## Known placeholders

- GitHub profile URL
- LinkedIn profile URL
- Software-engineering résumé PDF
- General technical/support résumé PDF
- Verified screenshots for all five projects
- Public live and source links for individual projects

## License

Portfolio content and visual design © Jose Carlos Arce Camet. Project dependencies retain their respective licenses.
