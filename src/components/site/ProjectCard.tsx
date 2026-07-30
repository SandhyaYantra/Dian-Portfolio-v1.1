import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass lift group overflow-hidden rounded-3xl shadow-soft">
      <div className="aspect-16/10 overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          loading="lazy"
          width={1280}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-7 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-foreground"
        >
          View case study
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
