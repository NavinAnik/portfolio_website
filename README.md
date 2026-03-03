# portfolio_website

ML research portfolio (Next.js, React, Tailwind).

## Images

- **About:** Profile photo uses a placeholder from picsum.photos. To use your own, add an image to `public/images/profile.jpg` and update the `PROFILE_IMAGE` constant in `components/sections/About.tsx` to `/images/profile.jpg` (and add `images: { unoptimized: false }` or keep default; local images work without extra config).
- **Blog:** Post cards and post pages use placeholder images. To use your own, host images in `public/images/blog/` and set each post’s `image` to paths like `/images/blog/self-supervised-overview.jpg`, or keep the current remote placeholders.