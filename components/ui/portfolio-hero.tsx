import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    title: "Website Design",
    description: "End-to-end website design with clear structure, hierarchy, and conversion in mind.",
  },
  {
    title: "Landing Pages",
    description: "Focused pages for campaigns, launches, and offers that turn intent into action.",
  },
  {
    title: "UI/UX Design",
    description: "Product interfaces, flows, and design systems that feel simple and intuitive.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Design Systems", "Wireframing", "Prototyping"],
  },
  {
    title: "Development",
    items: ["HTML/CSS", "Responsive Builds", "Next.js", "Accessibility"],
  },
  {
    title: "Tools",
    items: ["Notion", "Framer", "Git", "Google Analytics"],
  },
];

const SOCIALS = [
  { label: "Email", href: "mailto:mikechege171@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mike-c-71872a270" },
  { label: "GitHub", href: "https://github.com/001-sketch" },
];

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.08em]">Michael Chege</span>
            <span className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
              Web Designer
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.32em] text-[color:var(--muted)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[color:var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                Designing for clarity
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
                I design clean, conversion-focused websites for modern brands.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
                Based in Kenya, I help service businesses and ambitious founders turn their message into a
                focused, high-performing digital presence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-200 hover:bg-[color:var(--foreground)]"
                >
                  View Work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <span className="text-sm text-[color:var(--muted)]">
                  Available for new client work.
                </span>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Focus</p>
                <p className="mt-3 text-base font-semibold">
                  Strategy-led websites built to convert and scale.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  <li>UX-first structure and messaging</li>
                  <li>Visual systems with strong hierarchy</li>
                  <li>Fast, responsive build delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">About</p>
            </div>
            <div className="space-y-3 text-lg text-[color:var(--muted)] md:col-span-8">
              <p className="font-medium text-[color:var(--foreground)]">
                ALX-trained web designer focused on clarity, rhythm, and conversion.
              </p>
              <p>
                I translate business goals into page structure, user journeys, and interfaces that feel easy to
                trust.
              </p>
              <p>
                Recent work spans hospitality, dining, and fitness brands — with outcomes tied to bookings and
                enquiries.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Selected Work</p>
                <h2 className="mt-4 text-3xl font-semibold">
                  Projects built around real business problems.
                </h2>
              </div>
              <p className="text-lg text-[color:var(--muted)] md:col-span-7">
                Each engagement starts with a clear goal and a focused design system. The result: websites that
                feel deliberate and perform with intent.
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="group grid gap-8 rounded-3xl border border-[color:var(--border)] bg-white p-6 transition-all duration-200 hover:border-[color:var(--foreground)]/20 hover:shadow-sm md:grid-cols-12 md:items-center md:p-8"
                >
                  <div className="md:col-span-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
                      {project.summary}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                    <dl className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
                          Problem
                        </dt>
                        <dd className="mt-2">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
                          Approach
                        </dt>
                        <dd className="mt-2">{project.approach}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
                          Tools
                        </dt>
                        <dd className="mt-2">{project.tools.join(", ")}</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex items-center gap-3 text-sm">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--foreground)]"
                      >
                        View live site
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <p className="mt-4 text-xs text-[color:var(--muted)] opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                      Outcome: {project.outcome}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)]">
                      <iframe
                        title={`${project.title} preview`}
                        src={project.url}
                        loading="lazy"
                        sandbox="allow-scripts"
                        className="h-full w-full border-0"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Services</p>
                <h2 className="mt-4 text-3xl font-semibold">What I deliver</h2>
              </div>
              <p className="text-lg text-[color:var(--muted)] md:col-span-8">
                Designed to help your business stand out and convert.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white">
              {SERVICES.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-8 ${
                    index === SERVICES.length - 1 ? "" : "border-b border-[color:var(--border)]"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="max-w-2xl text-sm text-[color:var(--muted)]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Skills</p>
                <h2 className="mt-4 text-3xl font-semibold">Crafted with intention</h2>
              </div>
              <p className="text-lg text-[color:var(--muted)] md:col-span-8">
                A focused stack that keeps the work lean, fast, and visually consistent.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
                    {group.title}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {group.items.map((item) => (
                      <li key={item} className="font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8 rounded-2xl border border-[color:var(--border)] bg-white p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Contact</p>
                <h2 className="text-3xl font-semibold">Let&apos;s build something that works.</h2>
                <p className="text-sm text-[color:var(--muted)]">
                  Share your goals, timeline, and budget and I&apos;ll respond within 48 hours.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:mikechege171@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--foreground)]"
                >
                  mikechege171@gmail.com
                  <ArrowUpRight size={14} />
                </a>
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  {SOCIALS.map((social) => {
                    const isExternal = social.href.startsWith("http");
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="transition-colors duration-200 hover:text-[color:var(--accent)]"
                      >
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--border)] py-10 text-center text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
        &copy; 2026 Michael Chege. All rights reserved.
      </footer>
    </div>
  );
}
