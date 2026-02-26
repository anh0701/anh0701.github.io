type Props = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="min-h-screen scroll-mt-16 py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold uppercase mb-10 text-gray-800">
        {title}
      </h2>
      {children}
    </section>
  )
}