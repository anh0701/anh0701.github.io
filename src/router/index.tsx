import { createHashRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";

import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import ScrollToTop from "@/components/system/ScrollToTop";

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
        element: <BlogPage />,
      },

      {
        path: "/blog/:slug",
        element: <BlogDetailPage />,
      },
    ],
  },
]);

export default router;
