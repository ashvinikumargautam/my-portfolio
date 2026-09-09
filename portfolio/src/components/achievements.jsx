import { achievements } from '../data/resumeData'
import Reveal from './Reveal'

// Adjust the import path above to wherever profile-data.ts lives in your project.

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-100"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Achievements
        </h2>

        <div className="mt-10 flex flex-col gap-5">
          {achievements.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40"
            >
              <span
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-violet-400 to-teal-300"
                aria-hidden="true"
              />

              <h3 className="text-lg font-medium text-slate-100 leading-snug">
                {item.name}
              </h3>

              <p
                className="mt-2 text-sm text-slate-400"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {item.detail}
              </p>

              <span
                className="mt-4 inline-block text-xs tracking-wide text-teal-300/80"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {item.year}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}