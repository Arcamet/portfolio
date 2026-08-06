import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "yapos",
    rank: 1,
    name: "YapOS",
    category: "AI application",
    year: "2026",
    status: "release-prep",
    tagline:
      "Inspectable personal AI with approved memory and selective response evaluation.",
    summary:
      "A full-stack AI workspace combining mode-specific conversations, approval-gated memory, document workflows, tasks, saved insights, and inspectable execution decisions.",
    role: "Product direction, full-stack architecture, AI orchestration, interface design, testing, and release verification.",
    featured: true,
    accent: "violet",
    evidenceLabel: "AI orchestration",
    stack: [
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "Zod",
      "Playwright",
    ],
    highlights: [
      "Deterministic orchestration",
      "Selective evaluator lifecycle",
      "Approval-gated memory",
      "Bounded document grounding",
      "Secure hashed sessions",
      "User-owned productivity tools",
    ],
    overview: [
      "YapOS is a full-stack personal AI workspace centered on Yap-A-Tron. It combines conversations, approved memory, uploaded files, grounded document questions, tasks, saved insights, preferences, and execution traces.",
      "The system is designed to make context construction, review behavior, and user ownership visible and bounded.",
    ],
    problem: [
      "Many AI applications send a transcript to a model and display the output without clearly controlling context, memory, review behavior, user ownership, provider cost, or failure handling.",
    ],
    solution: [
      "YapOS introduces a provider-independent orchestration layer that selects mode-specific strategies, builds bounded context, selectively evaluates higher-risk responses, and persists user-owned workflows through Fastify, Prisma, and PostgreSQL.",
    ],
    features: [
      {
        title: "Mode-specific assistance",
        description:
          "General, Study, Career, and Finance modes shape deterministic context and behavior.",
      },
      {
        title: "Bounded context",
        description:
          "Recent history, rolling summaries, approved memory, and lexical document retrieval limit what enters each request.",
      },
      {
        title: "Selective review",
        description:
          "Higher-risk responses enter an evaluator and revision lifecycle with an explicit safe fallback.",
      },
      {
        title: "User-owned workspace",
        description:
          "Tasks, files, memories, insights, preferences, and conversations remain scoped to authenticated users.",
      },
    ],
    architecture: {
      summary:
        "A React client consumes shared Zod contracts through a Fastify boundary. The assistant core selects a mode strategy, calls a provider adapter, and persists completed workflows through Prisma.",
      nodes: [
        {
          id: "client",
          label: "React client",
          description:
            "Conversations, tools, traces, and responsive Webcore interface.",
          group: "client",
        },
        {
          id: "contracts",
          label: "Shared contracts",
          description:
            "Zod validation shared across client and API boundaries.",
          group: "shared",
        },
        {
          id: "api",
          label: "Fastify API",
          description:
            "Authenticated routes, ownership checks, and workflow coordination.",
          group: "server",
        },
        {
          id: "core",
          label: "Assistant core",
          description:
            "Deterministic strategy selection, context building, evaluation, and fallback.",
          group: "server",
        },
        {
          id: "data",
          label: "PostgreSQL + files",
          description: "Prisma records and a local file-storage adapter.",
          group: "data",
        },
        {
          id: "provider",
          label: "OpenAI adapter",
          description:
            "Provider-specific Responses API integration behind an internal boundary.",
          group: "external",
        },
      ],
    },
    challenges: [
      {
        title: "Bounded context with useful continuity",
        description:
          "The system balances recent turns, summaries, approved memory, and retrieved document text without treating all history as equally relevant.",
      },
      {
        title: "Inspectable response review",
        description:
          "Selective evaluation adds a revision path without pretending every response requires or survives a second model call.",
      },
    ],
    decisions: [
      {
        title: "Deterministic routing",
        description: "Mode and request signals select an explicit strategy.",
        tradeoff:
          "Less emergent routing behavior in exchange for cost and execution predictability.",
      },
      {
        title: "Approval before inferred memory",
        description:
          "Inferred candidates remain inactive until the user accepts them.",
        tradeoff: "Adds a workflow step while preserving user control.",
      },
      {
        title: "Lexical retrieval first",
        description:
          "Bounded text retrieval ships before vector infrastructure.",
        tradeoff:
          "Transparent and practical for the current scope, but not semantic search.",
      },
      {
        title: "Provider calls outside transactions",
        description:
          "Slow network work does not hold database transactions open.",
      },
    ],
    testing: [
      "Vitest coverage for orchestration and contracts",
      "Playwright coverage for critical user workflows",
      "Provider-failure and invalid-evaluator fallback checks",
      "Build and release verification",
    ],
    accessibility: [
      "Keyboard-operable responsive interface",
      "Clear execution and approval states",
      "Visible status text independent of color",
      "Reduced-motion-aware interaction",
    ],
    security: [
      "Opaque session tokens stored as HMAC hashes",
      "User-owned record boundaries",
      "Rate, concurrency, and timeout controls",
      "Validated document and request payloads",
    ],
    limitations: [
      "Final public deployment is not yet verified",
      "Local file storage requires persistent server storage",
      "Rate and concurrency controls are process-local",
      "Retrieval is lexical, not semantic",
      "No OCR or response streaming",
      "No autonomous agents or multi-agent system",
    ],
    futureWork: [
      "Align normal chat attachments with the dedicated Files workflow",
      "Persist and reload execution traces consistently",
      "Correct the reviewed-response metric",
      "Move file storage to a durable production adapter",
    ],
    resumeBullets: [
      "Designed a provider-independent AI orchestration layer with deterministic modes, bounded context, selective evaluation, and safe fallbacks.",
      "Implemented a Fastify, Prisma, and PostgreSQL workspace with secure hashed sessions and user-owned conversations, files, tasks, memories, and insights.",
    ],
    interviewTopics: [
      "Why deterministic routing fits the current product",
      "How inferred memory approval changes the trust model",
      "Where lexical retrieval stops being sufficient",
      "How provider failures remain outside database transactions",
    ],
    engineeringTakeaways: [
      "Deterministic routing makes provider cost, context assembly, and fallback behavior easier to inspect and test.",
      "Approval-gated memory changes persistence from a hidden side effect into a user-controlled workflow.",
      "Keeping provider calls outside database transactions reduces lock duration and contains network failure.",
    ],
    images: [
      {
        id: "yapos-dashboard",
        src: "/images/projects/yapos/dashboard-desktop.png",
        alt: "YapOS dashboard showing recent conversations, workspace tools, memory candidates, and system status.",
        width: 1440,
        height: 900,
        caption: "Authenticated workspace dashboard",
        role: "card",
      },
      {
        id: "yapos-landing",
        src: "/images/projects/yapos/landing-desktop.png",
        alt: "YapOS landing page introducing the personal AI workspace and its operating modes.",
        width: 1440,
        height: 900,
        caption: "Product landing page",
        role: "hero",
      },
      {
        id: "yapos-files",
        src: "/images/projects/yapos/files-desktop.png",
        alt: "YapOS files workspace for uploading documents and asking bounded grounded questions.",
        width: 1440,
        height: 900,
        caption: "Document workspace and grounded-question flow",
        role: "gallery",
      },
      {
        id: "yapos-memory",
        src: "/images/projects/yapos/memory-desktop.png",
        alt: "YapOS memory workspace showing approved and pending personal memory controls.",
        width: 1440,
        height: 957,
        caption: "Approval-gated memory workspace",
        role: "gallery",
      },
      {
        id: "yapos-chat-mobile",
        src: "/images/projects/yapos/chat-mobile.png",
        alt: "Mobile YapOS conversation showing a populated assistant exchange and compact composer.",
        width: 390,
        height: 844,
        caption: "Populated conversation on mobile",
        role: "mobile",
      },
    ],
    futureImages: [
      {
        id: "yapos-populated-trace",
        description:
          "Desktop conversation capture with the full execution trace expanded after a reviewed response.",
      },
    ],
    links: [],
    seo: {
      title: "YapOS Case Study — Jose Carlos Arce Camet",
      description:
        "A full-stack personal AI workspace with deterministic orchestration, approved memory, bounded grounding, and inspectable execution.",
    },
  },
  {
    slug: "auralis",
    rank: 2,
    name: "Auralis",
    category: "Audio system",
    year: "2026",
    status: "portfolio-ready",
    tagline: "Explainable audio recognition with secure full-stack workflows.",
    summary:
      "An experimental audio-recognition application that analyzes microphone or uploaded clips, ranks an original catalog, and explains confidence through signal and score diagnostics.",
    role: "Product direction, full-stack architecture, audio-analysis workflow, interface design, testing, and release verification.",
    featured: true,
    accent: "cyan",
    evidenceLabel: "Audio processing",
    stack: [
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Web Audio API",
      "Zod",
      "Vitest",
    ],
    highlights: [
      "Browser PCM analysis",
      "Ranked catalog matching",
      "Confidence diagnostics",
      "Secure upload validation",
      "Private recognition history",
      "Original media-console interface",
    ],
    overview: [
      "Auralis is an experimental full-stack audio-recognition application for capturing or uploading a short clip, extracting signal characteristics, receiving ranked matches, and retaining private recognition history and favorites.",
    ],
    problem: [
      "Commercial music recognition requires infrastructure and catalogs beyond the scope of a portfolio project, while fake predetermined results provide little engineering value.",
    ],
    solution: [
      "Auralis implements a smaller transparent recognition pipeline using original generated audio, browser-derived PCM descriptors, strict backend validation, ranked candidate scoring, and explicit confidence diagnostics.",
    ],
    features: [
      {
        title: "Capture and upload",
        description:
          "Microphone recording and bounded audio uploads enter one analysis workflow.",
      },
      {
        title: "Signal analysis",
        description:
          "PCM features cover frequency bands, envelope behavior, pitch, and harmonic estimates.",
      },
      {
        title: "Explainable ranking",
        description:
          "Candidate scores, runner-up gaps, signal quality, and confidence states remain visible.",
      },
      {
        title: "Private library",
        description:
          "Authenticated history, favorites, and dashboard analytics are server scoped.",
      },
    ],
    architecture: {
      summary:
        "A React client decodes audio and derives bounded descriptors. Shared contracts validate the handoff to Fastify, where the recognition engine scores an original catalog and persists user-owned history.",
      nodes: [
        {
          id: "client",
          label: "React + Web Audio",
          description:
            "Capture, decoding, PCM extraction, and visual diagnostics.",
          group: "client",
        },
        {
          id: "contracts",
          label: "Shared contracts",
          description: "Audio limits and descriptor validation.",
          group: "shared",
        },
        {
          id: "api",
          label: "Fastify API",
          description:
            "Authentication, byte-level validation, and recognition coordination.",
          group: "server",
        },
        {
          id: "engine",
          label: "Recognition engine",
          description: "Ranked catalog scoring and confidence diagnostics.",
          group: "server",
        },
        {
          id: "data",
          label: "PostgreSQL + files",
          description:
            "Private history, favorites, catalog, and staged storage.",
          group: "data",
        },
      ],
    },
    challenges: [
      {
        title: "Treating client audio as untrusted",
        description:
          "Browser-derived descriptors are useful for analysis but remain input that the server validates and bounds.",
      },
      {
        title: "Confidence without false certainty",
        description:
          "Signal quality and the gap between ranked candidates influence explicit confidence states.",
      },
    ],
    decisions: [
      {
        title: "Original bounded catalog",
        description:
          "The recognition pipeline demonstrates real matching without pretending to cover commercial music.",
      },
      {
        title: "Byte-level file detection",
        description:
          "Container and media evidence are checked independently of filenames and request headers.",
      },
      {
        title: "Compensating cleanup",
        description:
          "Filesystem and database failures trigger explicit cleanup behavior.",
      },
      {
        title: "Synchronous processing",
        description:
          "The current scope favors an inspectable request lifecycle over background infrastructure.",
      },
    ],
    testing: [
      "Vitest checks for audio utilities and score behavior",
      "Validation tests for descriptors and upload limits",
      "Recognition confidence and runner-up behavior",
      "Failure cleanup verification",
    ],
    accessibility: [
      "Text equivalents for visual diagnostics",
      "Keyboard-operable capture and upload flows",
      "Confidence communicated with labels, not color alone",
      "Responsive media-console layout",
    ],
    security: [
      "Authenticated private history and favorites",
      "File type detection from bytes",
      "Independent container metadata validation",
      "Bounded duration and sample-rate inputs",
    ],
    limitations: [
      "Small synthetic catalog",
      "Browser features are not cryptographically tied to uploaded audio",
      "No production acoustic fingerprinting",
      "No arbitrary commercial-song recognition",
      "Local storage is not horizontally scalable",
      "Processing is synchronous",
    ],
    futureWork: [
      "Move processing to a durable job boundary",
      "Bind server-derived features more closely to stored audio",
      "Replace local storage with an object-storage adapter",
      "Expand the original test catalog carefully",
    ],
    resumeBullets: [
      "Built an explainable audio-recognition workflow using Web Audio PCM descriptors, ranked candidate scoring, and explicit confidence diagnostics.",
      "Secured an authenticated Fastify and PostgreSQL pipeline with byte-level upload validation, user-owned history, and compensating file cleanup.",
    ],
    interviewTopics: [
      "Why confidence includes runner-up distance",
      "What browser-derived audio features can and cannot prove",
      "How file validation crosses multiple trust boundaries",
      "When synchronous processing should move to jobs",
    ],
    engineeringTakeaways: [
      "A bounded original catalog demonstrates real ranking behavior without overstating commercial recognition coverage.",
      "Confidence becomes more useful when it exposes signal quality and distance from the runner-up, not just a top score.",
      "Upload safety requires independent checks of bytes, container evidence, duration, and sample-rate boundaries.",
    ],
    images: [
      {
        id: "auralis-recognition-result",
        src: "/images/projects/auralis/recognition-result.jpg",
        alt: "Auralis recognition result with a ranked match, confidence explanation, and signal diagnostics.",
        width: 1270,
        height: 714,
        caption: "Recognition result and confidence diagnostics",
        role: "card",
      },
      {
        id: "auralis-landing",
        src: "/images/projects/auralis/landing.jpg",
        alt: "Auralis landing page presenting microphone capture and upload recognition workflows.",
        width: 1270,
        height: 714,
        caption: "Audio-recognition landing experience",
        role: "hero",
      },
      {
        id: "auralis-dashboard",
        src: "/images/projects/auralis/dashboard.jpg",
        alt: "Auralis private dashboard with recognition history, favorites, and usage summaries.",
        width: 1270,
        height: 714,
        caption: "Private recognition dashboard",
        role: "gallery",
      },
      {
        id: "auralis-studio",
        src: "/images/projects/auralis/studio-prepared.jpg",
        alt: "Auralis studio prepared to record or upload a bounded audio clip for analysis.",
        width: 1270,
        height: 714,
        caption: "Prepared capture and upload studio",
        role: "gallery",
      },
      {
        id: "auralis-mobile-deck",
        src: "/images/projects/auralis/mobile-bottom-deck.jpg",
        alt: "Mobile Auralis interface with its bottom action deck and audio workflow controls.",
        width: 380,
        height: 822,
        caption: "Mobile recognition controls",
        role: "mobile",
      },
    ],
    links: [],
    seo: {
      title: "Auralis Case Study — Jose Carlos Arce Camet",
      description:
        "An explainable full-stack audio-recognition experiment with browser signal analysis, ranked matching, and secure user-owned history.",
    },
  },
  {
    slug: "personal-finance-tracker",
    rank: 3,
    name: "Personal Finance Tracker",
    category: "Finance product",
    year: "2026",
    status: "live",
    tagline:
      "Exact money calculations, accessible analytics, and user-owned financial data.",
    summary:
      "An authenticated finance workspace for transactions, monthly budgets, cash-flow analytics, filtering, and defensive CSV export.",
    role: "Product direction, financial-domain modeling, Supabase architecture, accessible interface design, testing, and release verification.",
    featured: true,
    accent: "green",
    evidenceLabel: "Exact financial logic",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Recharts",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
    ],
    highlights: [
      "Integer-cent calculations",
      "Database constraints and RLS",
      "Monthly budgets",
      "Defensive CSV export",
      "Accessible analytics",
      "Extensive automated testing",
    ],
    overview: [
      "An authenticated personal-finance workspace for recording income and expenses, managing monthly spending targets, analyzing cash flow, and exporting filtered history.",
    ],
    problem: [
      "Finance applications can produce misleading results when decimal arithmetic, signs, dates, database rules, exports, and visualizations do not use consistent assumptions.",
    ],
    solution: [
      "The application centralizes financial rules in pure TypeScript modules, converts values to integer cents, aligns frontend validation with PostgreSQL constraints, protects ownership with RLS, and provides accessible analytics.",
    ],
    features: [
      {
        title: "Transaction workspace",
        description:
          "Income and expense CRUD uses explicit types, business dates, and fixed categories.",
      },
      {
        title: "Exact reporting",
        description:
          "Cash flow and budgets aggregate integer cents instead of floating-point currency.",
      },
      {
        title: "Accessible analytics",
        description:
          "Charts include tabular alternatives and controls expose clear labels and states.",
      },
      {
        title: "Defensive export",
        description:
          "Filtered CSV output neutralizes spreadsheet formula injection.",
      },
    ],
    architecture: {
      summary:
        "A React client applies shared domain rules before calling Supabase. PostgreSQL constraints mirror those rules, while Row Level Security remains the authorization boundary.",
      nodes: [
        {
          id: "client",
          label: "React client",
          description: "Transactions, budgets, filters, analytics, and export.",
          group: "client",
        },
        {
          id: "domain",
          label: "Domain modules",
          description: "Integer-cent math, dates, categories, and CSV safety.",
          group: "shared",
        },
        {
          id: "supabase",
          label: "Supabase boundary",
          description: "Authentication and scoped data access.",
          group: "server",
        },
        {
          id: "data",
          label: "PostgreSQL + RLS",
          description: "Constraints and user-ownership policies.",
          group: "data",
        },
      ],
    },
    challenges: [
      {
        title: "Consistent money semantics",
        description:
          "Forms, reports, budgets, charts, and database constraints share the same positive-magnitude and explicit-type model.",
      },
      {
        title: "Race-safe user context",
        description:
          "Requests guard against stale user and stale month responses overwriting current state.",
      },
    ],
    decisions: [
      {
        title: "Integer cents",
        description:
          "All aggregates use exact integer values rather than binary floating point.",
      },
      {
        title: "Business dates",
        description: "Reporting dates remain separate from audit timestamps.",
      },
      {
        title: "RLS authorization",
        description:
          "User ownership is enforced in PostgreSQL, not inferred from filtered UI state.",
      },
      {
        title: "Table alternatives",
        description:
          "Every charted value remains available in accessible tabular form.",
      },
    ],
    testing: [
      "Pure financial-rule tests",
      "React Testing Library coverage for critical controls",
      "Race-condition regression checks",
      "CI validation through GitHub Actions",
    ],
    accessibility: [
      "Accessible custom controls",
      "Tabular alternatives for charts",
      "Keyboard-operable filters and forms",
      "Meaningful empty, loading, and validation states",
    ],
    security: [
      "PostgreSQL Row Level Security",
      "Database constraints mirror UI rules",
      "Safe internal redirect restoration",
      "CSV formula-injection defense",
    ],
    limitations: [
      "Manual entry only",
      "No bank synchronization",
      "No financial advice",
      "No recurring transactions",
      "No multi-currency",
      "No custom backend",
      "No server-side pagination",
      "Frontend tests do not independently prove RLS",
    ],
    futureWork: [
      "Add server-side pagination if data volume requires it",
      "Verify policies with dedicated database integration tests",
      "Expand export formats only with equivalent safety checks",
    ],
    resumeBullets: [
      "Modeled a personal-finance domain with integer-cent calculations, business dates, database-enforced constraints, and race-safe async state.",
      "Implemented Supabase authentication, PostgreSQL RLS, accessible analytics, and defensive CSV export for user-owned transaction data.",
    ],
    interviewTopics: [
      "Why positive magnitude plus explicit type reduces sign errors",
      "How database constraints complement RLS",
      "How stale async responses are prevented",
      "Why charts need table alternatives",
    ],
    engineeringTakeaways: [
      "Integer-cent arithmetic keeps forms, budgets, charts, and exports aligned around exact money values.",
      "Row Level Security is the ownership boundary; filtered client state is only a presentation concern.",
      "Accessible analytics require the same values to remain available without relying on a chart or color encoding.",
    ],
    images: [
      {
        id: "finance-dashboard",
        src: "/images/projects/personal-finance-tracker/dashboard-desktop.jpg",
        alt: "Personal Finance Tracker dashboard with balances, income, expenses, categories, and monthly budget progress.",
        width: 1426,
        height: 990,
        caption: "Authenticated financial overview",
        role: "card",
      },
      {
        id: "finance-login",
        src: "/images/projects/personal-finance-tracker/login-desktop.jpg",
        alt: "Personal Finance Tracker sign-in page with its secure account access panel.",
        width: 1440,
        height: 1000,
        caption: "Secure account entry",
        role: "hero",
      },
      {
        id: "finance-transactions",
        src: "/images/projects/personal-finance-tracker/transactions-desktop.jpg",
        alt: "Transaction manager showing the add form, cash-flow summary, filters, and CSV export.",
        width: 1426,
        height: 990,
        caption: "Transaction management and defensive export",
        role: "gallery",
      },
      {
        id: "finance-dashboard-mobile",
        src: "/images/projects/personal-finance-tracker/dashboard-mobile.jpg",
        alt: "Mobile Personal Finance Tracker dashboard with responsive financial summary cards.",
        width: 375,
        height: 814,
        caption: "Responsive dashboard on mobile",
        role: "mobile",
      },
    ],
    links: [
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
    ],
    seo: {
      title: "Personal Finance Tracker Case Study — Jose Carlos Arce Camet",
      description:
        "A secure personal-finance workspace built around exact money calculations, PostgreSQL constraints, RLS, and accessible analytics.",
    },
  },
  {
    slug: "intern-hunt-crm",
    rank: 4,
    name: "Intern Hunt CRM",
    category: "Workflow software",
    year: "2026",
    status: "source-published",
    tagline:
      "A private recruiting pipeline for applications, follow-ups, and interview milestones.",
    summary:
      "A Supabase-backed job-search workspace for managing opportunities, recruiter context, deadlines, activity history, and pipeline analytics.",
    role: "Product direction, workflow modeling, Supabase data design, interface design, analytics, and testing.",
    featured: false,
    accent: "amber",
    evidenceLabel: "Business workflow modeling",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Tailwind CSS",
      "Recharts",
      "Vitest",
    ],
    highlights: [
      "Full application lifecycle",
      "Recruiter and follow-up context",
      "Supabase Row Level Security",
      "Smart views and analytics",
      "Activity history",
      "Private workflow model",
    ],
    overview: [
      "Intern Hunt CRM is a database-backed recruiting workspace for managing internship and job applications from initial sourcing through interviews and decisions.",
    ],
    problem: [
      "Job searches become fragmented across spreadsheets, bookmarks, email, calendars, résumé files, and notes.",
    ],
    solution: [
      "The CRM combines opportunity records, recruiter details, follow-ups, deadlines, materials, milestones, activity history, and pipeline analytics in one user-owned workspace.",
    ],
    features: [
      {
        title: "Pipeline records",
        description:
          "Applications include stage, priority, work mode, recruiter context, and material references.",
      },
      {
        title: "Follow-through",
        description:
          "Follow-ups, deadlines, milestones, and derived activity history keep next actions visible.",
      },
      {
        title: "Smart views",
        description:
          "Search, filters, sorting, and dashboard analytics reveal the state of a personal pipeline.",
      },
      {
        title: "Activity generation",
        description:
          "Meaningful application changes produce a structured history for later review.",
      },
    ],
    architecture: {
      summary:
        "React and TanStack Query consume a repository abstraction that can target live Supabase data or a local sample workspace. Identity and mode participate in cache keys.",
      nodes: [
        {
          id: "client",
          label: "React client",
          description: "Pipeline, smart views, detail forms, and analytics.",
          group: "client",
        },
        {
          id: "query",
          label: "Query + repository",
          description: "Mode-aware caching and live or sample data adapters.",
          group: "shared",
        },
        {
          id: "supabase",
          label: "Supabase",
          description: "Authentication and user-scoped data operations.",
          group: "server",
        },
        {
          id: "data",
          label: "PostgreSQL + RLS",
          description:
            "Applications and activity records protected by ownership policies.",
          group: "data",
        },
      ],
    },
    challenges: [
      {
        title: "Preserving unsaved work",
        description:
          "Live data refreshes do not discard in-progress form edits.",
      },
      {
        title: "Separating live and sample identity",
        description:
          "User mode and identity are part of every relevant query key and repository operation.",
      },
    ],
    decisions: [
      {
        title: "Repository abstraction",
        description:
          "Live Supabase and local sample data expose the same workflow surface.",
      },
      {
        title: "Explicit scoped queries",
        description: "RLS is reinforced by user-scoped access patterns.",
      },
      {
        title: "Derived activity events",
        description:
          "Structured history is produced from meaningful state changes.",
      },
      {
        title: "Client-side analytics",
        description:
          "Aggregation remains appropriate for current personal dataset sizes.",
      },
    ],
    testing: [
      "Form validation and application-field mapping",
      "Recruiting-stage date ordering",
      "Smart views, search, sorting, and filters",
      "Pipeline analytics calculations",
      "Activity generation from meaningful changes",
      "Preservation of unsaved edits during data refresh",
    ],
    accessibility: [
      "Labeled forms and validation relationships",
      "Keyboard-operable search, filters, and sorting",
      "Text summaries for pipeline analytics",
      "Responsive application detail views",
    ],
    security: [
      "Supabase authentication",
      "PostgreSQL Row Level Security",
      "Explicit user-scoped queries",
      "Identity-aware query caching",
    ],
    limitations: [
      "No custom backend",
      "No automated email reminders",
      "Contacts are fields attached to applications",
      "No drag-and-drop pipeline",
      "Activity creation is not transactionally coupled to application mutation",
      "No server-side pagination",
      "No E2E suite unless later added",
    ],
    futureWork: [
      "Create transactional activity writes at a trusted server boundary",
      "Add pagination if a personal pipeline outgrows client aggregation",
      "Add focused end-to-end coverage for critical mutations",
    ],
    resumeBullets: [
      "Built a private recruiting pipeline with application lifecycle records, recruiter context, deadlines, activity history, smart views, and analytics.",
      "Implemented a repository abstraction for Supabase and local sample data with RLS, identity-aware query keys, and refresh-safe form state.",
    ],
    interviewTopics: [
      "Why sample mode uses a repository abstraction",
      "How unsaved edits survive query refreshes",
      "Where activity history needs transactionality",
      "When client-side analytics stops fitting",
    ],
    engineeringTakeaways: [
      "Stage and date ordering rules belong in reusable workflow logic so forms and analytics share the same assumptions.",
      "Identity-aware query keys prevent private and alternate data modes from sharing stale cached records.",
      "Preserving dirty form fields during refresh separates server freshness from ownership of in-progress user edits.",
    ],
    images: [
      {
        id: "intern-hunt-dashboard-study",
        src: "/images/projects/intern-hunt-crm/dashboard-overview.svg",
        alt: "Conceptual Intern Hunt CRM dashboard study with pipeline totals, status distribution, deadlines, and funnel statistics.",
        width: 1600,
        height: 960,
        caption: "Interface study — conceptual dashboard composition",
        role: "study",
      },
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/intern-hunt-crm",
        kind: "source",
      },
    ],
    seo: {
      title: "Intern Hunt CRM Case Study — Jose Carlos Arce Camet",
      description:
        "A private recruiting workflow for applications, recruiter context, follow-ups, deadlines, milestones, and pipeline analytics.",
    },
  },
  {
    slug: "local-matchroom",
    rank: 5,
    name: "Local Matchroom",
    category: "Interactive frontend",
    year: "2026",
    status: "live",
    tagline:
      "Accessible local chess built on a replayable move-log architecture.",
    summary:
      "A local two-player chess interface with complete legal-move integration, SAN history, keyboard interaction, responsive geometry, and original SVG pieces.",
    role: "State architecture, chess.js integration, accessible interaction design, original SVG system, testing, and responsive implementation.",
    featured: false,
    accent: "rose",
    evidenceLabel: "Accessible interaction",
    stack: [
      "React",
      "TypeScript",
      "chess.js",
      "Vite",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
      "axe-core",
    ],
    highlights: [
      "Replayable canonical state",
      "Complete rules integration",
      "ARIA grid interaction",
      "Focus-managed promotion",
      "Original SVG piece system",
      "Real-browser geometry tests",
    ],
    overview: [
      "Local Matchroom is a frontend-only chess application for two players sharing one screen.",
    ],
    problem: [
      "Chess interfaces must coordinate board state, legal moves, captures, history, turn, status, promotion, selection, and focus. Storing all of those independently creates synchronization risks.",
    ],
    solution: [
      "Local Matchroom stores only a minimal played-move log and reconstructs the chess.js game from that canonical state.",
    ],
    features: [
      {
        title: "Complete local play",
        description:
          "chess.js handles legal moves, castling, en passant, promotion, checkmate, and draw states.",
      },
      {
        title: "Replayable state",
        description:
          "SAN history, captures, status, and board position derive from one serializable move log.",
      },
      {
        title: "Keyboard board",
        description:
          "A roving-tabindex ARIA grid supports selection and movement without a pointer.",
      },
      {
        title: "Responsive geometry",
        description:
          "The board and supporting panels remain usable across desktop and mobile layouts.",
      },
    ],
    architecture: {
      summary:
        "A React reducer manages interaction state while the canonical played-move log reconstructs chess.js before render and transition. All secondary game data is derived.",
      nodes: [
        {
          id: "input",
          label: "Pointer + keyboard",
          description: "Click, roving focus, selection, and promotion input.",
          group: "client",
        },
        {
          id: "reducer",
          label: "Interaction reducer",
          description: "Selection, focus, and dialog state.",
          group: "shared",
        },
        {
          id: "moves",
          label: "Canonical move log",
          description: "Minimal serializable state for the local session.",
          group: "data",
        },
        {
          id: "rules",
          label: "chess.js",
          description: "Legal-move integration and reconstructed game state.",
          group: "external",
        },
        {
          id: "derived",
          label: "Derived interface",
          description: "Board, SAN history, captures, turn, and status.",
          group: "client",
        },
      ],
    },
    challenges: [
      {
        title: "One source of chess truth",
        description:
          "Reconstruction prevents board, history, captures, and status from drifting across separately stored values.",
      },
      {
        title: "Board accessibility",
        description:
          "Grid semantics, roving focus, announcements, and focus-managed promotion make dense interaction keyboard operable.",
      },
    ],
    decisions: [
      {
        title: "Move log as canonical state",
        description:
          "The application stores played moves and derives the rest.",
      },
      {
        title: "Rules library integration",
        description:
          "chess.js supplies legal rules instead of claiming a custom engine.",
      },
      {
        title: "Native modal promotion",
        description:
          "Focus containment and return behavior build on browser dialog semantics.",
      },
      {
        title: "Real-browser geometry checks",
        description:
          "Playwright verifies responsive board sizing where a DOM-only test cannot.",
      },
    ],
    testing: [
      "Vitest and React Testing Library for reducer and interaction behavior",
      "Playwright coverage for game flows and responsive geometry",
      "axe-core accessibility scans",
      "Reduced-motion and forced-colors checks",
    ],
    accessibility: [
      "Roving-tabindex ARIA grid",
      "Live move and game-state announcements",
      "Focus-managed promotion dialog",
      "Forced-colors and reduced-motion support",
    ],
    security: [
      "Frontend-only local-session scope",
      "No accounts, networked state, or server trust boundary",
      "Rules delegated to a maintained library",
    ],
    limitations: [
      "No persistence",
      "No online multiplayer",
      "No AI opponent",
      "No accounts",
      "No clocks",
      "No PGN",
      "No backend",
      "Fixed local-session scope",
    ],
    futureWork: [
      "Add optional local persistence with explicit reset controls",
      "Support PGN import and export after validating parser behavior",
      "Extend assistive announcements through user testing",
    ],
    resumeBullets: [
      "Built an accessible local chess interface around a canonical replayable move log and complete chess.js rules integration.",
      "Implemented roving-grid keyboard interaction, focus-managed promotion, original SVG pieces, and real-browser geometry and axe testing.",
    ],
    interviewTopics: [
      "Why the move log is the canonical state",
      "How roving tabindex works on a chessboard",
      "What Playwright geometry tests catch",
      "Why chess.js integration is not a custom engine",
    ],
    engineeringTakeaways: [
      "A replayable move log keeps the board, SAN history, captures, turn, and result derived from one serializable source.",
      "A chessboard can remain pointer-friendly while using grid semantics, roving focus, and explicit announcements for keyboard play.",
      "Responsive geometry and focus behavior require real-browser verification beyond reducer and DOM-only tests.",
    ],
    images: [
      {
        id: "matchroom-piece-study",
        src: "/images/projects/local-matchroom/rose-court-piece-gallery.png",
        alt: "Rose Court chess-piece study showing original light and dark pieces at board, silhouette, and interaction scales.",
        width: 1440,
        height: 2334,
        caption: "Original Rose Court piece system",
        role: "card",
      },
      {
        id: "matchroom-desktop",
        src: "/images/projects/local-matchroom/local-matchroom-desktop.png",
        alt: "Local Matchroom desktop interface with a complete chessboard, match status, captures, and notation log.",
        width: 1440,
        height: 1596,
        caption: "Desktop local-match interface",
        role: "hero",
      },
      {
        id: "matchroom-mobile",
        src: "/images/projects/local-matchroom/local-matchroom-mobile.png",
        alt: "Local Matchroom mobile layout with the chessboard and stacked match information panels.",
        width: 390,
        height: 1533,
        caption: "Responsive local match on mobile",
        role: "mobile",
      },
    ],
    links: [
      {
        label: "View live product",
        href: "https://local-matchroom.vercel.app/",
        kind: "live",
      },
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/local-matchroom",
        kind: "source",
      },
    ],
    seo: {
      title: "Local Matchroom Case Study — Jose Carlos Arce Camet",
      description:
        "Accessible local chess built with a replayable move log, chess.js integration, keyboard interaction, and browser-tested responsive geometry.",
    },
  },
];

export const orderedProjects = [...projects].sort((a, b) => a.rank - b.rank);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProject(project: Project) {
  return orderedProjects[project.rank % orderedProjects.length];
}

const slugs = projects.map((project) => project.slug);
const ranks = projects.map((project) => project.rank);

if (
  new Set(slugs).size !== slugs.length ||
  new Set(ranks).size !== ranks.length
) {
  throw new Error("Project slugs and ranks must be unique.");
}

if (
  projects.some((project) => project.images.some((image) => !image.alt.trim()))
) {
  throw new Error("Every project image needs meaningful alternative text.");
}

if (
  projects.some((project) =>
    project.links.some((link) => !/^https:\/\//.test(link.href)),
  )
) {
  throw new Error("Configured external project links must use HTTPS.");
}
