import { achievements } from '../data/resumeData'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-mono text-3xl md:text-4xl tracking-tight text-paper">
            Achievements
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5">
          {achievements.map((item) => (
            <Reveal key={item.name}>
              <article className="group relative overflow-hidden rounded-xl border border-line bg-paper/[0.03] p-6 transition-colors hover:border-amber/60">
                <span
                  className="absolute inset-y-0 left-0 w-px bg-amber/60"
                  aria-hidden="true"
                />

                <h3 className="font-body text-lg text-paper leading-snug">
                  {item.name}
                </h3>

                <p className="mt-2 font-body text-sm text-muted">
                  {item.detail}
                </p>

                <span className="mt-4 inline-block font-mono text-xs tracking-wide text-amber">
                  {item.year}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}