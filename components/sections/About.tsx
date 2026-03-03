"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 border-t border-slate-100"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto">
        <SectionTitle
          id="about-heading"
          title="About Me"
          subtitle="Professional background, research interests, and PhD direction."
        />
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                Professional background
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I am a Machine Learning Engineer at a multinational company,
                where I design and ship AI/ML systems that serve millions of
                users. My work spans model development, MLOps, and
                cross-functional collaboration with research and product teams.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                Current role & impact
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I lead and contribute to production ML pipelines—from
                experimentation to deployment on AWS/SageMaker—with a focus on
                reliability, scalability, and measurable business impact.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                Research interests
              </h3>
              <p className="text-slate-600 leading-relaxed mb-2">
                AI, Machine Learning, Deep Learning, Self-Supervised Learning,
                efficient fine-tuning, and representation learning. I am
                particularly interested in methods that scale with limited
                labeled data.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                PhD goals
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I am planning to pursue a PhD to deepen my contributions to
                fundamental ML research while building on my industry experience
                in deploying and evaluating models at scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
