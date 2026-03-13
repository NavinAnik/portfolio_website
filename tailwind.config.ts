import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-muted": "var(--color-accent-muted)",
        "surface-muted": "var(--color-surface-muted)",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "section-label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      letterSpacing: {
        "heading-tight": "-0.02em",
        "heading-wide": "0.02em",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        "card": "var(--shadow-sm)",
        "card-hover": "var(--shadow-lg)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      maxWidth: {
        content: "var(--content-max-width)",
      },
    },
  },
  plugins: [],
};

export default config;
