"use client";

import { motion, useReducedMotion } from "framer-motion";

const identityItems = [
  {
    text: "7 Years Experience",
    emphasis: false,
    className: "order-2 md:order-1"
  },
  {
    text: "Design → Product → Web3 → AI",
    emphasis: true,
    className: "order-1 md:order-2 md:text-center"
  },
  {
    text: "Building with AI",
    emphasis: false,
    className: "order-3 md:order-3 md:text-right"
  }
];

export function IdentityStrip() {
  const reduceMotion = useReducedMotion();

  const content = (
    <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
      <div className="grid gap-4 py-8 md:grid-cols-3 md:gap-10 md:py-9">
        {identityItems.map((item) => (
          <p
            key={item.text}
            className={[
              "text-base leading-6 tracking-[-0.01em]",
              item.emphasis
                ? "font-semibold text-ink"
                : "font-medium text-stone/70",
              item.className
            ].join(" ")}
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );

  if (reduceMotion) {
    return (
      <section className="border-y border-hairline/70" aria-label="Identity">
        {content}
      </section>
    );
  }

  return (
    <motion.section
      className="border-y border-hairline/70"
      aria-label="Identity"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.section>
  );
}
