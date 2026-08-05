export const languages = ["en", "zh"] as const;
export const themePreferences = ["system", "light", "dark"] as const;

export type Language = (typeof languages)[number];
export type ThemePreference = (typeof themePreferences)[number];
export type AppliedTheme = "light" | "dark";
export type ProjectSlug = "fanfanme" | "nft" | "bonnie";
export type LabEntrySlug = "vibe-coding-01" | "vibe-coding-02" | "bonnie-yun";

export type LocalizedProjectPreview = {
  capability: string;
  title: string;
  headline: string;
  description: string;
  context: string;
  meta: Array<{
    label: string;
    value: string;
  }>;
  outcome: string;
  cta: string;
};

export type ExplorationType = "Video" | "Experiment" | "Note" | "Side Project";

export type LocalizedExplorationItem = {
  type: ExplorationType;
  typeLabel: string;
  title: string;
  description: string;
  cta: string;
};

export type LocalizedCaseStudy = {
  projectLabel: string;
  title: string;
  valueProposition: string;
  role: string;
  timeline: string;
  team: string;
  platform: string;
  outcome: string;
  productType: string;
  responsibilities: string[];
  overview: string;
  context: string;
  problem: string;
  proves?: {
    statement: string;
    supportingCopy: string;
    proof: Array<{
      label: string;
      statement: string;
    }>;
  };
  decisions: Array<{
    title: string;
    description: string;
  }>;
  solution: string;
  execution: string;
  result: string;
  aiWorkflow: string;
  reflection: {
    title: string;
    body: string;
  };
  nextProject: string;
};

