import { Link, useParams } from "react-router-dom";

// import ReactMarkdown from "react-markdown";

import DashboardLayout from "@/layout/DashboardLayout";
import { blogs } from "@/data/blogs";
import Panel from "@/components/ui/Panel";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import BackToTop from "@/components/ui/BackToTop";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <DashboardLayout>
        <div className="pt-20">Article not found.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="pt-10 pb-20">
        <Link
          to="/blog"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-zinc-500
            transition-colors
            hover:text-white
          "
        >
          <FaArrowLeft size={12} />
          Back to Blog
        </Link>

        <Panel
          className="
            mt-8
            p-8 lg:p-12
          "
        >
          <article className="max-w-3xl mx-auto">
            <p className="text-zinc-500">{blog.date}</p>

            <h1
              className="
                mt-4
                text-5xl
                font-bold
                tracking-tight
              "
            >
              {blog.title}
            </h1>

            <MarkdownRenderer content={blog.content} />
          </article>
        </Panel>
      </section>
      <BackToTop />
    </DashboardLayout>
  );
}
