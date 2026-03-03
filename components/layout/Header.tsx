"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav
        className="max-w-content mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="#"
          className="font-serif text-xl font-semibold text-slate-800 hover:text-[var(--color-accent)] transition-colors"
        >
          Your Name
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-slate-600 hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-slate-700"
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
        className={`md:hidden border-t border-slate-200 ${mobileOpen ? "block" : "hidden"}`}
      >
        <ul className="max-w-content mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-slate-600 hover:text-[var(--color-accent)] font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
