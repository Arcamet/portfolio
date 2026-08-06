import type { CapabilityGroup } from "./types";

export const capabilities: CapabilityGroup[] = [
  {
    index: "01",
    title: "AI application engineering",
    summary:
      "Explicit orchestration and bounded context instead of opaque behavior.",
    items: [
      "Deterministic orchestration",
      "Context construction",
      "Approval-gated memory",
      "Document retrieval",
      "Provider integration",
      "Evaluation and fallback behavior",
    ],
  },
  {
    index: "02",
    title: "Full-stack development",
    summary:
      "Complete workflows across interface, API, persistence, and ownership boundaries.",
    items: [
      "React and TypeScript",
      "Fastify APIs",
      "PostgreSQL and Prisma",
      "Supabase",
      "Authentication",
      "User-owned data",
    ],
  },
  {
    index: "03",
    title: "Frontend engineering",
    summary:
      "Interfaces built around complex state, clarity, and accessible interaction.",
    items: [
      "Responsive systems",
      "Complex state",
      "Accessible forms",
      "Keyboard interaction",
      "Data visualization",
      "Original component design",
    ],
  },
  {
    index: "04",
    title: "Security and reliability",
    summary:
      "Authorization, validation, and failure modes treated as product concerns.",
    items: [
      "Row Level Security",
      "Session security",
      "Upload validation",
      "Ownership boundaries",
      "Rate and concurrency controls",
      "Defensive failure handling",
    ],
  },
  {
    index: "05",
    title: "Testing and delivery",
    summary:
      "Risk-focused verification from pure logic through real-browser behavior.",
    items: [
      "Vitest",
      "React Testing Library",
      "Playwright",
      "GitHub Actions",
      "Migration verification",
      "Accessibility validation",
    ],
  },
];
