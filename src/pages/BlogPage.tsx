import { Link } from "react-router-dom";
// import DashboardLayout from "@/layout/DashboardLayout";
import { blogs } from "@/data/blogs";
import Panel from "@/components/ui/Panel";

export default function BlogPage() {
  return (
    // <DashboardLayout>
      <section id="blogs" className="pt-10">
        <div className="mb-6">
          <h2
            className="
              text-lg
              font-semibold
              tracking-tight
              text-zinc-100
            "
          >
            Latest Blog Post
          </h2>
        </div>

        {/* <div className="max-w-6xl">
          <p className="text-zinc-500">Technical Writing</p>

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              tracking-tight
            "
          >
            Blog
          </h1>
        </div> */}

        <div
          className="
            mt-10
            grid gap-6
            lg:grid-cols-2
          "
        >
          {blogs.map((blog) => (
            <Link key={blog.slug} to={`/blog/${blog.slug}`}>
              <Panel className="p-6 md:p-7">
                <p
                  className="
                     mt-3
                      text-sm
                      text-zinc-500
                  "
                >
                  {blog.date}
                </p>

                <h2
                  className="
                    mt-3
                    text-xl
                    font-semibold
                    tracking-tight
                    text-zinc-100
                  "
                >
                  {blog.title}
                </h2>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {blog.preview}
                </p>
              </Panel>
            </Link>
          ))}
        </div>
      </section>
    // </DashboardLayout>
  );
}
