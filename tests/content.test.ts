import { describe, expect, it } from "vitest";
import {
  getProject,
  getRelatedProject,
  orderedProjects,
  projects,
} from "../app/content/projects";
import { profile, socialLinks } from "../app/content/profile";

describe("portfolio content", () => {
  it("keeps five projects in unique rank order", () => {
    expect(projects).toHaveLength(5);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(5);
    expect(new Set(projects.map((project) => project.rank)).size).toBe(5);
    expect(orderedProjects.map((project) => project.rank)).toEqual([
      1, 2, 3, 4, 5,
    ]);
  });

  it("resolves every case-study route and related project", () => {
    for (const project of projects) {
      expect(getProject(project.slug)).toEqual(project);
      expect(getRelatedProject(project)).toBeDefined();
      expect(getRelatedProject(project).slug).not.toBe(project.slug);
    }
  });

  it("has complete accessible content and honest external links", () => {
    for (const project of projects) {
      expect(project.images.every((image) => image.alt.length > 0)).toBe(true);
      expect(project.limitations.length).toBeGreaterThan(0);
      expect(
        project.links.every((link) => link.href.startsWith("https://")),
      ).toBe(true);
    }
  });

  it("uses the verified contact address and null placeholders", () => {
    expect(profile.email).toBe("josecarlos.arce@outlook.com");
    expect(socialLinks).toEqual({
      github: null,
      linkedin: null,
      resumeSoftware: null,
      resumeTechnical: null,
    });
  });
});
