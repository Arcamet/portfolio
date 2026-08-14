export const profile = {
  name: "Jose Carlos Arce Camet",
  initials: "JC",
  location: "McAllen, Texas",
  school: "The University of Texas Rio Grande Valley",
  schoolShort: "UTRGV",
  degree: "Bachelor of Science in Computer Engineering",
  expectedGraduation: "Fall 2027",
  languages: ["English", "Spanish"],
  email: "josecarlos.arce@outlook.com",
  headline:
    "Full-stack products, AI systems, and interfaces with a point of view.",
  identity:
    "Computer Engineering student building full-stack products, AI systems, audio tools, and distinctive interfaces.",
  availability:
    "Seeking software engineering, full-stack, and AI application opportunities.",
} as const;

export const resumePaths = {
  software: "/resume/Jose_Carlos_Arce_Camet_SWE_Resume.pdf",
  technical: "/resume/Jose_Carlos_Arce_Camet_Remote_Tech_Resume.pdf",
} as const;

export const socialLinks: {
  github: string | null;
  linkedin: string | null;
  resumeSoftware: string | null;
  resumeTechnical: string | null;
} = {
  github: "https://github.com/Arcamet",
  linkedin: "https://www.linkedin.com/in/jose-carlos-arce-camet/",
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

const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const siteConfig = {
  title: "Jose Carlos Arce Camet — Full-Stack and AI Application Portfolio",
  description:
    "Computer Engineering student at UTRGV building full-stack products, AI systems, audio tools, finance applications, workflow software, and accessible interfaces.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelProductionUrl ??
    "http://localhost:3000",
} as const;
