import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Slideshow from "../ui/Slideshow";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="markdown max-w-3xl mx-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            const lang = className?.replace("language-", "");

            if (lang === "slideshow") {
              try {
                const data = JSON.parse(String(children));

                return <Slideshow images={data.images} />;
              } catch (e) {
                return null;
              }
            }

            return (
              <pre className="bg-black/40 p-4 rounded-xl overflow-x-auto border border-white/10">
                <code>{children}</code>
              </pre>
            );
          },

          img({ src, alt }) {
            return (
              <img
                src={src}
                alt={alt}
                className="rounded-2xl my-6 border border-white/10"
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
