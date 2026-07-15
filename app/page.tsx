import { projects, skills, ACCENT } from "@/lib/data";
import Experience from "@/components/Experience";

const MARQUEE =
  "React  ✳  Next.js  ✳  TypeScript  ✳  Vue  ✳  Nuxt  ✳  TanStack Query  ✳  Tailwind  ✳  Design Systems  ✳  SSR / CSR  ✳  Performance  ✳  ";

export default function Home() {
  return (
    <main className="min-w-0">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink/10 bg-paper/80 px-5 py-[18px] backdrop-blur-md sm:px-10 lg:px-16">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-ink text-[15px] font-extrabold text-paper">JM</span>
          <span className="text-[15px] font-bold tracking-[-0.01em]">Janto Motulo</span>
        </a>
        <div className="flex items-center gap-3.5 sm:gap-6 lg:gap-8">
          <a href="#about" className="hidden text-[13.5px] font-medium text-ink/60 no-underline sm:inline">About</a>
          <a href="#journey" className="hidden text-[13.5px] font-medium text-ink/60 no-underline sm:inline">Journey</a>
          <a href="#experience" className="hidden text-[13.5px] font-medium text-ink/60 no-underline sm:inline">Experience</a>
          <a href="#work" className="hidden text-[13.5px] font-medium text-ink/60 no-underline sm:inline">Work</a>
          <a href="#skills" className="hidden text-[13.5px] font-medium text-ink/60 no-underline sm:inline">Skills</a>
          <a
            href="/Janto-Motulo-CV.docx"
            download
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-paper no-underline"
            style={{ background: ACCENT }}
          >
            Download CV <span className="text-sm leading-none">↓</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="mx-auto max-w-[1440px] px-5 pb-8 pt-12 sm:px-10 md:pb-14 md:pt-28 lg:px-16">
        <div className="mb-8 flex items-center gap-3 md:mb-13">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/[0.18] px-3 py-1.5 font-mono text-xs text-ink/70">
            <span className="h-[7px] w-[7px] rounded-full bg-[#1f8a5b] shadow-[0_0_0_3px_rgba(31,138,91,0.18)]" />
            Available · Remote worldwide
          </span>
          <span className="font-mono text-xs text-ink/50">Jakarta, Indonesia</span>
        </div>

        <h1 className="m-0 text-[clamp(52px,12vw,190px)] font-black uppercase leading-[0.86] tracking-[-0.04em]">
          Janto<br />Motulo
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-8 md:mt-12">
          <p className="m-0 max-w-[560px] text-[clamp(17px,2vw,21px)] font-medium leading-[1.5] text-ink/[0.78]">
            <strong className="font-bold text-ink">Senior Frontend Developer</strong> crafting scalable,
            high-performance web apps with React &amp; Next.js — turning complex requirements into
            pixel-perfect, production-grade UIs for 6+ years, now steadily expanding into <strong className="font-bold text-ink">Fullstack</strong>.
          </p>
          <div className="flex gap-3">
            <a
              href="/Janto-Motulo-CV.docx"
              download
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-[15px] text-[15px] font-semibold text-paper no-underline"
              style={{ background: ACCENT }}
            >
              Download CV <span className="text-base">↓</span>
            </a>
            <a
              href="mailto:motulojanto@gmail.com"
              className="inline-flex items-center rounded-full border border-ink/[0.22] px-6 py-[15px] text-[15px] font-semibold text-ink no-underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap border-y border-ink/[0.12] py-4">
        <div className="inline-flex animate-marquee">
          <span className="text-[clamp(22px,3vw,34px)] font-extrabold uppercase tracking-[-0.02em] text-ink/[0.86]">{MARQUEE}</span>
          <span aria-hidden className="text-[clamp(22px,3vw,34px)] font-extrabold uppercase tracking-[-0.02em] text-ink/[0.86]">{MARQUEE}</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-10 md:py-24 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:gap-20">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px]" style={{ color: ACCENT }}>01</span>
            <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-ink/50">About</span>
          </div>
          <p className="m-0 max-w-[1000px] text-[clamp(24px,3.4vw,44px)] font-semibold leading-[1.28] tracking-[-0.02em]">
            I architect frontend systems end-to-end — from SSR/CSR rendering strategy and caching to
            internal design systems and component libraries — across{" "}
            <span className="text-ink/45">SaaS, healthcare, real estate and enterprise</span> domains.
          </p>

          <div className="grid grid-cols-2 gap-px border border-ink/[0.12] bg-ink/[0.12] md:grid-cols-4">
            {[
              { big: "6+", label: "Years experience" },
              { big: "40%", label: "Boilerplate cut with internal tooling" },
              { big: "5", label: "Companies shipped for" },
              { big: "4", label: "Industry domains" },
            ].map((s) => (
              <div key={s.label} className="bg-paper px-5 py-6">
                <div className="text-[clamp(34px,5vw,54px)] font-black leading-none tracking-[-0.03em]">{s.big}</div>
                <div className="mt-2 text-[13px] font-medium text-ink/[0.58]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-10 md:py-24 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:gap-20">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px]" style={{ color: ACCENT }}>02</span>
            <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-ink/50">Journey</span>
          </div>
          <div className="max-w-[1000px]">
            <p className="m-0 text-[clamp(24px,3.4vw,44px)] font-semibold leading-[1.28] tracking-[-0.02em]">
              6+ years deep in frontend — React, Next.js, Vue — shipping production UI across{" "}
              <span className="text-ink/45">SaaS, healthcare, and e-commerce</span>.
            </p>
            <p className="mt-6 text-[clamp(17px,2vw,21px)] font-medium leading-[1.5] text-ink/[0.78]">
              Now going beyond the browser: building backend systems with NestJS, PostgreSQL, RabbitMQ, and
              observability tooling to close the loop end-to-end —{" "}
              <a href="#work" className="font-bold text-ink underline underline-offset-2">
                see the ongoing proof below
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (client) */}
      <Experience />

      {/* SELECTED WORK */}
      <section id="work" className="scroll-mt-16 bg-night px-5 py-14 text-paper sm:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-3 flex items-baseline gap-4 md:mb-5">
            <span className="font-mono text-[13px] text-paper/[0.85]">04</span>
            <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-paper/50">Selected Work</span>
          </div>
          <h2 className="mb-9 mt-0 text-[clamp(34px,6vw,80px)] font-black uppercase leading-[0.95] tracking-[-0.035em] md:mb-16">
            Things I&apos;ve built
          </h2>

          <div className="grid grid-cols-1 gap-px border border-paper/[0.14] bg-paper/[0.14] sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const Card = p.link ? "a" : "div";
              return (
                <Card
                  key={p.num}
                  {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex min-h-[260px] flex-col gap-4 bg-night p-7 no-underline transition-colors hover:bg-[#151515] md:p-9"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-paper px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: ACCENT }}>
                        {p.tag}
                      </span>
                      {p.status === "ongoing" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-paper/[0.18] px-2 py-1 font-mono text-[11px] text-paper/70">
                          <span className="h-[6px] w-[6px] rounded-full bg-[#1f8a5b] shadow-[0_0_0_3px_rgba(31,138,91,0.18)]" />
                          In Progress
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-paper/40">{p.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="m-0 text-[clamp(20px,2.3vw,27px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-paper">{p.title}</h3>
                    <div className="mt-1.5 text-[13px] font-semibold text-paper/50">{p.org}</div>
                    <p className="mb-0 mt-3.5 text-[14.5px] leading-[1.5] text-paper/[0.72]">{p.desc}</p>
                  </div>
                  <div className="border-t border-paper/[0.14] pt-3.5 font-mono text-[11.5px] text-paper/55">{p.stack}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 py-14 sm:px-10 md:py-24 lg:px-16">
        <div className="mb-8 flex items-baseline gap-4 md:mb-13">
          <span className="font-mono text-[13px]" style={{ color: ACCENT }}>05</span>
          <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-ink/50">Skills &amp; Tooling</span>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-11 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.name} className="flex flex-col gap-4">
              <h3 className="m-0 border-b border-ink/[0.14] pb-3 text-base font-bold tracking-[-0.01em]">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg border border-ink/10 bg-ink/[0.05] px-3.5 py-2 text-[13.5px] font-medium text-ink/[0.82]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="bg-night px-5 pb-9 pt-16 text-paper sm:px-10 md:pb-14 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 font-mono text-[13px] uppercase tracking-[0.14em] text-paper/50">Let&apos;s build something</div>
          <h2 className="m-0 text-[clamp(44px,11vw,150px)] font-black uppercase leading-[0.88] tracking-[-0.04em]">
            Ready when<br />you are.
          </h2>

          <div className="mt-9 flex flex-wrap gap-3.5 md:mt-14">
            <a href="/Janto-Motulo-CV.docx" download className="inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-4 text-base font-semibold text-night no-underline">
              Download CV <span className="text-[17px]">↓</span>
            </a>
            <a href="mailto:motulojanto@gmail.com" className="inline-flex items-center rounded-full border border-paper/[0.28] px-6 py-4 text-base font-semibold text-paper no-underline">
              motulojanto@gmail.com
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-paper/[0.16] pt-6 md:mt-28">
            <div className="flex flex-wrap gap-5.5">
              <a href="https://linkedin.com/in/janto-motulo" target="_blank" rel="noopener" className="text-sm font-medium text-paper/[0.72] no-underline">LinkedIn ↗</a>
              <a href="https://github.com/jantoandriano" target="_blank" rel="noopener" className="text-sm font-medium text-paper/[0.72] no-underline">GitHub ↗</a>
              <a href="tel:+6282112131616" className="text-sm font-medium text-paper/[0.72] no-underline">+62 821-1213-1616</a>
            </div>
            <div className="font-mono text-xs text-paper/40">© 2026 Janto Motulo — Jakarta, ID</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
