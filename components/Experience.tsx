"use client";

import { useState } from "react";
import { experience, ACCENT } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="experience" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 pb-14 pt-10 sm:px-10 md:pb-24 md:pt-20 lg:px-16">
      <div className="mb-8 flex items-baseline gap-4 md:mb-13">
        <span className="font-mono text-[13px]" style={{ color: ACCENT }}>03</span>
        <span className="font-mono text-[13px] uppercase tracking-[0.14em] text-ink/50">Experience</span>
      </div>

      <div className="border-t border-ink/[0.14]">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <div
              key={job.company}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="cursor-pointer border-b border-ink/[0.14] px-1 py-6 md:py-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
                    <h3 className="m-0 text-[clamp(24px,3.4vw,42px)] font-extrabold leading-[1.02] tracking-[-0.025em]">
                      {job.company}
                    </h3>
                    <span className="text-[clamp(14px,1.5vw,17px)] font-semibold text-ink/50">
                      {job.role}
                    </span>
                  </div>
                  <div className="mt-2.5 font-mono text-[12.5px] text-ink/55">{job.meta}</div>
                </div>
                <span
                  className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-ink/20 text-xl"
                  style={{ color: ACCENT }}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </div>

              {isOpen && (
                <div className="grid animate-rise grid-cols-1 gap-6 pb-2 pt-5.5">
                  <ul className="m-0 flex max-w-[820px] list-none flex-col gap-3 p-0">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[clamp(14px,1.6vw,16.5px)] leading-[1.55] text-ink/75">
                        <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full" style={{ background: ACCENT }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="rounded-md border border-ink/[0.18] px-2.5 py-1.5 font-mono text-xs text-ink/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
