import { navItems, scrollToId } from "@/utils/scroll"

export default function Navbar() {

  return (
    <nav className="flex justify-end gap-8 px-10 py-6 text-lg 
          font-medium sticky top-0 bg-white/80 backdrop-blur-md z-50
          border-b border-gray-100">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToId(item.id)}
          className="hover:text-indigo-500 cursor-pointer"
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}