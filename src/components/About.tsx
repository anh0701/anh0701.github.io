import Section from "@/components/common/Section"

export default function About() {
  return (
    <Section id="about" title="About Me" className="max-w-6xl mx-auto px-6">

      <div className="space-y-6 text-gray-600 dark:text-slate-400 leading-relaxed">
        <p className="indent-6 body-text">
          Hi, my name is <span className="text-gray-900 dark:text-slate-100 font-medium">Anh</span>,
          and I am a <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Software Developer </strong>
          with a background in building backend systems and a passion for efficient, clean code.
        </p>

        <p className="indent-6 body-text">
          Most recently, I have around 1 year of experience as a <strong className="text-gray-900 dark:text-slate-200"> Java developer</strong>.
          My main responsibilities included developing backend APIs with <span className="text-indigo-600 dark:text-indigo-400">Spring Boot </span>
          and optimizing complex business logic using <span className="text-indigo-600 dark:text-indigo-400">Oracle SQL</span>.
          This role taught me how to handle massive datasets and ensure system consistency.
        </p>

        <p className="indent-6 body-text">
          Besides my professional experience, I am a proactive learner. I developed an Automated Test Tool using
          <strong className="dark:text-slate-200"> Python</strong> and <strong className="dark:text-slate-200">Flask</strong>...
          I’ve also worked with <strong className="dark:text-slate-200">C# .NET</strong> and
          <strong className="dark:text-slate-200"> Vue.js with TypeScript</strong>.
        </p>

        <p className="body-text italic border-l-4 border-indigo-500 pl-4 mt-8 dark:text-slate-300">
          "I value collaboration and always aim to bridge the gap between technical constraints and business requirements."
        </p>
      </div>
    </Section>
  )
}