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
  { href: "/#about", label: "Profile" },
  { href: "/#research", label: "Research" },
  { href: "/#projects", label: "Applied" },
  { href: "/#personal", label: "Personal" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <motion.div
        className="mx-auto max-w-[var(--content-max-width)] px-6 py-10"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-4"
        >
          {/* Brand + status */}
          <div className="text-center md:text-left">
            <p className="font-serif text-base font-medium tracking-tight">
              S. M. Navin Nayer Anik
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              ML research · perception systems · Dhaka, BD
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-8 border-t border-border pt-6 text-center font-mono text-[11px] text-muted-foreground"
        >
          © {currentYear} — built with Next.js · deployed on the web
        </motion.p>
      </motion.div>
    </footer>
  );
}
