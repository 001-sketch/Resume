"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, type MouseEvent } from "react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const effectEnabledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      effectEnabledRef.current = supportsFinePointer.matches && !prefersReducedMotion.matches;
    };

    update();

    supportsFinePointer.addEventListener("change", update);
    prefersReducedMotion.addEventListener("change", update);

    return () => {
      supportsFinePointer.removeEventListener("change", update);
      prefersReducedMotion.removeEventListener("change", update);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!effectEnabledRef.current || !cardRef.current || !glowRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(220px circle at ${x}px ${y}px, rgba(15, 118, 110, 0.16), transparent 70%)`;
  };

  const handleMouseLeave = () => {
    if (!glowRef.current) {
      return;
    }

    glowRef.current.style.opacity = "0";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-6"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 motion-reduce:hidden"
      />
      <div className="relative">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{project.stack.join(" · ")}</p>
        <p className="mt-4 text-[color:var(--muted)]">{project.summary}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[color:var(--accent)] transition-colors duration-200 hover:text-[color:var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
        >
          View Repo
          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
