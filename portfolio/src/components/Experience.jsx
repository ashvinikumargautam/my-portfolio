import { experience } from '../data/resumeData'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">Experience</h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 80}>
              <div className="data-card rounded-2xl p-7 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl text-paper">{job.role}</h3>
                  <span className="font-mono text-xs text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-teal">{job.org}</p>
                <ul className="mt-5 space-y-2 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
