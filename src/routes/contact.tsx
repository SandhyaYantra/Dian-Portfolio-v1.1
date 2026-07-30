import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { profile } from "@/data/portfolio";

const title = "Contact — Dian Septio";
const description =
  "Get in touch with Dian Septio for frontend roles, collaborations or product work. Email, social links and CV download.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const links = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="The fastest way to reach me is email. I read everything and reply to serious enquiries within a couple of days."
      />
      <section className="mx-auto max-w-7xl pl-5 pr-5 pb-24 sm:pl-8 sm:pr-8 lg:pl-28 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="glass lift rounded-3xl p-8 shadow-soft lg:col-span-2"
          >
            <Mail className="size-5 text-primary" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-semibold">Email</h2>
            <p className="mt-3 text-base text-muted-foreground">{profile.email}</p>
          </a>

          <a href={profile.cvUrl} download className="glass lift rounded-3xl p-8 shadow-soft">
            <Download className="size-5 text-primary" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-semibold">Curriculum Vitae</h2>
            <p className="mt-3 text-base text-muted-foreground">Download the latest PDF.</p>
          </a>

          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass lift flex items-center gap-4 rounded-3xl p-7 shadow-soft"
            >
              <Icon className="size-5 text-primary" aria-hidden="true" />
              <span className="text-base font-medium">{label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
