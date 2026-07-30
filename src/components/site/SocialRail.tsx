import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";

const items = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
];

export function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="glass flex w-[52px] flex-col items-center gap-1 rounded-full py-3 shadow-soft">
        {items.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-card-hover hover:text-primary"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
