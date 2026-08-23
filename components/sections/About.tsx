"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  viewportConfig,
} from "@/lib/animations";

const SPEC = [
  { k: "Role", v: "ML Researcher & Engineer · Cefalo" },
  { k: "Based", v: "Dhaka, Bangladesh · remote for Norway" },
  { k: "Education", v: "B.Sc. CSE, BRAC University · GPA 3.82" },
  { k: "Thesis", v: "Optimal-transport GAN for medical image augmentation" },
  { k: "Focus", v: "Perception under uncertainty · generative models · signal → structure" },
];

const RESEARCH_INTERESTS = [
  "Computer vision",
  "Deep learning",
  "Generative models",
  "Optimal transport",
  "Medical imaging",
  "Transfer learning",
  "Robotics",
];

const RECOGNITION = [
  { title: "RoboSub USA 2022", detail: "Top 10 semifinalist · Outstanding Rookie" },
  { title: "4th IR Conference 2021", detail: "Top 5 industrial projects" },
  { title: "Dean's & VC's List", detail: "5× recipient" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="about-heading"
          label="Profile"
          readout="CS · BRAC University"
          title="Perception at the messy end"
          subtitle="A machine learning researcher whose applied work at Cefalo grounds a research program on perception under uncertainty — noisy input, scarce labels, shifting distributions."
        />

        <motion.div
          className="grid gap-12 md:grid-cols-[1fr_320px] md:gap-16"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Left: bio + spec sheet */}
          <motion.div variants={fadeInLeft}>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a machine learning researcher working at the hard end of
                perception — turbid water, seasonal drift, scarce labels — where a
                model has to stay right as the world changes underneath it. My
                applied work at Cefalo (computer-vision and generative models for
                aerial imaging, underwater robotics, and pricing) is where these
                methods get pressure-tested at production scale.
              </p>
              <p>
                That work sits alongside an active research record: a first-author
                paper on cross-domain fault diagnosis in{" "}
                <span className="text-foreground">Nature Scientific Reports</span>,
                multi-label antimicrobial-resistance prediction from MALDI-TOF
                spectra under review, self-supervised vision transformers for
                anomalous sound detection in preparation, and an
                optimal-transport GAN thesis for medical image augmentation.
                Earlier, I led software for BRACU DUBURI, Bangladesh&apos;s first
                autonomous underwater vehicle.
              </p>
            </div>

            {/* Spec sheet — mono key/value register */}
            <dl className="mt-8 border-t border-border">
              {SPEC.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-3 sm:grid-cols-[9rem_1fr]"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {row.k}
                  </dt>
                  <dd className="text-sm text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Right: interests + recognition register */}
          <motion.div variants={fadeInRight} className="space-y-10">
            <div>
              <h3 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                [ Research interests ]
              </h3>
              <div className="flex flex-wrap gap-2">
                {RESEARCH_INTERESTS.map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="cursor-default px-2.5 py-1 font-mono text-[11px] transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                <Award className="h-3.5 w-3.5" />
                [ Recognition ]
              </h3>
              <ul className="space-y-3">
                {RECOGNITION.map((item) => (
                  <li key={item.title} className="border-l-2 border-telemetry/60 pl-3">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
