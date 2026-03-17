"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Eye,
  Activity,
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import projectsData from "@/content/academic-projects.json";

const ICON_MAP: Record<string, LucideIcon> = {
  bot: Bot,
  brain: Brain,
  eye: Eye,
  activity: Activity,
};

const GRADIENT_MAP: Record<string, string> = {
  bot: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-indigo-500/10",
  brain:
    "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 dark:from-purple-500/10 dark:via-fuchsia-500/10 dark:to-pink-500/10",
  eye: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-cyan-500/10",
  activity:
    "from-amber-500/20 via-orange-500/20 to-red-500/20 dark:from-amber-500/10 dark:via-orange-500/10 dark:to-red-500/10",
};

interface Project {
  title: string;
  description: string;
  image: string | null;
  icon: string;
  tech: string[];
  highlights: string[];
  github: string | null;
  demo: string | null;
  year: string | null;
  featured: boolean;
}

function PlaceholderImage({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = ICON_MAP[icon] ?? Brain;
  const gradient = GRADIENT_MAP[icon] ?? GRADIENT_MAP.brain;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-gradient-to-br",
        gradient,
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:24px_24px]" />
      <Icon className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.2} />
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative grid md:grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <PlaceholderImage icon={project.icon} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.year && (
            <Badge variant="secondary" className="text-[10px] font-mono">
              {project.year}
            </Badge>
          )}
          <Badge variant="info" className="text-[10px]">
            Featured
          </Badge>
        </div>

        <h3 className="font-serif text-xl md:text-2xl font-normal mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-primary/60 mt-0.5 shrink-0">&bull;</span>
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px] font-mono">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <PlaceholderImage icon={project.icon} className="absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay with link cues */}
        {(project.github || project.demo) && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-transform hover:scale-110"
                aria-label={`${project.title} source code`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-transform hover:scale-110"
                aria-label={`${project.title} live demo`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.year && (
            <Badge variant="secondary" className="text-[10px] font-mono">
              {project.year}
            </Badge>
          )}
        </div>

        <h3 className="font-serif text-lg font-normal mb-1.5 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground mb-3 line-clamp-3">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="space-y-1 mb-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className="text-primary/60 mt-0.5 shrink-0">&bull;</span>
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px] font-mono">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function AcademicProjects() {
  const featured = (projectsData as Project[]).filter((p) => p.featured);
  const rest = (projectsData as Project[]).filter((p) => !p.featured);

  return (
    <section
      id="academic-projects"
      className="py-20 md:py-28 px-6"
      aria-labelledby="academic-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="academic-heading"
          label="04 — Academic"
          title="Academic Projects"
          subtitle="Robotics, computer vision, and research-driven builds from university and beyond."
        />

        <motion.div
          className="space-y-5"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Featured project(s) — full-width split card */}
          {featured.map((p) => (
            <FeaturedCard key={p.title} project={p} />
          ))}

          {/* Remaining projects in a 2-col grid */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
