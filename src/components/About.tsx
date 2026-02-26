import Section from "@/components/common/Section"

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-4 text-gray-600 leading-relaxed">

        <p className="indent-6">
          Hi,
          my name is Anh,
          and I am a <strong>Software Developer</strong> with a strong background in building backend systems
          and a passion for efficient, clean code.
        </p>
        <p className="indent-6">
          Most recently, I have around 1 year of experience as a <strong>Java developer</strong>.
          My main responsibilities included developing backend APIs with <strong>Spring Boot </strong>
          and optimizing complex business logic using <strong>Oracle SQL</strong>.
          This role taught me how to handle massive datasets and ensure system consistency across different departments.
        </p>
        <p className="indent-6">
          Besides my professional experience,
          I am a very proactive learner.
          I enjoy building tools that solve real problems.
          For example, I developed an Automated Test Tool using <strong>Python</strong> and <strong>Flask</strong> to help hardware teams parse logs and get troubleshooting suggestions instantly.
          I’ve also worked with <strong>C# .NET</strong> for manufacturing systems and <strong>Vue.js with TypeScript </strong> for interactive applications.
        </p>
        <p className="indent-6">
          I value collaboration and always aim to bridge the gap between technical constraints and business requirements.
        </p>
      </div>
    </Section>
  )
}