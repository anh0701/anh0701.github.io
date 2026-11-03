import type { ProjectArchitecture } from "@/types/Project";
import { FiArrowDown } from "react-icons/fi";

interface ProjectArchitectureProps {
  architecture: ProjectArchitecture;
}

export default function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100">
        System Architecture
      </h3>

      <div className="space-y-3">
        {architecture.groups.map((group, index) => (
          <div key={group.id}>
            <div className="rounded-xl border border-[#20283a] bg-[#101522] p-4 transition-colors hover:border-[#2c3b4c]">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00d2a8]" />

                <h4 className="text-sm font-semibold text-[#55dfc0]">
                  {group.title}
                </h4>
              </div>

              <div
                className={`grid grid-cols-1 gap-2 ${
                  group.nodes.length === 1 ? "sm:grid-cols-1" : "sm:grid-cols-2"
                }`}
              >
                {group.nodes.map((node) => (
                  <div
                    key={node.id}
                    className={`rounded-lg border border-[#252e40] bg-[#151c2b] px-3 py-3 transition-colors hover:border-[#31534f] hover:bg-[#17232f] ${
                      group.nodes.length === 1
                        ? "mx-auto w-full sm:max-w-md"
                        : ""
                    }`}
                  >
                    <p className="text-sm font-medium text-slate-200">
                      {node.title}
                    </p>

                    {node.description && (
                      <p className="mt-1 text-xs leading-relaxed text-slate-400">
                        {node.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {index < architecture.groups.length - 1 && (
              <div className="flex justify-center py-2">
                <FiArrowDown size={17} className="text-[#4b8f83]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
