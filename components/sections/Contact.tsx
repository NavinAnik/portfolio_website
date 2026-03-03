"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const links = [
  { label: "Email", href: "mailto:your.email@example.com", icon: "✉" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "in",
  },
  { label: "GitHub", href: "https://github.com", icon: "⌘" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com",
    icon: "📚",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto text-center">
        <SectionTitle
          id="contact-heading"
          title="Contact"
          subtitle="Get in touch for research collaboration or opportunities."
        />
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-slate-700 hover:text-[var(--color-accent)] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 rounded px-2 py-1"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
