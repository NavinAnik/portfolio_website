"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import researchData from "@/content/research.json";

type Status = "Published" | "Accepted" | "Under review" | "In progress";
const STATUS_VARIANT: Record<Status, "success" | "warning" | "info"> = {
  Published: "success",
  Accepted: "success",
  "Under review": "warning",
  "In progress": "info",
};

const AUTHOR = "S. M. Navin Nayer Anik";

interface Paper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string | null;
}

/** Bold the author's own name within a citation's author list. */
function Authors({ authors }: { authors: string }) {
  if (!authors.includes(AUTHOR)) return <>{authors}</>;
  const [before, after] = authors.split(AUTHOR);
  return (
    <>
      {before}
      <span className="font-medium text-foreground">{AUTHOR}</span>
      {after}
    </>
  );
}

export default function Research() {
  const { papers, conferences, googleScholarUrl, webOfScienceUrl } = researchData;

  const group = (arr: unknown[], status: Status) =>
    (arr as Paper[]).map((p) => ({ ...p, status }));

  const entries: (Paper & { status: Status })[] = [
    ...group(papers.published, "Published"),
    ...group(papers.accepted, "Accepted"),
    ...group(papers.underReview, "Under review"),
    ...group(papers.inProgress, "In progress"),
  ];

  return (
    <section id="research" className="px-6 py-20 md:py-28" aria-labelledby="research-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="research-heading"
          label="Research"
          readout={`${String(entries.length).padStart(2, "0")} papers`}
          title="Publications"
          subtitle="Peer-reviewed papers, manuscripts under review, and work in progress — across fault diagnosis, generative augmentation, and biomedical signals."
        />

        <motion.div
          className="space-y-10"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Citation register */}
          <ol className="border-t border-border">
            {entries.map((paper, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-5"
              >
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="mb-2">
                    <Badge
                      variant={STATUS_VARIANT[paper.status]}
                      className="font-mono text-[10px] uppercase tracking-wider"
                    >
                      {paper.status}
                    </Badge>
                  </div>
                  {paper.link ? (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-lg font-medium leading-snug text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    <p className="font-serif text-lg font-medium leading-snug text-foreground">
                      {paper.title}
                    </p>
                  )}
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    <Authors authors={paper.authors} /> · {paper.venue}, {paper.year}.
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Competitions & recognition */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              <Trophy className="h-3.5 w-3.5" />
              [ Competitions ]
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {conferences.map((c, i) => (
                <div key={i} className="border-l-2 border-telemetry/60 pl-3">
                  <p className="text-sm font-medium text-foreground">
                    {c.name}{" "}
                    <span className="font-mono text-xs text-muted-foreground">· {c.year}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href={googleScholarUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4" />
                View on Google Scholar
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={webOfScienceUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View on Web of Science
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
