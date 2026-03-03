"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6 py-20"
      aria-label="Introduction"
    >
      <div className="max-w-content mx-auto w-full text-center">
        <motion.h1
          className="font-serif text-4xl md:text-6xl font-semibold text-slate-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Name
        </motion.h1>
        <motion.p
          className="text-slate-600 text-lg md:text-xl mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Machine Learning Engineer | AI Researcher | PhD Aspirant
        </motion.p>
        <motion.p
          className="text-slate-600 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build and deploy ML systems in production while pursuing research in
          self-supervised learning and efficient deep learning. Focused on
          bridging industry impact with rigorous research as a future PhD
          candidate.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="#research" variant="primary">
            View Research
          </Button>
          <Button href="/cv.pdf" variant="secondary" external={false}>
            Download CV
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
