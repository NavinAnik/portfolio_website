"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import CornerMarks from "@/components/ui/CornerMarks";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { SOCIAL_LINKS } from "@/lib/constants";
import { writing } from "@/content/writing";

const MEDIUM_URL = SOCIAL_LINKS[2].href;
const TDS_URL = SOCIAL_LINKS[3].href;

export default function Writing() {
  if (!writing.length) return null;

  return (
    <section
      id="writing"
      className="border-y border-border bg-secondary/40 px-6 py-20 md:py-28"
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="writing-heading"
          label="Writing"
          readout={`${String(writing.length).padStart(2, "0")} pieces`}
          title="Selected writing"
          subtitle="Explaining the work in plain language — articles on Medium and Towards Data Science."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {writing.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group relative flex flex-col rounded-sm border border-border bg-card p-5 text-signal transition-colors hover:border-primary/40 md:p-6"
            >
              <CornerMarks size="0.85rem" inset="-1px" weight="1.5px" />

              {article.cover && (
                <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-sm border border-border">
                  <Image
                    src={article.cover}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="mb-3 flex items-center justify-between gap-3">
                <Badge
                  variant={article.platform === "Medium" ? "secondary" : "info"}
                  className="font-mono text-[10px] uppercase tracking-wider"
                >
                  {article.platform}
                </Badge>
                {article.date && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {article.date}
                  </span>
                )}
              </div>

              <h3 className="mb-2 font-serif text-lg font-medium tracking-tight text-card-foreground md:text-xl">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
          >
            More on Medium →
          </a>
          <a
            href={TDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
          >
            More on TDS →
          </a>
        </div>
      </div>
    </section>
  );
}
