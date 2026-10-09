import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "Selected Work | Michael Chege",
  description: "Selected projects by Michael Chege, a Nairobi-based full-stack developer building useful digital products.",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:var(--background)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <a href="/" className="text-sm font-bold tracking-[-0.02em]">MC<span className="text-[color:var(--accent)]">.</span></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm text-[color:var(--muted)] md:flex">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-[color:var(--foreground)]">{link.label}</a>)}
          </nav>
          <a href="/MikeResume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] px-4 py-2 text-xs font-semibold transition-colors hover:border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-white">
            Resume <Download data-icon="inline-end" />
          </a>
        </div>
      </header>

      <main>
        <section aria-labelledby="work-title" className="mx-auto max-w-6xl px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-20">
          <p className="eyebrow">Selected work</p>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h1 id="work-title" className="section-title max-w-2xl">Projects with purpose.</h1>
            <p className="max-w-sm text-sm leading-6 text-[color:var(--muted)]">A focused selection of products and systems built across the stack.</p>
          </div>
        </section>

        <section aria-label="Project list" className="border-t border-[color:var(--border)] bg-[color:var(--surface)] py-12 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 lg:grid-cols-3 lg:px-8">
            {PROJECTS.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--border)]"><div className="mx-auto flex max-w-6xl px-5 py-7 text-xs text-[color:var(--muted)] lg:px-8"><span>© 2026 Michael Chege</span></div></footer>
    </div>
  );
}
