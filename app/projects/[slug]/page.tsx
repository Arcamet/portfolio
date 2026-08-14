import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "../../components/ArchitectureDiagram";
import { ExternalLink } from "../../components/ExternalLink";
import { ProjectGallery } from "../../components/ProjectGallery";
import { ProjectVisual } from "../../components/ProjectVisual";
import { StructuredData } from "../../components/StructuredData";
import {
  getProject,
  getRelatedProject,
  orderedProjects,
} from "../../content/projects";
import { siteConfig } from "../../content/profile";

const statusLabels = {
  "portfolio-ready": "Portfolio ready",
  "release-prep": "Release preparation",
  "source-published": "Source published",
  live: "Live",
} as const;

export function generateStaticParams() {
  return orderedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${project.name} case study by Jose Carlos Arce Camet.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
      images: ["/og.png"],
    },
  };
}

function TextSection({
  id,
  index,
  title,
  paragraphs,
}: {
  id: string;
  index: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="case-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="case-section-label">
        <span>{index}</span>
        <span>{title}</span>
      </div>
      <div className="case-section-content reading-copy">
        <h2 id={`${id}-title`}>{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProject(project);
  const hasGallery = project.images.some((image) => image.role !== "study");
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: project.category,
    author: { "@type": "Person", name: "Jose Carlos Arce Camet" },
    sameAs: project.links.map((link) => link.href),
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
  };

  return (
    <main id="main-content" className={`case-study accent-${project.accent}`}>
      <StructuredData data={softwareData} />
      <article>
        <header className="case-hero shell">
          <div className="case-index">
            <span>Case study</span>
            <strong>0{project.rank}</strong>
            <span>of 05</span>
          </div>
          <div className="case-hero-copy">
            <p className="eyebrow">
              {project.category} · {statusLabels[project.status]}
            </p>
            <h1>{project.name}</h1>
            <p className="case-tagline">{project.tagline}</p>
            <p>{project.summary}</p>
            <div className="case-actions">
              {project.links.map((link) => (
                <ExternalLink
                  className="button button-primary"
                  key={link.kind}
                  href={link.href}
                >
                  {link.label}
                </ExternalLink>
              ))}
              <Link className="text-link" href="/#work">
                Back to selected work
              </Link>
            </div>
          </div>
          <dl className="case-facts">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{statusLabels[project.status]}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
          </dl>
          <div className="case-visual">
            <ProjectVisual project={project} />
          </div>
        </header>

        <div className="case-body shell">
          <TextSection
            id="overview"
            index="01"
            title="Overview"
            paragraphs={project.overview}
          />
          <TextSection
            id="problem"
            index="02"
            title="Problem"
            paragraphs={project.problem}
          />
          <TextSection
            id="solution"
            index="03"
            title="Solution"
            paragraphs={project.solution}
          />

          <section
            className="case-section"
            id="features"
            aria-labelledby="features-title"
          >
            <div className="case-section-label">
              <span>04</span>
              <span>Key features</span>
            </div>
            <div className="case-section-content">
              <h2 id="features-title">Feature evidence</h2>
              <div className="detail-grid">
                {project.features.map((feature) => (
                  <article key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="case-section"
            id="architecture"
            aria-labelledby="architecture-title"
          >
            <div className="case-section-label">
              <span>05</span>
              <span>System layers</span>
            </div>
            <div className="case-section-content">
              <h2 id="architecture-title">System layers</h2>
              <p className="section-lede">{project.architecture.summary}</p>
              <ArchitectureDiagram project={project} />
            </div>
          </section>

          <section
            className="case-section"
            id="challenge"
            aria-labelledby="challenge-title"
          >
            <div className="case-section-label">
              <span>06</span>
              <span>Technical challenge</span>
            </div>
            <div className="case-section-content">
              <h2 id="challenge-title">Where the engineering concentrates.</h2>
              <div className="detail-grid">
                {project.challenges.map((challenge) => (
                  <article key={challenge.title}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="case-section"
            id="decisions"
            aria-labelledby="decisions-title"
          >
            <div className="case-section-label">
              <span>07</span>
              <span>Engineering decisions</span>
            </div>
            <div className="case-section-content">
              <h2 id="decisions-title">Choices and tradeoffs.</h2>
              <div className="decision-list">
                {project.decisions.map((decision, index) => (
                  <article key={decision.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{decision.title}</h3>
                      <p>{decision.description}</p>
                      {decision.tradeoff ? (
                        <p className="tradeoff">
                          <strong>Tradeoff:</strong> {decision.tradeoff}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="case-section evidence-columns"
            id="quality"
            aria-labelledby="quality-title"
          >
            <div className="case-section-label">
              <span>08</span>
              <span>Quality boundaries</span>
            </div>
            <div className="case-section-content">
              <h2 id="quality-title">Security, accessibility, and testing.</h2>
              <div className="quality-grid">
                <article>
                  <h3>Security</h3>
                  <ul>
                    {project.security.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <h3>Accessibility</h3>
                  <ul>
                    {project.accessibility.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <h3>Testing</h3>
                  <ul>
                    {project.testing.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section
            className="case-section boundaries-section"
            id="boundaries"
            aria-labelledby="boundaries-title"
          >
            <div className="case-section-label">
              <span>09</span>
              <span>Scope</span>
            </div>
            <div className="case-section-content">
              <h2 id="boundaries-title">Current boundaries</h2>
              <p className="section-lede">
                The current product has a deliberate scope. These boundaries
                define what it does not claim.
              </p>
              <ul className="boundary-list">
                {project.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="case-section"
            id="future"
            aria-labelledby="future-title"
          >
            <div className="case-section-label">
              <span>10</span>
              <span>Future production improvements</span>
            </div>
            <div className="case-section-content">
              <h2 id="future-title">The next credible steps.</h2>
              <ol className="number-list">
                {project.futureWork.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {hasGallery ? (
            <section
              className="case-section"
              id="gallery"
              aria-labelledby="gallery-title"
            >
              <div className="case-section-label">
                <span>11</span>
                <span>Product gallery</span>
              </div>
              <div className="case-section-content">
                <h2 id="gallery-title">Verified product views</h2>
                <p className="section-lede">
                  Genuine captures from the implemented product across core
                  workflows and responsive layouts.
                </p>
                <ProjectGallery project={project} />
              </div>
            </section>
          ) : null}

          <section
            className="case-section"
            id="takeaways"
            aria-labelledby="takeaways-title"
          >
            <div className="case-section-label">
              <span>12</span>
              <span>Engineering takeaways</span>
            </div>
            <div className="case-section-content">
              <h2 id="takeaways-title">What the implementation clarified.</h2>
              <ol className="takeaway-list">
                {project.engineeringTakeaways.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </div>

        <aside className="related-project" aria-labelledby="related-title">
          <div className="shell related-grid">
            <span className="meta-label">
              Next case study / 0{related.rank}
            </span>
            <div>
              <p>{related.category}</p>
              <h2 id="related-title">{related.name}</h2>
              <p>{related.tagline}</p>
            </div>
            <Link
              className="button button-light"
              href={`/projects/${related.slug}`}
            >
              Read next case study <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </aside>
      </article>
    </main>
  );
}
