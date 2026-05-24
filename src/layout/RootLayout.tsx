import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import HashScroll from "@/components/system/HashScroll";

export default function RootLayout() {
  return (
    <>
      <HashScroll />

      <Sidebar />

      <main className="lg:ml-[320px]">
        <Outlet />
      </main>
    </>
  );
}
