import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  const variants = {
    primary:
      "bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md",
    secondary:
      "bg-surface-muted text-[var(--color-text-strong)] border border-transparent hover:border-[var(--color-border-strong)]",
    outline:
      "border-2 border-[var(--color-border-strong)] text-[var(--color-text)] hover:border-accent hover:text-accent",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
