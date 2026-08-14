export const ACCENT = "#0f0f0f"; // swap for pop: #2a6df4, #e5484d, #1f8a5b

export type Job = {
  company: string;
  role: string;
  meta: string;
  stack: string[];
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Hyperscal",
    role: "Senior Frontend Developer",
    meta: "Oct 2024 — Present · 1 yr 10 mos · Remote",
    stack: ["Next.js", "TypeScript", "TanStack Query", "RBAC", "i18n"],
    points: [
      "Architected a multi-tenant B2B SaaS platform in Next.js/TypeScript — rendering strategy (SSR/CSR), dynamic routing, application state, and per-tenant data isolation — serving concurrent enterprise clients from a single codebase.",
      "Built and maintained a suite of proprietary internal packages — form/validation library, i18n, file uploader, and RBAC — versioned and consumed as shared standards by every feature team, cutting boilerplate ~40% and enforcing type safety org-wide.",
      "Designed API integration and caching layers with TanStack Query (query caching, request dedup, optimistic updates, retry/stale handling) against a distributed service backend, with graceful loading and fallback states.",
      "Held the platform to explicit performance budgets, reducing redundant network requests and improving load and interaction times through caching, code splitting, and render optimisation.",
      "Integrated Claude Code and GitHub Copilot into daily workflow and helped establish team conventions for where agents accelerate delivery versus where hand-written code and human review remain faster and safer.",
      "Led technical design discussions, performed detailed code reviews, and mentored engineers on TypeScript, component design, and rendering trade-offs.",
    ],
  },
  {
    company: "Eka Hospital",
    role: "Frontend Developer",
    meta: "Jul 2023 — Apr 2025 · 1 yr 10 mos · Tangerang, ID",
    stack: ["Vue.js", "Nuxt.js", "Nuxt UI", "Vue-Query"],
    points: [
      "Owned end-to-end delivery of a BPJS national-insurance management system (registration, scheduling, poly coverage) built with Vue.js and Nuxt SSR, replacing manual clinical workflows for a large multi-site hospital group.",
      "Built an EMR portal for secure, real-time patient record access — modelling heavily stateful, permission-scoped views with reusable composable logic and Vue Query for data fetching, caching, and background revalidation.",
      "Integrated multiple internal and third-party hospital services, handling partial-failure and empty states so clinical staff always had a usable interface rather than a blocked screen.",
      "Shipped responsive, component-driven interfaces on Nuxt UI, working directly with Product and backend engineers under regulated healthcare constraints.",
    ],
  },
  {
    company: "SehatQ",
    role: "Frontend Developer · Klinik SehatQ",
    meta: "Jul 2021 — Jul 2023 · 2 yrs 1 mo · Jakarta, ID",
    stack: ["TypeScript", "React.js", "Next.js", "Redux-Saga", "Chakra UI"],
    points: [
      "Built and maintained three CMS platforms (cms-toko, cms-internal, Telebod) in React.js/Next.js and TypeScript, used daily by hundreds of merchants and healthcare staff.",
      "Integrated Midtrans and Nicepay payment gateways, handling asynchronous states, retries, and reconciliation edge cases in the UI.",
      "Drove test coverage with Jest and React Testing Library across unit and integration layers, and raised standards through consistent code review.",
    ],
  },
  {
    company: "Koala",
    role: "Frontend Developer · PT Nyala Inovasi Properti",
    meta: "Mar 2021 — Jul 2021 · Contract · Jakarta, ID",
    stack: ["React.js", "Next.js", "Redux Toolkit"],
    points: [
      "Built internal property workflow tools in React.js/Next.js with Redux Toolkit, translating Zeplin handoffs into a reusable, responsive component set.",
    ],
  },
  {
    company: "Skybridge Indonesia",
    role: "Frontend Developer",
    meta: "Nov 2019 — Mar 2021 · Contract · Indonesia",
    stack: ["React.js", "Tailwind UI"],
    points: [
      "Built the Skyporter web app from the ground up (organisation operations, member management, digital payments), owning the frontend lifecycle end-to-end.",
    ],
  },
];

export type Project = {
  num: string;
  tag: string;
  title: string;
  org: string;
  desc: string;
  stack: string;
  status?: "ongoing";
  link?: string;
};

export const projects: Project[] = [
  { num: "01", tag: "Mobile · Flutter", title: "Flutter Mobile App", org: "Personal Project", desc: "Self-directed dive into Flutter and native mobile patterns — widget composition, state management, and platform APIs — as a step toward broader client-side engineering.", stack: "Flutter · Dart", status: "ongoing" },
  { num: "02", tag: "Backend · System Design", title: "System Design NestJS", org: "Personal Project", desc: "Production-hardened NestJS backend scaffold — primary/replica Postgres, RabbitMQ with dead-letter queues, edge + app rate limiting, and Prometheus/Grafana observability — bridging system-design theory with real infrastructure.", stack: "NestJS · PostgreSQL · RabbitMQ · Docker", status: "ongoing", link: "https://github.com/jantoandriano/system-design-nestjs" },
  { num: "03", tag: "SaaS", title: "Multi-Tenant SaaS Platform", org: "Hyperscal", desc: "Enterprise-grade platform with SSR/CSR strategy, dynamic routing, and per-tenant data isolation serving concurrent clients.", stack: "Next.js · TypeScript · TanStack Query" },
  { num: "04", tag: "Design System", title: "Internal Package Suite", org: "Hyperscal", desc: "Form/validation, i18n, file uploader and RBAC libraries adopted as shared standards — cutting boilerplate 40%.", stack: "TypeScript · React · Tooling" },
  { num: "05", tag: "Healthcare", title: "EMR Patient Portal", org: "Eka Hospital", desc: "Secure, real-time patient record access with responsive interfaces and Vue-Query caching.", stack: "Vue.js · Nuxt.js · Nuxt UI" },
  { num: "06", tag: "Healthcare", title: "BPJS Management System", org: "Eka Hospital", desc: "End-to-end registration, scheduling and poly coverage on Nuxt SSR — replacing manual workflows.", stack: "Vue.js · Nuxt.js · SSR" },
  { num: "07", tag: "E-commerce", title: "CMS Platform Trio", org: "SehatQ", desc: "Three CMS platforms used daily by hundreds of merchants and staff, with Midtrans/Nicepay payments.", stack: "React · Next.js · Redux-Saga · Chakra UI" },
  { num: "08", tag: "Web App", title: "Skyporter", org: "Skybridge", desc: "Built from the ground up — church operations, member management and digital offerings, full frontend lifecycle.", stack: "React.js · Tailwind" },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { name: "Frameworks & Styling", items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TanStack Query", "Redux / Redux-Saga", "Tailwind CSS", "Styled-Components", "Chakra UI", "Nuxt UI"] },
  { name: "Testing & Tooling", items: ["Jest", "React Testing Library", "Git", "Vite", "Axios", "React-Hook-Form", "Chart.js", "Zeplin", "Jira"] },
  { name: "AI Dev Tools", items: ["GitHub Copilot", "Claude Code"] },
  { name: "Practices", items: ["Frontend Architecture", "SSR/CSR Strategy", "Design Systems", "RBAC & i18n", "API Integration", "Performance", "Web Security", "Responsive Design", "Agile / Scrum"] },
];
