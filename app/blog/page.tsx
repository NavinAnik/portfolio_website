import Image from "next/image";
import Link from "next/link";

const placeholderPosts = [
  {
    title: "Self-Supervised Learning: A Short Overview",
    date: "2024-01-15",
    excerpt:
      "Notes on contrastive and masked self-supervised methods and when they work best.",
    slug: "self-supervised-overview",
    image: "https://picsum.photos/seed/ssl-overview/800/400",
  },
  {
    title: "Deploying PyTorch Models on SageMaker",
    date: "2024-02-01",
    excerpt:
      "Practical steps for containerizing and serving PyTorch models in production.",
    slug: "pytorch-sagemaker",
    image: "https://picsum.photos/seed/pytorch-sagemaker/800/400",
  },
  {
    title: "Parameter-Efficient Fine-Tuning (PEFT)",
    date: "2024-03-10",
    excerpt:
      "LoRA, adapters, and other efficient ways to adapt large language models.",
    slug: "peft-notes",
    image: "https://picsum.photos/seed/peft-notes/800/400",
  },
];

export const metadata = {
  title: "Blog & Research Notes | S. M. Navin Nayer Anik",
  description: "Writing about ML research, experiments, and learnings.",
};

export default function BlogPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-20 md:py-28">
      <p className="text-section-label font-medium uppercase tracking-widest text-accent-muted mb-2">
        Blog
      </p>
      <h1 className="font-serif text-4xl font-normal tracking-heading-tight mb-3" style={{ color: "var(--color-text-strong)" }}>
        Blog & Research Notes
      </h1>
      <p className="text-lg mb-12" style={{ color: "var(--color-text-muted)" }}>
        Writing about ML research, experiments, and learnings.
      </p>
      <ul className="space-y-8">
        {placeholderPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl border bg-white overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="relative w-full aspect-[2/1] overflow-hidden" style={{ backgroundColor: "var(--color-surface-muted)" }}>
                <Image
                  src={post.image}
                  alt={`Illustration for blog post: ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-normal mb-2" style={{ color: "var(--color-text-strong)" }}>
                  {post.title}
                </h2>
                <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p style={{ color: "var(--color-text)" }}>{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/"
          className="text-accent font-medium hover:underline transition-opacity hover:opacity-80"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
