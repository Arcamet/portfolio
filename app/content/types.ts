export type ProjectStatus =
  | "portfolio-ready"
  | "release-prep"
  | "source-published"
  | "live"
  | "in-progress";

export type ProjectCategory =
  | "AI application"
  | "Audio system"
  | "Finance product"
  | "Workflow software"
  | "Interactive frontend"
  | "Systems software"
  | "Embedded systems";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "source";
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  role: "card" | "hero" | "gallery" | "mobile" | "study" | "diagram";
}

export interface FutureProjectImage {
  id: string;
  description: string;
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

export interface EvidenceBoundary {
  summary: string;
  verified: string[];
  notYetVerified: string[];
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
  engineeringTakeaways: string[];
  images: ProjectImage[];
  futureImages?: FutureProjectImage[];
  evidenceBoundary?: EvidenceBoundary;
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
