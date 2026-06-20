import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiGithub,
} from "react-icons/fi";

import { projects } from "@/data/projects";
import Panel from "../ui/Panel";
import { GoDotFill } from "react-icons/go";

export default function ProjectGrid() {
  const INITIAL_PROJECTS = 4;
  const LOAD_MORE_COUNT = 2;

  const [expandedProject, setExpandedProject] =
    useState<string | null>(null);

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_PROJECTS);

  const visibleProjects = projects.slice(
    0,
    visibleCount
  );

  return (
    <section id="projects" className="mt-10">
      <div className="mb-6">
        <h2
          className="
            text-lg
            font-semibold
            tracking-tight
            text-zinc-100
          "
        >
          Selected Projects
        </h2>
      </div>
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          items-start
        "
      >
        {visibleProjects.map((project) => {
          const projectId = project.title;

          const expanded =
            expandedProject === projectId;

          return (
            <Panel
              key={projectId}
              className="
                flex
                h-full
                flex-col

                p-6
                md:p-8

                transition-all
                duration-300

                hover:border-blue-500/20
              "
            >

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-zinc-400
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {project.type && (
                  <span
                    className="
                      shrink-0
                      rounded-md
                      border border-emerald-500/20
                      bg-emerald-500/10
                      px-2.5 py-1
                      text-xs
                      text-emerald-400
                    "
                  >
                    {project.type}
                  </span>
                )}
              </div>

              <div className="mt-5">
                <h4 className="mb-3 text-sm font-medium text-zinc-300">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-md
                        border border-white/5
                        bg-white/[0.03]
                        px-3 py-1.5
                        text-xs
                        text-zinc-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {!!project.highlights?.length && (
                <div className="mt-5">
                  <h4 className="mb-3 text-sm font-medium text-zinc-300">
                    Highlights
                  </h4>

                  <ul className="space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="
                          text-sm
                          leading-6
                          text-zinc-400
                        "
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {expanded && (
                <div className="mt-5 space-y-8 border-t border-white/5 pt-8">
                  {!!project.architecture?.length && (
                    <div>
                      <h4 className="mb-4 text-sm font-medium text-zinc-300">
                        Architecture
                      </h4>

                      <div className="flex flex-wrap items-center gap-2">
                        {project.architecture.map(
                          (step, index) => (
                            <div
                              key={step}
                              className="flex items-center gap-2"
                            >
                              <div
                                className="
                                  rounded-lg
                                  border border-white/10
                                  bg-white/[0.03]
                                  px-3 py-2
                                  text-sm
                                "
                              >
                                {step}
                              </div>

                              {index <
                                project.architecture.length -
                                  1 && (
                                <span className="text-zinc-600">
                                  →
                                </span>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {!!project.challenges?.length && (
                    <div>
                      <h4 className="mb-4 text-sm font-medium text-zinc-300">
                        Technical Challenges
                      </h4>

                      <ul className="space-y-2">
                        {project.challenges.map((item) => (
                          <li
                            key={item}
                            className="
                              flex
                              items-start
                              gap-2
                              text-sm
                              leading-6
                              text-zinc-400
                            "
                          >
                            <GoDotFill
                              className="
                                mt-1.5
                                shrink-0
                                text-blue-400
                              "
                              size={10}
                            />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!!project.results?.length && (
                    <div>
                      <h4 className="mb-4 text-sm font-medium text-zinc-300">
                        Results
                      </h4>

                      <ul className="space-y-2">
                        {project.results.map((item) => (
                          <li
                            key={item}
                            className="
                              flex
                              items-start
                              gap-2
                              text-sm
                              text-zinc-400
                            "
                          >
                            <FiCheckCircle
                              className="
                                mt-1.5
                                shrink-0
                                text-amber-400
                              "
                              size={10}
                            />

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div
                className="
                  mt-auto
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-white/5
                  pt-5
                "
              >
                <div className="flex items-center gap-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
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
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-zinc-400
                        transition-colors
                        hover:text-white
                      "
                    >
                      Live Demo
                      <FiArrowUpRight />
                    </a>
                  )}
                </div>

                <button
                  onClick={() =>
                    setExpandedProject(
                      expanded
                        ? null
                        : projectId
                    )
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-blue-400
                    transition-colors
                    hover:text-blue-300
                  "
                >
                  {expanded ? (
                    <>
                      Hide Details
                      <FiChevronUp />
                    </>
                  ) : (
                    <>
                      View More
                      <FiChevronDown />
                    </>
                  )}
                </button>
              </div>
            </Panel>
          );
        })}
      </div>

      {visibleCount < projects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() =>
              setVisibleCount(
                (prev) =>
                  prev + LOAD_MORE_COUNT
              )
            }
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl

              border border-blue-500/30
              bg-blue-500/10

              px-5
              py-2.5

              text-sm
              font-medium
              text-blue-400

              transition-all
              duration-200

              hover:border-blue-400/50
              hover:bg-blue-500/15
              hover:text-blue-300

              active:scale-[0.98]
            "
          >
            Load More Projects →
          </button>
        </div>
      )}
    </section>
  );
}
