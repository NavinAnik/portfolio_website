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
  FileDown,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { SOCIAL_LINKS, GOOGLE_SCHOLAR_URL, CV_PDF_URL, CV_PDF_FILENAME } from "@/lib/constants";

const CONTACT_EMAIL = "smnavinnayeranik@gmail.com";
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xgonlprz";

const contactLinks = [
  { label: "CV", href: CV_PDF_URL, icon: FileDown, download: CV_PDF_FILENAME },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/8801897913330", icon: MessageCircle },
  { label: "LinkedIn", href: SOCIAL_LINKS[0].href, icon: Linkedin },
  { label: "GitHub", href: SOCIAL_LINKS[1].href, icon: Github },
  { label: "Medium", href: SOCIAL_LINKS[2].href, icon: PenLine },
  { label: "TDS", href: SOCIAL_LINKS[3].href, icon: BarChart3 },
  { label: "Scholar", href: GOOGLE_SCHOLAR_URL, icon: BookOpen },
];

const fieldClasses =
  "w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

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
    <section id="contact" className="px-6 py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[var(--content-max-width)]">
        <SectionTitle
          id="contact-heading"
          label="Contact"
          readout="● open to research collaboration"
          title="Let's talk"
          subtitle="Research collaboration, a hard perception problem, or just to compare notes — send a note or reach me on any channel below."
        />

        <motion.div
          className="grid gap-10 md:grid-cols-2 md:gap-14"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Directory */}
          <motion.div variants={fadeInLeft}>
            <h3 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              [ Channels ]
            </h3>
            <ul className="border-t border-border">
              {contactLinks.map(({ label, href, icon: Icon, download }) => (
                <li key={label}>
                  <a
                    href={href}
                    download={download}
                    target={href.startsWith("mailto:") || download ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") || download ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 border-b border-border py-3 text-sm transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="font-medium">{label}</span>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Message panel */}
          <motion.div variants={fadeInRight}>
            <h3 className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              [ Send a message ]
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-sm border border-border bg-card p-5 md:p-6">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@domain.com"
                  className={fieldClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you working on?"
                  className={`${fieldClasses} resize-y`}
                />
              </div>
              <Button type="submit" disabled={status === "sending"} variant="glow" className="w-full sm:w-auto">
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
                      Sending…
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
                    className="flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent — I&apos;ll reply soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 text-sm font-medium text-destructive"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Couldn&apos;t send. Email me directly at {CONTACT_EMAIL}.
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
