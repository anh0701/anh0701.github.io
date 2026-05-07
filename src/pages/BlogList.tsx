import Section from '@/components/common/Section';
import { getAllPosts } from '../lib/posts';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const posts = getAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Section
      id="blogs"
      title="Blog"
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="space-y-8">
        {posts.map(p => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block rounded-2xl
      bg-white border-gray-200 shadow-sm
      dark:bg-slate-900 dark:border-slate-800 dark:shadow-2xl/50
        p-6 border
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200
      dark:hover:border-indigo-500/30"
          >

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
              {p.title}
            </h2>

            <p className="inline-flex items-center gap-2 text-sm text-gray-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              {p.date}
            </p>

            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              {p.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map(tag => (
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
          </Link>
        ))}
      </div>
    </Section>
  );
}