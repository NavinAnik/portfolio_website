"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import CornerMarks from "@/components/ui/CornerMarks";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";
import projectsData from "@/content/academic-projects.json";

// Each build maps to the sensing domain it operates in — the real structural
// fact, in place of a decorative icon.
const DOMAIN: Record<string, string> = {
  bot: "Underwater",
  brain: "Generative",
  eye: "Vision",
  activity: "Signal",
};

interface Project {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  highlights: string[];
  year: string | null;
  featured: boolean;
}

function SpecimenCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        "group relative flex flex-col rounded-sm border border-border bg-card p-5 text-signal transition-colors hover:border-primary/40 md:p-6",
        featured && "md:col-span-3 md:flex-row md:gap-8"
      )}
    >
      <CornerMarks size="0.85rem" inset="-1px" weight="1.5px" />

      <div className={cn(featured && "md:w-1/2")}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-sm border border-primary/30 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
            {DOMAIN[project.icon] ?? "Vision"}
          </span>
          {project.year && (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
              {project.year}
            </span>
          )}
        </div>

        <h3 className="mb-2 font-serif text-lg font-medium tracking-tight text-card-foreground md:text-xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className={cn("mt-4 flex flex-col", featured && "md:mt-0 md:w-1/2 md:justify-center")}>
        {project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                <span className="mt-1 text-primary" aria-hidden>
                  ▸
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-[10px]">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function AcademicProjects() {
  const projects = projectsData as Project[];
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="academic-projects" className="px-6 py-20 md:py-28" aria-labelledby="academic-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="academic-heading"
          label="Research projects"
          readout={`${String(projects.length).padStart(2, "0")} projects`}
          title="Research & robotics"
          subtitle="Research systems from university and lab work — where the methods were built, tested, and taken to competition."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {featured.map((p) => (
            <SpecimenCard key={p.title} project={p} featured />
          ))}
          {rest.map((p) => (
            <SpecimenCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
