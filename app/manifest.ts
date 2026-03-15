import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S. M. Navin Nayer Anik — AI/ML Engineer",
    short_name: "Navin Anik",
    description:
      "Portfolio of S. M. Navin Nayer Anik — Associate Software Engineer II, AI/ML at Cefalo. Machine learning, computer vision, and generative AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d3b66",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
