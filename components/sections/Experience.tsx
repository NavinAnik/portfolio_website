"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";
import experienceData from "@/content/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 bg-muted/50"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="experience-heading"
          label="02 — Experience"
          title="Work Experience"
          subtitle="Career journey across AI/ML engineering, robotics, and full-stack development."
        />

        <motion.div
          className="relative"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" aria-hidden />

          <div className="space-y-10">
            {experienceData.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.title}`}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-1.5 z-10 md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-primary bg-background">
                    <div className="h-[5px] w-[5px] rounded-full bg-primary" />
                  </div>
                </div>

                {/* Duration badge (desktop: centered on timeline) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0">
                  <Badge variant="secondary" className="text-[10px] font-mono whitespace-nowrap">
                    {job.duration}
                  </Badge>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  {/* Duration badge (mobile only) */}
                  <div className="md:hidden mb-2">
                    <Badge variant="secondary" className="text-[10px] font-mono">
                      {job.duration}
                    </Badge>
                  </div>

                  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                        <Briefcase className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg font-normal leading-snug">
                          {job.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {job.company}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {job.description}
                    </p>

                    {job.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {job.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="text-primary/60 mt-0.5 shrink-0">&bull;</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
