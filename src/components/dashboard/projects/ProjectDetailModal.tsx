import { useEffect } from "react";
import ProjectArchitecture from "./architecture/ProjectArchitecture";
import type { Project } from "@/types/Project";

import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

interface ProjectListProps {
  title: string;
  items?: string[];
}

function ProjectList({ title, items }: ProjectListProps) {
  if (!items?.length) return null;

  return (
    <section>
      <h3 className="mb-3 text-lg font-semibold text-slate-100">{title}</h3>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d2a8]" />

            <p className="text-sm leading-relaxed text-slate-400">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <>
      <style>
        {`
          @keyframes projectModalFade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes projectModalEnter {
            from {
              opacity: 0;
              transform: translateY(12px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .project-modal-backdrop {
            animation: projectModalFade 0.2s ease-out;
          }

          .project-modal-content {
            animation: projectModalEnter 0.25s ease-out;
          }

          @media (prefers-reduced-motion: reduce) {
            .project-modal-backdrop,
            .project-modal-content {
              animation: none;
            }
          }
        `}
      </style>

      {/* Backdrop */}
      <div
        className="project-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/85 p-3 backdrop-blur-md sm:p-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="project-modal-content relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#20283a] bg-[#0d101d] text-slate-100 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        >
          {/* Header */}
          <div className="relative border-b border-[#20283a] bg-gradient-to-br from-[#111827] to-[#0d101d] px-5 py-5 pr-14 sm:px-7 sm:py-6 sm:pr-16">
            {project.type && (
              <p className="mb-2 inline-flex rounded-md border border-[#075b4d] bg-[#07372f]/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#00d2a8]">
                {project.type}
              </p>
            )}

            <h2
              id="project-modal-title"
              className="mt-1 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl"
            >
              {project.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#252e40] bg-[#151c2b] text-slate-400 transition-all hover:border-[#31534f] hover:bg-[#172c2c] hover:text-[#00d2a8] sm:right-6 sm:top-6"
            >
              <FiX size={19} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 space-y-7 overflow-y-auto px-5 py-6 sm:px-7">
            {/* Tech Stack */}
            {project.stack.length > 0 && (
              <section>
                <h3 className="mb-3 text-lg font-semibold text-slate-100">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#252e40] bg-[#151c2b] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-[#31534f] hover:bg-[#172c2c] hover:text-[#65dfc3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights */}
            <ProjectList title="Key Highlights" items={project.highlights} />

            {/* System Architecture */}
            {project.architecture && (
              <ProjectArchitecture architecture={project.architecture} />
            )}

            {/* Technical Challenges */}
            <ProjectList
              title="Technical Challenges"
              items={project.challenges}
            />

            {/* Results */}
            <ProjectList title="Results & Outcomes" items={project.results} />
          </div>

          {/* Footer */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex flex-wrap items-center gap-3 border-t border-[#20283a] bg-[#0b0e19] px-5 py-4 sm:px-7">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#293449] bg-[#151c2b] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-[#3c5b5b] hover:bg-[#192733] hover:text-slate-100"
                >
                  <FiGithub size={16} />
                  GitHub
                  <FiExternalLink size={13} />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#00a989] bg-[#007f68] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-[#00d2a8] hover:bg-[#00977b]"
                >
                  Live Demo
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
