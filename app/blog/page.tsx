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
  title: "Blog & Research Notes | Your Name",
  description: "Writing about ML research, experiments, and learnings.",
};

export default function BlogPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold text-slate-800 mb-2">
        Blog & Research Notes
      </h1>
      <p className="text-slate-600 text-lg mb-12">
        Writing about ML research, experiments, and learnings.
      </p>
      <ul className="space-y-8">
        {placeholderPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="relative w-full aspect-[2/1] bg-slate-100">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1120px"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/"
          className="text-[var(--color-accent)] font-medium hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
