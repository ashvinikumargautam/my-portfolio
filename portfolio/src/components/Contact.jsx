import { profile } from '../data/resumeData'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">
            Let's build something with data.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Open to Data Science and Machine Learning internships. Reach out directly —
            I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-teal/60"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              className="rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-teal/60"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              className="rounded-full border border-line px-6 py-3 text-sm text-paper transition-colors hover:border-teal/60"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
