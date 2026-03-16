"use client";

import { motion } from "framer-motion";
import { blurFadeIn } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
  label?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  id,
  label,
}: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12 md:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={blurFadeIn}
    >
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary mb-3 font-mono">
          {label}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg max-w-2xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
