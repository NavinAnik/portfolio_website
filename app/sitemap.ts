import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const blogSlugs = [
  "self-supervised-overview",
  "pytorch-sagemaker",
  "peft-notes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
