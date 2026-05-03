import { notes } from "@/utils/notes"
import Section from "./common/Section"

export default function Resume() {
  return (
    <Section id="resume" title="Notes">
      <div className="space-y-8">
        {notes.map((note) => (
          <article
            key={note.id}
            className="
          group relative 
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-700
          rounded-2xl p-6 md:p-8 
          hover:shadow-xl hover:border-blue-500/50 
          dark:hover:border-blue-400/50
          transition-all duration-300
        "
          >
          
            <div className="flex items-center gap-3 mb-4">
              <span
                className="
              text-[10px] font-bold tracking-widest uppercase 
              px-2 py-1 rounded-md 
              bg-blue-50 text-blue-600 border border-blue-100
              dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800
            "
              >
                {note.status}
              </span>

              <span className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                {note.readTime}
              </span>
            </div>

           
            <h3
              className="
            heading-3 font-bold 
            text-slate-900 dark:text-white
            group-hover:text-blue-600 dark:group-hover:text-blue-400
            transition-colors leading-tight
          "
            >
              <a
                href={note.gistUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4"
              >
                {note.title}

                <svg
                  className="shrink-0 w-5 h-5 opacity-40 
              group-hover:opacity-100 
              group-hover:translate-x-1 group-hover:-translate-y-1 
              transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </h3>

            
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed body-text">
              {note.excerpt}
            </p>

            
            <div
              className="
            mt-8 pt-6 
            border-t border-slate-100 dark:border-slate-700
            flex flex-wrap items-center justify-between gap-4
          "
            >
              
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                  text-xs font-mono 
                  text-slate-500 dark:text-slate-400
                  bg-slate-50 dark:bg-slate-700
                  border border-slate-200 dark:border-slate-600
                  px-2 py-1 rounded-md
                "
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              
              <div
                className="
              flex items-center gap-2 
              text-slate-400 dark:text-slate-500
              group-hover:text-slate-900 dark:group-hover:text-white
              transition-colors
            "
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..." />
                </svg>

                <span className="text-xs font-bold uppercase tracking-tight">
                  View Gist
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}