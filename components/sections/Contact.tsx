"use client";

import { useState, type FormEvent } from "react";
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

const CONTACT_EMAIL = "smnavinnayeranik@gmail.com";
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgonlprz";

const contactLinks = [
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, Icon: EmailIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS[0].href, Icon: LinkedInIcon },
  { label: "GitHub", href: SOCIAL_LINKS[1].href, Icon: GitHubIcon },
  { label: "Medium", href: SOCIAL_LINKS[2].href, Icon: MediumIcon },
  { label: "Towards Data Science", href: SOCIAL_LINKS[3].href, Icon: ChartIcon },
  { label: "Google Scholar", href: GOOGLE_SCHOLAR_URL, Icon: ScholarIcon },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (FORMSPREE_ENDPOINT) {
      e.preventDefault();
      setStatus("sending");
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            setStatus("sent");
            form.reset();
          } else {
            setStatus("error");
          }
        })
        .catch(() => setStatus("error"));
      return;
    }

    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${email}`);
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

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
              {contactLinks.map(({ label, href, Icon }) => (
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
              onSubmit={handleSubmit}
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
                disabled={status === "sending"}
                className="w-full sm:w-auto px-6 py-3 bg-accent text-white font-medium rounded-lg shadow-sm hover:bg-accent-dark hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "sent" && (
                <p className="text-sm font-medium text-green-600">
                  {FORMSPREE_ENDPOINT
                    ? "Message sent successfully!"
                    : "Your email client should open with the message. If not, email me directly at " + CONTACT_EMAIL}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please email me directly at {CONTACT_EMAIL}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
