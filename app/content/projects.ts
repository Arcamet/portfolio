import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "yapos",
    rank: 2,
    name: "YapOS",
    category: "AI application",
    year: "2026",
    status: "live",
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
      "Authenticated workflows require a real account; the public landing page explains the implemented system without demo credentials",
      "Local file storage requires persistent server storage",
      "Rate and concurrency controls are process-local",
      "Retrieval is lexical, not semantic",
      "No OCR or response streaming",
      "No autonomous agents or multi-agent system",
    ],
    futureWork: [
      "Replace local storage with an S3-compatible adapter for multi-instance deployment",
      "Move process-local rate and concurrency state to a shared store only when horizontal scaling is required",
      "Add OCR if scanned PDFs become an explicitly supported input",
      "Add richer database-backed integration fixtures around a disposable PostgreSQL test database",
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
    links: [
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
    ],
    seo: {
      title: "YapOS Case Study — Jose Carlos Arce Camet",
      description:
        "A full-stack personal AI workspace with deterministic orchestration, approved memory, bounded grounding, and inspectable execution.",
    },
  },
  {
    slug: "auralis",
    rank: 3,
    name: "Auralis",
    category: "Audio system",
    year: "2026",
    status: "source-published",
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
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/auralis",
        kind: "source",
      },
    ],
    seo: {
      title: "Auralis Case Study — Jose Carlos Arce Camet",
      description:
        "An explainable full-stack audio-recognition experiment with browser signal analysis, ranked matching, and secure user-owned history.",
    },
  },
  {
    slug: "personal-finance-tracker",
    rank: 1,
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
      "155 tests / 91.55% coverage",
      "Monthly budgets",
      "Defensive CSV export",
      "Accessible analytics",
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
      "26 test files with 155 passing tests",
      "91.55% statement and line coverage, 85.46% branch coverage, and 92.74% function coverage",
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
    status: "live",
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
        label: "View live product",
        href: "https://intern-hunt-crm.vercel.app/",
        kind: "live",
      },
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
  {
    slug: "rustkv",
    rank: 6,
    name: "RustKV",
    category: "Systems software",
    year: "2026",
    status: "source-published",
    tagline:
      "A persistent key-value server in Rust with a bounded binary protocol and crash-conscious storage.",
    summary:
      "A single-node TCP key-value service with concurrent clients, synchronized shared state, TTLs, a CRC32 append-only log, restart replay, compaction, and structured metrics.",
    role: "Systems design, protocol and persistence engineering, concurrency, testing, benchmarking, and CI.",
    featured: false,
    accent: "orange",
    evidenceLabel: "Durability and concurrency",
    stack: [
      "Rust",
      "TCP sockets",
      "Arc / RwLock / Mutex",
      "CRC32",
      "tracing",
      "Criterion",
      "GitHub Actions",
    ],
    highlights: [
      "Bounded binary TCP protocol",
      "CRC32 append-only log",
      "Torn-tail repair on restart",
      "Crash-conscious compaction",
      "Real-socket integration tests",
      "Windows and Linux CI",
    ],
    overview: [
      "RustKV is a compact persistent network key-value server: one process, one node, a deterministic binary protocol, concurrent TCP clients, synchronized shared state, an append-only log, TTLs, compaction, metrics, tests, and reproducible benchmarks.",
      "It is a systems-programming project, not a Redis replacement. Its scope is deliberately small so that ownership, locking, durability ordering, and recovery behavior stay visible.",
    ],
    problem: [
      "A key-value store looks simple until it has to survive concurrent clients, malformed network input, and a crash in the middle of a write. Each of those failure modes needs an explicit, testable answer rather than an assumption.",
    ],
    solution: [
      "RustKV frames every request in a versioned 1 MiB length-prefixed protocol, serves each connection on a capped OS thread, shares state through Arc with RwLock and Mutex under a documented lock order, and writes every effective mutation to a CRC32-protected log with sync_data before memory changes and before success is returned.",
    ],
    features: [
      {
        title: "Bounded binary protocol",
        description:
          "Versioned length-prefixed frames with deterministic handling of malformed, oversized, and partial input.",
      },
      {
        title: "Concurrent connections",
        description:
          "Persistent TCP connections served by capped thread-per-connection admission with graceful shutdown.",
      },
      {
        title: "Durable append-only log",
        description:
          "CRC32 records, ordered restart replay, truncated-tail repair, and fail-closed handling of interior corruption.",
      },
      {
        title: "TTLs and compaction",
        description:
          "Absolute-expiry persistence that does not resurrect expired overwrites, plus crash-conscious log compaction.",
      },
    ],
    architecture: {
      summary:
        "Each connection thread decodes frames and hands commands to an executor that operates on a shared Arc<Database>. The store sits behind an RwLock, the append log behind a Mutex, and runtime counters are atomics exposed through STATS.",
      nodes: [
        {
          id: "client",
          label: "CLI / client",
          description: "rustkv-cli and the client library speak framed TCP.",
          group: "client",
        },
        {
          id: "connection",
          label: "Connection thread",
          description:
            "Capped admission, persistent sockets, and shutdown checks.",
          group: "server",
        },
        {
          id: "codec",
          label: "Codec + executor",
          description:
            "Frame validation and command execution against shared state.",
          group: "shared",
        },
        {
          id: "store",
          label: "RwLock store",
          description: "Binary-safe keys and values with TTL visibility.",
          group: "data",
        },
        {
          id: "log",
          label: "Append-only log",
          description:
            "CRC32 records, sync_data ordering, replay, and compaction.",
          group: "data",
        },
      ],
    },
    challenges: [
      {
        title: "Recovering from a torn write",
        description:
          "A final incomplete record is discarded at the last known-good boundary, while complete corrupt records stop startup instead of being silently skipped.",
      },
      {
        title: "Compaction across rename states",
        description:
          "Log replacement uses replacement and backup states so an interrupted compaction can be recovered on Windows as well as Unix.",
      },
    ],
    decisions: [
      {
        title: "Threads instead of async",
        description:
          "One capped OS thread per connection keeps ownership, blocking I/O, and lock behavior explicit.",
        tradeoff:
          "Simpler to reason about, but connection count is bounded by threads rather than an event loop.",
      },
      {
        title: "Sync before acknowledge",
        description:
          "A mutation reaches disk before memory changes and before the client sees success.",
        tradeoff:
          "Serializes mutations and pauses readers during disk sync in exchange for clear durability ordering.",
      },
      {
        title: "Fail closed on corruption",
        description:
          "Interior checksum failures stop startup rather than serving partially recovered data.",
      },
      {
        title: "No throughput claims without context",
        description:
          "Benchmark numbers are only reported alongside the machine, mode, build profile, and workload that produced them.",
      },
    ],
    testing: [
      "Unit tests for store, protocol, and persistence behavior",
      "Real-socket integration tests with concurrent clients",
      "Malformed-frame, failure, and graceful-shutdown cases",
      "Restart and persistence-recovery tests against real temporary files",
      "Format, Clippy, test, release build, and benchmark compilation on Windows and Linux CI",
    ],
    accessibility: [
      "Command-line interface with plain-text output",
      "Documented protocol, persistence, and concurrency behavior",
    ],
    security: [
      "Bounded 1 MiB frames reject oversized input",
      "Deterministic handling of malformed and partial frames",
      "Binds to 127.0.0.1 by default",
      "Capped connection admission",
    ],
    limitations: [
      "Single process and single node",
      "No authentication, TLS, replication, clustering, or transactions",
      "One OS thread per active connection",
      "Synchronous persistence serializes mutations",
      "Expired entries can occupy memory until a mutation, recovery, or compaction",
      "Does not claim ACID semantics",
    ],
    futureWork: [
      "Add parser fuzzing and property-based tests",
      "Add configurable group commit or a dedicated persistence writer",
      "Add background active expiration",
    ],
    resumeBullets: [
      "Built a persistent key-value service in Rust with a bounded binary TCP protocol, concurrent connection threads, Arc/RwLock synchronization, TTLs, and structured runtime metrics.",
      "Engineered a CRC32 append-only log with synchronous mutation ordering, restart replay, torn-tail repair, corruption detection, and crash-conscious compaction across Windows rename states.",
      "Developed unit and real-socket integration coverage for malformed frames, concurrent clients, graceful shutdown, persistence recovery, and failure cases; automated format, Clippy, test, build, and benchmark compilation checks on Windows and Linux.",
    ],
    interviewTopics: [
      "Why thread-per-connection instead of async",
      "What sync_data ordering does and does not guarantee",
      "How torn-tail repair differs from corruption handling",
      "How compaction survives an interrupted rename",
    ],
    engineeringTakeaways: [
      "Durability is an ordering problem: the log write and sync must happen before memory changes and before the client is told the write succeeded.",
      "Treating a torn final record differently from interior corruption lets recovery be forgiving where it is safe and strict where it is not.",
      "A documented lock order turns shared-state concurrency from an implicit habit into something reviewable and testable.",
    ],
    images: [
      {
        id: "rustkv-system-diagram",
        src: "/images/projects/rustkv/system-diagram.svg",
        alt: "RustKV system diagram showing a client sending framed TCP requests to a connection thread, codec, and executor that share a database of an RwLock store, a Mutex append log, and atomic metrics backed by disk.",
        width: 1600,
        height: 960,
        caption: "Request path from TCP frame to durable log",
        role: "diagram",
      },
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/RustKV",
        kind: "source",
      },
    ],
    seo: {
      title: "RustKV Case Study — Jose Carlos Arce Camet",
      description:
        "A persistent Rust key-value server with a bounded binary TCP protocol, concurrent clients, a CRC32 append-only log, and crash-conscious recovery.",
    },
  },
  {
    slug: "arcshell",
    rank: 7,
    name: "ArcShell",
    category: "Systems software",
    year: "2026",
    status: "source-published",
    tagline:
      "A small POSIX shell in C built directly on fork, exec, pipes, and signals.",
    summary:
      "A deliberately small shell that implements pipelines, redirection, background jobs, zombie-free reaping, and a defensible signal model from raw process-control syscalls.",
    role: "Design, C implementation, process and signal modeling, testing, and sanitizer verification.",
    featured: false,
    accent: "lime",
    evidenceLabel: "Process control",
    stack: ["C", "POSIX", "Linux / WSL2", "gcc", "Make", "ASan / UBSan"],
    highlights: [
      "Multi-stage pipelines",
      "Redirection < > >>",
      "Zombie-free child reaping",
      "Shell survives Ctrl-C",
      "41/41 functional tests",
      "Clean ASan/UBSan run",
    ],
    overview: [
      "ArcShell is a small POSIX shell written in C to demonstrate operating-systems and process-control fundamentals: process creation, file descriptors, pipes, redirection, signals, exit status, background execution, and zombie-free child reaping.",
      "It is not a Bash clone. The feature set is deliberately small so every behavior can be explained and defended.",
    ],
    problem: [
      "Most shell work happens through a shell rather than on top of one. Writing one from fork(), execvp(), pipe(), dup2(), waitpid(), sigaction(), and setpgid() forces direct engagement with process lifecycle, descriptor ownership, and signal semantics that are otherwise easy to wave away.",
    ],
    solution: [
      "ArcShell tokenizes and parses each line into a pipeline, runs cd, pwd, and exit directly in the shell process, and executes everything else by opening N−1 pipes, forking each stage, wiring descriptors with dup2(), and closing every pipe end it does not need.",
    ],
    features: [
      {
        title: "Pipelines and redirection",
        description:
          "Multi-stage pipelines such as cat file | grep foo | wc -l, with per-stage <, >, and >> redirection.",
      },
      {
        title: "Background execution",
        description:
          "A trailing & runs the job in its own process group, reaped asynchronously by a SIGCHLD handler.",
      },
      {
        title: "Signal-safe prompt",
        description:
          "The shell survives Ctrl-C and Ctrl-\\ while a foreground child remains interruptible.",
      },
      {
        title: "Explicit error handling",
        description:
          "Malformed syntax reports an error and returns to the prompt; exit status propagates as 0–255 or 128 + signal.",
      },
    ],
    architecture: {
      summary:
        "A raw line flows through tokenize() and parse_line() into a Pipeline of commands. A lone foreground builtin runs in the shell process; everything else goes to execute_pipeline(), which forks, wires, and waits for each stage.",
      nodes: [
        {
          id: "input",
          label: "REPL input",
          description:
            "Interactive prompt, or silent when stdin is not a terminal.",
          group: "client",
        },
        {
          id: "parser",
          label: "Tokenizer + parser",
          description:
            "Words, double quotes, pipes, redirection, and syntax errors.",
          group: "shared",
        },
        {
          id: "builtins",
          label: "Builtins",
          description: "cd, pwd, and exit mutate shell-owned state.",
          group: "server",
        },
        {
          id: "executor",
          label: "Pipeline executor",
          description: "pipe, fork, dup2, execvp, and waitpid per stage.",
          group: "server",
        },
        {
          id: "signals",
          label: "Signal policy",
          description:
            "SIGINT/SIGQUIT handling, SIGCHLD reaping, and process groups.",
          group: "external",
        },
      ],
    },
    challenges: [
      {
        title: "Pipe descriptor ownership",
        description:
          "Every child closes every pipe descriptor after dup2(), and the parent closes all of them once stages are spawned, so no stray write end keeps a reader from seeing EOF.",
      },
      {
        title: "Reaping without races",
        description:
          "SIGCHLD is blocked around each foreground fork and wait so the asynchronous reaper cannot race the foreground's explicit waitpid() calls.",
      },
    ],
    decisions: [
      {
        title: "Builtins only as a lone foreground stage",
        description:
          "cd | wc and pwd & are rejected rather than given ambiguous fork-based semantics.",
      },
      {
        title: "Reset signals before exec",
        description:
          "Children restore SIGINT and SIGQUIT to their defaults so programs launched by the shell stay interruptible.",
      },
      {
        title: "Process groups only for background jobs",
        description:
          "setpgid() isolates background jobs from terminal-generated signals without implementing full job control.",
        tradeoff:
          "No fg, bg, or terminal handoff, in exchange for a small model that can be fully explained.",
      },
      {
        title: "Small, explicit grammar",
        description:
          "Unsupported syntax is rejected or left literal rather than silently reinterpreted.",
      },
    ],
    testing: [
      "41/41 functional tests passing",
      "Signal tests, including a real Ctrl-C keystroke through a pty",
      "File-descriptor and zombie regression test across repeated pipelines and background jobs",
      "Clean AddressSanitizer and UndefinedBehaviorSanitizer run",
    ],
    accessibility: [
      "Non-interactive mode for scripted use",
      "One-line, plain-text syntax errors",
    ],
    security: [
      "Fixed compile-time limits reported as syntax errors, not crashes",
      "No variable expansion, globbing, or command substitution to misinterpret input",
      "Sanitizer-verified memory behavior",
    ],
    limitations: [
      "Linux and WSL2 only",
      "No job control, fg/bg, or Ctrl-Z",
      "No variables, globbing, &&/||, or command substitution",
      "No history or line editing",
      "Not Bash-compatible",
    ],
    futureWork: [
      "Add single quotes and backslash escapes to the grammar",
      "Add ; and &&/|| sequencing with explicit exit-status rules",
      "Explore full job control with tcsetpgrp() as a separate scoped step",
    ],
    resumeBullets: [
      "Built a POSIX shell in C with multi-stage pipelines, redirection, background jobs, and zombie-free child reaping from fork, execvp, pipe, dup2, waitpid, and sigaction.",
      "Verified behavior with 41 functional tests, pty-driven signal tests, a file-descriptor and zombie regression test, and a clean ASan/UBSan run.",
    ],
    interviewTopics: [
      "Why cd cannot run in a child process",
      "What happens when a pipe write end is left open",
      "Why children reset signal dispositions before exec",
      "How SIGCHLD is kept from racing foreground waitpid",
    ],
    engineeringTakeaways: [
      "Closing every unused pipe descriptor in every process removes an entire class of pipeline deadlocks.",
      "A command's placement matters: state-changing builtins must run in the shell itself, so the shell rejects them where fork semantics would be ambiguous.",
      "Signal behavior needs its own tests, including a real keystroke through a pty, because unit-level checks cannot prove terminal interaction.",
    ],
    images: [
      {
        id: "arcshell-system-diagram",
        src: "/images/projects/arcshell/system-diagram.svg",
        alt: "ArcShell system diagram showing a raw input line flowing through tokenize and parse_line into a pipeline, then either run_builtin in the shell process or execute_pipeline with fork, dup2, and execvp per stage.",
        width: 1600,
        height: 960,
        caption: "Parser to executor flow",
        role: "diagram",
      },
    ],
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Arcamet/ArcShell",
        kind: "source",
      },
    ],
    seo: {
      title: "ArcShell Case Study — Jose Carlos Arce Camet",
      description:
        "A small POSIX shell in C with pipelines, redirection, background jobs, zombie-free reaping, and a tested signal model.",
    },
  },
  {
    slug: "thermalguard",
    rank: 8,
    name: "ThermalGuard",
    category: "Embedded systems",
    year: "2026",
    status: "in-progress",
    tagline:
      "Fault-tolerant cooling-controller firmware for the Arduino Mega 2560, with verified control logic and hardware bring-up still ahead.",
    summary:
      "An in-progress embedded controller with dual temperature sensors, an asymmetric fault-handling state machine, and a line-based serial protocol. The firmware logic and host harness are verified in software; no physical hardware bring-up has happened yet.",
    role: "Interface contract, state-machine design, firmware, native test suite, and Rust host harness.",
    featured: false,
    accent: "sky",
    evidenceLabel: "Fault-tolerant control logic",
    stack: ["C++", "Arduino Mega 2560", "Rust", "CMake", "GitHub Actions"],
    highlights: [
      "In progress — no hardware bring-up yet",
      "Firmware logic: 50/50 native checks",
      "Host harness: 13/13 Rust tests",
      "Four-state fault FSM",
    ],
    overview: [
      "ThermalGuard is a cooling controller for an Arduino Mega 2560 that reads a DHT11 and a thermistor, drives a fan through an L293D, and reports state over USB serial. It is designed to degrade and fail safe when sensors disagree, drop out, or report over-temperature.",
      "The project is in progress. Its interface contract is frozen, the control logic is implemented and verified natively, and the host harness is verified against a mock peer. Physical hardware bring-up has not started.",
    ],
    problem: [
      "A cooling controller that trusts a single sensor can fail silently. Sensor dropouts, disagreement, and over-temperature each need a defined response, and those responses need to be testable before any hardware is wired.",
    ],
    solution: [
      "ThermalGuard separates an Arduino-independent state-machine core from the sketch that talks to pins, so the fault policy can be compiled and tested natively with deterministic input sequences. A Rust harness speaks the same serial grammar against a mock peer today and is structured to target a real serial port later.",
    ],
    features: [
      {
        title: "Asymmetric fault FSM",
        description:
          "NORMAL, DEGRADED, FAULT, and SAFE states with fast escalation and slow, persistence-gated recovery.",
      },
      {
        title: "Conservative temperature",
        description:
          "Control and over-temperature checks use the hotter valid reading, or the surviving sensor when one is invalid.",
      },
      {
        title: "Line-based serial protocol",
        description:
          "Sequenced EVENT and STATUS lines, PING/PONG liveness, and NACKs for malformed input instead of silent drops.",
      },
      {
        title: "Separated evidence tiers",
        description:
          "Native firmware-logic tests, mock-peer harness tests, and real-hardware runs are tracked as distinct kinds of evidence.",
      },
    ],
    architecture: {
      summary:
        "The sketch handles pins, sensor reads, the serial grammar, and the watchdog. All state and fan decisions come from fw_logic, a plain C++ core with no Arduino headers that builds both inside the sketch and natively for tests.",
      nodes: [
        {
          id: "sensors",
          label: "DHT11 + thermistor",
          description: "Two independent temperature sources.",
          group: "external",
        },
        {
          id: "sketch",
          label: "Firmware sketch",
          description: "Pins, sensor reads, serial protocol, and watchdog.",
          group: "server",
        },
        {
          id: "fsm",
          label: "fw_logic core",
          description:
            "Arduino-independent state machine and fan hysteresis policy.",
          group: "shared",
        },
        {
          id: "harness",
          label: "Rust host harness",
          description:
            "Protocol parser, timeouts, and scenarios against a mock peer.",
          group: "client",
        },
      ],
    },
    challenges: [
      {
        title: "Recovery without flapping",
        description:
          "Escalation is fast, but every de-escalation path requires five consecutive healthy samples so the controller does not oscillate between states.",
      },
      {
        title: "Keeping evidence honest",
        description:
          "Software tests prove transition and protocol logic only. Physical relay fault injection and watchdog behavior are reserved for real-hardware runs that have not happened yet.",
      },
    ],
    decisions: [
      {
        title: "Arduino-independent logic core",
        description:
          "The state machine has no Arduino or AVR dependencies, so it compiles and runs in native CI.",
        tradeoff:
          "Adds a boundary between sketch and logic, but makes the fault policy testable without a board.",
      },
      {
        title: "Frozen interface contract",
        description:
          "Pin map, transitions, timing, and serial grammar were written down before implementation.",
      },
      {
        title: "Bench-tunable constants",
        description:
          "Over-temperature threshold and hysteresis band are named, labeled defaults pending bench measurement, not final values.",
      },
      {
        title: "Fail-safe bias",
        description:
          "SAFE forces the fan on and raises the alarm, and the fan enable line is pulled up so it defaults on before firmware initializes.",
      },
    ],
    testing: [
      "Firmware logic: 50/50 native checks passing (FW-LOGIC tier)",
      "Rust host harness: 13/13 tests passing against a mock peer (HOST-MOCK tier)",
      "Real-hardware tier: not started",
    ],
    accessibility: [
      "Plain-text serial protocol readable in any terminal",
      "Documented pin map and interface contract",
    ],
    security: [
      "Malformed serial input returns NACK rather than being dropped",
      "Fault injection honored only in an explicit test mode, with a firmware-enforced time cap",
    ],
    limitations: [
      "No physical hardware bring-up yet",
      "Over-temperature threshold and hysteresis band not yet chosen",
      "Relay drive, LCD wiring, and fan supply still to be decided at the bench",
      "Not a certified safety system",
      "No claim of operation through power, motor-supply, driver, or wiring failure",
    ],
    futureWork: [
      "Assemble the board and bring up sensors, fan, relay, and serial link",
      "Run the same harness scenarios against the real serial port",
      "Measure and set the over-temperature and hysteresis values",
    ],
    resumeBullets: [
      "Designed an Arduino-independent fault-handling state machine for a dual-sensor cooling controller, verified with 50 native firmware-logic checks.",
      "Built a Rust host harness for the controller's serial protocol, verified with 13 tests against a mock peer; physical hardware bring-up is pending.",
    ],
    interviewTopics: [
      "Why escalation is fast and recovery is slow",
      "Why the controller uses the hotter valid reading",
      "What native logic tests can and cannot prove about firmware",
      "What still needs a real board to verify",
    ],
    engineeringTakeaways: [
      "Pulling decision logic out of the sketch makes an embedded fault policy testable long before hardware is on the bench.",
      "Asymmetric thresholds—quick to escalate, slow to recover—keep a safety controller conservative without letting it oscillate.",
      "Naming evidence tiers explicitly keeps software-only verification from being mistaken for hardware validation.",
    ],
    images: [
      {
        id: "thermalguard-system-diagram",
        src: "/images/projects/thermalguard/system-diagram.svg",
        alt: "ThermalGuard design diagram showing sensors feeding firmware glue and an fw_logic state machine that drives a fan and alarm, a Rust harness on USB serial, and evidence tiers with firmware logic and host mock passing and real hardware not started.",
        width: 1600,
        height: 960,
        caption: "Design diagram and evidence tiers",
        role: "diagram",
      },
    ],
    links: [],
    evidenceBoundary: {
      summary:
        "ThermalGuard is in progress. Its control logic and host tooling are verified in software only; no physical hardware bring-up has taken place.",
      verified: [
        "Firmware state-machine logic compiled natively: 50/50 checks passing",
        "Rust host harness: 13/13 tests passing against a mock serial peer",
      ],
      notYetVerified: [
        "Any behavior on a physical Arduino Mega 2560",
        "Real sensor readings, fan drive, and relay switching",
        "Watchdog reset behavior under a hung main loop",
        "Chosen over-temperature and hysteresis values",
      ],
    },
    seo: {
      title: "ThermalGuard Case Study (In Progress) — Jose Carlos Arce Camet",
      description:
        "In-progress Arduino Mega 2560 cooling-controller firmware with verified native state-machine tests and a Rust host harness; hardware bring-up has not started.",
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
