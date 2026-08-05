export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSnapshotItem = {
  label: string;
  value: string;
};

export type ProjectProofItem = {
  label: string;
  statement: string;
};

export type ProjectDecision = {
  title: string;
  description: string;
};

export type ProjectPreviewData = {
  slug: "fanfanme" | "nft" | "bonnie";
  capabilityLabel: string;
  title: string;
  headline: string;
  description: string;
  href: string;
  cta: string;
  visual: {
    type: "image" | "system" | "workflow";
    image?: ProjectImage;
  };
};

export type CaseStudyData = {
  slug: ProjectPreviewData["slug"];
  path: string;
  projectLabel: string;
  title: string;
  valueProposition: string;
  role: string;
  timeline: string;
  productType: string;
  responsibilities: string[];
  heroImage?: ProjectImage;
  overview: string;
  problem: string;
  proves?: {
    statement: string;
    supportingCopy: string;
    proof: ProjectProofItem[];
  };
  decisions: ProjectDecision[];
  solution: string;
  aiWorkflow: string;
  reflection: {
    title: string;
    body: string;
  };
  nextProject: {
    title: string;
    href: string;
  };
};

export type EvidenceProjectData = {
  id: string;
  name: string;
  englishName?: string;
  supportingHeadline?: string;
  tagline: string;
  category: string;
  role: string;
  meta: string[];
  overview: string;
  headerImage: ProjectImage;
  gallery: ProjectImage[];
  snapshot: ProjectSnapshotItem[];
  proves: string;
  provesSupportingCopy: string;
  proof: ProjectProofItem[];
  decisions: ProjectDecision[];
  reflection: {
    title: string;
    body: string;
  };
};

export type SystemStep = {
  label: string;
};

export type SystemEvidenceProjectData = {
  id: string;
  title: string;
  statement: string;
  supportingCopy: string;
  systemSteps: SystemStep[];
  decisions: ProjectDecision[];
  cta: string;
};

const ganfanmieImage: ProjectImage = {
  src: "/images/projects/ganfanmie-placeholder.svg",
  alt: "Ganfanmie product interface screenshot",
  caption: "Recommendation flow"
};

const nftImage: ProjectImage = {
  src: "/images/projects/nft-marketplace-placeholder.svg",
  alt: "NFT marketplace trading and ownership flow diagram"
};

export const homeProjects: ProjectPreviewData[] = [
  {
    slug: "fanfanme",
    capabilityLabel: "Rapid Validation",
    title: "干饭咩",
    headline: "Turning an everyday decision\ninto a simple AI product.",
    description:
      "Built in just over one day to see whether AI could make everyday decisions a little easier.",
    href: "/work/fanfanme",
    cta: "Read Case →",
    visual: {
      type: "image",
      image: ganfanmieImage
    }
  },
  {
    slug: "nft",
    capabilityLabel: "System Thinking",
    title: "NFT Marketplace",
    headline: "Designing trust\ninside a complex trading system.",
    description:
      "Redesigned the marketplace experience to make asset ownership and transactions easier to understand.",
    href: "/work/nft",
    cta: "Read Case →",
    visual: {
      type: "system",
      image: nftImage
    }
  },
  {
    slug: "bonnie",
    capabilityLabel: "AI Workflow",
    title: "bonnie.yun",
    headline: "Building my own portfolio\nlike a product.",
    description: "An ongoing experiment in building products with AI.",
    href: "/work/bonnie",
    cta: "Read Case →",
    visual: {
      type: "workflow"
    }
  }
];

