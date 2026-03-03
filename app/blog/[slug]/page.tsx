import Link from "next/link";
import { notFound } from "next/navigation";

const placeholderPosts: Record<
  string,
  { title: string; date: string; excerpt: string; content: string }
> = {
  "self-supervised-overview": {
    title: "Self-Supervised Learning: A Short Overview",
    date: "2024-01-15",
    excerpt:
      "Notes on contrastive and masked self-supervised methods and when they work best.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
  },
  "pytorch-sagemaker": {
    title: "Deploying PyTorch Models on SageMaker",
    date: "2024-02-01",
    excerpt:
      "Practical steps for containerizing and serving PyTorch models in production.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
  },
  "peft-notes": {
    title: "Parameter-Efficient Fine-Tuning (PEFT)",
    date: "2024-03-10",
    excerpt:
      "LoRA, adapters, and other efficient ways to adapt large language models.",
    content:
      "This is a placeholder post. Replace with MDX or Markdown content when you add your blog pipeline.",
  },
};

interface BlogPostProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostProps) {
  const { slug } = params;
  const post = placeholderPosts[slug];
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Your Name`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = params;
  const post = placeholderPosts[slug];
  if (!post) notFound();

  return (
    <article className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-[var(--color-accent)] font-medium hover:underline mb-8 inline-block"
      >
        ← Back to blog
      </Link>
      <h1 className="font-serif text-4xl font-semibold text-slate-800 mb-2">
        {post.title}
      </h1>
      <p className="text-slate-500 text-sm mb-8">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
