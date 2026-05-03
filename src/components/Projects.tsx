import Section from "@/components/common/Section"
import { projects } from "@/utils/project"
import ProjectCard from "./common/ProjectCard"

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects" className="max-w-6xl mx-auto px-6">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}