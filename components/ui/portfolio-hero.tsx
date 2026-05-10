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

const RESUME_DETAILS = [
  "ALX-trained web designer focused on clarity, rhythm, and conversion.",
  "Based in Kenya and open to client projects.",
  "Designs websites around trust, structure, and user flow.",
  "Recent portfolio work spans hospitality, dining, and fitness brands.",
];

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-[#0d1015] text-[#f5f5f5]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0d1015]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold tracking-[0.08em] text-white">Michael Chege</span>
            <span className="text-xs uppercase tracking-[0.32em] text-white/60">
              Web Designer
            </span>
          </div>
          <nav className="flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.32em] text-white/60">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#67e8f9]"
              >
                {link.label}
              </a>
            ))}
            <a href="/MikeResume.pdf" className="transition-colors duration-200 hover:text-[#67e8f9]">
              Resume PDF
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">Resume + Portfolio</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Conversion-focused web designer for modern brands.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Based in Kenya, I help service businesses and ambitious founders turn their message into a
                focused, high-performing digital presence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#67e8f9] px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#0d1015] transition-colors duration-200 hover:bg-white"
                >
                  View Work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/MikeResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
                >
                  Open Resume
                  <ArrowUpRight size={16} />
                </a>
                <span className="text-sm text-[color:var(--muted)]">
                  Available for new client work.
                </span>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">Focus</p>
                <p className="mt-3 text-base font-semibold text-white">
                  Strategy-led websites built to convert and scale.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>UX-first structure and messaging</li>
                  <li>Visual systems with strong hierarchy</li>
                  <li>Fast, responsive build delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/55">About</p>
            </div>
            <div className="space-y-3 text-lg text-white/75 md:col-span-8">
              <p className="font-medium text-white">
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

        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Resume Details</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">What’s in my resume</h2>
              </div>
              <p className="text-lg text-white/75 md:col-span-7">
                Keeping all core details in one section so recruiters and clients can scan quickly.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {RESUME_DETAILS.map((detail) => (
                <li key={detail} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/75">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Selected Work</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Projects built around real business problems.
                </h2>
              </div>
              <p className="text-lg text-white/75 md:col-span-7">
                Each engagement starts with a clear goal and a focused design system. The result: websites that
                feel deliberate and perform with intent.
              </p>
            </div>

            <div className="mt-12 space-y-10">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="group grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-white/25 md:grid-cols-12 md:items-center md:p-8"
                >
                  <div className="md:col-span-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                      {project.summary}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <dl className="mt-6 space-y-4 text-sm text-white/75">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                          Problem
                        </dt>
                        <dd className="mt-2">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
                          Approach
                        </dt>
                        <dd className="mt-2">{project.approach}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
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
                        className="inline-flex items-center gap-2 font-semibold text-[#67e8f9] transition-colors duration-200 hover:text-white"
                      >
                        View live site
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                    <p className="mt-4 text-xs text-white/60 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                      Outcome: {project.outcome}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111722]">
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

        <section id="services" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Services</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">What I deliver</h2>
              </div>
              <p className="text-lg text-white/75 md:col-span-8">
                Designed to help your business stand out and convert.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {SERVICES.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col gap-3 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-8 ${
                    index === SERVICES.length - 1 ? "" : "border-b border-white/10"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="max-w-2xl text-sm text-white/75">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Skills</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Crafted with intention</h2>
              </div>
              <p className="text-lg text-white/75 md:col-span-8">
                A focused stack that keeps the work lean, fast, and visually consistent.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-white/55">
                    {group.title}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {group.items.map((item) => (
                      <li key={item} className="font-medium text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/55">Contact</p>
                <h2 className="text-3xl font-semibold text-white">Let&apos;s build something that works.</h2>
                <p className="text-sm text-white/75">
                  Share your goals, timeline, and budget and I&apos;ll respond within 48 hours.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:mikechege171@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#67e8f9] transition-colors duration-200 hover:text-white"
                >
                  mikechege171@gmail.com
                  <ArrowUpRight size={14} />
                </a>
                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.28em] text-white/55">
                  {SOCIALS.map((social) => {
                    const isExternal = social.href.startsWith("http");
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="transition-colors duration-200 hover:text-[#67e8f9]"
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

      <footer className="border-t border-white/10 py-10 text-center text-xs uppercase tracking-[0.32em] text-white/55">
        &copy; 2026 Michael Chege. All rights reserved.
      </footer>
    </div>
  );
}
