import Panel from "../ui/Panel";

export default function AboutPanel() {
  return (
    <section id="about" className="mt-6">
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
              mt-4
              text-4xl
              font-bold
              tracking-tight
            "
          >
            Engineering-focused backend developer.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-zinc-400
            "
          >
            I focus on building scalable backend systems, database tooling,
            distributed services, and developer-focused infrastructure.
          </p>

          <p
            className="
              mt-6
              max-w-3xl
              leading-relaxed
              text-zinc-400
            "
          >
            My interests include SQL parsing, metadata extraction,
            Elasticsearch, API architecture, and system design.
          </p>
        </Panel>

        <Panel className="p-8 lg:p-10">
          <p className="text-zinc-500">Core Stack</p>

          <div
            className="
              mt-8
              space-y-4
            "
          >
            {[
              "Java / Spring Boot",
              "PostgreSQL / MySQL",
              "Docker / Linux",
              "Redis / Kafka",
              "ANTLR4",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border border-white/5
                  bg-white/[0.02]
                  p-4
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
