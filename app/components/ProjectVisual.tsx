import Image from "next/image";
import type { Project, ProjectImage } from "../content/types";

export function ProjectVisual({
  project,
  compact = false,
  role = compact ? "card" : "hero",
}: {
  project: Project;
  compact?: boolean;
  role?: ProjectImage["role"];
}) {
  const image =
    project.images.find((candidate) => candidate.role === role) ??
    project.images.find((candidate) => candidate.role === "study");

  if (!image) return null;

  const isCaseStudyHero = !compact;

  return (
    <figure className={`project-visual project-visual-${image.role}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={isCaseStudyHero ? "eager" : "lazy"}
        fetchPriority={isCaseStudyHero ? "high" : undefined}
        decoding="async"
        unoptimized
        sizes={
          compact
            ? "(max-width: 760px) 100vw, 50vw"
            : "(max-width: 760px) 100vw, 75vw"
        }
      />
      <figcaption>
        <span>
          {image.role === "study" ? "Interface study" : "Product capture"}
        </span>
        <span>{image.caption}</span>
      </figcaption>
    </figure>
  );
}
