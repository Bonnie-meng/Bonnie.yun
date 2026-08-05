export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  industry?: string;
  context?: string;
  results?: string[];
  narrative?: string;
  projects?: string[];
  summary: string;
  highlights: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "TerpLayer",
    role: "Product Manager",
    startDate: "2024.08",
    endDate: "Present",
    industry: "Web3 / DeFi",
    context:
      "Web3 / DeFi product work across DEX, staking, node products, NFT, cross-chain and on-chain asset management.",
    summary:
      "Product design and requirement management for DeFi products with complex token, contract and asset-flow logic.",
    highlights: [
      "Own product design and requirement management for DeFi products.",
      "Translate token, contract and asset logic into understandable user flows.",
      "Work with smart-contract, frontend, design and testing teams.",
      "Track on-chain data and user behavior to support iteration."
    ],
    results: ["12,000+ nodes sold", "6,000+ platform users"],
    narrative:
      "My role is often to turn mechanisms that make sense on-chain into products that also make sense to users."
  },
  {
    company: "Insurance Technology Products",
    role: "Product Manager",
    startDate: "2021.10",
    endDate: "2024.07",
    industry: "Insurance Technology",
    context:
      "Worked across consumer insurance products, manual underwriting systems and intelligent underwriting logic.",
    summary:
      "Product work across traffic-heavy consumer insurance experiences and underwriting systems connected with insurance companies.",
    highlights: [
      "Participated in building a third-party platform's first independently developed manual underwriting system connected with insurance companies.",
      "Participated in building an independently developed multi-person intelligent underwriting system."
    ],
    projects: ["惠军保", "Manual Underwriting System", "Multi-person Intelligent Underwriting"],
    results: [
      "800,000+ peak daily page views",
      "400,000+ peak daily unique visitors",
      "150,000+ peak policies in one day"
    ],
    narrative:
      "This period taught me how product decisions behave when traffic, risk rules and operational complexity all arrive at once."
  },
  {
    company: "iNFT",
    role: "Product Manager",
    startDate: "2021.05",
    endDate: "2021.09",
    industry: "NFT Marketplace",
    context:
      "An early NFT trading and service platform built on Ethereum and BSC.",
    summary:
      "Product planning, requirements coordination and iteration work for an NFT marketplace and service platform.",
    highlights: [
      "Coordinated product requirements with an overseas designer.",
      "Planned product iterations and development schedules.",
      "Researched competitors and translated findings into product improvements.",
      "Supported requirements from operations, marketing and business teams."
    ],
    results: [
      "Added BSC support",
      "Completed a full UI redesign",
      "Delivered minting and auction functions",
      "Blind-box campaign sold out in one hour"
    ],
    narrative:
      "It was my first experience working on products where ownership, transactions and user trust were defined by contracts."
  }
];
