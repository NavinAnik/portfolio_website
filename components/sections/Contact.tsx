"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  BookOpen,
  BarChart3,
  PenLine,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { SOCIAL_LINKS, GOOGLE_SCHOLAR_URL } from "@/lib/constants";

const CONTACT_EMAIL = "smnavinnayeranik@gmail.com";
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgonlprz";

const contactLinks = [
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/8801897913330", icon: MessageCircle },
  { label: "LinkedIn", href: SOCIAL_LINKS[0].href, icon: Linkedin },
  { label: "GitHub", href: SOCIAL_LINKS[1].href, icon: Github },
  { label: "Medium", href: SOCIAL_LINKS[2].href, icon: PenLine },
  { label: "TDS", href: SOCIAL_LINKS[3].href, icon: BarChart3 },
  { label: "Scholar", href: GOOGLE_SCHOLAR_URL, icon: BookOpen },
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
      className="py-20 md:py-28 px-6 bg-muted/50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="contact-heading"
          label="07 — Contact"
          title="Get In Touch"
          subtitle="Interested in collaboration, research, or opportunities? Let's connect."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-16"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Social links */}
          <motion.div variants={fadeInLeft}>
            <h3 className="font-serif text-xl font-normal mb-6">
              Reach out directly
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary/30"
                  aria-label={label}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeInRight}>
            <h3 className="font-serif text-xl font-normal mb-6">
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder:text-muted-foreground"
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
                  rows={5}
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                variant="glow"
                className="w-full sm:w-auto"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please email me directly at {CONTACT_EMAIL}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
