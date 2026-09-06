import { profile } from '../data/resumeData'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">
            Summary
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 font-mono text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted">Focus</dt>
              <dd className="mt-1 text-paper">NLP · RAG · GenAI</dd>
            </div>
            <div>
              <dt className="text-muted">Core stack</dt>
              <dd className="mt-1 text-paper">Python · LangChain</dd>
            </div>
            <div>
              <dt className="text-muted">Looking for</dt>
              <dd className="mt-1 text-paper">ML/DS Internship</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
