"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const PROFILE_IMAGE = "/images/profile.png";
const PROFILE_FALLBACK = "https://picsum.photos/seed/profile/400/400";

const RESEARCH_INTERESTS = [
  "Computer vision",
  "Deep learning",
  "Generative models",
  "Optimal transport theory",
  "Medical image analysis",
  "Transfer learning",
];

const RECOGNITION = [
  "RoboSub USA 2022 — Top 10 Semifinalist & Outstanding Rookie Team",
  "4th IR Conference 2021 — Top 5 Industrial Projects",
  "Dean's List & VC's List — 5×",
];

export default function About() {
  const [imgError, setImgError] = useState(false);
  const profileSrc = imgError ? PROFILE_FALLBACK : PROFILE_IMAGE;

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 border-t bg-white"
      style={{ borderColor: "var(--color-border)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="about-heading"
          label="01 — About"
          title="About Me"
          subtitle="Research-oriented ML engineer with industry deployment experience and academic focus on generative models and computer vision."
        />

        <motion.div
          className="space-y-10 md:space-y-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile card: photo + credentials */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-slate-100 shadow-lg">
                <Image
                  src={profileSrc}
                  alt="S. M. Navin Nayer Anik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 176px, 224px"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 space-y-4">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Education
                </h3>
                <p className="font-serif text-lg" style={{ color: "var(--color-text-strong)" }}>
                  B.Sc. Computer Science & Engineering, BRAC University
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>GPA 3.82</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Thesis
                </h3>
                <p className="font-medium leading-relaxed" style={{ color: "var(--color-text-strong)" }}>
                  Optimal Transport Theory based GAN for Medical Image Augmentation and Classification
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Current role
                </h3>
                <p style={{ color: "var(--color-text)" }}>
                  Software Engineer I, AI/ML at Cefalo — ML for BioDrone (drone services, AI-driven aerial image analysis for forestry and agriculture)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: "var(--color-text-muted)" }}>
                  Certifications
                </h3>
                <ul className="space-y-1 text-sm" style={{ color: "var(--color-text)" }}>
                  <li className="flex gap-2">
                    <span className="mt-0.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                    <span>OWASP Top 10 for Large Language Model Applications — SecureFlag</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                    <span>AI for All: From Basics to GenAI Practice — NVIDIA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research interests */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Research interests
              </h3>
            <ul className="flex flex-wrap gap-2">
              {RESEARCH_INTERESTS.map((interest) => (
                <li key={interest}>
                  <span className="inline-block px-3 py-1.5 text-sm rounded-full transition-colors hover:bg-accent/10"
                    style={{ color: "var(--color-text)", backgroundColor: "var(--color-surface-muted)" }}
                  >
                    {interest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience & recognition: two-column layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Experience
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--color-text)" }}>
                <li className="flex gap-2">
                  <span className="mt-1.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                  <span>Sub-Team Lead, BRACU DUBURI — Bangladesh&apos;s first autonomous underwater vehicle</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                  <span>Machine Vision Engineer, Anusondhani Lab</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                  <span>Undergraduate Teaching Assistant, BRAC University</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5" style={{ color: "var(--color-text-muted)" }}>•</span>
                  <span>CNNs, transformers, transfer learning for underwater and medical imagery</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-text-muted)" }}>
                Recognition
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--color-text)" }}>
                {RECOGNITION.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="shrink-0 mt-1" style={{ color: "var(--color-text-muted)" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
