import type { Language } from "@/content/translations";

export const proofMetrics = [
  {
    value: "12,000+",
    label: { en: "Nodes sold", zh: "节点售出" },
    context: { en: "Web3 node product", zh: "Web3 节点产品" },
    description: {
      en: "Contributed to the product design and delivery of a Web3 node product, covering product logic, asset flows and on-chain interactions.",
      zh: "参与 Web3 节点产品的产品设计与交付，覆盖产品逻辑、资产流转与链上交互。"
    }
  },
  {
    value: "6,000+",
    label: { en: "Platform users", zh: "平台用户" },
    context: { en: "DeFi platform", zh: "DeFi 平台" },
    description: {
      en: "Worked across DeFi products including DEX, staking, node products, NFT and cross-chain experiences.",
      zh: "参与 DEX、staking、节点产品、NFT 与跨链体验等 DeFi 产品工作。"
    }
  },
  {
    value: "150,000+",
    label: { en: "Policies in one day", zh: "单日保单" },
    context: { en: "Insurance product", zh: "保险产品" },
    description: {
      en: "Worked on insurance products that reached a single-day peak of more than 150,000 policies.",
      zh: "参与的保险产品曾达到单日超过 150,000 单保单峰值。"
    }
  },
  {
    value: "400,000+",
    label: { en: "Daily users at peak", zh: "单日峰值用户" },
    context: { en: "Insurance product", zh: "保险产品" },
    description: {
      en: "The related insurance product reached a single-day peak of more than 400,000 unique visitors and 800,000 page views.",
      zh: "相关保险产品曾达到单日超过 400,000 独立访客与 800,000 页面浏览峰值。"
    }
  }
] as const;

export const aiWorkflowSteps = [
  {
    title: { en: "Research", zh: "调研" },
    items: {
      en: ["Market research", "Competitor analysis", "Information synthesis", "Question generation"],
      zh: ["市场调研", "竞品分析", "信息整理", "问题生成"]
    },
    outcome: {
      en: "Less time collecting information, more time deciding what matters.",
      zh: "减少收集信息的时间，把更多精力放在判断什么重要。"
    }
  },
  {
    title: { en: "Product Definition", zh: "产品定义" },
    items: {
      en: ["Problem framing", "User scenarios", "Requirement structure", "Scope definition", "Trade-off analysis"],
      zh: ["问题框定", "用户场景", "需求结构", "范围定义", "取舍分析"]
    },
    outcome: {
      en: "AI helps expand the solution space. I remain responsible for the decision.",
      zh: "AI 帮助扩展解法空间，但我仍然负责做出判断。"
    }
  },
  {
    title: { en: "Product Documentation", zh: "产品文档" },
    items: {
      en: ["PRD drafts", "User stories", "Acceptance criteria", "Edge cases", "Meeting summaries"],
      zh: ["PRD 草稿", "用户故事", "验收标准", "边界情况", "会议总结"]
    },
    outcome: {
      en: "Documents become working artifacts, not the final product.",
      zh: "文档成为推进工作的产物，而不是最终产品本身。"
    }
  },
  {
    title: { en: "Prototype", zh: "原型" },
    items: {
      en: ["Interaction exploration", "UI direction", "Prototype generation", "Copy iteration"],
      zh: ["交互探索", "界面方向", "原型生成", "文案迭代"]
    },
    outcome: {
      en: "Ideas become testable before they become expensive.",
      zh: "想法在变得昂贵之前，先变得可以测试。"
    }
  },
  {
    title: { en: "Development", zh: "开发" },
    items: {
      en: ["Task breakdown", "AI-assisted coding", "Debugging", "API integration", "Code review support"],
      zh: ["任务拆解", "AI 辅助编码", "调试", "API 集成", "代码审查支持"]
    },
    outcome: {
      en: "I can build functional products instead of stopping at a handoff.",
      zh: "我可以构建可运行产品，而不是停在交接处。"
    }
  },
  {
    title: { en: "Delivery and Iteration", zh: "交付与迭代" },
    items: {
      en: ["Testing", "Issue analysis", "Release checks", "User feedback", "Iteration planning"],
      zh: ["测试", "问题分析", "发布检查", "用户反馈", "迭代计划"]
    },
    outcome: {
      en: "The feedback loop becomes shorter and more direct.",
      zh: "反馈循环变得更短、更直接。"
    }
  }
] as const;

