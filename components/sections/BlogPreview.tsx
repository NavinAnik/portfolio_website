"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const placeholderPosts = [
  {
    title: "Self-Supervised Learning: A Short Overview",
    date: "2024-01-15",
    excerpt:
      "Notes on contrastive and masked self-supervised methods and when they work best.",
    slug: "self-supervised-overview",
  },
  {
    title: "Deploying PyTorch Models on SageMaker",
    date: "2024-02-01",
    excerpt:
      "Practical steps for containerizing and serving PyTorch models in production.",
    slug: "pytorch-sagemaker",
  },
  {
    title: "Parameter-Efficient Fine-Tuning (PEFT)",
    date: "2024-03-10",
    excerpt:
      "LoRA, adapters, and other efficient ways to adapt large language models.",
    slug: "peft-notes",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 px-6 border-t border-slate-200"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="blog-heading"
          title="Blog & Research Notes"
          subtitle="Writing about ML research, experiments, and learnings."
        />
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {placeholderPosts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <h3 className="font-serif text-lg font-semibold text-slate-800 mb-2">
                {post.title}
              </h3>
              <p className="text-slate-500 text-xs mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="text-[var(--color-accent)] font-medium hover:underline"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
