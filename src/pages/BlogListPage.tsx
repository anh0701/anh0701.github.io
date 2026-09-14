import DashboardLayout from "@/layout/DashboardLayout";
import BlogPage from "./BlogPage";

export default function BlogListPage() {
  return (
    <DashboardLayout>
      <BlogPage standalone />
    </DashboardLayout>
  );
}
