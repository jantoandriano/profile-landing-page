"use client";

import { useState } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-5">
      {experience.map((job, i) => {
        const isOpen = open === i;
        const year = job.meta.match(/\d{4}/)?.[0];
        return (
          <div key={job.company} className="flex gap-4 md:gap-6">
            <span className="h-fit flex-none border-[1.5px] border-ink bg-sky px-3 py-1.5 font-mono text-[13px] font-medium shadow-brutal">
              {year}
            </span>
            <div className="min-w-0 flex-1">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <div className="min-w-0">
                  <h3 className="m-0 text-[clamp(20px,2.4vw,26px)] font-semibold leading-[1.15] tracking-[-0.01em]">
                    {job.company} <span className="font-normal text-ink/55">— {job.role}</span>
                  </h3>
                  <div className="mt-1.5 font-mono text-[12px] text-ink/55">{job.meta}</div>
                </div>
                <span
                  className={`flex h-8 w-8 flex-none items-center justify-center border-[1.5px] border-ink text-lg leading-none ${
                    isOpen ? "bg-lime" : "bg-white shadow-brutal"
                  }`}
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="grid animate-rise gap-5 pt-4">
                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-[1.55] text-ink/80">
                        <span className="mt-[7px] h-2 w-2 flex-none border border-ink bg-lime" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="chip bg-white font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
