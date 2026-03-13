"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const SECTION_IDS = ["about", "research", "projects", "skills", "blog", "contact"] as const;

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#research", label: "Research", id: "research" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#blog", label: "Blog", id: "blog" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const viewportTop = window.scrollY + 150;
      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= viewportTop) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getNavHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b"
      style={{ borderColor: "var(--color-border)" }}
    >
      <nav
        className="max-w-content mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-lg font-normal tracking-heading-tight transition-colors hover:text-accent"
          style={{ color: "var(--color-text-strong)" }}
        >
          Navin Nayer Anik
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, id }) => (
            <li key={href}>
              <Link
                href={getNavHref(href)}
                className={`relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  activeSection === id
                    ? "text-accent"
                    : "hover:text-accent hover:bg-surface-muted"
                }`}
                style={{ color: activeSection === id ? undefined : "var(--color-text-muted)" }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="px-3 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-colors hover:text-accent hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              All Posts
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-md transition-colors hover:bg-surface-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          style={{ color: "var(--color-text)" }}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderColor: "var(--color-border)" }}
      >
        <ul className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={getNavHref(href)}
                className="block px-3 py-2 rounded-md font-medium transition-colors hover:text-accent hover:bg-surface-muted"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md font-medium transition-colors hover:text-accent hover:bg-surface-muted"
              style={{ color: "var(--color-text)" }}
              onClick={() => setMobileOpen(false)}
            >
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
