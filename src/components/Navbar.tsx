import { useTheme } from "@/context/ThemeContext";
import { navItems, scrollToId } from "@/utils/scroll"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav
      className="
    sticky top-0 z-50
    bg-white/80 dark:bg-black/70
    backdrop-blur-md
    border-b border-gray-100 dark:border-gray-800
    h-16 flex items-center justify-between
    px-6 md:px-10
    transition-colors duration-300
  "
    >

      <button className="shrink-0" onClick={() => scrollToId("home")}>
        <img
          className="rounded-full h-8 md:h-9 w-auto cursor-pointer"
          src="/avatar.png"
          alt="Logo"
        />
      </button>

      <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base font-medium">

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToId(item.id)}
            className="
          text-gray-700 dark:text-gray-300
          hover:text-indigo-500 dark:hover:text-indigo-400
          transition-colors duration-200 whitespace-nowrap
          cursor-pointer
        "
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={toggleTheme}
          className="
        ml-2 px-3 py-2 rounded-lg
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        hover:scale-105 active:scale-95
        transition-all duration-200
        cursor-pointer
      "
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  )
}