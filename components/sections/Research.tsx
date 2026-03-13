"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import researchData from "@/content/research.json";

type TabId = "projects" | "papers" | "conferences";

export default function Research() {
  const { projects, papers, conferences, googleScholarUrl } = researchData;
  const [activeTab, setActiveTab] = useState<TabId>("projects");

  const tabs: { id: TabId; label: string }[] = [
    { id: "projects", label: "Research Projects" },
    { id: "papers", label: "Papers" },
    { id: "conferences", label: "Conferences" },
  ];

  const hasPublished = papers.published.length > 0;
  const hasUnderReview = papers.underReview.length > 0;
  const hasInProgress = papers.inProgress.length > 0;
  const hasPapers = hasPublished || hasUnderReview || hasInProgress;

  return (
    <section
      id="research"
      className="py-20 md:py-28 px-6 border-t bg-white"
      style={{ borderColor: "var(--color-border)" }}
      aria-labelledby="research-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="research-heading"
          label="03 — Research"
          title="Research & Publications"
          subtitle="Projects, papers, and academic participation."
        />

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div
            role="tablist"
            aria-label="Research content tabs"
            className="flex flex-wrap gap-2 border-b pb-2"
            style={{ borderColor: "var(--color-border)" }}
          >
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`panel-${id}`}
                id={`tab-${id}`}
                onClick={() => setActiveTab(id)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  activeTab === id
                    ? "bg-white border border-b-white -mb-[2px] text-accent"
                    : "hover:bg-surface-muted"
                }`}
                style={{
                  borderColor: activeTab === id ? "var(--color-border)" : "transparent",
                  color: activeTab === id ? undefined : "var(--color-text-muted)",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            id="panel-projects"
            role="tabpanel"
            aria-labelledby="tab-projects"
            hidden={activeTab !== "projects"}
            className="pt-2"
          >
            <ul className="space-y-4">
              {projects.map((p, i) => (
                <li
                  key={i}
                  className="rounded-xl border bg-white p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {"link" in p && p.link ? (
                    <a
                      href={p.link}
                      className="font-medium text-accent hover:underline block"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <p className="font-medium" style={{ color: "var(--color-text-strong)" }}>{p.title}</p>
                  )}
                  <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>{p.description}</p>
                  <p className="text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>{p.year}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            id="panel-papers"
            role="tabpanel"
            aria-labelledby="tab-papers"
            hidden={activeTab !== "papers"}
            className="pt-2"
          >
            {!hasPapers ? (
              <p style={{ color: "var(--color-text-muted)" }}>No papers listed yet.</p>
            ) : (
              <div className="space-y-6">
                {hasPublished && (
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: "var(--color-text-muted)" }}>
                      Published
                    </h4>
                    <ul className="space-y-3">
                      {papers.published.map((paper: { title: string; authors: string; venue: string; year: string; link?: string | null }, i: number) => (
                        <li key={i} className="border-l-2 pl-4" style={{ borderColor: "var(--color-border-strong)" }}>
                          {paper.link ? (
                            <a
                              href={paper.link}
                              className="text-accent hover:underline font-medium"
                            >
                              {paper.title}
                            </a>
                          ) : (
                            <p className="font-medium" style={{ color: "var(--color-text-strong)" }}>{paper.title}</p>
                          )}
                          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            {paper.authors}. {paper.venue}, {paper.year}.
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {hasUnderReview && (
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: "var(--color-text-muted)" }}>
                      Under review
                    </h4>
                    <ul className="space-y-3">
                      {papers.underReview.map((paper: { title: string; authors: string; venue: string; year: string }, i: number) => (
                        <li key={i} className="border-l-2 pl-4" style={{ borderColor: "var(--color-border-strong)" }}>
                          <p className="font-medium" style={{ color: "var(--color-text-strong)" }}>{paper.title}</p>
                          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            {paper.authors}. {paper.venue}, {paper.year}.
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {hasInProgress && (
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-wide mb-2" style={{ color: "var(--color-text-muted)" }}>
                      In progress
                    </h4>
                    <ul className="space-y-3">
                      {papers.inProgress.map((paper: { title: string; authors: string; venue: string; year: string }, i: number) => (
                        <li key={i} className="border-l-2 pl-4" style={{ borderColor: "var(--color-border-strong)" }}>
                          <p className="font-medium" style={{ color: "var(--color-text-strong)" }}>{paper.title}</p>
                          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                            {paper.authors}. {paper.venue} {paper.year}.
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            id="panel-conferences"
            role="tabpanel"
            aria-labelledby="tab-conferences"
            hidden={activeTab !== "conferences"}
            className="pt-2"
          >
            <ul className="flex flex-wrap gap-3">
              {conferences.map((c, i) => (
                <li
                  key={i}
                  className="px-4 py-2 rounded-xl bg-white border text-sm shadow-card"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text)" }}
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
