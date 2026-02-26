type Props = {
  children: React.ReactNode
  variant?: "primary" | "outline"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "px-5 py-2 rounded-lg font-medium transition duration-200"

  const styles =
    variant === "primary"
      ? "bg-indigo-500 text-white hover:bg-indigo-600 font-semibold"
      : "border border-gray-400 hover:border-indigo-500 font-semibold"

  return (
    <button
      {...props}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  )
}