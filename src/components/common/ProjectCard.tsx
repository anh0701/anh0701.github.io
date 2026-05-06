import TechBadge from "./TechBadge"

type Props = {
  title: string
  desc: string
  url: string
  techs: string[]
}

export default function ProjectCard({
  title,
  desc,
  url,
  techs,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="
        group block rounded-2xl
      bg-white border-gray-200 shadow-sm
      dark:bg-slate-900 dark:border-slate-800 dark:shadow-2xl/50
        p-6 border
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200
      dark:hover:border-indigo-500/30
      "
    >
      <h3 className="font-semibold heading-3 mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-slate-400 mb-4 leading-relaxed caption">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
      </div>

      <span className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center group-hover:underline">
        View project
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
      </span>
    </a>
  )
}