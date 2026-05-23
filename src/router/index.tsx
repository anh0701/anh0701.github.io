import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";

import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,

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
