import { education } from '../data/resumeData'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">Education</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="data-card mt-12 rounded-2xl p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl text-paper">{education.degree}</h3>
              <span className="font-mono text-xs text-muted">{education.period}</span>
            </div>
            <p className="mt-1 text-sm text-teal">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.score}</p>

            <div className="mt-6 border-t border-line pt-6">
              <p className="font-mono text-xs text-muted">Relevant coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-md border border-line bg-panel2 px-2.5 py-1 text-xs text-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
