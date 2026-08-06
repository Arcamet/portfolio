export type ProjectStatus =
  "available" | "release-prep" | "source-only" | "archived";

export type ProjectCategory =
  | "AI application"
  | "Audio system"
  | "Finance product"
  | "Workflow software"
  | "Interactive frontend";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "source";
}

export interface ProjectImage {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
}

export interface ContentItem {
  title: string;
  description: string;
  tradeoff?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  group: "client" | "shared" | "server" | "data" | "external";
}

export interface Project {
  slug: string;
  rank: number;
  name: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  tagline: string;
  summary: string;
  role: string;
  featured: boolean;
  accent: string;
  evidenceLabel: string;
  stack: string[];
  highlights: string[];
  overview: string[];
  problem: string[];
  solution: string[];
  features: ContentItem[];
  architecture: {
    summary: string;
    nodes: ArchitectureNode[];
  };
  challenges: ContentItem[];
  decisions: ContentItem[];
  testing: string[];
  accessibility: string[];
  security: string[];
  limitations: string[];
  futureWork: string[];
  resumeBullets: string[];
  interviewTopics: string[];
  images: ProjectImage[];
  links: ProjectLink[];
  seo: {
    title: string;
    description: string;
  };
}

export interface CapabilityGroup {
  index: string;
  title: string;
  summary: string;
  items: string[];
}
