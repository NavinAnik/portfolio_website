"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import projectsData from "@/content/projects.json";

export default function IndustryProjects() {
  const projects = projectsData.industry;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 bg-muted/50"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="projects-heading"
          label="03 — Projects"
          title="Industry Projects"
          subtitle="AI/ML production systems and real-world impact."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              className={cn(
                "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
                i === 0 && "md:col-span-2"
              )}
            >
              {/* Gradient accent on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-primary to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

              {/* Role + Duration badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="info" className="text-[10px] font-medium">
                  {p.role}
                </Badge>
                <span className="text-xs text-muted-foreground">{p.duration}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-normal mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {p.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px] font-mono">
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Metrics */}
              <ul className="text-sm space-y-1 text-muted-foreground mb-4">
                {p.metrics.map((m, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary/60 mt-0.5">&bull;</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              {"link" in p && p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group/link"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  More details
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
