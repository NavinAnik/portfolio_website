import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/providers/MotionProvider";

const headingFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "S. M. Navin Nayer Anik | Associate Software Engineer | AI & ML",
  description:
    "Associate Software Engineer II at Cefalo. ML solutions for Aqua Robotics—fish farming automation, computer vision, predictive maintenance. Former BRACU DUBURI Sub-Team Lead. Thesis: Optimal Transport GAN for medical image augmentation.",
  openGraph: {
    title: "S. M. Navin Nayer Anik | Associate Software Engineer | AI & ML",
    description:
      "Associate Software Engineer II at Cefalo. ML for Aqua Robotics, computer vision, and underwater automation. Former BRACU DUBURI Sub-Team Lead.",
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
        <MotionProvider>
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
        </MotionProvider>
      </body>
    </html>
  );
}
