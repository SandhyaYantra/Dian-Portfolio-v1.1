import { timeline } from "@/data/portfolio";

export function Timeline() {
  return (
    <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <span
        aria-hidden="true"
        className="absolute top-2 left-[7px] hidden h-px w-full bg-border md:block"
      />
      <span
        aria-hidden="true"
        className="absolute top-0 left-[7px] h-full w-px bg-border md:hidden"
      />
      {timeline.map((item) => (
        <li key={item.stage} className="relative pl-8 md:pt-10 md:pl-0">
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 size-3.5 rounded-full border border-primary bg-background md:top-0 md:left-0"
          />
          <p className="text-xs tracking-[0.24em] text-primary uppercase">{item.stage}</p>
          <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
