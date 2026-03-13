import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t bg-surface-muted"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-content mx-auto px-6 py-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              © {currentYear} S. M. Navin Nayer Anik. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-accent"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div
            className="flex flex-wrap items-center justify-center md:justify-between gap-4 pt-6 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm font-medium transition-colors hover:text-accent"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-sm font-medium transition-colors hover:text-accent"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            <a
              href="#main-content"
              className="text-sm font-medium transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              style={{ color: "var(--color-text-muted)" }}
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
