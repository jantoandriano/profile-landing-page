# Janto Motulo — Portfolio Landing Page

A bold, monochrome profile landing page built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      — fonts (Archivo + JetBrains Mono) + metadata
  page.tsx        — the full page (nav, hero, marquee, about, work, skills, footer)
  globals.css     — Tailwind + base resets
components/
  Experience.tsx  — client component (expandable role rows)
lib/
  data.ts         — all content: experience, projects, skills + ACCENT color
public/
  Janto-Motulo-CV.docx  — the downloadable CV
tailwind.config.ts      — custom colors (paper/ink/night), marquee & rise animations
```

## Customizing

- **Content** lives in `lib/data.ts` — edit experience, projects, and skills there.
- **Accent color**: change `ACCENT` at the top of `lib/data.ts`. Defaults to monochrome `#0f0f0f`; try `#2a6df4`, `#e5484d`, or `#1f8a5b` for a pop.
- **Colors/animations**: `tailwind.config.ts`.

## Deploy

Push to a Git repo and import into [Vercel](https://vercel.com) — zero config. Or `npm run build` and host the output anywhere Node runs.
