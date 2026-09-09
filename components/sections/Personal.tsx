"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X, Play } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { photos as staticPhotos, clips, framing, type Photo } from "@/content/personal";

/** Tasteful stand-in shown when an image path 404s (e.g. seeded TODO paths). */
function PlaceholderTile({ label }: { label: string }) {
  return (
    <span className="flex h-full w-full items-center justify-center bg-muted p-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
      {label}
    </span>
  );
}

const SUBHEAD =
  "mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary";

export default function Personal({ igPhotos }: { igPhotos?: Photo[] } = {}) {
  // Live Instagram photos when available; otherwise the curated static set.
  const photos = igPhotos?.length ? igPhotos : staticPhotos;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [errored, setErrored] = useState<Set<number>>(new Set());
  const [posterErrored, setPosterErrored] = useState<Set<number>>(new Set());
  const [activeClips, setActiveClips] = useState<Set<number>>(new Set());

  if (!photos.length && !clips.length) return null;

  const markErrored = (i: number) =>
    setErrored((prev) => new Set(prev).add(i));
  const markPosterErrored = (i: number) =>
    setPosterErrored((prev) => new Set(prev).add(i));
  const activateClip = (i: number) =>
    setActiveClips((prev) => new Set(prev).add(i));

  return (
    <section id="personal" className="px-6 py-20 md:py-28" aria-labelledby="personal-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="personal-heading"
          label="Off the clock"
          readout={`${String(photos.length).padStart(2, "0")} frames`}
          title="Beyond the lab"
          subtitle={framing}
        />

        {/* Photo strip */}
        {photos.length > 0 && (
          <>
            <h3 className={SUBHEAD}>[ Frames ]</h3>
            <motion.ul
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {photos.map((photo, i) => (
                <motion.li key={i} variants={fadeInUp}>
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    aria-label={`View photo: ${photo.alt}`}
                    className="group relative block aspect-square w-full overflow-hidden rounded-sm border border-border transition-colors hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {errored.has(i) ? (
                      <PlaceholderTile label={photo.alt} />
                    ) : (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        onError={() => markErrored(i)}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}

        {/* Clips */}
        {clips.length > 0 && (
          <div className="mt-12">
            <h3 className={SUBHEAD}>[ Motion ]</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {clips.map((clip, i) => (
                <figure
                  key={i}
                  className="relative overflow-hidden rounded-sm border border-border bg-card"
                >
                  <div className="relative aspect-video">
                    {activeClips.has(i) ? (
                      clip.src ? (
                        <video
                          src={clip.src}
                          poster={posterErrored.has(i) ? undefined : clip.poster}
                          controls
                          autoPlay
                          preload="none"
                          className="h-full w-full object-cover"
                        />
                      ) : clip.embedUrl ? (
                        <iframe
                          src={clip.embedUrl}
                          title={clip.caption ?? "Clip"}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      ) : (
                        <PlaceholderTile label="TODO: add src or embedUrl" />
                      )
                    ) : (
                      <button
                        type="button"
                        onClick={() => activateClip(i)}
                        aria-label={`Play clip: ${clip.caption ?? "clip"}`}
                        className="group absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {posterErrored.has(i) ? (
                          <PlaceholderTile label={clip.caption ?? "clip"} />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={clip.poster}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                            onError={() => markPosterErrored(i)}
                          />
                        )}
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-background/80 text-primary backdrop-blur-sm transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5" />
                        </span>
                      </button>
                    )}
                  </div>
                  {clip.caption && (
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                      {clip.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox — Radix Dialog gives focus-trap + Esc for free. */}
      <Dialog.Root open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
            <Dialog.Title asChild>
              <VisuallyHidden.Root>
                {lightbox !== null ? photos[lightbox]?.alt : "Photo"}
              </VisuallyHidden.Root>
            </Dialog.Title>
            {lightbox !== null && photos[lightbox] && (
              <figure className="flex flex-col items-center">
                {errored.has(lightbox) ? (
                  <div className="flex aspect-[3/2] w-full items-center justify-center rounded-sm border border-border bg-muted">
                    <PlaceholderTile label={photos[lightbox].alt} />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photos[lightbox].src}
                    alt={photos[lightbox].alt}
                    className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
                    onError={() => markErrored(lightbox)}
                  />
                )}
                {photos[lightbox].caption && (
                  <figcaption className="mt-3 text-center text-sm text-white/80">
                    {photos[lightbox].caption}
                  </figcaption>
                )}
              </figure>
            )}
            <Dialog.Close
              className="absolute -top-10 right-0 flex h-9 w-9 items-center justify-center rounded-sm border border-white/30 text-white/90 transition-colors hover:border-white hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
