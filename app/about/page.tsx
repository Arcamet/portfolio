import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "../components/ExternalLink";
import { capabilities } from "../content/capabilities";
import { principles, profile, socialLinks } from "../content/profile";

export const metadata: Metadata = {
  title: "About Jose Carlos Arce Camet",
  description:
    "Jose's approach to full-stack product engineering, responsible AI-assisted development, accessibility, and system design.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-hero shell">
        <p className="eyebrow">About / Engineering practice</p>
        <h1>
          I build software from the <em>system boundary inward.</em>
        </h1>
        <p className="page-lede">
          I’m Jose Carlos Arce Camet, a Computer Engineering student at the
          University of Texas Rio Grande Valley.
        </p>
      </header>

      <section className="profile-story shell" aria-labelledby="practice-title">
        <div className="profile-aside">
          <span className="meta-label">Profile / 2026</span>
          <dl>
            <div>
              <dt>School</dt>
              <dd>{profile.schoolShort}</dd>
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
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{profile.languages.join(" / ")}</dd>
            </div>
          </dl>
        </div>
        <div className="reading-copy profile-copy">
          <h2 id="practice-title">
            A consistent process across very different products.
          </h2>
          <p>
            My projects span AI applications, audio analysis, personal finance,
            recruiting workflows, and interaction-heavy frontend systems.
            Although the products look different, my process is consistent:
            understand the problem, model the data and trust boundaries, build
            the complete workflow, test the risky behavior, and refine the
            interface until the product feels intentional.
          </p>
          <p>
            I’m especially interested in full-stack product engineering and the
            point where technical architecture becomes visible to the
            user—through reliability, speed, accessibility, clear states, and
            thoughtful interaction.
          </p>
          <p>
            I use AI-assisted development tools as part of my workflow. I direct
            the requirements, architecture, and product decisions; review and
            verify generated work; test the finished system; and remain
            responsible for understanding and explaining the implementation.
          </p>
          <p>
            I’m currently pursuing software-engineering internships, junior
            frontend and full-stack roles, remote or hybrid technical
            opportunities, and selected freelance projects.
          </p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email Jose <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section shell" aria-labelledby="focus-title">
        <div className="section-heading">
          <div className="section-kicker">
            <span>01</span>
            <span>Areas of focus</span>
          </div>
          <div>
            <h2 id="focus-title">Engineering across the product boundary.</h2>
          </div>
        </div>
        <div className="capability-grid compact-capabilities">
          {capabilities.map((group) => (
            <article className="capability-card" key={group.title}>
              <span className="capability-index">{group.index}</span>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="principles-section shell"
        aria-labelledby="about-principles-title"
      >
        <div className="principles-intro">
          <span className="meta-label">02 / Working principles</span>
          <h2 id="about-principles-title">How I make product decisions.</h2>
        </div>
        <ol>
          {principles.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="page-contact shell"
        aria-labelledby="about-contact-title"
      >
        <span className="meta-label">03 / Contact</span>
        <h2 id="about-contact-title">Open to the next useful problem.</h2>
        <p>{profile.availability}</p>
        <div>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <Link href="/resume">View résumé</Link>
          {socialLinks.github ? (
            <ExternalLink href={socialLinks.github}>GitHub</ExternalLink>
          ) : null}
          {socialLinks.linkedin ? (
            <ExternalLink href={socialLinks.linkedin}>LinkedIn</ExternalLink>
          ) : null}
        </div>
      </section>
    </main>
  );
}
