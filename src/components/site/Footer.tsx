import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 pl-5 pr-5 py-10 sm:pl-8 sm:pr-8 lg:pl-28 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. From hands-on craftsmanship to digital
          craftsmanship.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <Link to="/projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link to="/story" className="text-muted-foreground hover:text-foreground">
            My Story
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
