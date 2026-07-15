export type PublicationKind = "Conference" | "Journal" | "Preprint";

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  date: string;
  kind: PublicationKind;
  summary: string;
  abstract: string;
  paperUrl?: string;
  selected?: boolean;
  award?: string;
};

export type NewsItem = {
  date: string;
  label: string;
  href?: string;
};

export const site = {
  name: "Xi Wang",
  title: "PhD Student in Computer Science",
  institution: "New York University",
  location: "New York, NY",
  email: "esche.wang@outlook.com",
  adviser: {
    name: "Shengjie Wang",
    href: "https://sheng-jie-wang.github.io/",
    affiliation: "NYU Shanghai and NYU Tandon",
  },
  avatar: "/profile-anime.jpg",
  cv: "/References/resume.pdf",
  social: {
    scholar: "https://scholar.google.com/citations?user=IkSb2tIAAAAJ&hl=en",
    github: "https://github.com/ComDec",
    orcid: "https://orcid.org/0000-0002-2881-6269",
  },
};

export const publications: Publication[] = [
  {
    slug: "2026-06-11",
    title: "Smoothing Dark Areas in Molecular Latent Diffusion",
    authors: "Xi Wang, Jiahan Li, Yuxuan Xia, Yingcheng Wu, Shaoyi Zheng, Shengjie Wang",
    venue: "arXiv",
    year: 2026,
    date: "2026-06-11",
    kind: "Preprint",
    summary:
      "A topology-optimized VAE that creates smoother, more chemically valid latent spaces for 3D molecular diffusion.",
    abstract:
      "Latent diffusion for 3D molecular generation depends on a smooth and navigable latent space, yet reconstruction-trained molecular VAEs can contain dark areas that decode to disconnected or chemically invalid structures. This work introduces TopVAE, a topology-optimized VAE that internalizes structural and chemical validity during training, improving robustness and molecular quality without test-time correction.",
    paperUrl: "https://arxiv.org/abs/2606.13955",
    selected: true,
  },
  {
    slug: "2026-05-14",
    title:
      "RxnBench: A Multimodal Benchmark for Evaluating Large Language Models on Chemical Reaction Understanding from the Scientific Literature",
    authors:
      "Hanzheng Li, Xi Fang, Yixuan Li, Chaozheng Huang, Junjie Wang, Xi Wang, Hongzhe Bai, Bojun Hao, Shenyu Lin, Huiqi Liang, Linfeng Zhang, Guolin Ke",
    venue: "Journal of Chemical Information and Modeling",
    year: 2026,
    date: "2026-05-14",
    kind: "Journal",
    summary:
      "A multimodal benchmark for evaluating how well language models understand chemical reactions in scientific literature.",
    abstract:
      "RxnBench evaluates multimodal language models on chemical-reaction understanding grounded in scientific literature. Its single-figure and full-document tasks test visual perception, mechanistic reasoning, and cross-modal synthesis across text, reaction schemes, and tables.",
    paperUrl: "https://doi.org/10.1021/acs.jcim.6c00286",
    selected: true,
  },
  {
    slug: "2026-02-28",
    title:
      "Rooted Absorbed Prefix Trajectory Balance with Submodular Replay for GFlowNet Training",
    authors: "Xi Wang, Wenbo Lu, Shengjie Wang",
    venue: "ICML",
    year: 2026,
    date: "2026-02-28",
    kind: "Conference",
    summary:
      "A new trajectory-balance objective and diversity-promoting replay strategy for stable GFlowNet training.",
    abstract:
      "Mode collapse remains a critical challenge in training Generative Flow Networks, especially when fine-tuning language models for molecular generation. We propose Rooted Absorbed Prefix Trajectory Balance, a training objective that strengthens early-stage learning signals, together with a submodular replay strategy that promotes diversity. The approach improves both sample quality and mode coverage on molecular generation tasks.",
    paperUrl: "https://arxiv.org/abs/2603.00454",
    selected: true,
  },
  {
    slug: "2026-01-26",
    title:
      "3DCS: Datasets and Benchmark for Evaluating Conformational Sensitivity in Molecular Representations",
    authors: "Xi Wang, Yang Zhang, Yingjia Zhang, Yejia Cai, Shenji Wan",
    venue: "ICLR",
    year: 2026,
    date: "2026-01-26",
    kind: "Conference",
    summary:
      "A benchmark for evaluating whether molecular representations preserve geometry, chirality, and conformational energy.",
    abstract:
      "3DCS is a benchmark for measuring conformational sensitivity in molecular representations. It combines three large-scale datasets with a unified Geometry-Chirality-Energy evaluation framework to test whether representations capture geometric variation, molecular chirality, and energy landscapes.",
    paperUrl: "https://openreview.net/forum?id=JAb0y8lkqL",
    selected: true,
  },
  {
    slug: "2025-12-01-chiralcat",
    title:
      "ChiralCat: Molecular Chirality Classification with Enhanced Spatial Representation Using Learnable Queries",
    authors:
      "Yichuan Peng, Gufeng Yu, Runhan Shi, Letian Chen, Xi Wang, Wenjie Du, Xiaohong Huo, Yang Yang",
    venue: "Artificial Intelligence Chemistry",
    year: 2025,
    date: "2025-12-01",
    kind: "Journal",
    summary:
      "A spatial representation method for molecular chirality classification using learnable queries.",
    abstract:
      "ChiralCat strengthens molecular chirality classification by using learnable queries to extract and organize spatial information. The model is designed to better represent stereochemical differences that are difficult to capture from conventional molecular encodings.",
    paperUrl: "https://doi.org/10.1016/j.aichem.2025.100091",
  },
  {
    slug: "2025-04-03",
    title: "CLC-DB: An Open-Source Online Database of Chiral Ligands and Catalysts",
    authors:
      "Gufeng Yu, Kaiwen Yu, Xi Wang, Chenxi Zhang, Yicong Luo, Xiaohong Huo, Yang Yang",
    venue: "Journal of Cheminformatics",
    year: 2025,
    date: "2025-04-03",
    kind: "Journal",
    summary:
      "An expert-curated, open database of chiral ligands and catalysts for asymmetric synthesis and data-driven research.",
    abstract:
      "CLC-DB is an open-source database designed for chiral ligands and catalysts. It contains 1,861 molecules spanning 32 categories, with expert-curated annotations and links to authoritative chemical databases. The interface supports single and batch search as well as integrated molecular clustering.",
    paperUrl: "https://link.springer.com/article/10.1186/s13321-025-00991-9",
  },
  {
    slug: "2025-03-06",
    title:
      "AtropDiff: Data-Scarce Atropisomer Generation via Multi-Task Pretrained Classifier-Guided Diffusion",
    authors: "Letian Chen, Xi Wang, Gufeng Yu, Caihua Shan, Yang Yang",
    venue: "ICLR DeLTA",
    year: 2025,
    date: "2025-03-06",
    kind: "Conference",
    summary:
      "Classifier-guided diffusion for controllable atropisomer generation in data-scarce regimes.",
    abstract:
      "AtropDiff is a diffusion framework guided by a multi-task pretrained classifier that encodes stereochemical knowledge. Dynamically weighted gradient guidance balances chirality accuracy with functional-group validity, while progressive scaffold integration supports optimization from known atropisomers.",
    paperUrl: "https://openreview.net/forum?id=lwgEUaRxBn",
    award: "Outstanding Paper Award",
  },
  {
    slug: "2025-01-13",
    title:
      "Machine Learning for Reaction Performance Prediction in Allylic Substitution Enhanced by Automatic Extraction of a Substrate-Aware Descriptor",
    authors: "Gufeng Yu, Xi Wang, Yichong Luo, Guanlin Li, Rui Ding, Runhan Shi, Xiaohong Huo, Yang Yang",
    venue: "Journal of Chemical Information and Modeling",
    year: 2025,
    date: "2025-01-13",
    kind: "Journal",
    summary:
      "A substrate-aware descriptor that improves reaction-performance prediction while preserving interpretability.",
    abstract:
      "This work introduces SubA, a substrate-aware descriptor for predicting Ir-catalyzed allylic substitution performance. Graph matching identifies molecular backbones, while atomic and molecular properties provide compact, interpretable features that improve accuracy and generalization over mainstream descriptors.",
    paperUrl: "https://doi.org/10.1021/acs.jcim.4c02120",
  },
  {
    slug: "2023-07-12",
    title: "Uni-RNA: Universal Pre-Trained Models Revolutionize RNA Research",
    authors: "Xi Wang, Ruichu Gu, Zhiyuan Chen, Yongge Li, Xiaohong Ji, Guolin Ke, Han Wen",
    venue: "bioRxiv",
    year: 2023,
    date: "2023-07-12",
    kind: "Preprint",
    summary:
      "Large-scale RNA pretraining that captures evolutionary and structural information for downstream prediction.",
    abstract:
      "Uni-RNA is a context-aware model pretrained on RNA sequences at unprecedented scale. The model learns evolutionary and structural signals from unlabeled data and achieves strong performance across structural and functional downstream tasks.",
    paperUrl: "https://www.biorxiv.org/content/10.1101/2023.07.11.548588v1",
  },
  {
    slug: "2023-02-20",
    title:
      "Synergistic Catalysis for Stereocontrol of Prochiral Nucleophiles in Palladium-Catalyzed Asymmetric Allylic Substitution",
    authors: "Xi Wang, Youbin Peng, Ling Zhao, Xiaohong Huo, Wanbin Zhang",
    venue: "Science China Chemistry",
    year: 2023,
    date: "2023-02-20",
    kind: "Journal",
    summary:
      "A review of synergistic strategies for stereocontrol in palladium-catalyzed asymmetric allylic substitution.",
    abstract:
      "This review surveys bimetallic catalysis and palladium-organocatalysis strategies for controlling prochiral nucleophiles in asymmetric allylic substitutions, highlighting their role in broadening substrate scope and improving selectivity.",
    paperUrl: "https://doi.org/10.1007/s11426-022-1547-0",
  },
  {
    slug: "2022-08-02",
    title: "Bimetallic Catalysis in Stereodivergent Synthesis",
    authors: "Xiaohong Huo, Guanlin Li, Xi Wang, Wanbin Zhang",
    venue: "Angewandte Chemie",
    year: 2022,
    date: "2022-08-02",
    kind: "Journal",
    summary:
      "A review of bimetallic catalytic systems for stereodivergent synthesis across major reaction classes.",
    abstract:
      "This Minireview summarizes stereodivergent allylic substitution, propargylic substitution, hydrofunctionalization, and annulation based on bimetallic catalysis, emphasizing the ability to access multiple stereoisomers from shared starting materials.",
    paperUrl: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ange.202210086",
  },
];

