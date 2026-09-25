import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  getProject,
  getRelatedProject,
  orderedProjects,
  projects,
} from "../app/content/projects";
import {
  profile,
  resumePaths,
  siteConfig,
  socialLinks,
} from "../app/content/profile";

describe("portfolio content", () => {
  it("keeps eight projects in unique rank order", () => {
    expect(projects).toHaveLength(8);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(8);
    expect(new Set(projects.map((project) => project.rank)).size).toBe(8);
    expect(orderedProjects.map((project) => project.rank)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
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
      expect(project.images.length).toBeGreaterThan(0);
      expect(project.images.every((image) => image.id.length > 0)).toBe(true);
      expect(project.images.every((image) => image.src.startsWith("/"))).toBe(
        true,
      );
      expect(project.images.every((image) => image.alt.length > 20)).toBe(true);
      expect(project.images.every((image) => image.width > 0)).toBe(true);
      expect(project.images.every((image) => image.height > 0)).toBe(true);
      expect(new Set(project.images.map((image) => image.id)).size).toBe(
        project.images.length,
      );
      expect(
        project.images.some((image) =>
          ["card", "study", "diagram"].includes(image.role),
        ),
      ).toBe(true);
      expect(
        project.images.some((image) =>
          ["hero", "study", "diagram"].includes(image.role),
        ),
      ).toBe(true);
      expect(project.limitations.length).toBeGreaterThan(0);
      expect(project.engineeringTakeaways).toHaveLength(3);
      expect(
        project.links.every((link) => link.href.startsWith("https://")),
      ).toBe(true);
    }
  });

  it("uses verified public links and honest release states", () => {
    expect(profile.email).toBe("josecarlos.arce@outlook.com");
    expect(socialLinks).toEqual({
      github: "https://github.com/Arcamet",
      linkedin: "https://www.linkedin.com/in/jose-carlos-arce-camet/",
      resumeSoftware: "/resume/Jose_Carlos_Arce_Camet_SWE_Resume.pdf",
      resumeTechnical: "/resume/Jose_Carlos_Arce_Camet_Remote_Tech_Resume.pdf",
    });
    expect(profile.school).toBe("The University of Texas Rio Grande Valley");
    expect(profile.degree).toBe("Bachelor of Science in Computer Engineering");
    expect(profile.availability).toBe(
      "Seeking software engineering, full-stack, and AI application opportunities.",
    );
    expect(resumePaths).toEqual({
      software: "/resume/Jose_Carlos_Arce_Camet_SWE_Resume.pdf",
      technical: "/resume/Jose_Carlos_Arce_Camet_Remote_Tech_Resume.pdf",
    });
    expect(
      Object.fromEntries(
        projects.map((project) => [project.slug, project.status]),
      ),
    ).toEqual({
      yapos: "live",
      auralis: "source-published",
      "personal-finance-tracker": "live",
      "intern-hunt-crm": "live",
      "local-matchroom": "live",
      rustkv: "source-published",
      arcshell: "source-published",
      thermalguard: "in-progress",
    });
    expect(getProject("rustkv")?.links).toEqual([
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/RustKV",
        kind: "source",
      },
    ]);
    expect(getProject("arcshell")?.links).toEqual([
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/ArcShell",
        kind: "source",
      },
    ]);
    expect(getProject("thermalguard")?.links).toEqual([]);
    expect(getProject("personal-finance-tracker")?.links).toEqual([
      {
        label: "View live product",
        href: "https://personal-finance-tracker-taupe-nine.vercel.app/",
        kind: "live",
      },
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/personal-finance-tracker",
        kind: "source",
      },
    ]);
    expect(getProject("yapos")?.links).toEqual([
      {
        label: "View live product",
        href: "https://yapos-web.vercel.app/",
        kind: "live",
      },
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/yapos",
        kind: "source",
      },
    ]);
    expect(getProject("auralis")?.links).toEqual([
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/auralis",
        kind: "source",
      },
    ]);
    expect(getProject("intern-hunt-crm")?.links).toEqual([
      {
        label: "View live product",
        href: "https://intern-hunt-crm.vercel.app/",
        kind: "live",
      },
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/intern-hunt-crm",
        kind: "source",
      },
    ]);
    expect(getProject("personal-finance-tracker")?.highlights).toContain(
      "155 tests / 91.55% coverage",
    );
  });

  it("keeps Intern Hunt claims aligned with verified test coverage", () => {
    expect(getProject("intern-hunt-crm")?.testing).toEqual([
      "Form validation and application-field mapping",
      "Recruiting-stage date ordering",
      "Smart views, search, sorting, and filters",
      "Pipeline analytics calculations",
      "Activity generation from meaningful changes",
      "Preservation of unsaved edits during data refresh",
    ]);
  });

  it("keeps ThermalGuard's software-only evidence boundary explicit", () => {
    const thermalGuard = getProject("thermalguard");
    expect(thermalGuard?.status).toBe("in-progress");
    expect(thermalGuard?.evidenceBoundary?.verified).toEqual([
      "Firmware state-machine logic compiled natively: 50/50 checks passing",
      "Rust host harness: 13/13 tests passing against a mock serial peer",
    ]);
    expect(thermalGuard?.limitations).toContain(
      "No physical hardware bring-up yet",
    );
    expect(JSON.stringify(thermalGuard)).not.toMatch(
      /tested on hardware|hardware[- ]validated|validated on hardware|HIL|hardware[- ]in[- ]the[- ]loop|field[- ]tested/i,
    );
  });

  it("keeps public copy free of unfinished-state language", () => {
    const publicContent = JSON.stringify({ projects, profile, socialLinks });
    expect(publicContent).not.toMatch(
      /image pending|not configured|placeholder|download files are/i,
    );

    const homeSource = readFileSync("app/page.tsx", "utf8");
    expect(homeSource).toContain("affiliation");
    expect(homeSource).not.toContain("alumniOf");
  });

  it("keeps hosting metadata neutral and Vercel-ready", () => {
    expect(siteConfig.siteUrl).toMatch(/^https?:\/\//);

    const vercelConfig = JSON.parse(readFileSync("vercel.json", "utf8"));
    expect(vercelConfig.framework).toBe("nextjs");
    expect(vercelConfig.buildCommand).toBe("npm run build:vercel");
  });
});
