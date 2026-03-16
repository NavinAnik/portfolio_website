"use client";

import Link from "next/link";
import { Github, Linkedin, PenLine, BookOpen, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, GOOGLE_SCHOLAR_URL } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const socialIcons = [
  { label: "LinkedIn", href: SOCIAL_LINKS[0].href, icon: Linkedin },
  { label: "GitHub", href: SOCIAL_LINKS[1].href, icon: Github },
  { label: "Medium", href: SOCIAL_LINKS[2].href, icon: PenLine },
  { label: "TDS", href: SOCIAL_LINKS[3].href, icon: BarChart3 },
  { label: "Scholar", href: GOOGLE_SCHOLAR_URL, icon: BookOpen },
];

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <motion.div
        className="mx-auto max-w-[var(--content-max-width)] px-6 py-12"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-8">
          {/* Gradient separator */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} S. M. Navin Nayer Anik. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
