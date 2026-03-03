import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Your Name | ML Engineer & AI Researcher",
  description:
    "Machine Learning Engineer at an MNC. Research interests in AI, Deep Learning, and Self-Supervised Learning. PhD aspirant.",
  openGraph: {
    title: "Your Name | ML Engineer & AI Researcher",
    description:
      "Machine Learning Engineer at an MNC. Research interests in AI, Deep Learning, and Self-Supervised Learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