export const professionalWork = [
  {
    id: "web3-system",
    title: { en: "DeFi Product Ecosystem", zh: "DeFi 产品生态" },
    context: {
      en: "DEX, staking, node products, NFT, cross-chain and on-chain asset management.",
      zh: "DEX、staking、节点产品、NFT、跨链与链上资产管理。"
    },
    handled: {
      en: "Product design, requirement definition, asset-flow logic and cross-functional delivery.",
      zh: "产品设计、需求定义、资产流转逻辑与跨职能交付。"
    },
    evidence: ["12,000+ nodes sold", "6,000+ platform users"],
    capability: {
      en: "Making complex asset and contract logic understandable.",
      zh: "让复杂资产与合约逻辑变得可理解。"
    },
    style: "large"
  },
  {
    id: "insurance",
    title: { en: "Insurance and Underwriting Systems", zh: "保险与核保系统" },
    context: {
      en: "Consumer insurance products, manual underwriting and intelligent underwriting.",
      zh: "消费保险产品、人工核保与智能核保。"
    },
    handled: {
      en: "Products where user experience, business operations and risk rules needed to work together.",
      zh: "需要用户体验、业务运营和风险规则共同工作的产品系统。"
    },
    evidence: ["800,000+ peak daily PV", "400,000+ peak daily UV", "150,000+ peak daily policies"],
    capability: {
      en: "Designing products where experience, operations and risk rules meet.",
      zh: "设计体验、运营与风险规则交汇处的产品。"
    },
    style: "metrics"
  },
  {
    id: "inft",
    title: { en: "iNFT Marketplace", zh: "iNFT 交易市场" },
    context: {
      en: "NFT trading and service platform based on Ethereum and BSC.",
      zh: "基于 Ethereum 与 BSC 的 NFT 交易与服务平台。"
    },
    handled: {
      en: "Requirements coordination, iteration planning, competitor research and support for operations, marketing and business needs.",
      zh: "需求协调、迭代计划、竞品研究，并支持运营、市场和业务需求。"
    },
    evidence: ["BSC support", "Minting", "Auction", "UI redesign", "Blind-box campaign sold out in one hour"],
    capability: {
      en: "Building transaction products around ownership, trust and on-chain behavior.",
      zh: "围绕所有权、信任和链上行为构建交易产品。"
    },
    style: "timeline"
  }
] as const;

