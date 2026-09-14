"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { news, type NewsTag } from "@/content/news";

const TAG_VARIANT: Record<NewsTag, "success" | "warning" | "info"> = {
  PAPER: "success",
  AWARD: "success",
  TALK: "warning",
  MILESTONE: "info",
  REVIEW: "info",
};

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

/** Format an ISO "YYYY-MM-DD" without Date() so SSR and client agree (no tz shift). */
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const month = MONTHS[Number(m) - 1] ?? m;
  return d ? `${month} ${d} · ${y}` : `${month} ${y}`;
}

export default function News() {
  if (!news.length) return null;

  // Reverse-chronological. ISO date strings sort lexically = chronologically.
  const entries = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      id="news"
      className="border-y border-border bg-secondary/40 px-6 py-20 md:py-28"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="news-heading"
          label="News"
          readout={`${String(entries.length).padStart(2, "0")} updates`}
          title="Recent updates"
          subtitle="Papers, talks, and milestones — most recent first."
        />

        <motion.ol
          className="border-t border-border"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {entries.map((entry, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              className="grid gap-2 border-b border-border py-5 md:grid-cols-[9rem_1fr] md:gap-6"
            >
              <time
                dateTime={entry.date}
                className="font-mono text-[11px] uppercase tracking-[0.12em] tabular-nums text-muted-foreground md:pt-0.5"
              >
                {formatDate(entry.date)}
              </time>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  {entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-lg font-medium leading-snug text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {entry.title}
                    </a>
                  ) : (
                    <span className="font-serif text-lg font-medium leading-snug text-foreground">
                      {entry.title}
                    </span>
                  )}
                  {entry.tag && (
                    <Badge
                      variant={TAG_VARIANT[entry.tag]}
                      className="font-mono text-[10px] uppercase tracking-wider"
                    >
                      {entry.tag}
                    </Badge>
                  )}
                </div>
                {entry.body && (
                  <p className="mt-1.5 text-sm text-muted-foreground">{entry.body}</p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
