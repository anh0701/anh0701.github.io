import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const navItems = ["home", "projects", "blog", "about", "contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  console.log("MobileMenu mounted");
  return (
    <>
      <header
        className="
          z-50
          lg:hidden
          sticky top-0
          border-b border-white/10
          bg-[#070B14]/80
          backdrop-blur
        "
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="font-bold">Anh</h1>

          <button onClick={() => setOpen(true)}>
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70
          "
        >
          <div
            className="
              h-full w-72
              bg-[#070B14]
              p-8
            "
          >
            <button onClick={() => setOpen(false)} className="mb-10">
              Close
            </button>

            <nav className="space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="
                    block
                    text-xl
                    capitalize
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