export const caseStudies: CaseStudyData[] = [
  {
    slug: "fanfanme",
    path: "/works/fanfanme",
    projectLabel: "AI Side Project · WeChat Mini Program",
    title: "干饭咩",
    valueProposition: "Turning an everyday decision into a working AI product.",
    role: "Solo Product Manager",
    timeline: "Built in approximately 30 hours",
    productType: "WeChat Mini Program",
    responsibilities: [
      "Product strategy",
      "UX writing",
      "Interface design",
      "AI-assisted build",
      "Testing and submission"
    ],
    heroImage: ganfanmieImage,
    overview:
      "A lightweight decision tool that turns time, taste, and dining context into a practical meal suggestion for office workers.",
    problem:
      "Choosing lunch looks small, but it often becomes a repeated moment of friction. The product narrows the scope to one decision: help a user move from uncertainty to a reasonable meal choice quickly.",
    proves: {
      statement: "Shape small questions\ninto working products.",
      supportingCopy:
        "From problem framing to MVP delivery,\nusing an AI-assisted workflow.",
      proof: [
        {
          label: "Ownership",
          statement:
            "Independently designed, built, tested, and prepared the product for WeChat review."
        },
        {
          label: "AI workflow",
          statement:
            "Used AI across product shaping, interface exploration, implementation, and iteration."
        },
        {
          label: "Delivery",
          statement:
            "Kept the release path focused enough to turn a fuzzy idea into a working product."
        }
      ]
    },
    decisions: [
      {
        title: "Make the problem smaller than hunger.",
        description:
          "The product focuses on the decision moment, rather than the entire food-discovery market. This keeps the experience direct and useful in an office context."
      },
      {
        title: "Ask for context only when it changes the answer.",
        description:
          "Inputs are limited to time, taste, and dining context: only the information that can materially change the recommendation."
      },
      {
        title: "Use AI to accelerate execution, not to blur judgment.",
        description:
          "AI accelerated prototyping and implementation, while scope, constraints, and user-experience decisions remained deliberate."
      }
    ],
    solution:
      "The MVP turns a small set of contextual inputs into a practical recommendation, then keeps the result screen focused on action instead of endless browsing.",
    aiWorkflow:
      "AI helped compress research synthesis, UI exploration, code generation, copy iteration, and QA into a short build loop. Product judgment still decided what stayed out of scope.",
    reflection: {
      title: "The hardest part\nwas choosing\nwhat not to build.",
      body:
        "AI made implementation faster, but product judgment still determined the scope."
    },
    nextProject: {
      title: "NFT Marketplace",
      href: "/work/nft"
    }
  },
  {
    slug: "nft",
    path: "/works/nft",
    projectLabel: "Web3 Product · Trading Experience",
    title: "NFT Marketplace",
    valueProposition: "Designing trust inside a complex trading system.",
    role: "Product Manager",
    timeline: "Marketplace product cycle",
    productType: "NFT trading experience",
    responsibilities: [
      "Product definition",
      "System flow design",
      "Transaction UX",
      "Stakeholder alignment"
    ],
    heroImage: nftImage,
    overview:
      "A marketplace experience designed to make NFT ownership, locked rewards, and transfer rules understandable before a user confirms a transaction.",
    problem:
      "The core challenge was trust. Users needed to know what they owned, what value was locked with an asset, and what would change after transfer without reading smart contract logic.",
    decisions: [
      {
        title: "Transfer ownership without breaking rewards.",
        description:
          "When an NFT moved to a new owner, the locked AVO associated with that NFT also needed to remain attached to the asset, so the economic meaning of the transfer stayed intact."
      },
      {
        title: "Hide complexity.",
        description:
          "Users should understand outcomes, not implementation details. The interface translated contract behavior into clear ownership and transfer states."
      },
      {
        title: "Design for trust.",
        description:
          "Every transaction needed to communicate what would change before confirmation, including asset ownership, locked value, and final transfer result."
      }
    ],
    solution:
      "The experience separated marketplace browsing from transaction confirmation, then used a clear flow from wallet to marketplace, NFT, locked asset, and transfer result.",
    aiWorkflow:
      "AI was used as a thinking partner to pressure-test edge cases, summarize transaction states, and convert system rules into user-facing interface language.",
    reflection: {
      title: "Trust is built\nbefore confirmation.",
      body:
        "For complex systems, the product work is not to expose every rule. It is to make the consequences of each action legible at the right moment."
    },
    nextProject: {
      title: "bonnie.yun",
      href: "/work/bonnie"
    }
  },
  {
    slug: "bonnie",
    path: "/works/bonnie",
    projectLabel: "Portfolio · AI Workflow",
    title: "bonnie.yun",
    valueProposition: "Building the portfolio as a product.",
    role: "Product Owner and Builder",
    timeline: "Sprint-based iteration",
    productType: "Personal portfolio website",
    responsibilities: [
      "Information architecture",
      "Content strategy",
      "Visual direction",
      "AI collaboration",
      "Frontend implementation"
    ],
    overview:
      "This portfolio is treated as a product for hiring managers and product leaders who need to understand how I think, decide, and build.",
    problem:
      "A portfolio can easily become a collection of outputs. The product challenge was to create a clear evidence system that makes product-management judgment visible without overwhelming the reader.",
    decisions: [
      {
        title: "Lead with evidence, not biography.",
        description:
          "The homepage prioritizes proof of work and product capabilities before deeper career context."
      },
      {
        title: "Design for fast recruiting scans.",
        description:
          "Hiring managers should understand the positioning, project range, and next actions within a few scrolls."
      },
      {
        title: "Use AI as a build partner.",
        description:
          "AI supported structure, implementation, critique, and iteration while product judgment shaped scope and hierarchy."
      }
    ],
    solution:
      "The site organizes Bonnie's work around capability evidence: rapid validation, system thinking, and AI workflow.",
    aiWorkflow:
      "The working process combined PRD writing, component implementation, design critique, debugging, and sprint-based refinement with AI assistance.",
    reflection: {
      title: "The portfolio\nis also the product.",
      body:
        "Every layout and content decision is meant to demonstrate the same product judgment the site describes."
    },
    nextProject: {
      title: "干饭咩",
      href: "/work/fanfanme"
    }
  }
];

