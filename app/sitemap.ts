import type { MetadataRoute } from "next";
import { orderedProjects } from "./content/projects";
import { siteConfig } from "./content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/resume",
    ...orderedProjects.map((project) => `/projects/${project.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
