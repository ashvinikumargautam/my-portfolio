import { projects } from '../data/resumeData'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">Projects</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 90}>
              <article className="data-card flex h-full flex-col rounded-2xl p-7">
                <h3 className="font-display text-xl text-paper">{project.title}</h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                  {project.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="mt-6 flex gap-4 border-t border-line pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="font-mono text-xs text-amber transition-colors hover:text-paper"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
