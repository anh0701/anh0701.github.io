type Props = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export default function Section({ id, title, children, className }: Props) {
  return (
    <section id={id} className={`scroll-mt-9 py-14 md:py-20 px-6 w-full mx-auto ${className}`}>
      <h2 className="heading-2 font-bold uppercase mb-10 text-gray-800 dark:text-slate-100">
        {title}
      </h2>
      {children}
    </section>
  )
}