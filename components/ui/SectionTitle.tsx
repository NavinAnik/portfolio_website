"use client";

import { motion } from "framer-motion";
import { blurFadeIn } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  /** Short register tag, rendered in brackets, e.g. "DEPLOYMENTS". */
  label?: string;
  /** Right-aligned readout — a real datum (a count, a span), e.g. "05 SYSTEMS". */
  readout?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  id,
  label,
  readout,
}: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={blurFadeIn}
    >
      {/* Telemetry header: [ TAG ] ——— readout */}
      <div className="flex items-center gap-4 mb-5">
        {label && (
          <span className="shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            [ {label} ]
          </span>
        )}
        <span className="h-px flex-1 bg-border" aria-hidden />
        {readout && (
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {readout}
          </span>
        )}
      </div>

      <h2
        id={id}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
