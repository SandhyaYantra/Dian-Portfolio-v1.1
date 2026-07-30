import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CertificateCard } from "@/components/site/CertificateCard";
import { certificates } from "@/data/portfolio";

const title = "Certificates — Dian Septio";
const description =
  "Frontend, JavaScript, UI and workflow certificates earned by Dian Septio through structured self-directed study.";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Verified learning milestones."
        description="Structured coursework completed alongside project work, kept deliberately focused rather than collected in bulk."
      />
      <section className="mx-auto max-w-7xl pl-5 pr-5 pb-24 sm:pl-8 sm:pr-8 lg:pl-28 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <CertificateCard key={cert.title} {...cert} />
          ))}
        </div>
      </section>
    </>
  );
}
