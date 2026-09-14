import { createHashRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";

import HomePage from "../pages/HomePage";
import BlogDetailPage from "../pages/BlogDetailPage";
import ScrollToTop from "@/components/system/ScrollToTop";
import BlogListPage from "@/pages/BlogListPage";

const router = createHashRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <RootLayout />
      </>
    ),

    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/blog",
        element: <BlogListPage />,
      },

      {
        path: "/blog/:slug",
        element: <BlogDetailPage />,
      },
    ],
  },
]);

export default router;
