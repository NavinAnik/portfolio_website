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
    "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]";
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
    outline:
      "border-2 border-slate-300 text-slate-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
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
