import { certifications } from '../data/resumeData'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <Reveal>
          <h2 className="font-display text-4xl text-paper md:text-5xl">Certifications</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 80}>
              <div className="data-card flex items-center justify-between rounded-2xl p-6">
                <div>
                  <h3 className="text-paper">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-amber">{cert.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
