"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import skillsData from "@/content/skills.json";

export default function Skills() {
  const { languages, mlDl, mlops, data } = skillsData;

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-6 border-t bg-surface-muted"
      style={{ borderColor: "var(--color-border)" }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="skills-heading"
          label="04 — Skills"
          title="Technical Skills"
          subtitle="Languages, ML/DL frameworks, MLOps, and data tools."
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SkillCard category="Languages" items={languages} />
          <SkillCard category="ML / DL" items={mlDl} />
          <SkillCard category="MLOps" items={mlops} />
          <SkillCard category="Data" items={data} />
        </motion.div>
      </div>
    </section>
  );
}
