import { Eye } from "lucide-react";

export function CertificateCard({
  title,
  org,
  date,
}: {
  title: string;
  org: string;
  date: string;
}) {
  return (
    <article className="glass lift flex flex-col justify-between rounded-3xl p-7 shadow-soft">
      <div>
        <p className="text-xs tracking-[0.2em] text-primary uppercase">{org}</p>
        <h3 className="mt-4 text-lg leading-snug font-semibold">{title}</h3>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{date}</span>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
        >
          <Eye className="size-3.5" aria-hidden="true" />
          Preview
        </button>
      </div>
    </article>
  );
}
