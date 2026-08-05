import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeader title="Selected work" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={cn(
                "group overflow-hidden rounded-[1.5rem] border border-line bg-white/62 shadow-sm transition hover:-translate-y-1 hover:shadow-soft",
                project.featured ? "lg:row-span-2" : ""
              )}
            >
              <div
                className={cn(
                  "relative overflow-hidden border-b border-line bg-soft",
                  project.featured ? "aspect-[1.42]" : "aspect-[1.85]"
                )}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} abstract project placeholder`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={project.featured}
                />
              </div>

              <div className={cn("p-6 sm:p-7", project.featured ? "lg:p-8" : "")}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {project.category}
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-3xl font-medium leading-tight text-ink">
                    {project.title}
                  </h3>
                  {project.englishLabel ? (
                    <p className="text-sm font-medium text-muted">
                      {project.englishLabel}
                    </p>
                  ) : null}
                </div>
                <p className="mt-5 text-base leading-7 text-muted">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm font-medium leading-6 text-ink"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button
                    href={project.href}
                    variant="ghost"
                    icon={ArrowUpRight}
                    className="px-0"
                  >
                    {project.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
