import {
  Code2,
  Database,
  Users,
  CheckCircle,
  Briefcase,
  FolderOpen,
  Mail,
  Download,
  Github,
  Globe,
  LaptopMinimal,
} from "lucide-react";

const competencies = [
  {
    icon: Code2,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Backend Engineering",
    items: [
      "REST API Design & Integration",
      "System Logic & Architecture",
      "Debugging & Root-Cause Analysis",
      "Unit Testing Concepts",
    ],
  },
  {
    icon: Database,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Databases & Data Modeling",
    items: [
      "SQL & Relational Databases",
      "Schema Design Concepts",
      "Data Modeling Fundamentals",
      "API-to-DB Workflows",
    ],
  },
  {
    icon: Users,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Systems & Collaboration",
    items: [
      "Requirements Gathering",
      "Documentation & Process Design",
      "Cross-Functional Coordination",
      "Production Support",
    ],
  },
];

const skillGrid = [
  { bg: "bg-blue-50", label: "Java (Spring Boot – foundational)" },
  { bg: "bg-yellow-50", label: "JavaScript (ES6+)" },
  { bg: "bg-indigo-50", label: "SQL & Data Modeling" },
  { bg: "bg-red-50", label: "REST APIs" },
  { bg: "bg-cyan-50", label: "ReactJS (foundational)" },
  { bg: "bg-gray-50", label: "Git" },
  { bg: "bg-green-50", label: "Linux & Windows" },
  { bg: "bg-purple-50", label: "Debugging & Documentation" },
];

const skillCategories = [
  {
    title: "Programming & Frameworks",
    value: "Java (Spring Boot – foundational), JavaScript (ES6+), REST APIs",
    span: false,
  },
  { title: "Frontend Exposure", value: "ReactJS (foundational)", span: false },
  {
    title: "Systems & Tools",
    value: "Git, Linux, Windows, REST clients, remote support tools",
    span: false,
  },
  {
    title: "Engineering Practices",
    value:
      "Unit testing concepts, debugging, root-cause analysis, documentation",
    span: false,
  },
  {
    title: "Core CS Knowledge",
    value: "Data structures, algorithms, system logic, API architecture",
    span: true,
  },
];

export default function Resume() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <LaptopMinimal className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Michael Chege
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Software Engineer | Backend-Focused Developer
          </p>
          <div className="mt-4 text-gray-600 space-y-1">
            <p>Limuru, Kiambu, Kenya | +254 743 141 204</p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Detail-oriented Software Engineer with strong backend training and
            practical experience supporting production systems in
            high-availability environments. Experienced in system logic, APIs,
            SQL databases, and structured problem-solving gained through
            intensive backend engineering training and real-world technical
            operations. Adept at gathering requirements, troubleshooting complex
            system issues, documenting processes, and collaborating across
            technical and non-technical teams. Strong foundation in algorithms,
            data structures, and scalable system design principles.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map(({ icon: Icon, iconBg, iconColor, title, items }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${iconBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <ul className="text-gray-600 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900">
                L2 Technical Support Specialist (IT Technician)
              </h3>
              <p className="text-gray-600">Bobtech Engineers | 2025–Present</p>
              <ul className="mt-3 text-gray-600 space-y-2">
                {[
                  "Analyze and resolve complex system and network incidents through structured debugging and backend analysis.",
                  "Collaborate with cross-functional teams (NOC, field engineers, operations) to gather requirements and implement technical resolutions.",
                  "Conduct root-cause analysis on recurring system issues and recommend long-term technical improvements.",
                  "Maintain documentation of system configurations, troubleshooting procedures, and resolution workflows.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FolderOpen className="w-6 h-6 text-blue-600" />
            Projects
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  4K Wallpaper App
                </h3>
                <a
                  href="https://github.com/001-sketch/4k-wallpaper-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a
                  href="https://4k-wallpaper-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" /> Live Demo
                </a>
              </div>
              <p className="text-gray-600 mb-3">
                Modern wallpaper discovery and collection app built with Next.js.
              </p>
              <ul className="text-gray-600 space-y-2">
                {[
                  "Wallpaper discovery with search, categories/tags, favorites, and downloads.",
                  "Secure auth: bcrypt password hashing, JWT sessions, HTTP-only cookies, and rate limiting.",
                  "User collections: private/public collections for organizing and sharing.",
                  "Tech stack: Next.js 14, React 18, TypeScript, Tailwind CSS, Zustand, PostgreSQL (Neon), Next.js API routes.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Technical Skills
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skillGrid.map(({ bg, label }) => (
                <div
                  key={label}
                  className={`text-center p-4 ${bg} rounded-lg`}
                >
                  <p className="font-medium text-sm">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {skillCategories.map(({ title, value, span }) => (
                <div
                  key={title}
                  className={`bg-slate-50 rounded-lg p-4 border border-gray-100${span ? " md:col-span-2" : ""}`}
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-xl mb-6 opacity-90">
            Open to backend-focused roles and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:mikechege171@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="/MikeResume.pdf"
              download
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>&copy; 2026 Michael Chege. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
