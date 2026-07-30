import { Link } from "@tanstack/react-router";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/story", label: "My Story" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-[0.22em] uppercase transition-colors hover:text-primary"
        >
          Dian Septio
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.cvUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-card-hover md:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-card-hover md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-nav md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-3 pb-6" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground bg-card" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-xl px-4 py-3 text-base transition-colors hover:bg-card"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
