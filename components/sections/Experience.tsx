"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import experienceData from "@/content/experience.json";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="experience-heading"
          label="Career"
          readout="2019 → now"
          title="Trajectory"
          subtitle="From leading software on an autonomous underwater vehicle to shipping ML for international clients."
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {experienceData.map((job, i) => (
            <motion.li
              key={`${job.company}-${job.title}`}
              variants={fadeInUp}
              className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8"
            >
              {/* Left: span + company */}
              <div className="pt-5 md:pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {job.duration}
                </p>
              </div>

              {/* Right: node + content on a timeline rail */}
              <div className="relative border-l border-border pb-8 pl-6 md:pt-6">
                <span
                  className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background md:top-7"
                  aria-hidden
                />
                <h3 className="font-serif text-lg font-medium tracking-tight md:text-xl">
                  {job.title}
                </h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                  <span className="font-medium text-primary">{job.company}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                </p>
                {"roles" in job && job.roles && job.roles.length > 0 && (
                  <ol className="mt-3 space-y-1 border-l border-border/60 pl-4">
                    {job.roles.map((r, k) => (
                      <li
                        key={k}
                        className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm"
                      >
                        <span
                          className={
                            "current" in r && r.current
                              ? "flex items-center gap-1.5 font-medium text-primary"
                              : "text-muted-foreground"
                          }
                        >
                          {"current" in r && r.current && <span aria-hidden>▸</span>}
                          {r.title}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {r.duration}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {job.description}
                </p>
                {job.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="mt-1 text-primary" aria-hidden>
                          ▸
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
