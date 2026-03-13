"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import projectsData from "@/content/projects.json";

export default function IndustryProjects() {
  const projects = projectsData.industry;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-6 border-t bg-surface-muted"
      style={{ borderColor: "var(--color-border)" }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="projects-heading"
          label="02 — Projects"
          title="Industry Projects"
          subtitle="AI/ML production systems and real-world impact."
        />
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-xl border bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
              <h3 className="font-serif text-xl font-normal" style={{ color: "var(--color-text-strong)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full"
                    style={{ color: "var(--color-text)", backgroundColor: "var(--color-surface-muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="text-sm space-y-1 mb-4" style={{ color: "var(--color-text-muted)" }}>
                {p.metrics.map((m, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-slate-400">•</span> {m}
                  </li>
                ))}
              </ul>
              {"link" in p && p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  More details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
