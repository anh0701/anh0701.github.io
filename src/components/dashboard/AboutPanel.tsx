import { skills } from "@/data/skills";
import Panel from "../ui/Panel";

export default function AboutPanel() {
  return (
    <section id="about" className="mt-6">

      <div className="mb-6">
        <h2
          className="
            text-lg
            font-semibold
            tracking-tight
            text-zinc-100
          "
        >
          Technical Background
        </h2>
      </div>

      <div
        className="
          grid gap-6
          lg:grid-cols-[1fr_0.7fr]
        "
      >
        <Panel className="p-8 lg:p-10">
          <p className="text-zinc-500">About Me</p>

          <h2
            className="
              mt-3
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-100
            "
          >
            Backend Software Engineer with a passion for Computer Vision.
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-zinc-400
            "
          >
            I build scalable backend systems, well-structured APIs, and reliable enterprise applications using Java and Spring Boot.
          </p>

          <p
            className="
              mt-6
              max-w-3xl
              leading-relaxed
              text-zinc-400
            "
          >
            Beyond my professional experience, I enjoy exploring computer vision and AI through personal projects with Python, OpenCV, and YOLOv8, continuously expanding my skills toward R&D software development.
          </p>
        </Panel>

        <Panel className="p-6 lg:p-8">
          <p className="text-zinc-500">Core Stack</p>

          <div
            className="
              mt-6 space-y-3
            "
          >
            {skills.map((item) => (
              <div
                key={item}
                className="
                  rounded-xl
                  border border-white/5
                  bg-white/[0.02]
                  px-4
                  py-3
                  text-sm
                  text-zinc-300
                "
              >
                {item}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </section>
  );
}
