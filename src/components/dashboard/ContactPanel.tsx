import { FiArrowUpRight } from "react-icons/fi";

import Panel from "../ui/Panel";
import { contacts } from "@/data/contacts";

export default function ContactPanel() {
  return (
    <section id="contact" className="mt-6 pb-10">
      <Panel className="p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          {/* LEFT */}
          <div>
            <p className="text-zinc-500">Contact</p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight">
              Let’s connect.
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
              Open for full stack engineering opportunities, collaborations, and
              technical discussions across web development, system design, and
              scalable application architecture.
            </p>

            {/* STATUS */}
            <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <p className="font-medium">Available for work</p>
              </div>

              <p className="mt-3 text-sm text-zinc-300">
                Usually responds within 24 hours.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-4">
            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="
                    group
                    flex items-center justify-between
                    rounded-2xl
                    border border-white/5
                    bg-white/[0.02]
                    p-5
                    transition-all
                    hover:border-white/10
                    hover:bg-white/[0.04]
                  "
                >
                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.03] text-xl">
                      <Icon />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">{item.title}</p>

                      <p className="mt-1">{item.value}</p>
                    </div>
                  </div>

                  {/* ARROW */}
                  <FiArrowUpRight
                    className="
                      text-zinc-500
                      transition-transform
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Panel>
    </section>
  );
}
