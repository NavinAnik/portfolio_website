"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SkillCardProps {
  category: string;
  items: string[];
  icon: LucideIcon;
  gradient: string;
}

export default function SkillCard({ category, items, icon: Icon, gradient }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${gradient}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-serif text-lg font-normal">{category}</h3>
      </div>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={staggerContainer(0.03, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item) => (
          <motion.div key={item} variants={fadeInUp}>
            <Badge
              variant="secondary"
              className="px-3 py-1.5 text-xs font-mono cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {item}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
