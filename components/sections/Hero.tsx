"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import CornerMarks from "@/components/ui/CornerMarks";
import { staggerContainer, fadeInUp, blurFadeIn } from "@/lib/animations";
import { CV_PDF_URL, CV_PDF_FILENAME } from "@/lib/constants";

const PROFILE_IMAGE = "/images/profile.webp";
const PROFILE_FALLBACK = "/images/profile.png";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const profileSrc = imgError ? PROFILE_FALLBACK : PROFILE_IMAGE;

  return (
    <section
      className="hero-ink scanlines relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24"
      aria-label="Introduction"
    >
      {/* Depth: coordinate ticks + a drifting scan bar + a faint signal bloom */}
      <div className="grid-ticks pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div className="scan-bar" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--signal) / 0.22), transparent 70%)",
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-[var(--content-max-width)]"
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        animate="visible"
      >
        {/* Instrument top rail */}
        <motion.div
          variants={fadeInUp}
          className="mb-12 flex items-center justify-between gap-4 border-b border-border pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:mb-16"
        >
          <span className="text-primary">[ research · perception systems ]</span>
          <span className="hidden sm:inline">23.8103°N · 90.4125°E</span>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
          {/* Left: identity + thesis */}
          <div className="order-2 md:order-1">
            <motion.p
              variants={fadeInUp}
              className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary"
            >
              Machine Learning Researcher · Computer Vision &amp; Deep Learning
            </motion.p>

            <motion.h1
              variants={blurFadeIn}
              className="font-serif text-[2.6rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              S. M. Navin
              <br />
              Nayer Anik
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              I research perception under uncertainty — how models keep seeing
              correctly when the signal is noisy, the labels are scarce, and the
              world shifts: forests read from drones, structure recovered from
              murky water, disease inferred from spectra.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button variant="glow" size="lg" asChild>
                <a href={CV_PDF_URL} download={CV_PDF_FILENAME}>
                  <FileDown className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#research">Read the research</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: portrait as a frame under analysis */}
          <motion.div
            variants={blurFadeIn}
            className="order-1 mx-auto w-full max-w-[300px] md:order-2 md:ml-auto md:mr-0"
          >
            <div className="relative text-signal">
              {/* the frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card">
                <Image
                  src={profileSrc}
                  alt="S. M. Navin Nayer Anik"
                  width={448}
                  height={560}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 300px, 360px"
                  priority
                  onError={() => setImgError(true)}
                />
                {/* sensor-feed scanlines over the subject */}
                <div className="scanlines pointer-events-none absolute inset-0" />
                {/* the detection box edge */}
                <div className="pointer-events-none absolute inset-2 rounded-sm border border-signal/60" />
              </div>

              <CornerMarks size="1.1rem" inset="-3px" weight="2px" />

              {/* detection tag — lands last */}
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.05, type: "spring", stiffness: 320, damping: 22 }}
                className="absolute -top-3 left-3 flex items-center gap-2"
              >
                <span className="rounded-sm bg-signal px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[hsl(200_40%_8%)] shadow-sm">
                  subject: anik
                </span>
                <span className="rounded-sm border border-signal/50 bg-[hsl(200_46%_6%)] px-1.5 py-0.5 font-mono text-[10px] text-signal">
                  0.99
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Instrument bottom rail */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 flex items-center justify-between gap-4 border-t border-border pt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:mt-20"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Open to research collaboration
          </span>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 transition-colors hover:text-foreground"
            aria-label="Scroll to profile"
          >
            <span className="hidden sm:inline">Scroll to decode</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
