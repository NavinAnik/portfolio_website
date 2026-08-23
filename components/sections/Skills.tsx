"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import skillsData from "@/content/skills.json";

const CATEGORIES: { label: string; key: keyof typeof skillsData }[] = [
  { label: "Languages", key: "languages" },
  { label: "ML / DL", key: "mlDl" },
  { label: "Cloud / MLOps", key: "cloudMlops" },
  { label: "Data", key: "dataAnalytics" },
  { label: "Databases", key: "databases" },
  { label: "Web / Tools", key: "webDevTools" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-secondary/40 px-6 py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="skills-heading"
          label="Methods & tools"
          readout={`${CATEGORIES.length} classes`}
          title="Capability matrix"
          subtitle="The instruments — languages, frameworks, and infrastructure behind the research and applied work."
        />

        <motion.dl
          className="border-t border-border"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {CATEGORIES.map(({ label, key }) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="grid gap-3 border-b border-border py-5 md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <dt className="flex items-baseline gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                <span className="text-muted-foreground">▸</span>
                {label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {skillsData[key].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="cursor-default px-2.5 py-1 font-mono text-[11px] transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item}
                  </Badge>
                ))}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
