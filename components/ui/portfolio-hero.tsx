import { ArrowDown, ArrowUpRight, Check, Download, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mike-c-71872a270" },
  { label: "GitHub", href: "https://github.com/Mike-chege" },
];

const EXPERIENCE_ENTRIES = [
  {
    company: "Altair Retro Ltd",
    location: "Westlands",
    role: "Web Development Intern",
    period: "July 2024",
    highlights: ["Maintained and updated the company website with WordPress and HTML.", "Improved SEO performance and implemented security enhancements."],
  },
  {
    company: "Freelance",
    location: "Nairobi",
    role: "Web Developer",
    period: "2024 — Present",
    highlights: ["Built and deployed marketing sites for small businesses.", "Created portfolio and e-commerce sites that support personal brands and sales."],
  },
];

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <a href="#main-content" className="sr-only left-4 top-4 z-50 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute">
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="#main-content" className="text-sm font-bold tracking-[-0.02em]">MC<span className="text-[color:var(--accent)]">.</span></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm text-[color:var(--muted)] md:flex">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]">{link.label}</a>)}
          </nav>
          <a href="/MikeResume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] px-4 py-2 text-xs font-semibold transition-colors hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]">
            Resume <Download data-icon="inline-end" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-14 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
          <div className="max-w-4xl">
            <p className="mb-7 flex items-center gap-2 text-sm font-medium text-[color:var(--accent)]"><span className="size-2 rounded-full bg-[color:var(--accent)]" aria-hidden="true" /> Available for select opportunities</p>
            <h1 id="hero-title" className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.065em] sm:text-7xl lg:text-8xl">I build digital products that feel <span className="text-[color:var(--accent)]">clear.</span></h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-lg leading-8 text-[color:var(--muted)]">Michael Chege is a Nairobi-based full-stack developer and designer focused on useful interfaces, thoughtful systems, and reliable delivery.</p>
              <a href="#experience" aria-label="Scroll to experience" className="flex shrink-0 items-center gap-2 text-sm font-semibold hover:text-[color:var(--accent)]">View experience <ArrowDown data-icon="inline-end" /></a>
            </div>
          </div>
          <div className="mt-16 grid gap-4 border-t border-[color:var(--border)] pt-5 text-sm sm:grid-cols-3">
            <div><p className="text-[color:var(--muted)]">Based in</p><p className="mt-2 flex items-center gap-2 font-medium"><MapPin data-icon="inline-start" /> Nairobi, Kenya</p></div>
            <div><p className="text-[color:var(--muted)]">Specialising in</p><p className="mt-2 font-medium">Frontend · Backend · UI/UX</p></div>
            <div><p className="text-[color:var(--muted)]">Experience</p><p className="mt-2 font-medium">Product-minded engineering</p></div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">Experience</p><h2 id="experience-title" className="section-title">How I got here.</h2></div><div className="divide-y divide-[color:var(--border)]">{EXPERIENCE_ENTRIES.map((entry) => <article key={`${entry.company}-${entry.role}`} className="grid gap-4 py-7 first:pt-0 sm:grid-cols-[1fr_auto]"><div><p className="text-lg font-semibold">{entry.role}</p><p className="mt-1 text-sm text-[color:var(--muted)]">{entry.company} · {entry.location}</p><ul className="mt-5 flex flex-col gap-2 text-sm leading-6 text-[color:var(--muted)]">{entry.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><Check className="mt-1 shrink-0 text-[color:var(--accent)]" />{highlight}</li>)}</ul></div><p className="text-sm text-[color:var(--muted)] sm:text-right">{entry.period}</p></article>)}</div></div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16"><div className="rounded-3xl bg-[color:var(--accent)] px-6 py-10 text-white sm:px-10 lg:flex lg:items-end lg:justify-between"><div><p className="eyebrow text-white/70">Get in touch</p><h2 id="contact-title" className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Have a good problem to solve?</h2></div><div className="mt-10 flex flex-col items-start gap-5 lg:mt-0 lg:items-end"><a href="mailto:mikechege171@gmail.com" className="text-lg font-semibold underline decoration-white/40 underline-offset-8 hover:decoration-white">mikechege171@gmail.com <ArrowUpRight className="inline" /></a><div className="flex gap-5 text-sm text-white/75">{SOCIALS.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">{social.label}</a>)}</div></div></div></section>
      </main>

      <footer className="border-t border-[color:var(--border)]"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Michael Chege</span><span>Built with intention in Nairobi.</span></div></footer>
    </div>
  );
}
