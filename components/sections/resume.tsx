import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Globe,
} from 'lucide-react'
import { PROJECTS } from '@/lib/projects'

const EXPERIENCE = [
  {
    role: 'Junior Software Engineer',
    company: 'Freelance / Contract',
    location: 'Remote',
    period: '2024 – Present',
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
    period: '2023 – 2024',
    bullets: [
      'Assisted in developing and testing backend microservices with Java / Spring Boot.',
      'Wrote unit and integration tests, increasing code coverage by 25%.',
      'Participated in daily stand-ups, sprint planning, and code reviews.',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Science – Computer Science',
    school: 'University of Nairobi',
    location: 'Nairobi, Kenya',
    period: '2019 – 2023',
  },
]

export default function Resume() {
  return (
    <section className="bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-16">

        {/* ── Experience ── */}
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

        {/* ── Projects ── */}
        <h2
          className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400"
          style={{ fontFamily: 'var(--font-fira-code), monospace' }}
        >
          // projects
        </h2>

        <div className="space-y-4 mb-16">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Globe size={16} className="text-blue-500 flex-shrink-0" />
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0"
                >
                  <Globe size={13} />
                  {project.url.replace('https://', '')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Education ── */}
        <h2
          className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400"
          style={{ fontFamily: 'var(--font-fira-code), monospace' }}
        >
          // education
        </h2>

        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <GraduationCap size={16} className="text-blue-500 flex-shrink-0" />
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mt-0.5">
                    {edu.school}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-gray-500 dark:text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
