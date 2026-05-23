import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { projects } from "@/data/projects";
import Panel from "../ui/Panel";

export default function ProjectGrid() {
  return (
    <section className="mt-6">
      <div
        className="
          grid gap-6
          lg:grid-cols-3
        "
      >
        {projects.map((project) => (
          <Panel
            key={project.title}
            className="
              group
              overflow-hidden
              p-6
              transition-all
              hover:-translate-y-1
              hover:border-emerald-400/20
            "
          >
            {/* TOP */}
            <div
              className="
                flex items-center
                justify-between
              "
            >
              <p
                className="
                  text-sm
                  text-zinc-500
                "
              >
                {project.type}
              </p>

              <div
                className="
                  h-2 w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-6
                text-2xl
                font-bold
                tracking-tight
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-4
                leading-relaxed
                text-zinc-400
              "
            >
              {project.description}
            </p>

            {/* PREVIEW */}
            <div
              className="
                mt-8
                rounded-2xl
                border border-white/5
                bg-[#0B1220]
                p-4
              "
            >
              <div className="space-y-3">
                <div
                  className="
                    h-3
                    w-20
                    rounded-full
                    bg-white/10
                  "
                />

                <div
                  className="
                    h-20
                    rounded-xl
                    bg-white/[0.03]
                  "
                />

                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="
                      h-12
                      rounded-xl
                      bg-white/[0.03]
                    "
                  />

                  <div
                    className="
                      h-12
                      rounded-xl
                      bg-white/[0.03]
                    "
                  />
                </div>
              </div>
            </div>

            {/* STACK */}
            <div
              className="
                mt-6
                flex flex-wrap gap-2
              "
            >
              {project.stack.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-3 py-1
                    text-xs
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div
              className="
                mt-8
                flex items-center
                justify-between
                border-t border-white/5
                pt-5
              "
            >
              <a
                href="#"
                className="
                  inline-flex
                  items-center gap-2
                  text-sm
                  text-zinc-400
                  transition-colors
                  hover:text-white
                "
              >
                <FiGithub />
                Github
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center gap-2
                  text-sm
                  text-zinc-400
                  transition-colors
                  hover:text-white
                "
              >
                Live Demo
                <FiArrowUpRight />
              </a>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
