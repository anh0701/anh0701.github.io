import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import Panel from "../ui/Panel";

export default function FeaturedProject() {
  return (
    <section id="projects" className="mt-6">
      <Panel
        className="
          overflow-hidden
          p-6 lg:p-10
        "
      >
        <div
          className="
            grid gap-10
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT */}
          <div className="flex flex-col">
            <div>
              <p
                className="
                  text-sm
                  text-emerald-400
                "
              >
                Featured Project
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  tracking-tight
                  lg:text-5xl
                "
              >
                SQL Dialect Converter
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-relaxed
                  text-zinc-400
                "
              >
                A backend engine for converting SQL queries across multiple
                database dialects using ANTLR4 and custom parsing logic.
              </p>
            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-8
                flex flex-wrap gap-4
              "
            >
              <a
                href="#"
                className="
                  inline-flex
                  items-center gap-2
                  rounded-2xl
                  bg-white
                  px-5 py-3
                  font-medium
                  text-black
                  transition-all
                  hover:scale-[1.02]
                "
              >
                <FiGithub />
                Open Github
              </a>

              <a
                href="#"
                className="
                  inline-flex
                  items-center gap-2
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5 py-3
                  transition-all
                  hover:bg-white/[0.06]
                "
              >
                <FiArrowUpRight />
                Live Demo
              </a>
            </div>

            {/* STACK */}
            <div
              className="
                mt-10
                flex flex-wrap gap-3
              "
            >
              {["Java", "ANTLR4", "Spring Boot", "PostgreSQL", "Docker"].map(
                (item) => (
                  <div
                    key={item}
                    className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    px-4 py-2
                    text-sm
                  "
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            {/* METRICS */}
            <div
              className="
                mt-10
                grid grid-cols-3
                gap-4
              "
            >
              {[
                {
                  label: "Dialects",
                  value: "5+",
                },

                {
                  label: "Queries",
                  value: "10k+",
                },

                {
                  label: "Latency",
                  value: "43ms",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border border-white/5
                    bg-white/[0.02]
                    p-4
                  "
                >
                  <p
                    className="
                      text-sm
                      text-zinc-500
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                    "
                  >
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative
              rounded-[28px]
              border border-white/5
              bg-[#0B1220]
              p-5
            "
          >
            {/* TOP BAR */}
            <div
              className="
                flex items-center gap-2
                border-b border-white/5
                pb-4
              "
            >
              <div className="h-3 w-3 rounded-full bg-red-400" />

              <div className="h-3 w-3 rounded-full bg-yellow-400" />

              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* DASHBOARD */}
            <div className="mt-6 space-y-4">
              <div
                className="
                  rounded-2xl
                  border border-white/5
                  bg-white/[0.03]
                  p-5
                "
              >
                <div
                  className="
                    flex items-center
                    justify-between
                  "
                >
                  <p className="text-zinc-500">Parser Status</p>

                  <div
                    className="
                      h-2 w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-bold
                  "
                >
                  Running
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="
                    rounded-2xl
                    bg-white/[0.03]
                    p-5
                  "
                >
                  <p className="text-zinc-500">Tables Parsed</p>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                    "
                  >
                    1,248
                  </h3>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-white/[0.03]
                    p-5
                  "
                >
                  <p className="text-zinc-500">Success Rate</p>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      font-bold
                    "
                  >
                    99.2%
                  </h3>
                </div>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-white/[0.03]
                  p-5
                "
              >
                <p className="text-zinc-500">Architecture</p>

                <div
                  className="
                    mt-6
                    flex flex-wrap
                    items-center gap-3
                    text-sm
                  "
                >
                  <div className="rounded-xl bg-black/30 px-3 py-2">Client</div>
                  →
                  <div className="rounded-xl bg-black/30 px-3 py-2">Parser</div>
                  →
                  <div className="rounded-xl bg-black/30 px-3 py-2">
                    Transformer
                  </div>
                  →
                  <div className="rounded-xl bg-black/30 px-3 py-2">
                    SQL Output
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </section>
  );
}
