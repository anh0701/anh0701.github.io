import { stats } from "@/data/stats";
import Panel from "../ui/Panel";

export default function StatsPanel() {
  return (
    <section className="mt-6">
      <Panel
        className="
          w-full
          p-8
          rounded-2xl
          border border-white/10
          bg-white/[0.02]
          backdrop-blur
          transition-all
          hover:border-emerald-400/20
        "
      >
        <div className="cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-1 text-center group relative">
              <p className="text-zinc-500 text-sm">{stat.label}</p>

              <p className="mt-2 text-3xl font-bold tracking-tight">
                {stat.value}
              </p>

              {stat.hint && (
                <div
                  className="
                    absolute left-1/2 -translate-x-1/2 mt-3
                    opacity-0 group-hover:opacity-100
                    transition
                    text-xs text-zinc-300
                    bg-black/60 border border-white/10
                    px-3 py-1 rounded-lg
                    whitespace-nowrap
                  "
                >
                  {stat.hint}
                </div>
              )}
            </div>
          ))}
        </div>
      </Panel>
    </section>
  );
}
