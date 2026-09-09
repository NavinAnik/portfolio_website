import type { Photo } from "@/content/personal";

// Live photos from the Instagram API with Instagram Login (graph.instagram.com).
// Requires a Business/Creator account, a Meta app, and a long-lived access token
// in INSTAGRAM_ACCESS_TOKEN. Returns [] when unset or on any error, so the
// Personal section silently falls back to its curated static photos.
//
// Token upkeep: long-lived tokens last ~60 days. Refresh with a periodic call to
// https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=<token>
// (cron or manual) and update the env var. Not automated here — no persistent store.

const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const LIMIT = 8;
const REVALIDATE_SECONDS = 3600; // re-fetch fresh (signed) URLs hourly

interface IGMedia {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  caption?: string;
  permalink: string;
}

/** Pure mapper: IG media -> Photo[]. Keeps images (incl. album covers). */
export function mapMediaToPhotos(data: IGMedia[]): Photo[] {
  return data
    .filter((m) => m.media_type === "IMAGE" || m.media_type === "CAROUSEL_ALBUM")
    .map((m) => ({
      src: m.media_url,
      alt: m.caption?.replace(/\s+/g, " ").trim().slice(0, 120) || "Instagram photo",
      caption: m.caption,
    }));
}

export async function fetchInstagramPhotos(): Promise<Photo[]> {
  if (!TOKEN) return [];
  const fields = "id,media_type,media_url,thumbnail_url,caption,permalink";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${LIMIT}&access_token=${TOKEN}`;
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return [];
    const { data } = (await res.json()) as { data?: IGMedia[] };
    return data ? mapMediaToPhotos(data) : [];
  } catch {
    return [];
  }
}
