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

// TODO(content): the framing line tying photography to the research identity.
export const framing =
  "TODO framing line — e.g. \"I study how models learn to see. Off the clock, I practice seeing myself — light, composition, attention.\"";

export const photos: Photo[] = [
  { src: "/images/personal/frame-01.webp", alt: "TODO: describe photo 1" },
  { src: "/images/personal/frame-02.webp", alt: "TODO: describe photo 2" },
  { src: "/images/personal/frame-03.webp", alt: "TODO: describe photo 3" },
  { src: "/images/personal/frame-04.webp", alt: "TODO: describe photo 4" },
  { src: "/images/personal/frame-05.webp", alt: "TODO: describe photo 5" },
  { src: "/images/personal/frame-06.webp", alt: "TODO: describe photo 6" },
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
