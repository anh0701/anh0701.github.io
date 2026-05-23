import { blogs } from "@/data/blogs";
import { useMemo, useState } from "react";

import { Link } from "react-router-dom";
import Panel from "../ui/Panel";

export default function BlogPanel() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    return Array.from(new Set(blogs.flatMap((blog) => blog.tags)));
  }, []);

  const filteredBlogs = selectedTag
    ? blogs.filter((blog) => blog.tags.includes(selectedTag))
    : blogs;

  return (
    <section id="blog" className="mt-6">
      {/* MOBILE */}
      <div className="space-y-5 lg:hidden">
        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => {
            const active = selectedTag === tag;

            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(active ? null : tag)}
                className={`
                  rounded-full
                  border px-4 py-2
                  text-sm
                  transition-all

                  ${
                    active
                      ? `
                      border-emerald-400/30
                      bg-emerald-400/10
                      text-white
                    `
                      : `
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-400
                      hover:border-white/20
                      hover:text-white
                    `
                  }
                `}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* BLOGS */}
        {filteredBlogs.map((blog) => (
          <Link key={blog.slug} to={`/blog/${blog.slug}`} className="block">
            <Panel
              className="
                relative
                p-6
                transition-all

                hover:-translate-y-1
                hover:z-10

                hover:border-white/15
                hover:bg-white/[0.05]
              "
            >
              <p
                className="
                  text-sm
                  text-zinc-500
                "
              >
                {blog.date}
              </p>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-bold
                  tracking-tight
                  leading-snug
                "
              >
                {blog.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-zinc-400
                "
              >
                {blog.preview}
              </p>

              {/* TAGS */}
              <div
                className="
                  mt-6
                  flex flex-wrap gap-2
                "
              >
                {blog.tags.map((tag) => (
                  <div
                    key={tag}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      px-3 py-1
                      text-xs text-zinc-400
                      "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </Panel>
          </Link>
        ))}
      </div>

      {/* DESKTOP */}
      <div
        className="
          hidden gap-6
          lg:grid
          lg:grid-cols-[0.42fr_1fr]
        "
      >
        {/* LEFT */}
        <Panel className="p-7">
          <div>
            <p className="text-zinc-500">Technical Writing</p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                tracking-tight
              "
            >
              Blog
            </h2>
          </div>

          {/* BLOG LIST */}
          <div className="mt-10 space-y-8">
            {filteredBlogs.map((blog) => (
              <Link key={blog.slug} to={`/blog/${blog.slug}`} className="block">
                <article
                  className="
                    group
                    relative

                    rounded-3xl
                    border border-white/10
                    bg-white/[0.03]

                    p-6
                    transition-all

                    hover:-translate-y-1
                    hover:z-10

                    hover:border-white/20
                    hover:bg-white/[0.06]
                  "
                >
                  {/* TOP */}
                  <div
                    className="
                      flex items-center
                      justify-between
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-zinc-500
                      "
                    >
                      {blog.date}
                    </p>

                    <div
                      className="
                        h-2 w-2
                        rounded-full
                        bg-emerald-400
                      "
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      mt-5
                      text-xl
                      font-semibold
                      leading-snug
                      tracking-tight
                    "
                  >
                    {blog.title}
                  </h3>

                  {/* PREVIEW */}
                  <p
                    className="
                      mt-4
                      text-sm
                      leading-relaxed
                      text-zinc-400
                    "
                  >
                    {blog.preview}
                  </p>

                  {/* TAGS */}
                  <div
                    className="
                      mt-6
                      flex flex-wrap gap-2
                    "
                  >
                    {blog.tags.map((tag) => (
                      <div
                        key={tag}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1
                          text-xs text-zinc-400
                        "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div
                    className="
                      mt-6
                      flex items-center gap-3
                    "
                  >
                    <div
                      className="
                        h-px w-8
                        bg-zinc-700
                        transition-all
                        group-hover:w-12
                        group-hover:bg-white
                      "
                    />

                    <span
                      className="
                        text-sm
                        text-zinc-500
                        transition-colors
                        group-hover:text-white
                      "
                    >
                      Read Article
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Panel>

        {/* RIGHT */}
        <Panel
          className="
            relative
            overflow-hidden
            p-10
          "
        >
          {/* BACKGROUND GLOW */}
          <div
            className="
              absolute right-0 top-0
              h-[400px] w-[400px]
              rounded-full
              bg-emerald-400/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            <p className="text-zinc-500">Engineering Notes</p>

            <h2
              className="
                mt-5
                max-w-xl
                text-6xl
                font-bold
                tracking-tight
                leading-none
              "
            >
              Thoughts on backend systems, architecture, and tooling.
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Long-form technical articles covering distributed systems, SQL
              parsing, Elasticsearch, infrastructure tooling, backend
              architecture, and engineering workflows.
            </p>

            {/* TOPICS */}
            <div
              className="
                mt-14
                rounded-3xl
                border border-white/5
                bg-white/[0.03]
                p-6
              "
            >
              <p className="text-zinc-500">Topics</p>

              <div
                className="
                  mt-5
                  flex flex-wrap gap-3
                "
              >
                {allTags.map((tag) => {
                  const active = selectedTag === tag;

                  return (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(active ? null : tag)}
                      className={`
                        rounded-full
                        border px-4 py-2
                        text-sm
                        transition-all

                        ${
                          active
                            ? `
                            border-emerald-400/30
                            bg-emerald-400/10
                            text-white
                          `
                            : `
                            border-white/10
                            bg-black/20
                            text-zinc-400
                            hover:border-white/20
                            hover:text-white
                          `
                        }
                      `}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
