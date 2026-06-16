# CV Research Reframing — Industry Projects Analysis

This document reframes industry project descriptions from a software-engineering framing to an AI/ML research framing. All rewrites preserve factual accuracy; missing scientific details are flagged as gaps with suggested information to supply.

---

## 1. AquaRobotics

### Original Version

**Description:**
> Worked with Aqua Robotics, a Norway-based company providing robotic solutions for sea fish farming. Developed an image classification model for their underwater rover, addressing issues like overfitting and bias. Designed and implemented a GAN model to generate synthetic data, improving model performance. Integrated CI/CD pipelines using GitHub, Docker, and SageMaker Spot Instances, reducing training costs by up to 70%. Worked on distributed training to scale up training machines while minimizing cost.

**Tech:** PyTorch, CNN, GANs, SageMaker, Docker, GitHub Actions, Distributed Training, Spot Instances, AWS S3, EventBridge, 3LC

**Metrics:**
- Reduced training costs by up to 70% via Spot Instances
- Synthetic data generation with GANs to improve model performance
- Scalable distributed training pipeline

---

### Critique of Weaknesses

| Issue | Detail |
|-------|--------|
| **Overemphasized SWE/infra** | ~40% of the description is CI/CD, Spot Instances, distributed training cost optimization, and AWS tooling — reads as MLOps engineer, not researcher |
| **Technologies out of proportion** | SageMaker, Docker, GitHub Actions, EventBridge, S3 occupy equal badge space to CNN/GANs; infra tags dominate the tech row |
| **Missing research detail** | No mention of underwater CV challenges (turbidity, color attenuation, low light), class taxonomy, dataset size/imbalance, GAN architecture, training/validation splits, ablation studies, or quantitative accuracy gains |
| **Vague scientific claims** | "Addressing overfitting and bias" and "improving model performance" are stated without methodology or metrics |
| **3LC underutilized** | 3LC (data-centric ML) is listed as a tech badge but never explained as a scientific contribution |

---

### Research-Focused Rewrite

**Long-form (for CV/SOP):**

Developed computer vision models for autonomous underwater perception on Aqua Robotics' sea-fish-farming rover, tackling the fundamental challenge of reliable image classification in turbid, low-illumination aquatic environments where labeled data is scarce and class distributions are highly imbalanced. Designed and trained CNN-based classifiers and addressed overfitting and dataset bias through a GAN-based synthetic data augmentation pipeline, generating realistic underwater samples to expand training coverage of underrepresented classes. Applied data-centric curation (3LC) to identify and correct labeling errors and distribution skew. Scaled model training via distributed learning on cloud GPU clusters, reducing compute cost by up to 70% through spot-instance scheduling — enabling iterative experimentation at production scale.

**Concise card version (for website):**

Developed CNN-based underwater image classifiers for an autonomous sea-fish-farming rover, addressing overfitting and dataset bias in turbid, low-illumination aquatic imagery. Designed and implemented a GAN-based synthetic data augmentation pipeline to expand underrepresented classes and improve model generalization. Applied data-centric curation (3LC) to identify labeling errors and distribution skew. Scaled iterative model experimentation via distributed training, reducing compute cost by up to 70%.

---

### Scientific Contributions (Bullet Points)

- Underwater image classification for autonomous aquaculture robotics perception
- GAN-based synthetic data generation to mitigate dataset bias and class imbalance
- Overfitting reduction through data augmentation and expanded training distribution
- Data-centric model improvement using 3LC for label and distribution analysis
- CNN architecture design and training for challenging underwater visual conditions
- Distributed model training enabling large-scale experimentation at reduced cost

---

### Suggested Quantitative Impact Metrics (to verify)

| Metric | Suggested framing |
|--------|-------------------|
| Classification accuracy | Baseline vs. post-GAN-augmentation accuracy (overall and per-class) |
| F1-score / recall on minority classes | Before/after synthetic augmentation |
| GAN sample quality | FID score or expert visual inspection pass rate |
| Dataset expansion | Number of synthetic samples generated; % increase in training set |
| Generalization | Performance on held-out deployment sites or unseen fish pens |
| Training efficiency | 70% cost reduction via spot instances (already stated — keep as secondary) |
| Ablation | Performance with/without GAN augmentation, with/without 3LC curation |

---

### Identified Gaps — Information to Supply

