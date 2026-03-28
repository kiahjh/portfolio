import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — Miciah Henderson",
  description: "Miciah Henderson's resume. Rust, React, SwiftUI, and more.",
};

const experience = [
  {
    role: "Founder & Solo Developer",
    company: "Innocence Labs",
    url: "https://innocencelabs.com",
    period: "2025 – Present",
    summary:
      "Designing, building, and shipping my own products. Published Resolve, a native iOS app with a Rust + SwiftUI client and Rust (Axum) backend. Currently finishing Replist, a SwiftUI app for musicians with a Supabase backend.",
  },
  {
    role: "Lead Frontend Engineer",
    company: "Gertrude",
    url: "https://gertrude.app",
    period: "2022 – 2025",
    summary:
      "Owned all frontends — web (React/TypeScript), macOS (native webviews), and iOS (SwiftUI) — on a team of 2–3. Built and shipped parental controls used by real families. Contributed to backend work (Vapor/Swift). Focused on delivering polished, performant, and intuitive experiences.",
  },
];

const projects = [
  {
    name: "Lovely",
    url: "https://www.youtube.com/playlist?list=PLDeRIkiONWGt4hqLUVu41-VEHZlXuzt8Z",
    tech: "Rust, x64 Assembly",
    summary:
      "An unfinished statically-typed systems programming language compiling to x64 NASM. Built from scratch on YouTube livestreams — lexer, parser, type checker, and code generator.",
  },
  {
    name: "Resolve",
    url: "https://resolveapp.net",
    tech: "SwiftUI, Rust, Axum, Crux",
    summary:
      "A published native iOS app. Rust + SwiftUI on the client, pure Rust (Axum) backend. Resolution tracking with a focus on habit formation.",
  },
  {
    name: "Replist",
    url: "https://replistapp.com",
    tech: "SwiftUI, Supabase",
    summary:
      "A native iOS app for musicians, nearing release. Pure SwiftUI frontend with a Supabase backend.",
  },
  {
    name: "Rejoice",
    url: "https://rejoice.kiahjh.com",
    tech: "Rust, Solid.js, Axum, SQLite, Maud, SQLx",
    summary:
      "A Rust web framework built on Axum. File-based routing, type-safe templates, and Solid.js islands.",
  },
  {
    name: "next-bg-image",
    url: "https://github.com/kiahjh/next-bg-image",
    tech: "Next.js, TypeScript, React",
    summary:
      "Open source utility applying Next.js image optimizations to CSS background images. Used in production at Gertrude.",
  },
];

const skills = [
  "Rust",
  "TypeScript",
  "Swift",
  "SwiftUI",
  "React",
  "Solid.js",
  "Next.js",
  "Astro",
  "Axum",
  "SQLite",
  "PostgreSQL",
  "x64 Assembly",
  "OCaml",
  "Supabase",
  "Git",
  "Vim / Neovim",
  "CSS",
  "TailwindCSS",
  "Figma",
];

export default function ResumePage() {
  return (
    <main className="resume-page relative flex-1">
      {/* Print prompt bar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-cream/90 backdrop-blur-sm border-b border-sand/60">
        <div className="mx-auto max-w-[700px] px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-fluid-sm text-ink-faint hover:text-ink transition-colors"
          >
            ← Back to portfolio
          </Link>
          <button
            onClick={undefined}
            className="text-fluid-sm font-medium text-terracotta hover:text-terracotta-hover transition-colors cursor-pointer"
            id="print-btn"
          >
            Save as PDF ↓
          </button>
        </div>
      </div>

      {/* Resume content */}
      <div className="mx-auto max-w-[700px] px-6 py-12 print:py-0 print:px-0 print:max-w-none">
        {/* Header */}
        <header className="mb-10 print:mb-6">
          <h1 className="font-display text-[2rem] print:text-[1.6rem] font-semibold text-ink leading-[1.1] tracking-tight">
            Miciah Henderson
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9rem] print:text-[0.8rem] text-ink-faint">
            <span>Holland, Michigan</span>
            <Separator />
            <a href="mailto:me@kiahjh.com" className="resume-link">
              me@kiahjh.com
            </a>
            <Separator />
            <a
              href="https://github.com/kiahjh"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              github.com/kiahjh
            </a>
            <Separator />
            <a
              href="https://kiahjh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              kiahjh.com
            </a>
          </div>
        </header>

        {/* Experience */}
        <Section title="Experience">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h3 className="font-display text-[1.05rem] print:text-[0.95rem] font-semibold text-ink">
                  {job.role},{" "}
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span>{job.company}</span>
                  )}
                </h3>
                <span className="text-[0.85rem] print:text-[0.78rem] text-ink-faint tabular-nums">
                  {job.period}
                </span>
              </div>
              <p className="mt-1.5 text-[0.9rem] print:text-[0.82rem] text-ink-light leading-[1.65]">
                {job.summary}
              </p>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="space-y-4 print:space-y-2.5">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                  <h3 className="font-display text-[1.05rem] print:text-[0.95rem] font-semibold text-ink">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <span className="text-[0.8rem] print:text-[0.74rem] text-ink-faint">
                    {project.tech}
                  </span>
                </div>
                <p className="mt-0.5 text-[0.9rem] print:text-[0.82rem] text-ink-light leading-[1.6]">
                  {project.summary}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <h3 className="font-display text-[1.05rem] print:text-[0.95rem] font-semibold text-ink">
              B.S. Applied Mathematics, Minor in Physics
            </h3>
            <span className="text-[0.85rem] print:text-[0.78rem] text-ink-faint tabular-nums">
              2023
            </span>
          </div>
          <p className="mt-0.5 text-[0.9rem] print:text-[0.82rem] text-ink-light leading-[1.6]">
            University of Akron — Graduated at 18.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-x-1.5 gap-y-1.5">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className="text-[0.9rem] print:text-[0.82rem] text-ink-light"
              >
                {skill}
                {i < skills.length - 1 && (
                  <span className="text-ink-ghost ml-1.5">·</span>
                )}
              </span>
            ))}
          </div>
        </Section>
      </div>

      {/* Print trigger script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('print-btn')?.addEventListener('click', function() { window.print(); });`,
        }}
      />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 print:mt-5">
      <h2 className="text-[0.75rem] print:text-[0.7rem] font-sans font-medium uppercase tracking-[0.12em] text-ink-faint mb-3 print:mb-2">
        {title}
      </h2>
      <div className="border-t border-sand-dark/40 pt-3 print:pt-2">
        {children}
      </div>
    </section>
  );
}

function Separator() {
  return (
    <span className="text-ink-ghost select-none print:mx-0.5" aria-hidden>
      ·
    </span>
  );
}
