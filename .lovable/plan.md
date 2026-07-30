## Goal

Build Dian Septio's personal portfolio as a premium dark, minimal, glassmorphic site — following the uploaded master prompt exactly (colors, typography, sections, behavior). Content will be realistic placeholders you can swap later.

## Design system

Tokens go into `src/styles.css` (dark-first, oklch equivalents of the spec):
- Background `#0F1115`, cards `rgba(255,255,255,0.06)`, hover `0.09`, borders `0.14`
- Text `#F5F7FF` / 72% secondary, single accent `#6EA8FF`, success/warning/danger per spec
- Space Grotesk (headings) + Inter (body) loaded via `<link>` in `__root.tsx`
- Soft shadows, consistent radius, generous section spacing, subtle fade-in/slide-up + hover-lift only

## Pages (multi-page routing)

- `/` — Home: hero + About + "From Kitchen to Code" timeline + featured projects preview + contact CTA
- `/projects` — full project grid with large cards
- `/certificates` — elegant certificate grid
- `/story` — the growth-documentation timeline in full
- `/contact` — minimal CTA: "Let's build something meaningful.", email, socials, CV download

Each route gets its own `head()` title/description/og tags.

## Shared chrome (in `__root.tsx`)

- Sticky navbar: transparent initially → on scroll `rgba(15,17,21,0.75)` + 12px blur + thin border; desktop horizontal links (Home, Projects, Certificates, My Story, Contact) + Download CV button; mobile hamburger sheet
- Floating left glass social sidebar (desktop only, 52px wide): GitHub, LinkedIn, Email, Instagram with hover lift
- Minimal footer

## Hero

90vh desktop / auto mobile. Generated abstract background (dark gradient, soft radial accent light, subtle noise, minimal tech pattern) with dark overlay; circular profile image (160–200px desktop, 120–140px mobile) overlapping the banner bottom with thin accent ring and soft shadow. Name "Dian Septio", headline "Building Digital Experiences Through Continuous Learning.", 3-line intro, CTAs "View Projects" + "Download CV", animated scroll indicator.

## Content approach

- 4 placeholder projects with generated cover images, tech-tag badges, detail buttons
- 6 placeholder certificates (title, organization, date, preview button)
- Timeline: kitchen craftsmanship → discovering programming → self-learning & building → software development path (professional tone, not emotional)
- CV button points to a placeholder file; socials to `#` until you provide links

## Technical notes

- TanStack Start file routes under `src/routes/`, components split into `src/components/` (Navbar, SocialRail, Hero, SectionHeading, ProjectCard, CertificateCard, Timeline, Footer)
- All colors as semantic tokens — no hardcoded color utilities
- Semantic HTML, single H1 per page, alt text, keyboard-focusable controls, lazy-loaded images
- Images generated into `src/assets/` and imported (hero background, profile portrait, project covers)
- No backend needed; contact section is links only (say the word if you want a working contact form later — that would need Lovable Cloud)