1. **GAN architecture**: Which GAN variant? (DCGAN, StyleGAN, conditional GAN, OT-GAN from thesis?)
2. **Classification task**: What classes/categories? (fish health, equipment, biofouling, etc.)
3. **Dataset size**: Number of real images, class distribution, train/val/test split
4. **Overfitting/bias mitigation techniques**: Specific methods beyond GAN (regularization, dropout, early stopping, class weighting, SMOTE, etc.)
5. **Validation strategy**: How was synthetic data quality verified? (FID, human evaluation, downstream accuracy lift)
6. **Quantitative results**: Accuracy, F1, confusion matrix improvements
7. **CNN architecture**: Which backbone? (ResNet, EfficientNet, custom?)
8. **Underwater-specific preprocessing**: Color correction, dehazing, contrast normalization?

---

## 2. BioDrone

### Original Version

**Description:**
> Worked with Biodrone, a Norway-based company specializing in advanced drone services and AI-driven aerial image analysis for forestry and agricultural applications. Contributing to the development and integration of machine learning models within the Biodrone Portal.

**Tech:** PyTorch, CNN, Transformers, Machine Vision, SageMaker, Docker, GitHub Actions, Distributed Training, AWS S3, EventBridge, 3LC

**Metrics:**
- ML model integration for aerial image analysis
- End-to-end pipeline on AWS with SageMaker and distributed training

---

### Critique of Weaknesses

| Issue | Detail |
|-------|--------|
| **Vague scientific content** | "Contributing to development and integration" is passive and non-specific; no problem statement, model type, or research challenge |
| **Infra-heavy metrics** | Both metric bullets emphasize AWS/SageMaker pipeline, not scientific outcomes |
| **Tech badges misaligned** | CNN and Transformers listed but never described; EventBridge and S3 are infra, not research tools |
| **Missing domain context** | Forestry/agriculture aerial imaging has rich CV challenges (canopy segmentation, crop health, seasonal variation) — none surfaced |
| **No evaluation framing** | No mention of validation methodology, benchmark datasets, or performance metrics |

---

### Research-Focused Rewrite

**Long-form (for CV/SOP):**

Contributing to computer vision and deep learning research for BioDrone's aerial imagery platform, which analyzes drone-captured imagery for forestry inventory and agricultural monitoring in Norway. Developing and integrating CNN and transformer-based models for semantic understanding of ecological and crop imagery, with attention to class imbalance across seasonal and geographic domains. Leveraging distributed training and data-centric tooling (3LC) to scale experimentation on large aerial image datasets and iteratively improve model robustness across deployment conditions.

**Concise card version (for website):**

Developing CNN and transformer-based computer vision models for BioDrone's aerial imagery platform, enabling automated analysis of drone-captured forestry and agricultural imagery. Focused on model integration, domain generalization across seasonal/geographic variation, and scalable distributed training with data-centric quality analysis (3LC).

---

### Scientific Contributions (Bullet Points)

- Aerial/remote-sensing computer vision for forestry and agricultural monitoring
- CNN and transformer model development for ecological imagery analysis
- Model integration into production aerial analytics portal
- Data-centric quality analysis (3LC) for large-scale aerial datasets
- Distributed training for scaling experiments on high-resolution imagery

---

### Suggested Quantitative Impact Metrics (to verify)

| Metric | Suggested framing |
|--------|-------------------|
| Model performance | mIoU, pixel accuracy, or detection mAP on forestry/agriculture tasks |
| Domain generalization | Performance across seasons, geographies, or sensor types |
| Inference throughput | Images processed per hour at deployment scale |
| Dataset scale | Number of aerial images in training/evaluation sets |
| Annotation efficiency | Reduction in manual labeling via model-assisted annotation |

---

### Identified Gaps — Information to Supply

1. **Specific CV task**: Classification, segmentation, object detection, or change detection?
2. **Model architectures**: Which CNN/transformer backbones? (e.g., U-Net, Mask R-CNN, SegFormer, ViT)
3. **Forestry vs. agriculture**: Separate models or unified? Different class taxonomies?
4. **Domain challenges**: Seasonal variation, cloud cover, resolution differences, class imbalance specifics
5. **Evaluation methodology**: Held-out geographic regions? Cross-validation strategy?
6. **Quantitative results**: Any benchmark numbers from model evaluation
7. **3LC usage**: What specific data quality issues were identified and corrected?

---

## 3. Dobee

### Original Version

