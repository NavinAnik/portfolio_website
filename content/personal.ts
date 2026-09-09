// "Off the clock" — curated photography + a bike clip. Add an item by appending
// to the array — no JSX. Keep photos to ~6–8 and clips to 1–2 so the section
// stays an understated grace note.
//
// TODO(content):
//   - framing: the one-line framing sentence.
//   - photos: put real images under /public/images/personal/ and list them here
//     with alt text.
//   - clips: a poster image + either a self-hosted `src` OR an `embedUrl`
//     (YouTube/Vimeo). The clip is click-to-load, so it never blocks page load.

export interface Photo {
  /** Path under /public, e.g. "/images/personal/frame-01.webp". */
  src: string;
  /** Required alt text for accessibility. */
  alt: string;
  caption?: string;
}

export interface Clip {
  /** Poster image path shown until the viewer clicks play. */
  poster: string;
  /** Self-hosted video file path under /public (used if set). */
  src?: string;
  /** OR an embed URL (YouTube/Vimeo). Used when `src` is absent. */
  embedUrl?: string;
  caption?: string;
}

export const framing =
  "The same attention that chases signal in noisy data, off the clock — pointed at moonlight, wet sand, and empty roads after dark.";

export const photos: Photo[] = [
  { src: "/images/personal/frame-01.webp", alt: "Silhouette on a riverbank at night, standing under a full moon" },
  { src: "/images/personal/frame-02.webp", alt: "Motorcycle helmet resting on a cafe table beside a cup of tea" },
  { src: "/images/personal/frame-03.webp", alt: "A tree-lined checkered footpath at night, lit by a streetlight" },
  { src: "/images/personal/frame-04.webp", alt: "Aerial view of the Banani skyline in Dhaka at dusk" },
  { src: "/images/personal/frame-05.webp", alt: "Loose wires crossing an empty road under overcast sky" },
  { src: "/images/personal/frame-06.webp", alt: "Dramatic sunset over a Dhaka street corner" },
  { src: "/images/personal/frame-07.webp", alt: "A dual-monitor desk setup at night with warm ambient lighting" },
  { src: "/images/personal/frame-08.webp", alt: "Silhouette standing on a wet beach at sunset, reflected in the sand" },
];

export const clips: Clip[] = [
  {
    poster: "https://img.youtube.com/vi/0hJsvW_XBoo/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/0hJsvW_XBoo",
  },
  {
    poster: "https://img.youtube.com/vi/1QjecDKXH-M/hqdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/1QjecDKXH-M",
  },
];
