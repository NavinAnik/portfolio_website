import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-content mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[var(--color-accent)] text-sm transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[var(--color-accent)] text-sm transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[var(--color-accent)] text-sm transition-colors"
            >
              Google Scholar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