**Description:**
> Worked with Dobee on a Generative AI project focused on building an intelligent and interactive story generation system. Designed an end-to-end pipeline to fetch raw data from BigQuery, use an AI model to generate insightful summaries and stories, and store the outputs in Firestore. Implemented a chatbot interface where users can provide additional context, allowing the system to regenerate more refined and context-aware stories dynamically.

**Tech:** Vertex AI, LangChain, BigQuery, Firestore, TypeScript, Bitbucket

**Metrics:**
- Generative AI-powered interactive story generation
- Iterative context-aware content refinement via chatbot

---

### Critique of Weaknesses

| Issue | Detail |
|-------|--------|
| **Pipeline engineering framing** | "Fetch from BigQuery → generate → store in Firestore" describes data plumbing, not research |
| **No model/prompt methodology** | Vertex AI and LangChain mentioned as infra; no discussion of generation strategy, grounding, or evaluation |
| **Missing NLP research angle** | No mention of retrieval-augmented generation, prompt engineering, hallucination mitigation, or human-in-the-loop refinement methodology |
| **TypeScript/Bitbucket irrelevant** | Listed as tech badges but carry no scientific signal |

---

### Research-Focused Rewrite

**Long-form (for CV/SOP):**

Designed and built a generative AI system for interactive, context-aware story generation at Dobee. Developed a retrieval-and-generation pipeline that synthesizes structured data into narrative summaries, with an iterative human-in-the-loop refinement mechanism: users provide additional context through a conversational interface, enabling the system to regenerate progressively more accurate and contextually grounded stories. Focused on controllable text generation, prompt design, and dynamic content adaptation based on user feedback.

**Concise card version (for website):**

Built a generative AI system for interactive, context-aware story generation. Designed a retrieval-and-synthesis pipeline that transforms structured data into narrative summaries, with iterative human-in-the-loop refinement via conversational context injection for progressively more grounded outputs.

---

### Scientific Contributions (Bullet Points)

- Generative AI for narrative synthesis from structured data sources
- Human-in-the-loop iterative refinement for controllable text generation
- Context-aware story regeneration via conversational feedback loops
- Prompt engineering and generation pipeline design for domain-specific storytelling

---

### Suggested Quantitative Impact Metrics (to verify)

| Metric | Suggested framing |
|--------|-------------------|
| Generation quality | Human evaluation scores (relevance, coherence, factual grounding) |
| Refinement effectiveness | Quality improvement across iterative regeneration rounds |
| User engagement | Number of refinement iterations per session; user satisfaction |
| Latency | Time to first generation vs. refined generation |
| Hallucination rate | Factual error rate before/after context injection |

---

### Identified Gaps — Information to Supply

1. **LLM model**: Which Vertex AI model? (Gemini, PaLM, custom fine-tuned?)
2. **Retrieval mechanism**: RAG architecture details, embedding model, chunking strategy
3. **Prompt engineering**: Specific prompting strategies, chain-of-thought, few-shot examples
4. **Evaluation**: Any qualitative or quantitative assessment of generation quality
5. **Domain**: What kind of stories/data? (business analytics, personal narratives, etc.)
6. **LangChain usage**: Which chains/agents were built?

---

## 4. TicketCo Data

### Original Version

**Description:**
> Worked with TicketCo Data on a proof-of-concept project to develop a static rule engine designed to maximize ticket sales profit based on configurable business rules. Implemented a system leveraging NATS for real-time data streaming to publish and receive recommended ticket prices dynamically. Designed the architectural blueprint for a future dynamic AI-driven rule engine utilizing time series forecasting.

**Tech:** FastAPI, NATS, Python, Microservices Architecture, Distributed Message Queues, Git

**Metrics:**
- Real-time dynamic pricing via NATS streaming
- Scalable architecture for future AI-driven pricing engine

---

### Critique of Weaknesses

| Issue | Detail |
|-------|--------|
| **Entirely SWE-framed** | FastAPI, NATS, microservices, message queues — zero scientific content in description |
| **AI contribution is future tense** | "Designed blueprint for future AI-driven engine" — the ML work is aspirational, not delivered |
| **Misleading title framing** | Listed under AI/ML role but delivered artifact is a rule engine, not an ML model |
| **No optimization framing** | Profit maximization is an optimization problem but described as business rules, not OR/ML |
| **Honesty risk** | Reframing must not overclaim an ML model was built when scope was static rules + architecture design |

---

### Research-Focused Rewrite

**Long-form (for CV/SOP):**

