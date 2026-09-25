import Link from "next/link";
import type { Project } from "../content/types";
import { ExternalLink } from "./ExternalLink";
import { ProjectVisual } from "./ProjectVisual";

const statusLabels = {
  "portfolio-ready": "Portfolio ready",
  "release-prep": "Release preparation",
  "source-published": "Source published",
  live: "Live",
  "in-progress": "In progress",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card-featured" : ""} accent-${project.accent}`}
    >
      <div className="project-card-meta">
        <span>0{project.rank}</span>
        <span>{project.category}</span>
        {project.status === "in-progress" ? (
          <span className="status-badge">{statusLabels[project.status]}</span>
        ) : (
          <span>{statusLabels[project.status]}</span>
        )}
      </div>
      <ProjectVisual project={project} compact />
      <div className="project-card-copy">
        <p className="evidence-label">{project.evidenceLabel}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="project-tagline">{project.tagline}</p>
        <p>{project.summary}</p>
        <ul
          className="stack-list"
          aria-label={`${project.name} technology stack`}
        >
          {project.stack.slice(0, 6).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul
          className="evidence-list"
          aria-label={`${project.name} engineering evidence`}
        >
          {project.highlights.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="card-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Read case study <span aria-hidden="true">↗</span>
          </Link>
          {project.links.map((link) => (
            <ExternalLink key={link.kind} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </article>
  );
}
