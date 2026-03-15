import researchData from "@/content/research.json";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://navinnayeranik.com";

export const GOOGLE_SCHOLAR_URL = researchData.googleScholarUrl;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/s-m-navin-nayer-anik-8011441b1/" },
  { label: "GitHub", href: "https://github.com/NavinAnik" },
  { label: "Medium", href: "https://medium.com/@smnavinnayeranik" },
  { label: "Towards Data Science", href: "https://towardsdatascience.com/@smnavinnayeranik" },
  { label: "Google Scholar", href: GOOGLE_SCHOLAR_URL },
] as const;
