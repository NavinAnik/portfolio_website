import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import BackToTop from "@/components/ui/BackToTop";
import { SITE_URL, SOCIAL_LINKS, GOOGLE_SCHOLAR_URL } from "@/lib/constants";

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

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
});

const FULL_NAME = "S. M. Navin Nayer Anik";
const TITLE = `${FULL_NAME} | Software Engineer I, AI/ML`;
const DESCRIPTION =
  "Software Engineer I, AI/ML at Cefalo. Building production ML systems for BioDrone (aerial image analysis), Aqua Robotics (underwater computer vision), and generative AI pipelines. Former BRACU DUBURI Sub-Team Lead. Research focus: Optimal Transport GANs for medical image augmentation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "machine learning",
    "deep learning",
    "computer vision",
    "AI engineer",
    "PyTorch",
    "TensorFlow",
    "GANs",
    "optimal transport",
    "medical image analysis",
    "MLOps",
    "AWS SageMaker",
    "distributed training",
    "Navin Nayer Anik",
    "BRAC University",
    "Cefalo",
    "BioDrone",
    "Aqua Robotics",
    "underwater autonomous vehicle",
    "BRACU DUBURI",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: FULL_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/profile.png",
        width: 400,
        height: 400,
        alt: FULL_NAME,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/profile.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: FULL_NAME,
      description: DESCRIPTION,
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: FULL_NAME,
      url: SITE_URL,
      jobTitle: "Software Engineer I, AI/ML",
      worksFor: {
        "@type": "Organization",
        name: "Cefalo",
        url: "https://www.cefalo.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "BRAC University",
        url: "https://www.bracu.ac.bd",
      },
      knowsAbout: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Generative Adversarial Networks",
        "Optimal Transport Theory",
        "Medical Image Analysis",
        "Transfer Learning",
        "PyTorch",
        "TensorFlow",
        "AWS SageMaker",
        "Distributed Training",
        "MLOps",
      ],
      sameAs: [
        SOCIAL_LINKS.find((l) => l.label === "LinkedIn")?.href,
        SOCIAL_LINKS.find((l) => l.label === "GitHub")?.href,
        SOCIAL_LINKS.find((l) => l.label === "Medium")?.href,
        GOOGLE_SCHOLAR_URL,
      ].filter(Boolean),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${codeFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <MotionProvider>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <BackToTop />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
