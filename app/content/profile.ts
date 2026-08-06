export const profile = {
  name: "Jose Carlos Arce Camet",
  initials: "JC",
  location: "McAllen, Texas",
  school: "University of Texas Rio Grande Valley",
  schoolShort: "UTRGV",
  degree: "B.S. Computer Engineering",
  expectedGraduation: "Fall 2027",
  languages: ["English", "Spanish"],
  email: "josecarlos.arce@outlook.com",
  headline:
    "Full-stack products, AI systems, and interfaces with a point of view.",
  identity:
    "Computer Engineering student building full-stack products, AI systems, audio tools, and distinctive interfaces.",
  availability:
    "Available for software-engineering internships, junior roles, remote or hybrid technical work, and selected freelance projects.",
} as const;

export const socialLinks: {
  github: string | null;
  linkedin: string | null;
  resumeSoftware: string | null;
  resumeTechnical: string | null;
} = {
  github: null,
  linkedin: null,
  resumeSoftware: null,
  resumeTechnical: null,
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;

export const principles = [
  "Model the system before styling the screen.",
  "Treat user ownership as a backend responsibility.",
  "Make uncertain behavior inspectable.",
  "Use design to clarify—not obscure—the product.",
] as const;

export const siteConfig = {
  title: "Jose Carlos Arce Camet — Full-Stack and AI Application Portfolio",
  description:
    "Computer Engineering student at UTRGV building full-stack products, AI systems, audio tools, finance applications, workflow software, and accessible interfaces.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
