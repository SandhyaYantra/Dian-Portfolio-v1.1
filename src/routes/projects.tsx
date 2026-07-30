import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/portfolio";

const title = "Projects — Dian Septio";
const description =
  "Web projects built by Dian Septio: prep planning, inventory tracking, learning tools and layout experiments in React and TypeScript.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work that documents progress."
        description="Practical builds shaped by real workflows — each one a step deeper into engineering fundamentals."
      />
      <section className="mx-auto max-w-7xl pl-5 pr-5 pb-24 sm:pl-8 sm:pr-8 lg:pl-28 md:pb-32">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
