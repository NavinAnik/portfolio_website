# portfolio_website

ML research portfolio (Next.js, React, Tailwind).

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run the production build:**
   ```bash
   npm run start
   ```

## Images

- **About:** Profile photo is at `public/images/profile.png`. If missing, a placeholder from picsum.photos is shown.
- **Blog:** Post cards and post pages use placeholder images. To use your own, host images in `public/images/blog/` and set each post’s `image` to paths like `/images/blog/self-supervised-overview.jpg`, or keep the current remote placeholders.

## Contact Form

The contact form uses [Formspree](https://formspree.io/). To enable it:

1. Create a form at formspree.io and get your form ID.
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```