import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import useScrollToId, { navItems } from "@/utils/scroll";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrollToId = useScrollToId();
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/80 dark:bg-black/70
        backdrop-blur-md
        border-b border-gray-100 dark:border-gray-800
        h-16
        px-6 md:px-10

        grid grid-cols-3 items-center
      "
    >
      <div className="flex justify-start">
        <button
          className="shrink-0"
          onClick={() => handleScroll("home")}
        >
          <img
            className="rounded-full h-9 w-auto cursor-pointer"
            src="/avatar.png"
            alt="Logo"
          />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="flex justify-center">

        <div className="hidden md:flex items-center gap-6 text-base font-medium mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="
                text-gray-700 dark:text-gray-300
                hover:text-indigo-500 dark:hover:text-indigo-400
                transition-colors cursor-pointer
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end items-center gap-3">
        <button
          onClick={toggleTheme}
          className="
            px-2 py-2
           text-gray-800 dark:text-gray-200 cursor-pointer
          "
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="currentColor" viewBox="0 0 16 16"> <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/> </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 " fill="currentColor" viewBox="0 0 16 16"> <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/> </svg>
          )}
        </button>

        {/* Mobile menu */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {
          open ? 
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-6 md:h-6' fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-6 md:h-6' fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          }
        </button>
      </div>

      {open && (
        <div
          className="
            absolute top-16 left-0 w-full
            bg-white dark:bg-black
            border-b border-gray-200 dark:border-gray-800
            flex flex-col
            px-6 py-4
            gap-4
            md:hidden
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="
                text-left
                text-gray-700 dark:text-gray-300
                hover:text-indigo-500
                transition
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}