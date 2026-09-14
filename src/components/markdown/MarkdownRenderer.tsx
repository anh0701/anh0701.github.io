import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Slideshow from "../ui/Slideshow";
import { FaYoutube } from "react-icons/fa";

function getYoutubeVideoId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
  );

  return match?.[1] ?? null;
}

interface MarkdownRendererProps {
  content: string;
}

function CodeBlock({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const code = String(children).replace(/\n$/, "");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative my-6">
      <button
        onClick={handleCopy}
        className="
          absolute
          right-3
          top-3
          z-10
          rounded-md
          border
          border-white/10
          bg-white/5
          px-3
          py-1.5
          text-xs
          text-zinc-400
          transition
          hover:bg-white/10
          hover:text-white
        "
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <pre
        className="
          overflow-x-auto
          rounded-xl
          border
          border-white/10
          bg-black/50
          p-4
          pr-20
        "
      >
        <code
          className="
            text-sm
            leading-6
            text-zinc-300
          "
          {...props}
        >
          {children}
        </code>
      </pre>
    </div>
  );
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <div
      className="
        markdown
        mt-10
        max-w-3xl
        mx-auto
        text-zinc-300
        leading-7

        [&>h1]:text-4xl
        [&>h1]:font-bold
        [&>h1]:mt-12
        [&>h1]:mb-6

        [&>h2]:text-3xl
        [&>h2]:font-bold
        [&>h2]:mt-10
        [&>h2]:mb-5

        [&>h3]:text-2xl
        [&>h3]:font-semibold
        [&>h3]:mt-8
        [&>h3]:mb-4

        [&>p]:my-5

        [&>ul]:my-5
        [&>ul]:ml-6
        [&>ul]:list-disc

        [&>ol]:my-5
        [&>ol]:ml-6
        [&>ol]:list-decimal

        [&_li]:my-2

        [&_a]:text-blue-400
        [&_a]:underline
        [&_a]:underline-offset-4
        [&_a:hover]:text-blue-300

        [&_strong]:text-white
        [&_strong]:font-semibold

        [&_blockquote]:my-6
        [&_blockquote]:border-l-4
        [&_blockquote]:border-zinc-600
        [&_blockquote]:pl-5
        [&_blockquote]:italic
        [&_blockquote]:text-zinc-400

        [&_hr]:my-10
        [&_hr]:border-white/10

        [&_table]:w-full
        [&_table]:my-8
        [&_table]:border-collapse

        [&_th]:border
        [&_th]:border-white/10
        [&_th]:bg-white/5
        [&_th]:px-4
        [&_th]:py-3
        [&_th]:text-left

        [&_td]:border
        [&_td]:border-white/10
        [&_td]:px-4
        [&_td]:py-3

        [&_img]:max-w-full
        [&_img]:rounded-2xl
        [&_img]:my-6
        [&_img]:border
        [&_img]:border-white/10
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children, ...props }) {
            const youtubeId = href ? getYoutubeVideoId(href) : null;

            if (youtubeId) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    block
                    my-6
                    overflow-hidden
                    rounded-2xl
                    no-underline
                  "
                  {...props}
                >
                  {children}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      text-6xl
                      text-red-600
                      drop-shadow-lg
                      transition-transform
                      duration-200
                      group-hover:scale-110
                    "
                  >
                    <FaYoutube />
                  </span>
                </a>
              );
            }

            return (
              <a href={href} {...props}>
                {children}
              </a>
            );
          },

          code({ className, children, ...props }) {
            const isBlock = className?.startsWith("language-");
            const lang = className?.replace("language-", "");

            if (lang === "slideshow") {
              try {
                const data = JSON.parse(String(children));

                return <Slideshow images={data.images} />;
              } catch {
                return null;
              }
            }

            // Inline code: `npm install`
            if (!isBlock) {
              return (
                <code
                  className="
                    rounded
                    bg-white/10
                    px-1.5
                    py-0.5
                    text-sm
                    text-zinc-200
                  "
                  {...props}
                >
                  {children}
                </code>
              );
            }

            // Code block
            return (
              <CodeBlock
                className={className}
                {...props}
              >
                {children}
              </CodeBlock>
            );
          },

          img({ src, alt }) {
            return (
              <img
                src={src}
                alt={alt ?? ""}
                className="
                  my-6
                  max-w-full
                  rounded-2xl
                  border
                  border-white/10
                "
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
