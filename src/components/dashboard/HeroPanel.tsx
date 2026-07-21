import Panel from "../ui/Panel";

export default function HeroPanel() {
  return (
    <section
      id="home"
      className="
        grid min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh]
        gap-6
        pt-24
        lg:grid-cols-[1.4fr_0.8fr]
      "
    >
      {/* LEFT - NOT A CARD */}
      <div className="flex flex-col justify-between p-8 lg:p-14">
        <div>
          <p className="font-mono text-emerald-400">$ whoami</p>

          <h1
            className="
              mt-8
              max-w-3xl
              text-6xl
              font-bold
              leading-[0.95]
              tracking-tight
            "
          >
            Backend Software Engineer
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            I have experience building backend services and RESTful APIs with Java and Spring Boot for enterprise applications. Beyond backend development, I enjoy exploring computer vision and AI through personal projects using Python, OpenCV, and YOLOv8. I am looking to grow into software engineering roles that combine solid backend development with opportunities to work on intelligent systems and emerging technologies.
          </p>
        </div>
      </div>

      <Panel className="overflow-hidden p-0 rounded-lg">
        <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900/60 px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

          <span className="ml-3 font-mono text-[11px] text-zinc-500">
            anh0701
          </span>
        </div>

        {/* Body */}
        <div className="p-5 font-mono text-xs text-zinc-300 space-y-4">
          <div>
            <span className="text-zinc-500">$ focus</span>
            <p className="mt-1 text-zinc-200">
              Backend Software Engineer
            </p>
          </div>

          <div>
            <span className="text-zinc-500">$ stack</span>
            <p className="mt-1 text-zinc-200">Frontend:</p>
            <p className="mt-1 text-zinc-400">
              React, TypeScript, Tailwind CSS, Vite, React Router
            </p>
            <br />
            <p className="mt-1 text-zinc-200">Backend:</p>
            <p className="mt-1 text-zinc-400">
              Spring Boot, PostgreSQL, Redis, Docker, ANTLR4
            </p>
          </div>

          <div>
            <span className="text-zinc-500">$ build</span>
            <p className="mt-1 text-zinc-400">
              Scalable backend systems, database tooling, SQL processing engines
              Modern UI systems, responsive web apps, component-driven
              architecture Developer tools, metadata systems, and full-stack
              applications
            </p>
          </div>

          <p className="text-emerald-400">$ █</p>
        </div>
      </Panel>
    </section>
  );
}
