import { projects, skills, services, stats } from "@/lib/data";
import { getGithubProjects } from "@/lib/github";
import Experience from "@/components/Experience";
import Portrait from "@/components/Portrait";
import { CodeBubble, ReactBadge, ServiceIcon, Sparkle, Starburst, XMarks } from "@/components/Stickers";

export const revalidate = 3600;

const CV = "/Janto-Motulo-CV.docx";
const EMAIL = "motulojanto@gmail.com";
const ACCENTS = ["bg-sky", "bg-lime", "bg-lilac", "bg-mint", "bg-pink"];
const COVERS = ["bg-blue text-paper", "bg-sky", "bg-lime", "bg-ink text-paper", "bg-sky", "bg-pink"];
const MARQUEE = Array(8).fill("✉ Open to remote roles  ·  Download my CV  ·  ").join("");

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Band({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 border-b-[1.5px] border-ink bg-blue px-5 py-4 text-paper md:gap-5 md:py-5">
      <XMarks />
      <h2 className="m-0 text-center text-[clamp(20px,2.6vw,30px)] font-semibold tracking-[-0.01em]">{children}</h2>
      <XMarks />
    </div>
  );
}

export default async function Home() {
  const allProjects = [...(await getGithubProjects()), ...projects];

  return (
    <main className="min-w-0">
      {/* MARQUEE STRIP */}
      <a href={CV} download className="block overflow-hidden whitespace-nowrap border-b-[1.5px] border-ink bg-blue py-2 text-paper no-underline">
        <div className="inline-flex animate-marquee">
          <span className="text-[13px] font-medium">{MARQUEE}</span>
          <span aria-hidden className="text-[13px] font-medium">{MARQUEE}</span>
        </div>
      </a>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b-[1.5px] border-ink bg-paper">
        <div className="mx-auto flex h-14 max-w-[1280px] items-stretch border-x-[1.5px] border-ink md:h-16">
          <a href="#top" className="flex items-center border-r-[1.5px] border-ink px-4 text-[17px] font-semibold tracking-[-0.01em] text-ink no-underline md:px-8 md:text-xl">
            Janto Motulo
          </a>
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] font-medium text-ink no-underline hover:underline hover:underline-offset-4">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex-1 md:hidden" />
          <a href="#contact" className="flex items-center border-l-[1.5px] border-ink px-4 text-[15px] font-medium text-ink no-underline hover:bg-white md:px-8">
            Hire me
          </a>
          <a href={CV} download aria-label="Download CV" className="flex w-14 items-center justify-center border-l-[1.5px] border-ink bg-lime text-xl text-ink no-underline hover:bg-sky md:w-16">
            ↓
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-[1280px] border-x-[1.5px] border-ink">
        {/* HERO */}
        <header id="top" className="grid grid-cols-1 items-center gap-12 border-b-[1.5px] border-ink px-5 py-14 sm:px-10 md:grid-cols-[1.25fr_1fr] md:py-24 lg:px-16">
          <div>
            <span className="chip mb-7 bg-white font-mono shadow-brutal">
              <span className="h-2 w-2 rounded-full bg-[#1f8a5b]" />
              Available · Remote worldwide · Jakarta, ID
            </span>
            <p className="m-0 text-[clamp(16px,1.6vw,19px)] font-medium">Hi, my name is Janto</p>
            <h1 className="mt-3 text-[clamp(38px,5.6vw,72px)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Turning complex requirements into{" "}
              <span className="inline-block -rotate-2 border-[1.5px] border-ink bg-lime px-3 leading-[1.15] shadow-brutal">
                pixel-perfect
              </span>{" "}
              UIs
            </h1>
            <p className="mt-6 max-w-[560px] text-[clamp(15px,1.5vw,17px)] leading-[1.6] text-ink/75">
              <strong className="font-semibold text-ink">Senior Frontend Developer</strong> crafting scalable, high-performance web
              apps with React &amp; Next.js for 6+ years — now steadily expanding into{" "}
              <strong className="font-semibold text-ink">Mobile Development</strong>.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={CV} download className="btn bg-blue text-paper">
                Download CV <span aria-hidden>↓</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="btn bg-white">
                Get in touch <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] px-6 pt-6">
            <Portrait variant="hex" />
            <CodeBubble className="absolute left-0 top-2 -rotate-6" />
            <Starburst className="absolute -bottom-4 right-2 h-20 w-20 animate-spin-slow" />
            <ReactBadge className="absolute bottom-6 left-0 h-14 w-14" />
            <span className="chip absolute -right-2 top-[16%] rotate-3 bg-sky shadow-brutal">Available for work</span>
          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-2 border-b-[1.5px] border-ink md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-ink px-5 py-7 md:px-8 ${i % 2 === 0 ? "border-r-[1.5px]" : i === 1 ? "md:border-r-[1.5px]" : ""} ${i < 2 ? "border-b-[1.5px] md:border-b-0" : ""}`}
            >
              <div className="text-[clamp(36px,4.6vw,56px)] font-semibold leading-none tracking-[-0.03em]">{s.big}</div>
              <div className="mt-2 text-[13px] text-ink/60">{s.label}</div>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <section className="border-b-[1.5px] border-ink">
          <div className="border-b-[1.5px] border-ink px-5 py-6 sm:px-10 lg:px-16">
            <p className="m-0 text-sm text-ink/60">Passion led me here</p>
            <h2 className="m-0 mt-1 text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em]">What can I do for you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.title} className="border-b-[1.5px] border-ink px-5 py-9 last:border-b-0 sm:px-10 md:border-b-0 md:border-r-[1.5px] md:last:border-r-0 lg:px-12">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-ink shadow-brutal ${["bg-sky", "bg-lime", "bg-mint"][i]}`}>
                  <ServiceIcon icon={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mb-0 mt-6 text-[22px] font-semibold tracking-[-0.01em]">{s.title}</h3>
                <p className="mb-0 mt-2.5 text-[15px] leading-[1.6] text-ink/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="scroll-mt-16 border-b-[1.5px] border-ink">
          <Band>Featured Projects</Band>
          {allProjects.map((p, i) => (
            <article key={p.link ?? p.title} className="grid grid-cols-1 border-b-[1.5px] border-ink last:border-b-0 md:grid-cols-2">
              <div
                className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden border-b-[1.5px] border-ink p-7 md:min-h-[300px] md:border-b-0 md:p-10 ${COVERS[i % COVERS.length]} ${
                  i % 2 ? "md:order-2 md:border-l-[1.5px]" : "md:border-r-[1.5px]"
                }`}
              >
                <span className="font-mono text-[13px] opacity-70">
                  №{String(i + 1).padStart(2, "0")} · {p.org}
                </span>
                <h3 className="relative z-10 m-0 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[0.95] tracking-[-0.03em]">{p.title}</h3>
                {i % 2 ? (
                  <Sparkle className="absolute -right-4 -top-4 h-28 w-28" />
                ) : (
                  <Starburst className="absolute -right-6 -top-6 h-32 w-32 animate-spin-slow" fill="#fff" />
                )}
              </div>
              <div className="flex flex-col justify-center gap-4 p-7 md:p-10">
                <div className="flex flex-wrap gap-2">
                  <span className={`chip ${ACCENTS[i % ACCENTS.length]}`}>{p.tag}</span>
                  {p.status === "ongoing" && (
                    <span className="chip bg-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a5b]" />
                      In Progress
                    </span>
                  )}
                </div>
                <p className="m-0 max-w-[480px] text-[17px] leading-[1.6] text-ink/75">{p.desc}</p>
                <div className="font-mono text-[12px] text-ink/55">{p.stack}</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={`btn mt-2 w-fit px-4 py-2 text-sm ${ACCENTS[(i + 1) % ACCENTS.length]}`}>
                    View Now <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* ABOUT + EXPERIENCE */}
        <section id="about" className="grid scroll-mt-16 grid-cols-1 gap-12 border-b-[1.5px] border-ink px-5 py-14 sm:px-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16 md:py-20 lg:px-16">
          <div className="relative mx-auto w-full max-w-[320px] px-4 pt-4 md:sticky md:top-28 md:h-fit">
            <Portrait variant="arch" />
            <ReactBadge className="absolute left-0 top-0 h-14 w-14" />
            <Starburst className="absolute -right-1 top-1/3 h-14 w-14" fill="#f5a3e8" />
            <Sparkle className="absolute -bottom-3 -left-1 h-12 w-12" fill="#e4f47a" />
          </div>
          <div id="experience" className="min-w-0 scroll-mt-24">
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[-0.02em]">About me</h2>
            <p className="mt-4 max-w-[680px] text-[16px] leading-[1.65] text-ink/75">
              I architect frontend systems end-to-end — from SSR/CSR rendering strategy and caching to internal design systems and
              component libraries — across SaaS, healthcare, real estate and enterprise domains.
            </p>
            <p className="mt-3 max-w-[680px] text-[16px] leading-[1.65] text-ink/75">
              Currently deep in Flutter and mobile development, stretching that same product sense onto native screens —{" "}
              <a href="#work" className="font-semibold text-ink underline underline-offset-2">
                see the ongoing proof above
              </a>
              .
            </p>
            <div className="mt-10">
              <Experience />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-16 border-b-[1.5px] border-ink">
          <Band>Skills &amp; Tooling</Band>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <div key={group.name} className="-mb-[1.5px] -mr-[1.5px] border-b-[1.5px] border-r-[1.5px] border-ink p-7 md:p-9">
                <h3 className="m-0 mb-5 text-lg font-semibold">{group.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`chip py-1.5 text-[13px] ${ACCENTS[i % ACCENTS.length]}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="grid scroll-mt-16 grid-cols-1 gap-10 px-5 py-14 sm:px-10 md:grid-cols-2 md:gap-16 md:py-20 lg:px-16">
          <div>
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[-0.02em]">Tell me about your project</h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-[1.65] text-ink/75">
              Any great product starts with a clear goal. If you have a vision, I can help build it — send over a few lines about the
              role or project and I&apos;ll reply within 2–3 working days.
            </p>
            <p className="mb-1 mt-8 text-sm text-ink/55">Email me at</p>
            <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-ink underline underline-offset-4">
              {EMAIL}
            </a>
            <p className="mb-1 mt-6 text-sm text-ink/55">Call me at</p>
            <a href="tel:+6282112131616" className="text-lg font-semibold text-ink no-underline">
              +62 821-1213-1616
            </a>
          </div>
          <div className="flex flex-col gap-4 md:pt-2">
            <a href={`mailto:${EMAIL}`} className="btn justify-between bg-blue py-4 text-paper text-base">
              Send me an email <span aria-hidden>↗</span>
            </a>
            <a href={CV} download className="btn justify-between bg-lime py-4 text-base">
              Download CV <span aria-hidden>↓</span>
            </a>
            <a href="https://linkedin.com/in/janto-motulo" target="_blank" rel="noopener" className="btn justify-between bg-white py-4 text-base">
              LinkedIn <span aria-hidden>↗</span>
            </a>
            <a href="https://github.com/jantoandriano" target="_blank" rel="noopener" className="btn justify-between bg-white py-4 text-base">
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t-[1.5px] border-ink bg-ink px-5 pb-8 pt-16 text-paper sm:px-10 md:pt-24 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="m-0 text-[clamp(44px,9vw,128px)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Ready when{" "}
            <span className="inline-block -rotate-2 border-[1.5px] border-paper bg-lime px-4 text-ink">you are.</span>
          </h2>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-paper/20 pt-6 md:mt-24">
            <div className="flex flex-wrap gap-6">
              <a href="https://linkedin.com/in/janto-motulo" target="_blank" rel="noopener" className="text-sm text-paper/70 no-underline hover:text-paper">LinkedIn ↗</a>
              <a href="https://github.com/jantoandriano" target="_blank" rel="noopener" className="text-sm text-paper/70 no-underline hover:text-paper">GitHub ↗</a>
              <a href={`mailto:${EMAIL}`} className="text-sm text-paper/70 no-underline hover:text-paper">{EMAIL}</a>
            </div>
            <div className="font-mono text-xs text-paper/40">© 2026 Janto Motulo — Jakarta, ID</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