export const news: NewsItem[] = [
  {
    date: "2026.07",
    label: "Started as a PhD Research Intern at ByteDance Seed.",
    href: "https://seed.bytedance.com/en/",
  },
  {
    date: "2026.06",
    label: "Smoothing Dark Areas in Molecular Latent Diffusion released on arXiv.",
    href: "https://arxiv.org/abs/2606.13955",
  },
  {
    date: "2026.05",
    label: "🎉 RxnBench was accepted to the Journal of Chemical Information and Modeling.",
    href: "https://doi.org/10.1021/acs.jcim.6c00286",
  },
  {
    date: "2026.05",
    label: "🎉 RapTB was accepted to ICML 2026.",
    href: "https://arxiv.org/abs/2603.00454",
  },
  {
    date: "2026.02",
    label: "🎉 3DCS was accepted to ICLR 2026.",
    href: "https://openreview.net/forum?id=JAb0y8lkqL",
  },
  {
    date: "2026.02",
    label: "Rooted Absorbed Prefix Trajectory Balance released on arXiv.",
    href: "https://arxiv.org/abs/2603.00454",
  },
  {
    date: "2025.12",
    label: "RxnBench released on arXiv.",
    href: "https://arxiv.org/abs/2512.23565",
  },
  {
    date: "2025.04",
    label: "🎉 CLC-DB was accepted to the Journal of Cheminformatics.",
    href: "https://link.springer.com/article/10.1186/s13321-025-00991-9",
  },
  {
    date: "2025.03",
    label: "🎉 AtropDiff received an Outstanding Paper Award at ICLR DeLTA.",
    href: "https://openreview.net/forum?id=lwgEUaRxBn",
  },
  {
    date: "2025.02",
    label: "🎉 ChiralCat was accepted to Artificial Intelligence Chemistry.",
    href: "https://doi.org/10.1016/j.aichem.2025.100091",
  },
  {
    date: "2025.01",
    label: "🎉 SubA was accepted to the Journal of Chemical Information and Modeling.",
    href: "https://doi.org/10.1021/acs.jcim.4c02120",
  },
];

export const education = [
  {
    period: "2025–2030",
    title: "PhD in Computer Science",
    institution: "New York University, Courant Institute",
    note: "Expected 2030",
  },
  {
    period: "2019–2023",
    title: "BS in Computer Science and Bioinformatics",
    institution: "Shanghai Jiao Tong University",
  },
];

export const experience = [
  {
    period: "2024–2025",
    title: "Research Associate",
    institution: "New York University",
  },
  {
    period: "2023–2025",
    title: "Part-time Researcher",
    institution: "Microsoft Research Asia",
  },
  {
    period: "2022–2025",
    title: "Researcher",
    institution: "DP Technology",
  },
  {
    period: "2022",
    title: "Research Associate",
    institution: "University of Michigan",
  },
];
