import { Link, useLocation } from "react-router-dom";

import { FiHome, FiFolder, FiBookOpen, FiUser, FiMail } from "react-icons/fi";

const items = [
  {
    label: "Home",
    href: "/",
    icon: FiHome,
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: FiFolder,
  },
  {
    label: "Blog",
    href: "/#blog",
    icon: FiBookOpen,
  },
  {
    label: "About",
    href: "/#about",
    icon: FiUser,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: FiMail,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="
        z-40
        hidden lg:flex
        fixed left-0 top-0
        h-screen w-[320px]
        flex-col
        justify-between
        border-r border-white/5
        bg-[#070B14]/80
        backdrop-blur-xl
        p-10
      "
    >
      <div>
        {/* PROFILE */}
        <div>
          <p className="text-sm text-zinc-500">Web Developer</p>

          <Link to="/">
            <h1
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                transition-opacity
                hover:opacity-80
              "
            >
              Anh
            </h1>
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="mt-20 space-y-5">
          {items.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === "/" &&
              location.hash === item.href.replace("/", "");

            const isHome = location.pathname === "/" && location.hash === "";

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`
                  group flex items-center gap-3
                  transition-all
                  ${active || isHome ? "text-white" : "text-zinc-500 hover:text-white"}
                `}
              >
                {/* ICON */}
                <Icon
                  className={`
          text-lg transition-colors
          ${
            active || isHome
              ? "text-white"
              : "text-zinc-600 group-hover:text-white"
          }
        `}
                />

                {/* LINE */}
                {/* <div
                  className={`
                    h-px transition-all
                    ${
                      active || isHome
                        ? "w-12 bg-white"
                        : "w-6 bg-zinc-700 group-hover:w-10 group-hover:bg-white"
                    }
                  `}
                /> */}

                {/* LABEL */}
                <span className="tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* FOOTER */}
      <div className="space-y-3">
        <div
          className="
            rounded-2xl
            border border-white/5
            bg-white/[0.02]
            p-4
          "
        >
          <p className="text-sm text-zinc-500">Current Focus</p>

          <p className="mt-2 text-sm">Distributed Systems & Database Tooling</p>
        </div>
      </div>
    </aside>
  );
}
