"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, BarChart3, Database, Globe } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import skillsData from "@/content/skills.json";

const skillCategories = [
  {
    category: "Languages",
    key: "languages" as const,
    icon: Code2,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    category: "ML / DL",
    key: "mlDl" as const,
    icon: Brain,
    gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    category: "Cloud / MLOps",
    key: "cloudMlops" as const,
    icon: Cloud,
    gradient: "bg-gradient-to-br from-sky-500 to-sky-600",
  },
  {
    category: "Data / Analytics",
    key: "dataAnalytics" as const,
    icon: BarChart3,
    gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  {
    category: "Databases",
    key: "databases" as const,
    icon: Database,
    gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
  {
    category: "Web / Dev Tools",
    key: "webDevTools" as const,
    icon: Globe,
    gradient: "bg-gradient-to-br from-rose-500 to-rose-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 bg-muted/50"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="skills-heading"
          label="05 — Skills"
          title="Technical Skills"
          subtitle="Languages, ML/DL frameworks, cloud & MLOps, data analytics, databases, and web dev tools."
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {skillCategories.map(({ category, key, icon, gradient }) => (
            <SkillCard
              key={key}
              category={category}
              items={skillsData[key]}
              icon={icon}
              gradient={gradient}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
