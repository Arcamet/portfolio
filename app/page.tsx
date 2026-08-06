import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "./components/ExternalLink";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { StructuredData } from "./components/StructuredData";
import { capabilities } from "./content/capabilities";
import { orderedProjects } from "./content/projects";
import {
  principles,
  profile,
  siteConfig,
  socialLinks,
} from "./content/profile";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "McAllen",
      addressRegion: "TX",
    },
    affiliation: { "@type": "CollegeOrUniversity", name: profile.school },
    knowsLanguage: profile.languages,
    url: siteConfig.siteUrl,
  };

  return (
    <>
      <StructuredData data={personData} />
      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-meta rail-meta" aria-label="Profile metadata">
            <span>Portfolio / 2026</span>
            <span>Computer Engineering</span>
            <span>McAllen, Texas</span>
          </div>
          <div className="hero-main">
            <p className="eyebrow">
              Computer Engineering · UTRGV · McAllen, Texas
            </p>
            <h1 id="hero-title">
              Full-stack products, AI systems, and interfaces{" "}
              <em>with a point of view.</em>
            </h1>
            <div className="hero-copy-grid">
              <div className="hero-marker" aria-hidden="true">
                01—05
              </div>
              <div>
                <p className="hero-lede">
                  I’m Jose Carlos Arce Camet, a Computer Engineering student
                  building complete software products across AI, audio, finance,
                  workflow systems, and interaction-heavy frontend experiences.
                </p>
                <p>
                  My work combines technical architecture, secure user-owned
                  data, accessibility, testing, and original product design.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#work">
                    View selected work
                  </a>
                  <Link className="button button-secondary" href="/resume">
                    {socialLinks.resumeSoftware
                      ? "Download résumé"
                      : "View résumé"}
                  </Link>
                  <a className="text-link" href={`mailto:${profile.email}`}>
                    Contact Jose <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="availability-strip">
            <span className="availability-dot" aria-hidden="true" />
            <p>{profile.availability}</p>
          </div>
        </section>

        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <SectionHeading
            index="01"
            eyebrow="Selected work / five systems"
            title="Different products. One engineering practice."
            description="Each project isolates a different kind of risk—from AI context and audio validation to financial correctness, workflow modeling, and keyboard interaction."
          />
          <div className="project-grid">
            {orderedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          className="section shell"
          id="capabilities"
          aria-labelledby="capabilities-title"
        >
          <SectionHeading
            index="02"
            eyebrow="Demonstrated capabilities"
            title="What the work proves."
            description="Capabilities are grouped by engineering responsibility, not presented as a wall of logos."
          />
          <div className="capability-grid">
            {capabilities.map((group) => (
              <article className="capability-card" key={group.title}>
                <span className="capability-index">{group.index}</span>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="principles-section shell"
          aria-labelledby="principles-title"
        >
          <div className="principles-intro">
            <span className="meta-label">03 / Working principles</span>
            <h2 id="principles-title">
              The interface is only the visible edge of the system.
            </h2>
          </div>
          <ol>
            {principles.map((principle, index) => (
              <li key={principle}>
                <span>0{index + 1}</span>
                <p>{principle}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="section shell about-preview"
          aria-labelledby="about-preview-title"
        >
          <SectionHeading
            index="04"
            eyebrow="About the practice"
            title="System boundaries first."
          />
          <div className="about-preview-grid">
            <h2 id="about-preview-title">
              I build the complete workflow—and stay responsible for the
              details.
            </h2>
            <div className="reading-copy">
              <p>
                I’m a Computer Engineering student at UTRGV with a
                software-focused project portfolio spanning AI systems, browser
                audio, finance tools, operational dashboards, and accessible
                interfaces.
              </p>
              <p>
                I’m especially interested in full-stack product engineering:
                translating an idea into a working system, defining its data and
                trust boundaries, and refining the experience until it feels
                deliberate.
              </p>
              <Link className="text-link" href="/about">
                More about my process <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <dl className="education-grid">
            <div>
              <dt>Education</dt>
              <dd>{profile.school}</dd>
            </div>
            <div>
              <dt>Degree</dt>
              <dd>{profile.degree}</dd>
            </div>
            <div>
              <dt>Expected</dt>
              <dd>{profile.expectedGraduation}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{profile.languages.join(" / ")}</dd>
            </div>
          </dl>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-grid">
            <span className="meta-label">05 / Start a conversation</span>
            <div>
              <h2 id="contact-title">
                Building something that needs product judgment and technical
                follow-through?
              </h2>
              <p>
                I’m open to software-engineering internships, junior development
                opportunities, remote or hybrid technical work, and selected
                freelance projects.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={`mailto:${profile.email}`}
              >
                Email Jose <span aria-hidden="true">↗</span>
              </a>
              <Link className="text-link" href="/resume">
                View résumé
              </Link>
              {socialLinks.github ? (
                <ExternalLink href={socialLinks.github}>GitHub</ExternalLink>
              ) : null}
              {socialLinks.linkedin ? (
                <ExternalLink href={socialLinks.linkedin}>
                  LinkedIn
                </ExternalLink>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
