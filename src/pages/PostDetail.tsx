import { useParams, Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PostDetail() {
  const { slug } = useParams();

  const posts = getAllPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 md:w-6 md:h-6 text-red' fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
        >
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          Back to blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>

        <p className="inline-flex items-center gap-2 text-gray-500 mt-2 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          {post.date}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full 
                         bg-gray-100 dark:bg-gray-800 
                         text-gray-600 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-800 my-8" />

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}