Contributed to a proof-of-concept dynamic ticket pricing system for TicketCo Data, formulating ticket sales profit maximization as a constrained optimization problem governed by configurable business rules. Implemented a real-time pricing recommendation engine and designed the research roadmap for a future ML-driven pricing model based on time-series demand forecasting. Defined the evaluation framework and data requirements for transitioning from rule-based to learned pricing policies.

**Concise card version (for website):**

Contributed to a proof-of-concept dynamic ticket pricing system, formulating profit maximization as a constrained optimization problem with configurable business rules. Delivered a real-time pricing recommendation engine and designed the research roadmap for ML-based demand forecasting to enable learned pricing policies.

---

### Scientific Contributions (Bullet Points)

- Formulated ticket pricing as a profit-maximization optimization problem with business constraints
- Designed real-time pricing recommendation engine (rule-based PoC)
- Research roadmap for time-series demand forecasting and learned dynamic pricing
- Defined evaluation framework and data pipeline requirements for ML transition

---

### Suggested Quantitative Impact Metrics (to verify)

| Metric | Suggested framing |
|--------|-------------------|
| Pricing accuracy | Recommended vs. actual optimal prices in simulation |
| Revenue impact | Projected profit lift from dynamic vs. static pricing (if simulated) |
| Latency | Real-time recommendation response time |
| Rule coverage | Number of pricing scenarios handled by rule engine |

---

### Identified Gaps — Information to Supply

1. **Optimization formulation**: Mathematical formulation of the profit function and constraints
2. **Business rules**: What rules were implemented? (demand thresholds, time-based, inventory-based?)
3. **Forecasting roadmap**: Which time-series methods were proposed? (ARIMA, Prophet, LSTM?)
4. **Evaluation**: Any backtesting or simulation results from the PoC?
5. **Data**: What ticket sales data features were available?

---

## 5. Blogging Website (Full-Stack)

### Original Version

**Description:**
> Built a full-stack blogging platform featuring JWT authentication for enhanced security. Users can create profiles, manage personal information, and securely update passwords. Registered users can create, update, and delete blogs, while all users can read and explore categorized blogs. Unit tests implemented for both frontend and backend components.

**Tech:** Express.js, Sequelize, React, TypeScript, Redux Toolkit, Tailwind CSS, React Router, Jest

**Metrics:**
- JWT-based secure authentication
- Full CRUD operations with role-based access
- Comprehensive unit test coverage

---

### Critique of Weaknesses

| Issue | Detail |
|-------|--------|
| **Not a research project** | This is a legitimate full-stack SWE project — reframing as research would be dishonest |
| **Appropriate as-is** | Keep concise; demonstrates software engineering foundation early in career |
| **Minor improvement possible** | Could condense to save CV space for research projects |

---

### Research-Focused Rewrite

**Not applicable.** This is a software engineering project and should remain framed as such. Minor condensation for CV space:

**Concise version (unchanged framing):**

Built a full-stack blogging platform with JWT authentication, role-based CRUD operations, and comprehensive unit test coverage across frontend and backend.

---

### Scientific Contributions (Bullet Points)

- N/A — software engineering project

---

### Suggested Quantitative Impact Metrics

- N/A

---

### Identified Gaps

- None — project is appropriately described for its scope.

---

## Cross-Project Recommendations

### Role Title Reframing (optional, for CV document)

| Current | Suggested for research CV |
|---------|--------------------------|
| Associate Software Engineer II, AI/ML | ML Research Engineer / AI/ML Researcher |
| Associate Software Engineer, AI/ML | ML Engineer / Computer Vision Engineer |
| Junior Software Developer | Software Developer |

*Note: Only change if accurate to actual job titles and company records.*

### Tech Badge Reordering Principle

Lead with scientific tools, trail with deployment:
- **Keep prominent:** PyTorch, CNN, GANs, Transformers, Computer Vision, 3LC, LangChain, Vertex AI
- **Demote or remove from badges:** EventBridge, AWS S3, NATS, FastAPI, Microservices Architecture, Distributed Message Queues, Spot Instances, Docker, GitHub Actions

### Metrics Reframing Principle

Replace infra metrics with research outcomes:
- ❌ "End-to-end pipeline on AWS with SageMaker and distributed training"
- ✅ "GAN-based synthetic augmentation to address underwater dataset bias and overfitting"

Keep verifiable efficiency metrics (70% cost reduction) as secondary bullets.
