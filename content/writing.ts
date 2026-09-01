// Selected external writing (Medium / Towards Data Science). Add a piece by
// appending an object — no JSX.
//
// TODO(content): replace the seeded placeholders below with real articles.

export interface Article {
  title: string;
  excerpt: string;
  /** Source badge: "Medium" or "TDS" (Towards Data Science). */
  platform: "Medium" | "TDS";
  /** Optional ISO date, e.g. "2025-11-20". */
  date?: string;
  url: string;
  /** Optional cover image path under /public, e.g. "/images/writing/foo.webp". */
  cover?: string;
}

export const writing: Article[] = [
  {
    title: "Scaling Batch Inference with PySpark and GPUs",
    excerpt:
      "How to distribute GPU-accelerated model inference across a Spark cluster to score large datasets efficiently.",
    platform: "Medium",
    url: "https://medium.com/@smnavinnayeranik/scaling-batch-inference-with-pyspark-and-gpus-16b60375d436",
  },
  {
    title: "Deploy Your ML Model to AWS SageMaker: A Complete Guide from Training to CI/CD",
    excerpt:
      "An end-to-end walkthrough of taking a model from training to a production SageMaker endpoint with an automated CI/CD pipeline.",
    platform: "Medium",
    url: "https://medium.com/@smnavinnayeranik/deploy-your-ml-model-to-aws-sagemaker-a-complete-guide-from-training-to-ci-cd-fb171cc9df2d",
  },
  {
    title: "Building a Production-Grade Multi-Node Training Pipeline with PyTorch DDP",
    excerpt:
      "A practical guide to scaling model training across multiple nodes with PyTorch DistributedDataParallel, from setup to production.",
    platform: "TDS",
    url: "https://towardsdatascience.com/building-a-production-grade-multi-node-training-pipeline-with-pytorch-ddp/",
  },
];
