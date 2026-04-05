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
        bg-white
        border border-gray-200
        p-6
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3 className="font-semibold heading-3 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 leading-relaxed caption">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
      </div>

      <span className="text-indigo-600 font-medium group-hover:underline">
        View project →
      </span>
    </a>
  )
}