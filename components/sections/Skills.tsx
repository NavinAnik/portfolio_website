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
      className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-200"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="skills-heading"
          title="Technical Skills"
          subtitle="Languages, ML/DL frameworks, MLOps, and data tools."
        />
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
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
