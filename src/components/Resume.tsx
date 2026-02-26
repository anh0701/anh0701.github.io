import { notes } from "@/utils/notes"
import Section from "./common/Section"

export default function Resume() {
  return (
    <Section id="resume" title="Notes">

      <div className="space-y-8">
        {notes.map((note) => (
          <article key={note.id} className="group relative bg-white 
            border border-slate-200 rounded-2xl p-6 md:p-8 
            hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase 
                px-2 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                {note.status}
              </span>
              <span className="text-sm text-slate-400 font-medium">{note.readTime}</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 
              group-hover:text-blue-600 transition-colors leading-tight">
              <a href={note.gistUrl} target="_blank" rel="noreferrer" 
                className="flex items-center justify-between gap-4">
                {note.title}
                <svg className="shrink-0 w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
              {note.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 
                flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {note.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-500
                     bg-slate-50 border border-slate-200 px-2 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-slate-400 
                group-hover:text-slate-900 transition-colors">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <span className="text-xs font-bold uppercase tracking-tight">View Gist</span>
                </div>
              </div>
          </article>
        ))}
      </div>
    </Section>
  )
}