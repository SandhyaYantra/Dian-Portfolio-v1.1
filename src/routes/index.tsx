import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Timeline } from "@/components/site/Timeline";
import { ProjectCard } from "@/components/site/ProjectCard";
import { highlights, profile, projects } from "@/data/portfolio";

const title = "Dian Septio — Frontend Developer & Self-Taught Technologist";
const description =
  "From kitchen craftsmanship to digital creation. Dian Septio builds web interfaces with discipline, continuous learning and a documented growth path.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl pl-5 pr-5 py-24 sm:pl-8 sm:pr-8 lg:pl-28 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About"
              title="From hands-on craftsmanship to digital craftsmanship."
              description="Six years in professional kitchens taught me process, precision and composure. I now apply that same standard to building software — studying fundamentals deliberately and shipping work I can defend."
            />
            <Link
              to="/story"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:text-foreground"
            >
              Read the full journey
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((item) => (
              <div key={item.label} className="glass lift rounded-3xl p-6 shadow-soft">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="font-display mt-4 text-2xl font-semibold">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pl-5 pr-5 py-16 sm:pl-8 sm:pr-8 lg:pl-28 md:py-24">
        <SectionHeading
          eyebrow="Growth"
          title="From Kitchen to Code"
          description="A documented progression rather than a career story — four stages of deliberate technical growth."
        />
        <div className="mt-14">
          <Timeline />
        </div>
      </section>

      <section className="mx-auto max-w-7xl pl-5 pr-5 py-16 sm:pl-8 sm:pr-8 lg:pl-28 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built while learning."
            description="Each build solves a problem I understood first-hand, then rebuilt in code."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground"
          >
            All projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pl-5 pr-5 py-16 sm:pl-8 sm:pr-8 lg:pl-28 md:py-28">
        <div className="glass rounded-4xl px-8 py-16 text-center shadow-soft sm:px-14">
          <h2 className="text-3xl font-semibold sm:text-4xl">Let's build something meaningful.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Open to frontend roles, collaborations and thoughtful product work.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-card-hover"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
