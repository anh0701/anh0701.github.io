type Props = {
  name: string
}

export default function TechBadge({ name }: Props) {
  return (
    <span
      className="
        text-xs px-2 py-1 rounded-md
        bg-indigo-50 text-indigo-600
        border border-indigo-100
      "
    >
      {name}
    </span>
  )
}