"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  MediumIcon,
  ChartIcon,
  ScholarIcon,
} from "@/components/ui/SocialIcons";
import { SOCIAL_LINKS, GOOGLE_SCHOLAR_URL } from "@/lib/constants";

const links = [
  { label: "Email", href: "mailto:smnavinnayeranik@gmail.com", Icon: EmailIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS[0].href, Icon: LinkedInIcon },
  { label: "GitHub", href: SOCIAL_LINKS[1].href, Icon: GitHubIcon },
  { label: "Medium", href: SOCIAL_LINKS[2].href, Icon: MediumIcon },
  { label: "Towards Data Science", href: SOCIAL_LINKS[3].href, Icon: ChartIcon },
  { label: "Google Scholar", href: GOOGLE_SCHOLAR_URL, Icon: ScholarIcon },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 border-t bg-surface-muted"
      style={{ borderColor: "var(--color-border)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="contact-heading"
          label="06 — Contact"
          title="Contact"
          subtitle="Get in touch for research collaboration or opportunities."
        />
        <motion.div
          className="flex flex-col md:flex-row gap-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="font-serif text-lg font-normal mb-4" style={{ color: "var(--color-text-strong)" }}>
              Reach out directly
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              {links.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 font-medium transition-all duration-200 rounded-lg px-3 py-2 hover:text-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  style={{ color: "var(--color-text)" }}
                  aria-label={label}
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <h3 className="font-serif text-lg font-normal mb-4" style={{ color: "var(--color-text-strong)" }}>
              Send a message
            </h3>
            <form
              action={
                process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
                "https://formspree.io/f/YOUR_FORM_ID"
              }
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl border bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-strong)" }}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-xl border bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent resize-y placeholder-[var(--color-text-muted)]"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-strong)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-sm hover:bg-accent-dark hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
