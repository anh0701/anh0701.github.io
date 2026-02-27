import { navItems, scrollToId } from "@/utils/scroll"

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-gray-100
        h-16 flex items-center justify-between
        px-6 md:px-10">
      
      <div className="">
        <img className="rounded-full" src="/avatar.png" alt="Logo" />
      </div>

      <div className="flex gap-4 md:gap-8 text-xs sm:text-sm md:text-base font-medium">

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToId(item.id)}
            className="hover:text-indigo-500 transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}