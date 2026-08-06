import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "../components/ExternalLink";
import { orderedProjects } from "../content/projects";
import { profile, socialLinks } from "../content/profile";

export const metadata: Metadata = {
  title: "Résumé — Jose Carlos Arce Camet",
  description:
    "Résumé overview, education, technical focus, and selected software-engineering projects by Jose Carlos Arce Camet.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="main-content" className="page-main resume-page">
      <header className="page-hero shell">
        <p className="eyebrow">Résumé / Professional record</p>
        <h1>
          Software engineering, grounded in <em>complete products.</em>
        </h1>
        <p className="page-lede">
          Computer Engineering student and full-stack developer focused on AI
          applications, product engineering, and distinctive user interfaces.
        </p>
        <div className="resume-actions">
          {socialLinks.resumeSoftware ? (
            <a
              className="button button-primary"
              href={socialLinks.resumeSoftware}
            >
              Download software résumé
            </a>
          ) : null}
          {socialLinks.resumeTechnical ? (
            <a
              className="button button-secondary"
              href={socialLinks.resumeTechnical}
            >
              Download technical/support résumé
            </a>
          ) : null}
          <a className="text-link" href={`mailto:${profile.email}`}>
            Email Jose about opportunities <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <div className="resume-layout shell">
        <aside className="resume-sidebar">
          <section>
            <h2>Contact</h2>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
            {socialLinks.github ? (
              <ExternalLink href={socialLinks.github}>GitHub</ExternalLink>
            ) : null}
            {socialLinks.linkedin ? (
              <ExternalLink href={socialLinks.linkedin}>LinkedIn</ExternalLink>
            ) : null}
          </section>
          <section>
            <h2>Education</h2>
            <strong>{profile.school}</strong>
            <span>{profile.degree}</span>
            <span>Expected {profile.expectedGraduation}</span>
          </section>
          <section>
            <h2>Languages</h2>
            <span>{profile.languages.join(" / ")}</span>
          </section>
        </aside>

        <div className="resume-content">
          <section aria-labelledby="engineering-profile-title">
            <span className="meta-label">01 / Engineering profile</span>
            <h2 id="engineering-profile-title">Project-led engineering.</h2>
            <p>
              I build complete software products across full-stack systems, AI
              workflows, audio processing, financial correctness, and
              interaction-heavy interfaces. My work emphasizes explicit system
              boundaries, accessibility, testing, and user-owned data.
            </p>
          </section>
          <section aria-labelledby="direction-title">
            <span className="meta-label">02 / Current direction</span>
            <h2 id="direction-title">Software roles with product ownership.</h2>
            <p>
              I am pursuing software-engineering internships and junior frontend
              or full-stack roles where I can contribute across implementation,
              review, verification, and product quality.
            </p>
          </section>
          <section aria-labelledby="project-highlights-title">
            <span className="meta-label">03 / Selected project highlights</span>
            <h2 id="project-highlights-title">
              Evidence from five completed systems.
            </h2>
            <div className="resume-projects">
              {orderedProjects.map((project) => (
                <article key={project.slug}>
                  <span>0{project.rank}</span>
                  <div>
                    <h3>
                      <Link href={`/projects/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h3>
                    <p>{project.tagline}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="skills-title">
            <span className="meta-label">04 / Verified technical scope</span>
            <h2 id="skills-title">Tools used across the portfolio.</h2>
            <dl className="skills-list">
              <div>
                <dt>Languages</dt>
                <dd>TypeScript, JavaScript, SQL</dd>
              </div>
              <div>
                <dt>Frontend</dt>
                <dd>
                  React, Vite, React Router, TanStack Query, Tailwind CSS,
                  Recharts, Web APIs
                </dd>
              </div>
              <div>
                <dt>Backend & data</dt>
                <dd>
                  Node.js, Fastify, PostgreSQL, Prisma, Supabase,
                  authentication, Row Level Security
                </dd>
              </div>
              <div>
                <dt>Testing & delivery</dt>
                <dd>
                  Vitest, React Testing Library, Playwright, axe-core, GitHub
                  Actions, Vercel
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </main>
  );
}
