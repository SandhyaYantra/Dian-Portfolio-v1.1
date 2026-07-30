import { Link } from "@tanstack/react-router";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[46vh] max-h-[440px] min-h-[280px] w-full overflow-hidden md:h-[52vh]">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1088}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl pl-5 pr-5 sm:pl-8 sm:pr-8 lg:pl-28">
        <div className="relative -mt-20 flex flex-col items-center text-center md:-mt-24">
          <div className="glass rise-in rounded-full p-1.5 shadow-soft">
            <img
              src={profileImg}
              alt={`Portrait of ${profile.name}`}
              width={816}
              height={816}
              className="size-[120px] rounded-full object-cover ring-1 ring-primary sm:size-[140px] md:size-[184px]"
            />
          </div>

          <h1 className="rise-in mt-8 text-4xl font-semibold sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="rise-in mt-4 text-sm tracking-[0.18em] text-primary uppercase">
            {profile.title}
          </p>
          <p className="rise-in mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="rise-in mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href={profile.cvUrl}
              download
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:bg-card-hover"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <span
            aria-hidden="true"
            className="scroll-hint mt-16 inline-flex text-muted-foreground md:mt-20"
          >
            <ChevronDown className="size-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
