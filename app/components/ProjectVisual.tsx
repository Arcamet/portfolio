import Image from "next/image";
import type { Project } from "../content/types";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const image = project.images[0];

  if (image.src) {
    return (
      <figure className="project-visual">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={Boolean(image.priority)}
          sizes={
            compact
              ? "(max-width: 760px) 100vw, 50vw"
              : "(max-width: 760px) 100vw, 75vw"
          }
        />
        <figcaption>{image.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={`project-visual project-visual-placeholder accent-${project.accent}`}
    >
      <div aria-hidden="true" className="visual-grid">
        <span className="visual-index">0{project.rank}</span>
        <span className="visual-system">{project.category}</span>
        <strong>{project.name}</strong>
        <span className="visual-evidence">{project.evidenceLabel}</span>
      </div>
      <figcaption>
        <span>Image pending</span>
        <span>{image.caption}</span>
      </figcaption>
    </figure>
  );
}