export const projects: EvidenceProjectData[] = [
  {
    id: "ganfanmie",
    name: "干饭咩",
    supportingHeadline: "AI-assisted MVP built in just over one day.",
    tagline: "Helping office workers decide what to eat.",
    category: "AI Side Project · WeChat Mini Program",
    role: "Solo Product Manager",
    meta: ["Product Design", "AI-assisted Build"],
    overview:
      "A lightweight decision tool that turns time, taste, and dining context into a practical meal suggestion.",
    headerImage: ganfanmieImage,
    gallery: [ganfanmieImage],
    snapshot: [
      { label: "Role", value: "Solo Product Manager" },
      { label: "Timeline", value: "Built in approximately 30 hours" },
      { label: "Platform", value: "WeChat Mini Program" },
      { label: "Status", value: "Submitted for Review" }
    ],
    proves: "Shape small questions\ninto working products.",
    provesSupportingCopy:
      "From problem framing to MVP delivery,\nusing an AI-assisted workflow.",
    proof: caseStudies[0].proves?.proof ?? [],
    decisions: caseStudies[0].decisions,
    reflection: caseStudies[0].reflection
  }
];

export const systemProjects: SystemEvidenceProjectData[] = [
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    statement: "Designing trust\ninside complex systems.",
    supportingCopy:
      "Designed an NFT trading experience where asset ownership,\nlocked rewards, and transaction rules remained understandable\nfor everyday users.",
    systemSteps: [
      { label: "Wallet" },
      { label: "Marketplace" },
      { label: "NFT" },
      { label: "Locked Asset" },
      { label: "Transfer Result" }
    ],
    decisions: caseStudies[1].decisions,
    cta: "Read Full Case →"
  }
];

export function getCaseStudy(slug: CaseStudyData["slug"]) {
  return caseStudies.find((project) => project.slug === slug);
}
