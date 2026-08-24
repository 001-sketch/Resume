import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "MySQL", "Nginx"],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX Design", "Design Systems", "Wireframing", "Prototyping"],
  },
  {
    title: "Tools & Practice",
    items: ["Git", "Agile/Collaborative Workflows"],
  },
  {
    title: "Currently Building Depth In",
    items: ["Node.js", "PostgreSQL", "AWS"],
  },
];

const SOCIALS = [
  { label: "Email", href: "mailto:mikechege171@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mike-c-71872a270" },
  { label: "GitHub", href: "https://github.com/Mike-chege" },
];

const EXPERIENCE_ENTRIES = [
  {
    company: "Altair Retro Ltd",
    location: "Westlands",
    role: "Web Development Intern",
    period: "July 2024",
    highlights: [
      "Maintained and updated the company website using WordPress and HTML",
      "Improved SEO performance and implemented security enhancements",
    ],
  },
  {
    company: "Freelance",
    location: "Nairobi",
    role: "Web Development Fulltime",
    period: "2024-Present",
    highlights: [
      "Built and deployed marketing sites for small businesses.",
      "Built a portfolio for multiple clients for personal branding.",
      "Built e-commerce sites for small businesses.",
    ],
  },
];

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <a
        href="#about"
        className="sr-only left-4 top-4 z-50 rounded-md bg-[color:var(--foreground)] px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.08em]">Michael Chege</span>
            <span className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
              Full-Stack Developer
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.32em] text-[color:var(--muted)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="py-10 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">
                Kenya · Full-Stack Developer
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
                Building clear, production-minded products across frontend and backend.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[color:var(--muted)]">
                Fullstack developer trained through the ALX Software Engineering program, with hands-on
                experience using React, Next.js, TypeScript, Python, and MySQL.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-200 hover:bg-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  Contact
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://github.com/Mike-chege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                >
                  View GitHub
                </a>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">Profile</p>
                <p className="mt-3 text-base font-semibold">
                  Focused on usable interfaces and reliable backend delivery.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  <li>Location: Kenya</li>
                  <li>Email: mikechege171@gmail.com</li>
                  <li>Open to full-stack engineering roles</li>
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
                Fullstack developer with a design-first lens.
              </p>
              <p>
                Comfortable building interfaces with React, Next.js, and TypeScript, and developing Python
                backends supported by MySQL data layers.
              </p>
              <p>
                Background in UI/UX and conversion-focused design adds an eye for clear structure, trust,
                and purposeful user journeys.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Skills</p>
                <h2 className="mt-4 text-3xl font-semibold">Technical skill set</h2>
              </div>
              <p className="text-lg text-[color:var(--muted)] md:col-span-8">
                Practical tools across frontend, backend, design, and collaborative delivery.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="space-y-4 rounded-xl border border-[color:var(--border)] bg-white p-5">
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

        <section className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Experience</p>
            </div>
            <div className="space-y-6 md:col-span-8">
              {EXPERIENCE_ENTRIES.map((entry) => (
                <article key={`${entry.company}-${entry.role}`} className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                    {entry.company} · {entry.location} · {entry.period}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">{entry.role}</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Projects</p>
                <h2 className="mt-4 text-3xl font-semibold">Selected work</h2>
              </div>
              <p className="text-lg text-[color:var(--muted)] md:col-span-8">
                Hands-on projects spanning product interfaces, backend logic, and deployment fundamentals.
              </p>
            </div>

            <div className="mt-10 grid gap-6">
              {PROJECTS.map((project) => (
                <article key={project.title} className="rounded-2xl border border-[color:var(--border)] bg-white p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{project.stack.join(" · ")}</p>
                  <p className="mt-4 text-[color:var(--muted)]">{project.summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Education</p>
            </div>
            <div className="space-y-3 md:col-span-8">
              <h2 className="text-2xl font-semibold">ALX Certified Fullstack Designer/Developer</h2>
              <p className="text-[color:var(--muted)]">
                Intensive software engineering and design training focused on clarity, rhythm, and
                conversion-focused design methodologies.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Design Approach</p>
            </div>
            <div className="space-y-3 text-[color:var(--muted)] md:col-span-8">
              <p>
                Each engagement starts with a clear business goal and a focused design system.
              </p>
              <p>
                Work is built around real problems with measurable outcomes, with emphasis on clarity,
                trust, and interfaces that perform with purpose.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-[color:var(--border)] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8 rounded-2xl border border-[color:var(--border)] bg-white p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Contact</p>
                <h2 className="text-3xl font-semibold">Let&apos;s build production-grade experiences.</h2>
                <p className="text-sm text-[color:var(--muted)]">
                  Open to opportunities where product quality, usability, and engineering craft matter.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:mikechege171@gmail.com"
                  className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
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
                        className="rounded-sm transition-colors duration-200 hover:text-[color:var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
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
