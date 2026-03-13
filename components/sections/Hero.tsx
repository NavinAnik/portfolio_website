"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #fafbfc 0%, #ffffff 50%, #ffffff 100%)",
        }}
      />
      {/* Optional: subtle dot pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-content mx-auto w-full text-center">
        <motion.p
          className="text-section-label font-medium uppercase tracking-widest mb-4"
          style={{ color: "var(--color-accent-muted)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Associate Software Engineer II · Cefalo
        </motion.p>
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal tracking-heading-tight mb-4"
          style={{ color: "var(--color-text-strong)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          S. M. Navin Nayer Anik
        </motion.h1>
        <motion.p
          className="text-base md:text-lg mb-6 font-medium"
          style={{ color: "var(--color-text-muted)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          AI · ML · Computer Vision · Robotics
        </motion.p>
        <motion.p
          className="max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ML engineer building AI solutions for Aqua Robotics—automating fish farming at sea with computer vision, predictive maintenance, and robotic systems. Former Sub-Team Lead of BRACU DUBURI. Research focus: Optimal Transport GANs for medical image augmentation.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="/cv.pdf" variant="primary" external={false}>
            Download CV
          </Button>
          <Button href="#research" variant="secondary">
            View Research
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm font-medium transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
        style={{ color: "var(--color-text-muted)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        aria-label="Scroll to about section"
      >
        <span>Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.a>
    </section>
  );
}
