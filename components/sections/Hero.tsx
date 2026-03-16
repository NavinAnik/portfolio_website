"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp, blurFadeIn } from "@/lib/animations";

const specializations = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Deep Learning",
  "Robotics",
];

export default function Hero() {
  const [currentSpecIndex, setCurrentSpecIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecIndex((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Animated mesh gradient background */}
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 animate-mesh will-change-auto"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, hsl(213 94% 68% / 0.3), hsl(260 80% 70% / 0.2), hsl(190 90% 60% / 0.2), hsl(213 74% 23% / 0.3))",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.015] dark:opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] bg-repeat" />

      <motion.div
        className="max-w-[var(--content-max-width)] mx-auto w-full text-center"
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm text-sm font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 will-change-transform" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for collaboration
          </span>
        </motion.div>

        {/* Role label */}
        <motion.p
          variants={fadeInUp}
          className="text-xs font-mono font-medium uppercase tracking-[0.15em] text-primary mb-4"
        >
          Software Engineer I, AI/ML &middot; Cefalo
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={blurFadeIn}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-4"
        >
          S. M. Navin Nayer Anik
        </motion.h1>

        {/* Rotating specialization */}
        <motion.div variants={fadeInUp} className="h-8 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={specializations[currentSpecIndex]}
              initial={{ y: 20, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-lg md:text-xl font-medium text-muted-foreground"
            >
              {specializations[currentSpecIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          ML engineer building production AI systems &mdash; from aerial image
          analysis for forestry to underwater computer vision and generative AI
          pipelines. Research focus on Optimal Transport GANs for medical image
          augmentation.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="glow" size="lg" asChild>
            <Link href="/cv.pdf">
              <Sparkles className="h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#research">View Research</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