export type Translation = {
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: {
    home: string;
    experience: string;
    work: string;
    lab: string;
    ai: string;
    vibe: string;
    about: string;
    resume: string;
    linkedIn: string;
    menu: string;
    close: string;
    homeLabel: string;
    languageLabel: string;
    themeLabel: string;
    themeValues: Record<ThemePreference, string>;
  };
  hero: {
    eyebrow: string;
    name: string;
    title: string;
    headline: string;
    description: string;
    cta: string;
    experienceCta: string;
    resumeCta: string;
  };
  snapshot: {
    label: string;
    headline: string;
    stats: Record<string, string>;
    capabilitiesLabel: string;
    capabilities: string[];
  };
  experiencePreview: {
    label: string;
    headline: string;
    description: string;
    cta: string;
    placeholderNote: string;
  };
  about: {
    label: string;
    headline: string;
    paragraphs: string[];
    evolutionLabel: string;
    evolutionPath: string;
  };
  exploring: {
    label: string;
    headline: string;
    description: string;
    items: LocalizedExplorationItem[];
  };
  labPreview: {
    label: string;
    headline: string;
    description: string;
    cta: string;
  };
  aboutPreview: {
    label: string;
    headline: string;
    body: string;
    journeyLabel: string;
    cta: string;
  };
  statement: string;
  work: {
    label: string;
    title: string;
    description: string;
    visuals: {
      nftSteps: string[];
      workflowRows: Array<{
        label: string;
        body: string;
      }>;
    };
    projects: Record<ProjectSlug, LocalizedProjectPreview>;
  };
  contact: {
    label: string;
    headline: string;
    description: string;
    links: {
      email: string;
      linkedIn: string;
      resume: string;
    };
  };
  footer: {
    statement: string;
    credit: string;
    copyright: string;
  };
  pages: {
    work: {
      label: string;
      headline: string;
      body: string;
      featuredTitle: string;
      additionalTitle: string;
      additionalPlaceholder: string;
      contactCta: string;
    };
    lab: {
      label: string;
      headline: string;
      body: string;
      sourceLabel: string;
      back: string;
      entries: Record<
        LabEntrySlug,
        {
          typeLabel: string;
          title: string;
          description: string;
          cta: string;
          detail: string;
        }
      >;
    };
    about: {
      intro: {
        label: string;
        headline: string;
        paragraphs: string[];
      };
      journeyTitle: string;
      journey: Array<{
        label: string;
        body: string;
      }>;
      experienceTitle: string;
      howTitle: string;
      principles: Array<{
        title: string;
        body: string;
      }>;
      educationTitle: string;
      currentTitle: string;
      currentBody: string;
      contactCta: string;
    };
  };
  caseStudy: {
    back: string;
    metaLabels: {
      role: string;
      timeline: string;
      team: string;
      platform: string;
      outcome: string;
      responsibilities: string;
    };
    sections: {
      overview: string;
      context: string;
      roleScope: string;
      outcome: string;
      problem: string;
      proves: string;
      decisions: string;
      execution: string;
      result: string;
      reflection: string;
      nextProject: string;
    };
    projects: Record<ProjectSlug, LocalizedCaseStudy>;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    meta: {
      homeTitle: "Bonnie Yun | AI Product Manager",
      homeDescription:
        "Bonnie is an AI Product Manager building digital products with product thinking, practical execution, and AI where it helps."
    },
    nav: {
      home: "Home",
      experience: "Experience",
      work: "Work",
      lab: "Lab",
      ai: "AI Workflow",
      vibe: "Vibe Coding",
      about: "About",
      resume: "Resume",
      linkedIn: "LinkedIn",
      menu: "Menu",
      close: "Close",
      homeLabel: "Bonnie home",
      languageLabel: "Switch language",
      themeLabel: "Change theme",
      themeValues: {
        system: "System",
        light: "Light",
        dark: "Dark"
      }
    },
    hero: {
      eyebrow: "Product Manager · AI Workflow · Independent Builder",
      name: "Bonnie Yun",
      title: "Product Manager",
      headline: "Build with AI.\nBuild it your way.",
      description:
        "I'm Bonnie, a Product Manager with seven years of experience across consumer products, Web3 and AI.\n\nI now run my entire product workflow with AI—from research and product definition to prototyping, development and delivery.\n\nI don't just define products anymore.\nI can build and ship them.",
      cta: "See How I Work",
      experienceCta: "View Experience",
      resumeCta: "Download Résumé ↗"
    },
    snapshot: {
      label: "At a Glance",
      headline:
        "Product experience built across different stages and industries.",
      stats: {
        years: "Years in product",
        industries: "Industries",
        zeroToOne: "Product experience",
        background: "Background"
      },
      capabilitiesLabel: "Capability areas",
      capabilities: [
        "Product Strategy",
        "0→1 Product Development",
        "System Thinking",
        "Rapid Validation",
        "Cross-functional Delivery"
      ]
    },
    experiencePreview: {
      label: "Experience",
      headline:
        "A career shaped by design, product, and changing technologies.",
      description:
        "I began in design and moved into product management, working across consumer products, Web3, and more recently AI.",
      cta: "View Full Experience →",
      placeholderNote:
        "Professional details below use placeholders until Bonnie adds verified company, role, and outcome information."
    },
    about: {
      label: "Explore",
      headline:
        "Different products.\nDifferent industries.\nOne way of thinking.",
      paragraphs: [
        "I started my career in design before moving into product management.",
        "Since then I've worked across consumer products, Web3, and AI. Different industries, different users, different constraints—but the same goal: building products that solve real problems.",
        "AI has changed how I work, but not how I think. Good products still begin with understanding people, making thoughtful decisions, and learning through iteration."
      ],
      evolutionLabel: "Journey",
      evolutionPath: "Design → Product → Web3 → AI"
    },
    exploring: {
      label: "Explore",
      headline: "What I'm exploring lately.",
      description:
        "I like trying new tools, documenting what I learn, and sharing the small discoveries along the way.",
      items: [
        {
          type: "Video",
          typeLabel: "Video",
          title: "[REAL VIDEO TITLE]",
          description:
            "[ONE NATURAL SENTENCE ABOUT WHAT WAS BUILT OR TESTED]",
          cta: "Watch →"
        },
        {
          type: "Video",
          typeLabel: "Video",
          title: "[REAL VIDEO TITLE]",
          description:
            "[ONE NATURAL SENTENCE ABOUT WHAT CHANGED FROM THE FIRST EXPERIMENT]",
          cta: "Watch →"
        },
        {
          type: "Experiment",
          typeLabel: "Experiment",
          title: "Building this portfolio",
          description:
            "Treating my own portfolio like a product, using AI to support research, writing, design, and development.",
          cta: "Read →"
        }
      ]
    },
    labPreview: {
      label: "Lab",
      headline: "Things I'm trying, building, and learning.",
      description:
        "Small experiments, videos, and notes from learning how AI changes the way products can be made.",
      cta: "Visit the Lab →"
    },
    aboutPreview: {
      label: "About",
      headline:
        "I started in design. Product changed how I saw the whole system.",
      body:
        "Over the past seven years, I've worked across different products, industries, and stages of growth. The context changed, but the work kept coming back to the same things: understanding the problem, making a choice, and helping a team move forward.",
      journeyLabel: "Journey",
      cta: "More About Me →"
    },
    statement: "Good products begin with good decisions.\nEverything else comes after.",
    work: {
      label: "Work",
      title: "Selected Work",
      description:
        "A few projects that reflect how I approach product problems.",
      visuals: {
        nftSteps: [
          "Wallet",
          "Marketplace",
          "NFT",
          "Locked Asset",
          "Transfer Result"
        ],
        workflowRows: [
          {
            label: "PRD",
            body: "Define audience, evidence, and page intent."
          },
          {
            label: "AI Build",
            body: "Shape components, critique layout, fix issues."
          },
          {
            label: "Ship",
            body: "Validate routes, polish content, prepare iteration."
          }
        ]
      },
      projects: {
        fanfanme: {
          capability: "Rapid Validation",
          title: "干饭咩",
          headline: "Turning an everyday decision\ninto a simple AI product.",
          description:
            "Built in just over one day to see whether AI could make everyday decisions a little easier.",
          context:
            "A lightweight meal recommendation product built for everyday office decisions.",
          meta: [
            { label: "Role", value: "Independent Product Builder" },
            { label: "Scope", value: "Idea to working product" },
            { label: "Platform", value: "WeChat Mini Program" }
          ],
          outcome: "Submitted through the WeChat review process.",
          cta: "Read Case →"
        },
        nft: {
          capability: "System Thinking",
          title: "NFT Marketplace",
          headline: "Designing trust\ninside a complex trading system.",
          description:
            "Redesigned the marketplace experience to make asset ownership and transactions easier to understand.",
          context:
            "A trading flow involving NFT ownership, locked assets, and token transfers.",
          meta: [
            { label: "Role", value: "[REAL ROLE]" },
            { label: "Scope", value: "[REAL OWNERSHIP]" },
            { label: "Outcome", value: "[VERIFIED RESULT]" }
          ],
          outcome: "[VERIFIED RESULT]",
          cta: "Read Case →"
        },
        bonnie: {
          capability: "AI Workflow",
          title: "bonnie.yun",
          headline: "Building my own portfolio\nlike a product.",
          description: "An ongoing experiment in building products with AI.",
          context:
            "Rethinking how a personal website can show both professional work and ongoing learning.",
          meta: [
            { label: "Role", value: "Product Owner and Builder" },
            { label: "Scope", value: "Information architecture to launch" },
            { label: "Status", value: "In progress" }
          ],
          outcome: "A live portfolio with ongoing iteration.",
          cta: "Read Case →"
        }
      }
    },
    contact: {
      label: "NEXT",
      headline: "Looking for the next product worth building.",
      description:
        "I'm currently exploring AI Product Manager opportunities where product experience, hands-on building and AI-assisted workflows can all be part of the role.",
      links: {
        email: "Email Me",
        linkedIn: "LinkedIn",
        resume: "Download Résumé"
      }
    },
    footer: {
      statement: "Build with AI. Build it your way.",
      credit: "Designed, written, and built by Bonnie.",
      copyright: "© 2026 Bonnie Yun"
    },
    pages: {
      work: {
        label: "Work",
        headline: "Products, systems, and decisions.",
        body: "A selection of work across consumer products, Web3, and AI.",
        featuredTitle: "Featured Projects",
        additionalTitle: "Additional Experience or Projects",
        additionalPlaceholder:
          "[PROJECT NAME] · [CAPABILITY] · [VERIFIED ROLE OR RESULT]",
        contactCta: "Contact Bonnie →"
      },
      lab: {
        label: "Vibe Coding",
        headline: "A record of learning how product work changes when I can build more of it myself.",
        body:
          "These entries are not meant to look like finished case studies. They document experiments, working notes and the practical questions that appear when AI becomes part of product delivery.",
        sourceLabel: "Source",
        back: "← Back to Lab",
        entries: {
          "vibe-coding-01": {
            typeLabel: "Video",
            title: "[REAL VIDEO TITLE]",
            description:
              "[ONE NATURAL SENTENCE ABOUT WHAT WAS BUILT OR TESTED]",
            cta: "Watch →",
            detail:
              "This entry is reserved for the first Vibe Coding video. Add the real title, date, video URL, and a concrete note about what was built or tested."
          },
          "vibe-coding-02": {
            typeLabel: "Video",
            title: "[REAL VIDEO TITLE]",
            description:
              "[ONE NATURAL SENTENCE ABOUT WHAT CHANGED FROM THE FIRST EXPERIMENT]",
            cta: "Watch →",
            detail:
              "This entry is reserved for the second Vibe Coding video. Add the real title, date, video URL, and a specific note about what changed from the first experiment."
          },
          "bonnie-yun": {
            typeLabel: "Experiment",
            title: "Building bonnie.yun",
            description:
              "Rethinking how a personal website can show both professional work and ongoing learning.",
            cta: "Read →",
            detail:
              "This experiment treats the portfolio as a product: defining the audience, clarifying the information architecture, shaping the content, and iterating on the build."
          }
        }
      },
      about: {
        intro: {
          label: "About",
          headline:
            "I didn't leave product management for AI. AI expanded what product management could mean for me.",
          paragraphs: [
            "I spent seven years moving from design into product management, then through consumer products, insurance technology, Web3 and AI-assisted product development.",
            "The through-line is not a sudden switch into AI. It is a wider product role: defining what should be built, understanding the system around it, and now using AI to build and test more of the product loop myself."
          ]
        },
        journeyTitle: "Design to Product",
        journey: [
          {
            label: "Design",
            body:
              "I started close to the user interface, learning how product details shape understanding and behavior."
          },
          {
            label: "Product",
            body:
              "Product work expanded the question from how something should look to what should be built and why."
          },
          {
            label: "Web3",
            body:
              "Web3 work made system rules, ownership, and transaction outcomes part of the user experience."
          },
          {
            label: "AI",
            body:
              "AI is now part of how I explore, prototype, and test ideas while keeping product decisions grounded."
          }
        ],
        experienceTitle: "Professional Experience",
        howTitle: "How I Work",
        principles: [
          {
            title: "Start with the real problem.",
            body:
              "I try to understand the user situation before deciding what the product should do."
          },
          {
            title: "Make the next decision clear.",
            body:
              "Good product work often means reducing the number of open questions a team has to carry."
          },
          {
            title: "Build enough to learn.",
            body:
              "I prefer working prototypes and concrete artifacts over long debates that cannot be tested."
          },
          {
            title: "Keep the team moving.",
            body:
              "I care about making decisions visible so design, engineering, and business partners can move together."
          }
        ],
        educationTitle: "Education",
        currentTitle: "Current Goal",
        currentBody:
          "I am looking for AI Product Manager roles where product experience, system thinking, hands-on building and AI-assisted workflows can be part of the same job.",
        contactCta: "Get in touch →"
      }
    },
    caseStudy: {
      back: "← Back to Work",
      metaLabels: {
        role: "Role",
        timeline: "Timeline",
        team: "Team",
        platform: "Platform",
        outcome: "Outcome",
        responsibilities: "Responsibilities"
      },
      sections: {
        overview: "Project Overview",
        context: "Context",
        roleScope: "Role and Scope",
        outcome: "Outcome",
        problem: "The Problem",
        proves: "What this proves",
        decisions: "Key Decisions",
        execution: "Execution",
        result: "Result",
        reflection: "Reflection",
        nextProject: "Next Project"
      },
      projects: {
        fanfanme: {
          projectLabel: "AI Side Project · WeChat Mini Program",
          title: "干饭咩",
          valueProposition:
            "Turning an everyday decision into a working AI product.",
          role: "Solo Product Manager",
          timeline: "Built in approximately 30 hours",
          team: "Independent project",
          platform: "WeChat Mini Program",
          outcome: "Built and submitted for WeChat review.",
          productType: "WeChat Mini Program",
          responsibilities: [
            "Product strategy",
            "UX writing",
            "Interface design",
            "AI-assisted build",
            "Testing and submission"
          ],
          overview:
            "A lightweight decision tool that turns time, taste, and dining context into a practical meal suggestion for office workers.",
          context:
            "A meal recommendation Mini Program for office workers who do not want to spend time deciding what to eat.",
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
          execution:
            "The build focused on a complete interaction path: gather a small amount of context, generate a useful recommendation, and keep the result easy to act on.",
          result:
            "The product reached a working state and was submitted through the WeChat review process. No public usage data is available yet.",
          aiWorkflow:
            "AI helped compress research synthesis, UI exploration, code generation, copy iteration, and QA into a short build loop. Product judgment still decided what stayed out of scope.",
          reflection: {
            title: "The hardest part\nwas choosing\nwhat not to build.",
            body:
              "AI made implementation faster, but product judgment still determined the scope."
          },
          nextProject: "NFT Marketplace"
        },
        nft: {
          projectLabel: "Web3 Product · Trading Experience",
          title: "NFT Marketplace",
          valueProposition:
            "Designing trust inside a complex trading system.",
          role: "Product Manager",
          timeline: "Marketplace product cycle",
          team: "[TEAM]",
          platform: "NFT trading experience",
          outcome: "[VERIFIED RESULT]",
          productType: "NFT trading experience",
          responsibilities: [
            "Product definition",
            "System flow design",
            "Transaction UX",
            "Stakeholder alignment"
          ],
          overview:
            "A marketplace experience designed to make NFT ownership, locked rewards, and transfer rules understandable before a user confirms a transaction.",
          context:
            "The product involved NFT ownership, locked AVO assets, marketplace transactions, and transfer rules.",
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
          execution:
            "The flow made ownership and transfer states visible before confirmation, so users could understand what would change after a transaction.",
          result:
            "[VERIFIED RESULT]",
          aiWorkflow:
            "AI was used as a thinking partner to pressure-test edge cases, summarize transaction states, and convert system rules into user-facing interface language.",
          reflection: {
            title: "Trust is built\nbefore confirmation.",
            body:
              "For complex systems, the product work is not to expose every rule. It is to make the consequences of each action legible at the right moment."
          },
          nextProject: "bonnie.yun"
        },
        bonnie: {
          projectLabel: "Portfolio · AI Workflow",
          title: "bonnie.yun",
          valueProposition: "Building the portfolio as a product.",
          role: "Product Owner and Builder",
          timeline: "Sprint-based iteration",
          team: "Independent project",
          platform: "Next.js portfolio website",
          outcome: "Live website in active iteration.",
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
          context:
            "The site is designed for recruiters, founders, hiring managers, and product leaders evaluating Bonnie for product roles.",
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
          execution:
            "The build combines information architecture, writing, interface direction, implementation, and continuous content iteration.",
          result:
            "The site is live and continues to evolve as Bonnie adds verified experience, project outcomes, and lab entries.",
          aiWorkflow:
            "The working process combined PRD writing, component implementation, design critique, debugging, and sprint-based refinement with AI assistance.",
          reflection: {
            title: "The portfolio\nis also the product.",
            body:
              "Every layout and content decision is meant to demonstrate the same product judgment the site describes."
          },
          nextProject: "干饭咩"
        }
      }
    }
  },
  zh: {
    meta: {
      homeTitle: "Bonnie Yun | AI 产品经理",
      homeDescription:
        "Bonnie 是一名 AI 产品经理，用产品思考、务实执行与恰到好处的 AI 构建数字产品。"
    },
    nav: {
      home: "首页",
      experience: "经历",
      work: "作品",
      lab: "实验室",
      ai: "AI 工作流",
      vibe: "Vibe Coding",
      about: "关于",
      resume: "简历",
      linkedIn: "LinkedIn",
      menu: "菜单",
      close: "关闭",
      homeLabel: "返回 Bonnie 首页",
      languageLabel: "切换语言",
      themeLabel: "切换主题",
      themeValues: {
        system: "系统",
        light: "浅色",
        dark: "深色"
      }
    },
    hero: {
      eyebrow: "产品经理 · AI 工作流 · 独立构建者",
      name: "Bonnie Yun",
      title: "产品经理",
      headline: "与 AI 共创，\n以自己的方式构建。",
      description:
        "我是 Bonnie，一名拥有 7 年产品与设计经验的产品经理，经历过消费产品、保险科技、Web3 与 AI。\n\n现在，从调研、产品定义、原型，到开发和交付，我的整个产品工作流都由 AI 深度参与。\n\n我不再只定义产品，\n也开始亲手把它做出来。",
      cta: "查看我的工作方式",
      experienceCta: "查看经历",
      resumeCta: "下载简历 ↗"
    },
    snapshot: {
      label: "一眼了解",
      headline: "在不同阶段与行业中积累的产品经验。",
      stats: {
        years: "产品年限",
        industries: "行业经验",
        zeroToOne: "产品经验",
        background: "背景"
      },
      capabilitiesLabel: "能力方向",
      capabilities: [
        "产品策略",
        "0→1 产品开发",
        "系统思考",
        "快速验证",
        "跨职能推进"
      ]
    },
    experiencePreview: {
      label: "经历",
      headline: "一段由设计、产品与技术变化塑造的职业路径。",
      description:
        "我从设计进入产品管理，经历过消费产品、Web3，以及近期的 AI 产品方向。",
      cta: "查看完整经历 →",
      placeholderNote:
        "以下职业细节使用 placeholder，等待 Bonnie 补充已核实的公司、角色与结果信息。"
    },
    about: {
      label: "方法",
      headline: "不同产品，\n不同行业，\n同一种思考方式。",
      paragraphs: [
        "我的职业生涯始于设计，随后转向产品管理。",
        "后来我在消费产品、Web3 和 AI 领域工作过。行业不同，用户不同，约束不同，但目标始终一致：构建真正解决问题的产品。",
        "AI 改变了我的工作方式，但没有改变我的思考方式。好的产品依然始于理解人、做出审慎判断，并在迭代中学习。"
      ],
      evolutionLabel: "路径",
      evolutionPath: "设计 → 产品 → Web3 → AI"
    },
    exploring: {
      label: "探索",
      headline: "最近我在探索什么。",
      description:
        "我喜欢尝试新工具，记录学到的东西，也分享过程中那些小小的发现。",
      items: [
        {
          type: "Video",
          typeLabel: "视频",
          title: "[REAL VIDEO TITLE]",
          description: "[ONE NATURAL SENTENCE ABOUT WHAT WAS BUILT OR TESTED]",
          cta: "观看 →"
        },
        {
          type: "Video",
          typeLabel: "视频",
          title: "[REAL VIDEO TITLE]",
          description:
            "[ONE NATURAL SENTENCE ABOUT WHAT CHANGED FROM THE FIRST EXPERIMENT]",
          cta: "观看 →"
        },
        {
          type: "Experiment",
          typeLabel: "实验",
          title: "Building this portfolio",
          description:
            "把自己的作品集当作产品来做，用 AI 辅助研究、写作、设计与开发。",
          cta: "阅读 →"
        }
      ]
    },
    labPreview: {
      label: "实验室",
      headline: "我正在尝试、构建和学习的东西。",
      description:
        "一些小实验、视频和笔记，记录我如何理解 AI 对产品构建方式的影响。",
      cta: "进入实验室 →"
    },
    aboutPreview: {
      label: "关于",
      headline: "我从设计开始。产品让我看到更完整的系统。",
      body:
        "过去七年里，我经历过不同产品、行业与增长阶段。场景一直在变，但工作始终回到几件事：理解问题、做出选择，并帮助团队向前推进。",
      journeyLabel: "路径",
      cta: "了解更多 →"
    },
    statement: "好的产品，始于好的决策。\n其余的都在之后。",
    work: {
      label: "作品",
      title: "精选作品",
      description: "几个项目，呈现我如何面对不同的产品问题。",
      visuals: {
        nftSteps: ["钱包", "交易市场", "NFT", "锁定资产", "转移结果"],
        workflowRows: [
          {
            label: "PRD",
            body: "定义受众、证据结构与页面目标。"
          },
          {
            label: "AI 构建",
            body: "协作生成组件、审视布局并修复问题。"
          },
          {
            label: "发布",
            body: "验证路由、打磨内容并准备下一轮迭代。"
          }
        ]
      },
      projects: {
        fanfanme: {
          capability: "快速验证",
          title: "干饭咩",
          headline: "把一个日常选择，\n变成简单的 AI 产品。",
          description:
            "在一天多一点的时间里完成构建，看看 AI 是否能让日常决策变得轻松一点。",
          context: "一个面向办公室日常决策的轻量级用餐推荐产品。",
          meta: [
            { label: "角色", value: "独立产品构建者" },
            { label: "范围", value: "从想法到可运行产品" },
            { label: "平台", value: "微信小程序" }
          ],
          outcome: "已提交微信审核流程。",
          cta: "查看案例 →"
        },
        nft: {
          capability: "系统思考",
          title: "NFT 交易市场",
          headline: "在复杂交易系统中，\n设计可理解的信任。",
          description:
            "重新设计交易市场体验，让资产所有权与交易过程更容易理解。",
          context: "一个涉及 NFT 所有权、锁定资产与代币转移的交易流程。",
          meta: [
            { label: "角色", value: "[REAL ROLE]" },
            { label: "范围", value: "[REAL OWNERSHIP]" },
            { label: "结果", value: "[VERIFIED RESULT]" }
          ],
          outcome: "[VERIFIED RESULT]",
          cta: "查看案例 →"
        },
        bonnie: {
          capability: "AI 工作流",
          title: "bonnie.yun",
          headline: "像做产品一样，\n构建自己的作品集。",
          description: "一个持续进行中的 AI 产品构建实验。",
          context: "重新思考个人网站如何同时呈现专业作品与持续学习。",
          meta: [
            { label: "角色", value: "产品负责人和构建者" },
            { label: "范围", value: "从信息架构到上线" },
            { label: "状态", value: "持续迭代中" }
          ],
          outcome: "一个正在持续迭代的在线作品集。",
          cta: "查看案例 →"
        }
      }
    },
    contact: {
      label: "下一步",
      headline: "寻找下一个值得构建的产品。",
      description:
        "我正在寻找 AI 产品经理相关机会，希望将成熟的产品经验、亲手构建能力与 AI 工作流带进同一个岗位。",
      links: {
        email: "给我邮件",
        linkedIn: "LinkedIn",
        resume: "下载简历"
      }
    },
    footer: {
      statement: "与 AI 共创，以自己的方式构建。",
      credit: "由 Bonnie 设计、撰写与开发。",
      copyright: "© 2026 Bonnie Yun"
    },
    pages: {
      work: {
        label: "作品",
        headline: "产品、系统与决策。",
        body: "一些横跨消费产品、Web3 与 AI 的工作项目。",
        featuredTitle: "精选项目",
        additionalTitle: "更多经历或项目",
        additionalPlaceholder:
          "[PROJECT NAME] · [CAPABILITY] · [VERIFIED ROLE OR RESULT]",
        contactCta: "联系 Bonnie →"
      },
      lab: {
        label: "Vibe Coding",
        headline: "记录当我能亲手构建更多产品环节时，产品工作发生了什么变化。",
        body:
          "这里不是完成态案例集，而是实验、工作笔记，以及当 AI 进入产品交付后出现的具体问题。",
        sourceLabel: "来源",
        back: "← 返回实验室",
        entries: {
          "vibe-coding-01": {
            typeLabel: "视频",
            title: "[REAL VIDEO TITLE]",
            description: "[ONE NATURAL SENTENCE ABOUT WHAT WAS BUILT OR TESTED]",
            cta: "观看 →",
            detail:
              "这个条目为第一支 Vibe Coding 视频预留。请补充真实标题、日期、视频链接，以及具体构建或测试了什么。"
          },
          "vibe-coding-02": {
            typeLabel: "视频",
            title: "[REAL VIDEO TITLE]",
            description:
              "[ONE NATURAL SENTENCE ABOUT WHAT CHANGED FROM THE FIRST EXPERIMENT]",
            cta: "观看 →",
            detail:
              "这个条目为第二支 Vibe Coding 视频预留。请补充真实标题、日期、视频链接，以及它相比第一次实验发生了什么变化。"
          },
          "bonnie-yun": {
            typeLabel: "实验",
            title: "Building bonnie.yun",
            description: "重新思考个人网站如何同时呈现专业作品与持续学习。",
            cta: "阅读 →",
            detail:
              "这个实验把作品集当作产品来做：定义受众、梳理信息架构、组织内容，并持续迭代实现。"
          }
        }
      },
      about: {
        intro: {
          label: "关于",
          headline: "我没有离开产品去追逐 AI，AI 只是扩大了我作为产品经理能够做到的事情。",
          paragraphs: [
            "我花了七年时间从设计进入产品管理，经历消费产品、保险科技、Web3，以及 AI 辅助产品开发。",
            "这不是突然转向 AI，而是产品角色边界变宽了：定义应该做什么、理解系统如何运转，并借助 AI 亲手构建和验证更多产品环节。"
          ]
        },
        journeyTitle: "从设计到产品",
        journey: [
          {
            label: "设计",
            body: "我从用户界面附近开始工作，学习产品细节如何影响理解和行为。"
          },
          {
            label: "产品",
            body: "产品工作把问题从“如何呈现”扩展到“为什么要做、应该做什么”。"
          },
          {
            label: "Web3",
            body:
              "Web3 让我更关注系统规则、资产所有权和交易结果如何成为用户体验的一部分。"
          },
          {
            label: "AI",
            body:
              "AI 正在进入我的探索、原型和测试过程，但产品决策仍需要保持具体和有边界。"
          }
        ],
        experienceTitle: "职业经历",
        howTitle: "我的工作方式",
        principles: [
          {
            title: "先看真实问题。",
            body: "我会先理解用户所处的情境，再判断产品应该做什么。"
          },
          {
            title: "让下一个决策更清楚。",
            body: "很多产品工作，是帮助团队减少悬而未决的问题。"
          },
          {
            title: "构建到足够学习。",
            body: "我更相信可运行原型和具体产物，而不是无法验证的长时间讨论。"
          },
          {
            title: "让团队继续向前。",
            body:
              "我在意让决策变得可见，这样设计、工程和业务伙伴可以一起推进。"
          }
        ],
        educationTitle: "教育背景",
        currentTitle: "当前目标",
        currentBody:
          "我正在寻找 AI 产品经理相关机会，希望产品经验、系统思考、亲手构建能力与 AI 辅助工作流可以成为同一个岗位的一部分。",
        contactCta: "联系我 →"
      }
    },
    caseStudy: {
      back: "← 返回作品",
      metaLabels: {
        role: "角色",
        timeline: "周期",
        team: "团队",
        platform: "平台",
        outcome: "结果",
        responsibilities: "负责内容"
      },
      sections: {
        overview: "项目概览",
        context: "背景",
        roleScope: "角色与范围",
        outcome: "结果",
        problem: "问题",
        proves: "这证明了什么",
        decisions: "关键决策",
        execution: "执行",
        result: "结果",
        reflection: "反思",
        nextProject: "下一个项目"
      },
      projects: {
        fanfanme: {
          projectLabel: "AI 个人项目 · 微信小程序",
          title: "干饭咩",
          valueProposition: "把一个日常选择变成真正可用的 AI 产品。",
          role: "独立产品经理",
          timeline: "约 30 小时完成构建",
          team: "独立项目",
          platform: "微信小程序",
          outcome: "已构建并提交微信审核。",
          productType: "微信小程序",
          responsibilities: [
            "产品策略",
            "体验文案",
            "界面设计",
            "AI 辅助开发",
            "测试与提审"
          ],
          overview:
            "一个轻量级决策工具，根据时间、口味与用餐场景，为办公室人群生成实际可执行的用餐建议。",
          context:
            "一个面向办公室人群的用餐推荐小程序，帮助不想花太多时间纠结吃什么的用户做出选择。",
          problem:
            "午餐选择看似很小，却经常成为反复出现的决策摩擦。这个产品把范围收窄到一个问题：帮助用户更快从犹豫走向一个合理选择。",
          proves: {
            statement: "把模糊问题\n转化为产品。",
            supportingCopy: "从问题定义到 MVP 交付，\n使用 AI 辅助工作流推进。",
            proof: [
              {
                label: "Ownership",
                statement: "独立完成产品设计、构建、测试，并推进到微信审核准备。"
              },
              {
                label: "AI workflow",
                statement:
                  "在产品梳理、界面探索、实现与迭代中持续使用 AI 协作。"
              },
              {
                label: "Delivery",
                statement:
                  "通过足够聚焦的范围管理，把模糊想法推进成可运行产品。"
              }
            ]
          },
          decisions: [
            {
              title: "把问题缩小到选择瞬间。",
              description:
                "产品聚焦在做决定的那一刻，而不是扩展成完整的美食发现市场，因此在办公室场景里更直接、更可用。"
            },
            {
              title: "只询问会改变结果的信息。",
              description:
                "输入被限制在时间、口味和用餐场景，只保留真正会影响推荐结果的信息。"
            },
            {
              title: "让 AI 加速执行，而不是模糊判断。",
              description:
                "AI 加速原型和实现，但范围、约束和用户体验判断仍由产品判断决定。"
            }
          ],
          solution:
            "MVP 将少量场景输入转化为可执行推荐，并让结果页聚焦行动，而不是让用户继续无限浏览。",
          execution:
            "构建重点放在完整交互路径：收集少量上下文、生成可用建议，并让结果容易执行。",
          result:
            "产品已达到可运行状态，并提交微信审核流程。目前还没有公开使用数据。",
          aiWorkflow:
            "AI 帮助压缩研究整理、界面探索、代码生成、文案迭代和 QA 的周期；产品判断决定哪些内容必须暂时不做。",
          reflection: {
            title: "最难的部分，\n是决定什么不做。",
            body: "AI 让实现更快，但产品判断仍然决定范围。"
          },
          nextProject: "NFT 交易市场"
        },
        nft: {
          projectLabel: "Web3 产品 · 交易体验",
          title: "NFT 交易市场",
          valueProposition: "在复杂交易系统中设计信任。",
          role: "产品经理",
          timeline: "交易市场产品周期",
          team: "[TEAM]",
          platform: "NFT 交易体验",
          outcome: "[VERIFIED RESULT]",
          productType: "NFT 交易体验",
          responsibilities: [
            "产品定义",
            "系统流程设计",
            "交易体验",
            "协作对齐"
          ],
          overview:
            "一个 NFT 交易体验，帮助用户在确认交易前理解所有权、锁定奖励与转移规则。",
          context:
            "产品涉及 NFT 所有权、锁定 AVO 资产、交易市场流程与转移规则。",
          problem:
            "核心挑战是信任。用户需要理解自己拥有什么、哪些价值被锁定在资产中，以及转移后会发生什么，而不需要阅读智能合约逻辑。",
          decisions: [
            {
              title: "转移所有权，同时保留奖励关系。",
              description:
                "当 NFT 转移给新所有者时，与该 NFT 绑定的未解锁 AVO 也需要随资产一起转移，确保交易的经济含义保持完整。"
            },
            {
              title: "隐藏复杂性。",
              description:
                "用户需要理解结果，而不是实现细节。界面将合约行为转译为清晰的所有权和转移状态。"
            },
            {
              title: "为信任设计。",
              description:
                "每一次交易都需要在确认前说明即将发生的变化，包括资产所有权、锁定价值和最终转移结果。"
            }
          ],
          solution:
            "体验将市场浏览与交易确认拆开，并用清晰流程串联钱包、市场、NFT、锁定资产与转移结果。",
          execution:
            "流程在确认前展示所有权和转移状态，让用户知道交易之后会发生什么变化。",
          result:
            "[VERIFIED RESULT]",
          aiWorkflow:
            "AI 被用作思考伙伴，用来压力测试边界情况、总结交易状态，并把系统规则转换成用户可理解的界面语言。",
          reflection: {
            title: "信任，\n在确认之前建立。",
            body:
              "复杂系统中的产品工作，不是暴露每一条规则，而是在正确时刻让行动后果变得清楚。"
          },
          nextProject: "bonnie.yun"
        },
        bonnie: {
          projectLabel: "作品集 · AI 工作流",
          title: "bonnie.yun",
          valueProposition: "把作品集当作产品来构建。",
          role: "产品负责人和构建者",
          timeline: "基于 Sprint 持续迭代",
          team: "独立项目",
          platform: "Next.js 作品集网站",
          outcome: "网站已上线并持续迭代。",
          productType: "个人作品集网站",
          responsibilities: [
            "信息架构",
            "内容策略",
            "视觉方向",
            "AI 协作",
            "前端实现"
          ],
          overview:
            "这个作品集被当作面向招聘经理和产品负责人的产品来构建，目标是清楚呈现我的思考、判断和构建方式。",
          context:
            "网站面向招聘者、创始人、招聘经理与产品负责人，用于评估 Bonnie 的产品角色匹配度。",
          problem:
            "作品集很容易变成成果集合。这里真正的产品问题，是建立一套证据系统，让产品判断变得可见，同时不增加阅读负担。",
          decisions: [
            {
              title: "先展示证据，而不是简历。",
              description:
                "首页优先呈现作品和能力证据，再补充更深层的职业背景。"
            },
            {
              title: "为招聘场景的快速浏览设计。",
              description:
                "招聘经理应能在几次滚动内理解定位、项目范围和下一步行动。"
            },
            {
              title: "把 AI 当作构建伙伴。",
              description:
                "AI 支持结构梳理、实现、批判和迭代，但范围与层级仍由产品判断决定。"
            }
          ],
          solution:
            "网站围绕能力证据组织内容：快速验证、系统思考和 AI 工作流。",
          execution:
            "构建过程结合信息架构、写作、界面方向、前端实现与持续内容迭代。",
          result:
            "网站已上线，并会随着 Bonnie 补充已核实经历、项目结果与实验室内容继续更新。",
          aiWorkflow:
            "整个过程结合 PRD 写作、组件实现、设计反馈、调试和 Sprint 式迭代，并持续使用 AI 协作。",
          reflection: {
            title: "作品集，\n本身也是产品。",
            body: "每一个布局和内容决策，都在展示网站所描述的产品判断。"
          },
          nextProject: "干饭咩"
        }
      }
    }
  }
};
