"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import researchData from "@/content/research.json";

export default function Research() {
  const { projects, papers, conferences, googleScholarUrl } = researchData;

  return (
    <section
      id="research"
      className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-200"
      aria-labelledby="research-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="research-heading"
          title="Research & Publications"
          subtitle="Projects, papers, and academic participation."
        />

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-4">
              Research projects
            </h3>
            <ul className="space-y-4">
              {projects.map((p, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="font-medium text-slate-800">{p.title}</p>
                  <p className="text-slate-600 text-sm mt-1">{p.description}</p>
                  <p className="text-slate-500 text-xs mt-2">{p.year}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-4">
              Papers
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  Published
                </h4>
                <ul className="space-y-3">
                  {papers.published.map((paper, i) => (
                    <li key={i} className="border-l-2 border-slate-300 pl-4">
                      <a
                        href={paper.link}
                        className="text-[var(--color-accent)] hover:underline font-medium"
                      >
                        {paper.title}
                      </a>
                      <p className="text-slate-600 text-sm">
                        {paper.authors}. {paper.venue}, {paper.year}.
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  Under review
                </h4>
                <ul className="space-y-3">
                  {papers.underReview.map((paper, i) => (
                    <li key={i} className="border-l-2 border-slate-300 pl-4">
                      <p className="font-medium text-slate-800">{paper.title}</p>
                      <p className="text-slate-600 text-sm">
                        {paper.authors}. {paper.venue}, {paper.year}.
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  In progress
                </h4>
                <ul className="space-y-3">
                  {papers.inProgress.map((paper, i) => (
                    <li key={i} className="border-l-2 border-slate-300 pl-4">
                      <p className="font-medium text-slate-800">{paper.title}</p>
                      <p className="text-slate-600 text-sm">
                        {paper.authors}. {paper.venue} {paper.year}.
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-4">
              Conference participation
            </h3>
            <ul className="flex flex-wrap gap-3">
              {conferences.map((c, i) => (
                <li
                  key={i}
                  className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm"
                >
                  {c.name} {c.year} — {c.role}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button href={googleScholarUrl} variant="outline" external>
              Google Scholar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
