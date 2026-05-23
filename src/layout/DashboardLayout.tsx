import MobileMenu from "@/components/dashboard/MobileMenu";
import Sidebar from "@/components/dashboard/Sidebar";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div
      className="
    min-h-screen
    bg-[#050816]
    text-white
    "
    >
      <MobileMenu />
      <div className="flex">
        <Sidebar />

        <main
          className="
            min-w-0
            flex-1

            px-4
            pb-10
            pt-4

            lg:px-3
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
