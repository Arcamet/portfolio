import Image from "next/image";
import type { Project } from "../content/types";

export function ProjectGallery({ project }: { project: Project }) {
  const images = project.images.filter((image) => image.role !== "study");

  if (images.length === 0) return null;

  return (
    <ul
      className="project-gallery"
      aria-label={`${project.name} product gallery`}
    >
      {images.map((image) => {
        const orientation =
          image.width / image.height > 1.15 ? "wide" : "portrait";

        return (
          <li
            className={`gallery-item gallery-item-${orientation}`}
            key={image.id}
          >
            <figure>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                unoptimized
                sizes={
                  orientation === "wide"
                    ? "(max-width: 760px) 100vw, 75vw"
                    : "(max-width: 760px) 100vw, 36vw"
                }
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