export const homeRebuildCopy: Record<Language, {
  why: {
    label: string;
    headline: string;
    body: string[];
    beforeLabel: string;
    before: string[];
    nowLabel: string;
    now: string[];
    caption: string;
  };
  proof: {
    label: string;
    headline: string;
    note: string;
  };
  experience: {
    label: string;
    headline: string;
    earlierLabel: string;
    earlierCopy: string;
  };
  featuredBuild: {
    label: string;
    headline: string;
    title: string;
    description: string;
    narrative: string;
    proof: Array<{ label: string; value: string }>;
    decisions: Array<{ title: string; body: string }>;
    final: string[];
    cta: string;
  };
  work: {
    label: string;
    headline: string;
  };
  workflow: {
    label: string;
    headline: string;
    final: string[];
  };
  vibe: {
    label: string;
    headline: string;
    experiments: Array<{
      eyebrow: string;
      title: string;
      rows: Array<{ label: string; body: string }>;
    }>;
    closing: string[];
    cta: string;
  };
  background: {
    label: string;
    headline: string;
    supporting: string;
  };
}> = {
  en: {
    why: {
      label: "WHY AI PRODUCT",
      headline: "AI didn't change what I build.\nIt changed how much of it I can own.",
      body: [
        "For most of my career, my role ended at product definition, design, coordination and delivery.",
        "AI expanded that boundary.",
        "I can now move directly from an idea to research, prototype, working product and real user feedback without waiting for every part of the process to begin."
      ],
      beforeLabel: "Before",
      before: ["Research", "PRD", "Prototype", "Handoff", "Wait"],
      nowLabel: "Now",
      now: ["Research", "Define", "Prototype", "Build", "Ship", "Learn"],
      caption:
        "The difference is not faster documentation. It is a shorter distance between an idea and evidence."
    },
    proof: {
      label: "PROOF, NOT LABELS",
      headline:
        "Seven years of product work,\nmeasured in products shipped and systems made real.",
      note: "Selected public metrics from products I worked on."
    },
    experience: {
      label: "EXPERIENCE",
      headline:
        "From interfaces to systems,\nand from product definition to delivery.",
      earlierLabel: "Earlier: UI Designer and Product Designer · 2018 — 2021",
      earlierCopy:
        "Worked across enterprise systems, education, retail, live streaming, medical products and operational tools. That design background still influences how I structure information, review interaction details and communicate with product teams."
    },
    featuredBuild: {
      label: "BUILT WITH AI",
      headline: "From product idea to a launched WeChat Mini Program.",
      title: "干饭咩",
      description:
        "A lightweight meal recommendation product for people who are tired of deciding what to eat.",
      narrative:
        "I used an AI-assisted workflow to independently move through product definition, feature scoping, interaction design, development, testing and launch. The first working version was completed in approximately 30 hours.",
      proof: [
        { label: "Role", value: "Independent Product Builder" },
        { label: "Platform", value: "WeChat Mini Program" },
        { label: "Scope", value: "Idea → Product → Development → Launch" },
        { label: "Build time", value: "Approximately 30 hours" },
        { label: "Status", value: "Launched" }
      ],
      decisions: [
        {
          title: "Make the first action immediate.",
          body:
            "The product begins with the meal decision itself, instead of asking users to complete a long preference setup."
        },
        {
          title: "Reduce the problem before increasing intelligence.",
          body:
            "The first version focused on helping users choose, not on building a complex recommendation engine."
        },
        {
          title: "Build enough to learn from a real product.",
          body:
            "I chose a working Mini Program over another static prototype, because platform constraints and real interactions reveal problems that a design file cannot."
        }
      ],
      final: [
        "The important result was not only that AI helped me build faster.",
        "It changed my role from someone who describes the product to someone who can test the product directly."
      ],
      cta: "Read the Full Case Study →"
    },
    work: {
      label: "SELECTED WORK",
      headline: "The products that shaped how I think."
    },
    workflow: {
      label: "100% AI-ASSISTED WORKFLOW",
      headline: "AI is not one step in my process.\nIt runs through the entire process.",
      final: [
        "100% AI-assisted does not mean 100% AI-decided.",
        "AI increases the amount of work I can complete. Product judgment still determines what should be built."
      ]
    },
    vibe: {
      label: "VIBE CODING JOURNEY",
      headline: "I started with speed.\nI stayed for the change in product ownership.",
      experiments: [
        {
          eyebrow: "Experiment 01",
          title: "[REAL VIDEO TITLE]",
          rows: [
            { label: "What I tried", body: "[REAL SUBJECT]" },
            { label: "What worked", body: "[REAL OBSERVATION]" },
            { label: "What broke", body: "[REAL OBSERVATION]" },
            {
              label: "What I learned",
              body:
                "The quality of AI output depended heavily on how clearly I defined the problem, constraints and acceptance criteria."
            }
          ]
        },
        {
          eyebrow: "Experiment 02",
          title: "[REAL VIDEO TITLE]",
          rows: [
            {
              label: "What changed",
              body:
                "I spent less time asking AI to generate broadly and more time defining scope, tasks and review standards."
            },
            {
              label: "What I learned",
              body:
                "Vibe Coding is not the absence of product work. It makes unclear product thinking visible much earlier."
            }
          ]
        }
      ],
      closing: [
        "The more I build with AI, the less I see Vibe Coding as a shortcut.",
        "It is a new interface between product thinking and implementation."
      ],
      cta: "Watch the Vibe Coding Series →"
    },
    background: {
      label: "BACKGROUND",
      headline: "Education and background",
      supporting:
        "My education began in visual communication, advertising, creative writing and content production before my career moved into digital products."
    }
  },
  zh: {
    why: {
      label: "为什么是 AI 产品",
      headline: "AI 没有改变我要做什么，\n但改变了我能亲手完成多少。",
      body: [
        "过去，产品经理的工作通常结束在需求定义、方案设计、团队协作和推动交付。",
        "AI 扩大了这条边界。",
        "现在，我可以从一个想法直接进入调研、原型、开发和真实反馈，而不是把产品停留在文档和交接中。"
      ],
      beforeLabel: "过去",
      before: ["调研", "PRD", "原型", "交接", "等待"],
      nowLabel: "现在",
      now: ["调研", "定义", "原型", "开发", "上线", "学习"],
      caption:
        "真正的变化不是文档写得更快，而是想法与真实验证之间的距离变短了。"
    },
    proof: {
      label: "证据，而不是标签",
      headline: "七年产品工作，\n体现在被交付的产品和真实系统里。",
      note: "我参与过的产品中的部分公开指标。"
    },
    experience: {
      label: "经历",
      headline: "从界面到系统，\n从产品定义到交付。",
      earlierLabel: "更早：UI 设计师与产品设计师 · 2018 — 2021",
      earlierCopy:
        "曾参与企业系统、教育、零售、直播、医疗产品与运营工具等项目。设计背景仍然影响我组织信息、审视交互细节和与产品团队沟通的方式。"
    },
    featuredBuild: {
      label: "用 AI 构建",
      headline: "从产品想法到上线的微信小程序。",
      title: "干饭咩",
      description: "一个轻量级用餐推荐产品，服务于不想再纠结吃什么的人。",
      narrative:
        "我使用 AI 辅助工作流，独立完成产品定义、功能范围、交互设计、开发、测试和上线。第一个可运行版本在约 30 小时内完成。",
      proof: [
        { label: "角色", value: "独立产品构建者" },
        { label: "平台", value: "微信小程序" },
        { label: "范围", value: "想法 → 产品 → 开发 → 上线" },
        { label: "构建时间", value: "约 30 小时" },
        { label: "状态", value: "已上线" }
      ],
      decisions: [
        {
          title: "让第一个动作立刻发生。",
          body: "产品从用餐决策本身开始，而不是要求用户先完成很长的偏好设置。"
        },
        {
          title: "先缩小问题，再提高智能程度。",
          body: "第一版聚焦帮助用户做选择，而不是先构建复杂推荐引擎。"
        },
        {
          title: "构建到足够从真实产品中学习。",
          body:
            "我选择做一个可运行小程序，而不是再做一个静态原型，因为平台限制和真实交互会暴露设计文件看不到的问题。"
        }
      ],
      final: [
        "重要结果不只是 AI 帮我构建得更快。",
        "它让我从描述产品的人，变成可以直接测试产品的人。"
      ],
      cta: "阅读完整案例 →"
    },
    work: {
      label: "精选作品",
      headline: "这些产品塑造了我的思考方式。"
    },
    workflow: {
      label: "100% AI 辅助工作流",
      headline: "AI 不是工作流中的一个步骤，\n它已经贯穿整个产品过程。",
      final: [
        "100% AI 工作流，不代表 100% 由 AI 决策。",
        "AI 扩大了我能完成的工作范围，但产品判断仍然决定什么值得被做出来。"
      ]
    },
    vibe: {
      label: "Vibe Coding 旅程",
      headline: "最初吸引我的是速度，\n真正留下来的是产品边界的变化。",
      experiments: [
        {
          eyebrow: "实验 01",
          title: "[REAL VIDEO TITLE]",
          rows: [
            { label: "我尝试了什么", body: "[REAL SUBJECT]" },
            { label: "什么有效", body: "[REAL OBSERVATION]" },
            { label: "什么出错", body: "[REAL OBSERVATION]" },
            {
              label: "我学到什么",
              body:
                "AI 输出质量很大程度取决于我是否清楚定义了问题、约束和验收标准。"
            }
          ]
        },
        {
          eyebrow: "实验 02",
          title: "[REAL VIDEO TITLE]",
          rows: [
            {
              label: "发生了什么变化",
              body:
                "我花更少时间让 AI 泛泛生成，更多时间定义范围、任务和检查标准。"
            },
            {
              label: "我学到什么",
              body:
                "Vibe Coding 不是产品工作的消失。它会更早暴露不清晰的产品思考。"
            }
          ]
        }
      ],
      closing: [
        "我越多用 AI 构建，就越不把 Vibe Coding 看作捷径。",
        "它是一种连接产品思考和实现的新界面。"
      ],
      cta: "观看 Vibe Coding 系列 →"
    },
    background: {
      label: "背景",
      headline: "教育与背景",
      supporting:
        "我的教育起点是视觉传播、广告、创意写作和内容生产，之后职业路径转向数字产品。"
    }
  }
};
