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
    meta: "Oct 2024 — Present · 1 yr 8 mos · Remote",
    stack: ["Next.js", "TypeScript", "TanStack Query", "RBAC", "i18n"],
    points: [
      "Architected a scalable multi-tenant SaaS platform with SSR/CSR rendering strategies, dynamic routing, and per-tenant data isolation to reliably serve concurrent enterprise clients.",
      "Built and maintained a suite of proprietary internal packages — form/validation library, i18n, file uploader, and RBAC — cutting boilerplate 40%, enforcing type safety, and adopted as shared standards across all feature teams.",
      "Improved performance with TanStack Query (caching, optimistic UI, request dedup), reducing network requests and improving load times against performance budgets.",
      "Integrated GitHub Copilot and Claude Code into daily workflows to accelerate delivery and improve code review quality.",
    ],
  },
  {
    company: "Eka Hospital",
    role: "Frontend Developer",
    meta: "Jul 2023 — Apr 2025 · 1 yr 10 mos · Tangerang, ID",
    stack: ["Vue.js", "Nuxt.js", "Nuxt UI", "Vue-Query"],
    points: [
      "Owned end-to-end delivery of a BPJS management system (registration, scheduling, poly coverage) built with Vue.js/Nuxt.js SSR, replacing manual workflows.",
      "Built an EMR portal for secure, real-time patient record access, delivering responsive interfaces with Vue-Query for data fetching and caching.",
    ],
  },
  {
    company: "SehatQ",
    role: "Frontend Developer · Klinik SehatQ",
    meta: "Jul 2021 — Jul 2023 · 2 yrs 1 mo · Jakarta, ID",
    stack: ["TypeScript", "React.js", "Next.js", "Redux-Saga", "Chakra UI"],
    points: [
      "Built and maintained three CMS platforms (cms-toko, cms-internal, Telebod) in React.js/Next.js, used daily by hundreds of merchants and healthcare staff.",
      "Integrated Midtrans/Nicepay payments and drove quality via unit/integration testing (Jest, RTL) and code review.",
    ],
  },
  {
    company: "Koala",
    role: "Frontend Developer · PT Nyala Inovasi Properti",
    meta: "Mar 2021 — Jul 2021 · Contract · Jakarta, ID",
    stack: ["React.js", "Next.js", "Redux Toolkit"],
    points: [
      "Built internal property workflow tools and translated Zeplin design handoffs into reusable, responsive components.",
    ],
  },
  {
    company: "Skybridge Indonesia",
    role: "Frontend Developer",
    meta: "Nov 2019 — Mar 2021 · Contract · Indonesia",
    stack: ["React.js", "Tailwind UI"],
    points: [
      "Built the Skyporter web app from the ground up (church ops, member management, digital offerings), owning the frontend lifecycle end-to-end.",
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
  { num: "01", tag: "Backend · System Design", title: "System Design NestJS", org: "Personal Project", desc: "Production-hardened NestJS backend scaffold — primary/replica Postgres, RabbitMQ with dead-letter queues, edge + app rate limiting, and Prometheus/Grafana observability — bridging system-design theory with real infrastructure.", stack: "NestJS · PostgreSQL · RabbitMQ · Docker", status: "ongoing", link: "https://github.com/jantoandriano/system-design-nestjs" },
  { num: "02", tag: "SaaS", title: "Multi-Tenant SaaS Platform", org: "Hyperscal", desc: "Enterprise-grade platform with SSR/CSR strategy, dynamic routing, and per-tenant data isolation serving concurrent clients.", stack: "Next.js · TypeScript · TanStack Query" },
  { num: "03", tag: "Design System", title: "Internal Package Suite", org: "Hyperscal", desc: "Form/validation, i18n, file uploader and RBAC libraries adopted as shared standards — cutting boilerplate 40%.", stack: "TypeScript · React · Tooling" },
  { num: "04", tag: "Healthcare", title: "EMR Patient Portal", org: "Eka Hospital", desc: "Secure, real-time patient record access with responsive interfaces and Vue-Query caching.", stack: "Vue.js · Nuxt.js · Nuxt UI" },
  { num: "05", tag: "Healthcare", title: "BPJS Management System", org: "Eka Hospital", desc: "End-to-end registration, scheduling and poly coverage on Nuxt SSR — replacing manual workflows.", stack: "Vue.js · Nuxt.js · SSR" },
  { num: "06", tag: "E-commerce", title: "CMS Platform Trio", org: "SehatQ", desc: "Three CMS platforms used daily by hundreds of merchants and staff, with Midtrans/Nicepay payments.", stack: "React · Next.js · Redux-Saga · Chakra UI" },
  { num: "07", tag: "Web App", title: "Skyporter", org: "Skybridge", desc: "Built from the ground up — church operations, member management and digital offerings, full frontend lifecycle.", stack: "React.js · Tailwind" },
];

export type SkillGroup = { name: string; items: string[] };

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  { name: "Frameworks & Styling", items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "TanStack Query", "Redux / Redux-Saga", "Tailwind CSS", "Styled-Components", "Chakra UI", "Nuxt UI"] },
  { name: "Testing & Tooling", items: ["Jest", "React Testing Library", "Git", "Vite", "Axios", "React-Hook-Form", "Chart.js", "Zeplin", "Jira"] },
  { name: "AI Dev Tools", items: ["GitHub Copilot", "Claude Code"] },
  { name: "Practices", items: ["Frontend Architecture", "SSR/CSR Strategy", "Design Systems", "RBAC & i18n", "API Integration", "Performance", "Web Security", "Responsive Design", "Agile / Scrum"] },
];
