'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Code2,
  Terminal,
  Database,
  Globe,
} from 'lucide-react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const SKILLS = [
  { icon: Code2, label: 'C++', color: 'text-blue-500' },
  { icon: Terminal, label: 'Python', color: 'text-yellow-500' },
  { icon: Database, label: 'SQL & Data Modeling', color: 'text-indigo-500' },
  { icon: Globe, label: 'REST APIs', color: 'text-green-500' },
]

const EXPERIENCE = [
  {
    role: 'Junior Software Engineer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: '2025 – Present',
    bullets: [
      'Built and maintained RESTful APIs using Spring Boot and Node.js for various clients.',
      'Designed relational database schemas and optimised SQL queries for PostgreSQL.',
      'Delivered full-stack features using React and Next.js, collaborating via Git.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Tech Start-up (Nairobi)',
    location: 'Nairobi, Kenya',
    period: '2024 – 2025',
    bullets: [
      'Developed and maintained full-stack features across frontend and backend using React, Next.js, and TypeScript, contributing to a cleaner and more responsive user experience.',
      'Wrote unit and integration tests, increasing code coverage by 25%.',
      'Participated in daily stand-ups, sprint planning, and code reviews.',
    ],
  },
]

const EDUCATION = [
  {
    role: 'Software Engineering',
    school: 'ALX Africa',
    location: 'Nairobi, Kenya',
  },
]

export default function PortfolioHero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  // Apply dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      style={{ fontFamily: 'var(--font-antic), sans-serif' }}
    >
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <span
            className="text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            &lt;MikeChege /&gt;
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger (mobile only) */}
            <div className="md:hidden" ref={menuRef}>
              <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Mobile dropdown */}
              {menuOpen && (
                <div className="absolute right-4 top-14 w-48 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-2">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-3"
              style={{ fontFamily: 'var(--font-fira-code), monospace' }}
            >
              &gt;_ Hello, world!
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Michael Chege
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Software Engineer
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 mb-8">
             Limuru, Kenya
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
              {SKILLS.map(({ icon: Icon, label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                  <Icon size={13} className={color} />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="mailto:mikechege171@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
              >
                <Mail size={15} />
                Contact Me
              </a>

              <a
                href="https://github.com/001-sketch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-semibold transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mike-c-71872a270?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-semibold transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=400&fit=crop&crop=entropy"
                alt="City skyline with skyscrapers"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── About ── */}
        <section id="about" className="mt-24">
          <h2
            className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            // about
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Hello, I m Mike a Software Engineer with strong backend training and practical experience supporting
              production systems in high-availability environments. Experienced in system logic, APIs, SQL databases,
              and structured problem-solving.
            </p>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="mt-16">
          <h2
            className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            // skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
             'C++', 'Python', 'REST API Design', 'SQL & Databases',
              'ReactJS', 'Git & Version Control', 'Linux / Windows', 'Debugging & Docs',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            // experience
          </h2>
          <div className="space-y-6 mb-16">
            {EXPERIENCE.map((job) => (
              <div
                key={job.role}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase size={16} className="text-blue-500 flex-shrink-0" />
                      {job.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-gray-500 dark:text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="mt-16">
          <h2
            className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            // projects
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">4K Wallpaper App</h3>
              <a
                href="https://github.com/001-sketch/4k-wallpaper-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={13} /> GitHub
              </a>
              <a
                href="https://wallscape.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Globe size={13} /> Live Demo
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Modern wallpaper discovery app built with Next.js 14, React 18, TypeScript, Tailwind CSS,
              Zustand, and PostgreSQL (Neon). Features secure auth (bcrypt, JWT, HTTP-only cookies), wallpaper
              search/categories/favorites, and user collections.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mt-16">
          <h2
            className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400"
            style={{ fontFamily: 'var(--font-fira-code), monospace' }}
          >
            // contact
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-lg">
            <p className="text-lg font-semibold mb-2">Open to backend-focused roles and collaboration.</p>
            <p className="text-blue-100 mb-6">Reach out and let&apos;s build something great together.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:mikechege171@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail size={16} />
                mikechege171@gmail.com
              </a>

            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 mt-16">
        <span style={{ fontFamily: 'var(--font-fira-code), monospace' }}>
          &copy; 2026 Michael Chege. All rights reserved.
        </span>
      </footer>
    </div>
  )
}
