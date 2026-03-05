import { SplineSceneBasic } from "@/components/ui/splite-demo";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
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

        {/* Interactive 3D Demo Section */}
        <section className="mb-12">
          <SplineSceneBasic />
        </section>

        {/* Professional Summary */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Backend Engineering
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> REST API Design &amp;
                  Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> System Logic &amp;
                  Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Debugging &amp;
                  Root-Cause Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Unit Testing Concepts
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Databases &amp; Data Modeling
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> SQL &amp; Relational
                  Databases
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Schema Design Concepts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Data Modeling
                  Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> API-to-DB Workflows
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Systems &amp; Collaboration
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Requirements Gathering
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Documentation &amp;
                  Process Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Cross-Functional
                  Coordination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Production Support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Work Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900">
                L2 Technical Support Specialist (IT Technician)
              </h3>
              <p className="text-gray-600">Bobtech Engineers | 2025–Present</p>
              <ul className="mt-3 text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Analyze and
                  resolve complex system and network incidents through structured
                  debugging and backend analysis.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Collaborate with
                  cross-functional teams (NOC, field engineers, operations) to
                  gather requirements and implement technical resolutions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Conduct
                  root-cause analysis on recurring system issues and recommend
                  long-term technical improvements.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Maintain
                  documentation of system configurations, troubleshooting
                  procedures, and resolution workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
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
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://4k-wallpaper-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
              <p className="text-gray-600 mb-3">
                Modern wallpaper discovery and collection app built with Next.js.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Wallpaper
                  discovery with search, categories/tags, favorites, and
                  downloads.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Secure auth:
                  bcrypt password hashing, JWT sessions, HTTP-only cookies, and
                  rate limiting.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> User
                  collections: private/public collections for organizing and
                  sharing.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span> Tech stack:
                  Next.js 14, React 18, TypeScript, Tailwind CSS, Zustand,
                  PostgreSQL (Neon), Next.js API routes.
                </li>
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
              {[
                { label: "Java (Spring Boot – foundational)", bg: "bg-blue-50" },
                { label: "JavaScript (ES6+)", bg: "bg-yellow-50" },
                { label: "SQL & Data Modeling", bg: "bg-indigo-50" },
                { label: "REST APIs", bg: "bg-red-50" },
                { label: "ReactJS (foundational)", bg: "bg-cyan-50" },
                { label: "Git", bg: "bg-gray-50" },
                { label: "Linux & Windows", bg: "bg-green-50" },
                { label: "Debugging & Documentation", bg: "bg-purple-50" },
              ].map((skill) => (
                <div
                  key={skill.label}
                  className={`text-center p-4 ${skill.bg} rounded-lg`}
                >
                  <p className="font-medium text-sm text-slate-700">
                    {skill.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Programming &amp; Frameworks
                </h3>
                <p>Java (Spring Boot – foundational), JavaScript (ES6+), REST APIs</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Frontend Exposure
                </h3>
                <p>ReactJS (foundational)</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Systems &amp; Tools
                </h3>
                <p>
                  Git, Linux, Windows, REST clients, remote support tools
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Engineering Practices
                </h3>
                <p>
                  Unit testing concepts, debugging, root-cause analysis,
                  documentation
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4 border border-gray-100 md:col-span-2">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Core CS Knowledge
                </h3>
                <p>
                  Data structures, algorithms, system logic, API architecture
                </p>
              </div>
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
              Contact Me
            </a>
            <a
              href="/MikeResume.pdf"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Download Resume
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
