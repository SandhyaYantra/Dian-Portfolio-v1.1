import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Timeline } from "@/components/site/Timeline";
import { highlights } from "@/data/portfolio";

const title = "My Story — From Kitchen to Code | Dian Septio";
const description =
  "How Dian Septio moved from professional kitchen work into software development: four stages of documented technical growth.";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="My Story"
        title="From Kitchen to Code."
        description="Professional growth documentation: the transferable disciplines that carried from a working kitchen into software development."
      />
      <section className="mx-auto max-w-7xl pl-5 pr-5 pb-20 sm:pl-8 sm:pr-8 lg:pl-28">
        <Timeline />
      </section>
      <section className="mx-auto max-w-7xl pl-5 pr-5 pb-24 sm:pl-8 sm:pr-8 lg:pl-28 md:pb-32">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>
    </>
  );
}
