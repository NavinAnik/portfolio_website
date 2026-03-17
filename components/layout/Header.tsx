"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";

const SECTION_IDS = [
  "about",
  "experience",
  "projects",
  "academic-projects",
  "research",
  "skills",
  "contact",
] as const;

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#academic-projects", label: "Academic", id: "academic-projects" },
  { href: "#research", label: "Research", id: "research" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary/70 to-primary"
        style={{ scaleX }}
      />
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border shadow-sm"
            : "bg-background/50 backdrop-blur-md border-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-[var(--content-max-width)] px-6 py-3 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-serif text-lg tracking-tight transition-colors hover:text-primary"
          >
            Navin Nayer Anik
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, id }) => (
              <Link
                key={href}
                href={getNavHref(href)}
                className="relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors rounded-md text-muted-foreground hover:text-foreground"
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    className="absolute inset-x-1 -bottom-[13px] h-[2px] bg-primary rounded-full"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-accent"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-1 mt-8">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={getNavHref(href)}
                      className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
}
