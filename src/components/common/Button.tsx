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
    "px-5 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"

  const styles =
    variant === "primary"
      ? "bg-indigo-500 text-white hover:bg-indigo-600 font-semibold"
      : "border border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:border-indigo-400"

  return (
    <button
      {...props}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  )
}