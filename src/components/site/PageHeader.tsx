export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mx-auto max-w-7xl pl-5 pr-5 pt-32 pb-14 sm:pl-8 sm:pr-8 lg:pl-28 md:pt-44 md:pb-20">
      <div className="rise-in max-w-3xl">
        <p className="mb-5 text-xs tracking-[0.28em] text-primary uppercase">{eyebrow}</p>
        <h1 className="text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </header>
  );
}
