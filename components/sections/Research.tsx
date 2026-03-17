"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import researchData from "@/content/research.json";
import Link from "next/link";

type TabId = "papers" | "conferences";

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "papers", label: "Papers", icon: <FileText className="h-4 w-4" /> },
  { id: "conferences", label: "Conferences", icon: <Users className="h-4 w-4" /> },
];

export default function Research() {
  const { papers, conferences, googleScholarUrl } = researchData;
  const [activeTab, setActiveTab] = useState<TabId>("papers");

  const hasPublished = papers.published.length > 0;
  const hasUnderReview = papers.underReview.length > 0;
  const hasInProgress = papers.inProgress.length > 0;
  const hasPapers = hasPublished || hasUnderReview || hasInProgress;

  return (
    <section
      id="research"
      className="py-20 md:py-28 px-6"
      aria-labelledby="research-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="research-heading"
          label="05 — Research"
          title="Research & Publications"
          subtitle="Papers, conferences, and academic participation."
        />

        <motion.div
          className="space-y-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Tab triggers */}
          <motion.div variants={fadeInUp}>
            <div
              role="tablist"
              aria-label="Research content tabs"
              className="inline-flex items-center gap-1 rounded-lg bg-muted p-1"
            >
              {tabs.map(({ id, label, icon }) => (
                <button
                  key={id}
                  role="tab"
                  aria-selected={activeTab === id}
                  aria-controls={`panel-${id}`}
                  id={`tab-${id}`}
                  onClick={() => setActiveTab(id)}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {icon}
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {activeTab === "papers" && (
              <motion.div
                key="papers"
                id="panel-papers"
                role="tabpanel"
                aria-labelledby="tab-papers"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {!hasPapers ? (
                  <p className="text-muted-foreground">No papers listed yet.</p>
                ) : (
                  <div className="space-y-6">
                    {hasPublished && (
                      <PaperGroup title="Published" variant="success" papers={papers.published} />
                    )}
                    {hasUnderReview && (
                      <PaperGroup title="Under Review" variant="warning" papers={papers.underReview} />
                    )}
                    {hasInProgress && (
                      <PaperGroup title="In Progress" variant="info" papers={papers.inProgress} />
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "conferences" && (
              <motion.div
                key="conferences"
                id="panel-conferences"
                role="tabpanel"
                aria-labelledby="tab-conferences"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {conferences.map((c, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-[10px]">{c.year}</Badge>
                      </div>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{c.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div variants={fadeInUp}>
            <Button variant="outline" asChild>
              <Link href={googleScholarUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4" />
                Google Scholar
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PaperGroup({
  title,
  variant,
  papers,
}: {
  title: string;
  variant: "success" | "warning" | "info";
  papers: { title: string; authors: string; venue: string; year: string; link?: string | null }[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Badge variant={variant} className="text-[10px]">{title}</Badge>
      </div>
      <div className="space-y-3">
        {papers.map((paper, i) => (
          <div
            key={i}
            className="border-l-2 border-border pl-4 hover:border-primary transition-colors"
          >
            {paper.link ? (
              <a
                href={paper.link}
                className="text-primary hover:underline font-medium text-sm"
              >
                {paper.title}
              </a>
            ) : (
              <p className="font-medium text-sm">{paper.title}</p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {paper.authors}. {paper.venue}, {paper.year}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
