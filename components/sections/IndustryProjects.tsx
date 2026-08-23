"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import CornerMarks from "@/components/ui/CornerMarks";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import projectsData from "@/content/projects.json";

export default function IndustryProjects() {
  const projects = projectsData.industry;

  return (
    <section
      id="projects"
      className="border-y border-border bg-secondary/40 px-6 py-20 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="projects-heading"
          label="Applied work"
          readout={`${String(projects.length).padStart(2, "0")} systems`}
          title="Applied ML in production"
          subtitle="Where the methods meet real constraints — production ML for international clients across aerial imaging, underwater robotics, generative AI, and pricing."
        />

        <motion.div
          className="space-y-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {projects.map((p, i) => {
            const active = p.duration.includes("Present");
            return (
              <motion.article
                key={i}
                variants={fadeInUp}
                className="group relative grid gap-5 rounded-sm border border-border bg-card p-5 text-signal transition-colors hover:border-primary/40 md:grid-cols-[11rem_1fr] md:gap-8 md:p-7"
              >
                <CornerMarks size="0.85rem" inset="-1px" weight="1.5px" />

                {/* Left rail: index + span */}
                <div className="flex flex-row items-baseline justify-between gap-3 md:flex-col md:items-start md:justify-start md:gap-2">
                  <span className="font-mono text-2xl font-bold tabular-nums text-primary/80 md:text-3xl">
                    D·{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {p.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="text-card-foreground">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-xl font-medium tracking-tight md:text-2xl">
                      {p.title}
                    </h3>
                    {active && (
                      <Badge variant="success" className="font-mono text-[10px] uppercase tracking-wider">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {p.role}
                  </p>

                  <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mb-5 space-y-1.5">
                    {p.metrics.map((m, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="mt-1 text-primary" aria-hidden>
                          ▸
                        </span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {"link" in p && p.link && (
                    <a
                      href={p.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Details
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
