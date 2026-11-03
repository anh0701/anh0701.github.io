import { useState } from "react";
import { FiArrowUpRight, FiChevronRight, FiGithub } from "react-icons/fi";

import { projects } from "@/data/projects";
import Panel from "../../ui/Panel";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectGrid() {
  const INITIAL_PROJECTS = 4;
  const LOAD_MORE_COUNT = 2;
  const CARD_STACK_LIMIT = 5;

  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="mt-10">
      <div className="mb-6">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const remainingStack = Math.max(
            0,
            project.stack.length - CARD_STACK_LIMIT,
          );

          return (
            <Panel
              key={project.title}
              className="
                flex h-full flex-col
                p-6 md:p-8
                transition-all duration-300
                hover:border-blue-500/20
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                {project.type && (
                  <span
                    className="
                      shrink-0 rounded-md
                      border border-emerald-500/20
                      bg-emerald-500/10
                      px-2.5 py-1
                      text-xs text-emerald-400
                    "
                  >
                    {project.type}
                  </span>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mt-5">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, CARD_STACK_LIMIT).map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-md border border-white/5
                        bg-white/[0.03]
                        px-3 py-1.5
                        text-xs text-zinc-400
                      "
                    >
                      {item}
                    </span>
                  ))}

                  {remainingStack > 0 && (
                    <span
                      className="
                        rounded-md border border-white/5
                        bg-white/[0.03]
                        px-3 py-1.5
                        text-xs text-zinc-500
                      "
                    >
                      +{remainingStack}
                    </span>
                  )}
                </div>
              </div>

              {/* Key Highlight */}
              {!!project.highlights?.length && (
                <div className="mt-5">
                  <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Key Highlight
                  </h4>

                  <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
                    {project.highlights[0]}
                  </p>
                </div>
              )}

              {/* Footer */}
              <div
                className="
                  mt-auto mt-6
                  flex flex-wrap items-center justify-between gap-4
                  border-t border-white/5 pt-5
                "
              >
                <div className="flex items-center gap-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-sm text-zinc-400
                        transition-colors hover:text-white
                      "
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-sm text-zinc-400
                        transition-colors hover:text-white
                      "
                    >
                      Live Demo
                      <FiArrowUpRight />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-blue-400
                    transition-colors hover:text-blue-300
                  "
                >
                  View Details
                  <FiChevronRight />
                </button>
              </div>
            </Panel>
          );
        })}
      </div>

      {/* Load More */}
      {visibleCount < projects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + LOAD_MORE_COUNT, projects.length),
              )
            }
            className="
              inline-flex items-center gap-2
              rounded-xl
              border border-blue-500/30
              bg-blue-500/10
              px-5 py-2.5
              text-sm font-medium text-blue-400
              transition-all duration-200
              hover:border-blue-400/50
              hover:bg-blue-500/15
              hover:text-blue-300
              active:scale-[0.98]
            "
          >
            Load More Projects
            <FiArrowUpRight />
          </button>
        </div>
      )}

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
