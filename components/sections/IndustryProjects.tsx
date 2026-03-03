"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import projectsData from "@/content/projects.json";

export default function IndustryProjects() {
  const projects = projectsData.industry;

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-6 border-t border-slate-200"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="projects-heading"
          title="Industry Projects"
          subtitle="AI/ML production systems and real-world impact."
        />
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="text-slate-600 text-sm space-y-1">
                {p.metrics.map((m, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-slate-400">•</span> {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
