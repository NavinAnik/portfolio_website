"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Award,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";

const PROFILE_IMAGE = "/images/profile.webp";
const PROFILE_FALLBACK = "/images/profile.png";

const RESEARCH_INTERESTS = [
  "Computer vision",
  "Deep learning",
  "Generative models",
  "Optimal transport theory",
  "Medical image analysis",
  "Transfer learning",
  "Robotics",
];

const RECOGNITION = [
  {
    title: "RoboSub USA 2022",
    detail: "Top 10 Semifinalist & Outstanding Rookie Team",
  },
  {
    title: "4th IR Conference 2021",
    detail: "Top 5 Industrial Projects",
  },
  {
    title: "Dean's List & VC's List",
    detail: "5x recipient",
  },
];

const STATS = [
  { label: "Years Experience", value: 3 },
  { label: "Industry Projects", value: 5 },
  { label: "Research Papers", value: 4 },
];

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  const [imgError, setImgError] = useState(false);
  const profileSrc = imgError ? PROFILE_FALLBACK : PROFILE_IMAGE;

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="about-heading"
          label="01 — About"
          title="About Me"
          subtitle="Research-oriented ML engineer with industry deployment experience and academic focus on generative models and computer vision."
        />

        <motion.div
          className="space-y-8"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Top row: Profile + Credentials */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Profile card */}
            <motion.div variants={fadeInLeft} className="flex flex-col items-center md:items-start gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-primary/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-border">
                  <Image
                    src={profileSrc}
                    alt="S. M. Navin Nayer Anik"
                    width={448}
                    height={672}
                    className="object-cover w-full h-full transition-transform duration-500 will-change-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 192px, 224px"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full text-center">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-serif font-normal text-foreground">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Credentials grid */}
            <motion.div variants={fadeInRight} className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <h3 className="text-xs font-medium uppercase tracking-wider">Education</h3>
                </div>
                <p className="font-serif text-lg">
                  B.Sc. Computer Science & Engineering
                </p>
                <p className="text-sm text-muted-foreground">BRAC University &middot; GPA 3.82</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <FlaskConical className="h-4 w-4" />
                  <h3 className="text-xs font-medium uppercase tracking-wider">Thesis</h3>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  Optimal Transport Theory based GAN for Medical Image Augmentation and Classification
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  S. M. Navin Nayer Anik. Thesis - BRAC University, 2023.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-4 w-4" />
                  <h3 className="text-xs font-medium uppercase tracking-wider">Current Role</h3>
                </div>
                <p className="text-sm leading-relaxed">
                  Software Engineer I, AI/ML at Cefalo &mdash; ML for BioDrone
                  (drone services, AI-driven aerial image analysis for forestry and agriculture)
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <h3 className="text-xs font-medium uppercase tracking-wider">Certifications</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary/50 mt-0.5">&bull;</span>
                    <span>OWASP Top 10 for LLMs &mdash; SecureFlag</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary/50 mt-0.5">&bull;</span>
                    <span>AI for All: From Basics to GenAI &mdash; NVIDIA</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Research interests */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESEARCH_INTERESTS.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Award className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-medium uppercase tracking-wider">Recognition</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {RECOGNITION.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
