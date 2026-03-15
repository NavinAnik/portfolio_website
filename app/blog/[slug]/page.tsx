import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const placeholderPosts: Record<
  string,
  { title: string; date: string; excerpt: string; content: string; image: string }
> = {
  "self-supervised-overview": {
    title: "Self-Supervised Learning: A Short Overview",
    date: "2024-01-15",
    excerpt:
      "Notes on contrastive and masked self-supervised methods and when they work best.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
    image: "https://picsum.photos/seed/ssl-overview/800/400",
  },
  "pytorch-sagemaker": {
    title: "Deploying PyTorch Models on SageMaker",
    date: "2024-02-01",
    excerpt:
      "Practical steps for containerizing and serving PyTorch models in production.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
    image: "https://picsum.photos/seed/pytorch-sagemaker/800/400",
  },
  "peft-notes": {
    title: "Parameter-Efficient Fine-Tuning (PEFT)",
    date: "2024-03-10",
    excerpt:
      "LoRA, adapters, and other efficient ways to adapt large language models.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
    image: "https://picsum.photos/seed/peft-notes/800/400",
  },
};

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | S. M. Navin Nayer Anik`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) notFound();

  return (
    <article className="max-w-content mx-auto px-6 py-20 md:py-28">
      <Link
        href="/blog"
        className="text-accent font-medium hover:underline mb-8 inline-block transition-opacity hover:opacity-80"
      >
        ← Back to blog
      </Link>
      <h1 className="font-serif text-4xl font-normal tracking-heading-tight mb-2" style={{ color: "var(--color-text-strong)" }}>
        {post.title}
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-text-muted)" }}>
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div
        className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border mb-10"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface-muted)" }}
      >
        <Image
          src={post.image}
          alt={`Illustration for blog post: ${post.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>
      <div className="prose-content max-w-none" style={{ color: "var(--color-text)" }}>
        <p className="leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
