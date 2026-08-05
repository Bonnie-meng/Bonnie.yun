import { stats } from "@/data/home";
import { Container } from "@/components/ui/Container";

export function StatsStrip() {
  return (
    <section aria-label="Product outcomes" className="py-8 sm:py-10">
      <Container>
        <div className="grid grid-cols-2 border-y border-line bg-white/35 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-line px-4 py-7 odd:border-r md:border-r md:last:border-r-0 sm:px-6"
            >
              <p className="font-serif text-4xl font-medium leading-none text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-36 text-sm font-medium leading-5 text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
