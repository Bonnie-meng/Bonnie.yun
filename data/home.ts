export type WorkflowStep = {
  title: string;
  tools: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Capability = {
  index: string;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  englishLabel?: string;
  category: string;
  description: string;
  highlights: string[];
  cta: string;
  href: string;
  image: string;
  featured?: boolean;
};

export const heroTags = [
  "7 Years in Product",
  "AI Workflow",
  "0→1 Builder",
  "Web3 Expertise"
];

export const workflowSteps: WorkflowStep[] = [
  { title: "Discover", tools: "ChatGPT · Deep Research" },
  { title: "Define", tools: "Claude Code" },
  { title: "Prototype", tools: "Codex · Figma Make" },
  { title: "Build", tools: "Claude Code · Codex" },
  { title: "Test", tools: "Claude Code" },
  { title: "Launch", tools: "Deploy · Iterate" }
];

export const stats: Stat[] = [
  { value: "7+", label: "Years Product Experience" },
  { value: "12,000+", label: "NFTs Sold" },
  { value: "6,000+", label: "Active DeFi Wallets" },
  { value: "$280K+", label: "Peak Daily DEX Volume" }
];

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Product Judgment",
    description: "Turning ambiguous problems into clear product decisions."
  },
  {
    index: "02",
    title: "AI Workflow",
    description:
      "Using AI across research, design, development, testing, and delivery."
  },
  {
    index: "03",
    title: "Complex Systems",
    description:
      "Experience with transactions, financial products, ecosystems, and growth."
  }
];

export const projects: Project[] = [
  {
    title: "干饭咩",
    englishLabel: "What Should I Eat?",
    category: "AI Side Project · WeChat Mini Program",
    description:
      "A decision-making tool that helps users quickly choose what to eat based on time, taste preferences, and dining context.",
    highlights: [
      "Independently designed, built, tested, and launched",
      "Built with Codex and Figma Make",
      "End-to-end ownership from idea to WeChat review"
    ],
    cta: "View case study",
    // TODO: Replace with the Ganfanmie case study route when it is written.
    href: "#",
    image: "/images/projects/ganfanmie-placeholder.svg",
    featured: true
  },
  {
    title: "NFT Marketplace",
    category: "Web3 · Marketplace",
    description:
      "Designed a marketplace experience for trading NFTs together with their associated locked AVO assets.",
    highlights: ["12,000+ NFTs sold"],
    cta: "View case study",
    // TODO: Replace with the NFT Marketplace case study route when it is written.
    href: "#",
    image: "/images/projects/nft-marketplace-placeholder.svg"
  },
  {
    title: "DEX & DeFi Products",
    category: "Web3 · Financial Products",
    description:
      "Designed and delivered trading and financial product experiences across DEX and DeFi ecosystems.",
    highlights: [
      "6,000+ active DeFi wallets",
      "$280K+ peak daily DEX volume"
    ],
    cta: "View case study",
    // TODO: Replace with the DEX and DeFi case study route when it is written.
    href: "#",
    image: "/images/projects/defi-products-placeholder.svg"
  }
];
