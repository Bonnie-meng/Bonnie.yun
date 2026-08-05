import { capabilities } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const paragraphs = [
  "I started my career building consumer and growth products, then moved into Web3, where I worked on NFT marketplaces, DeFi, DEX, insurance, and ecosystem products.",
  "AI changed the way I work. Today, I collaborate with AI throughout the product lifecycle—not only to analyze and document ideas, but to prototype, build, test, and ship them.",
  "I am interested in how product managers can use AI to test ideas sooner while still making careful product decisions."
];

export function AboutPreview() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <SectionHeader title="Product thinking, amplified by AI." />

          <div>
            <div className="space-y-6 text-lg leading-9 text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-line bg-white/55 p-5"
                >
                  <p className="text-xs font-semibold text-lilac">
                    {capability.index}
                  </p>
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
