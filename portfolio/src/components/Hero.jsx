
import { profile } from "../data/resumeData";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto grid w-full max-w-content gap-10">

        {/* Who Am I */}
        <Reveal>
          <p className="font-mono text-sm text-teal">
            <span className="text-muted">$</span> whoami
          </p>
        </Reveal>

        {/* Name + Profile Image */}
        <Reveal delay={80}>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">

            {/* Name */}
            <h1
              className="
                font-display
                text-[13vw]
                font-medium
                leading-[0.92]
                tracking-tight
                bg-gradient-to-r
                from-red-500
                via-orange-400
                via-yellow-300
                via-green-400
                via-blue-500
                to-purple-600
                bg-clip-text
                text-transparent
                sm:text-7xl
                md:text-8xl
              "
            >
              Ashvini Kumar
              <br />
              Gautam
            </h1>

            {/* Profile Image */}
            <div
              className="
                shrink-0
                rounded-full
                bg-gradient-to-r
                from-red-500
                via-yellow-400
                via-green-400
                via-cyan-400
                to-purple-600
                p-1
                shadow-2xl
                shadow-purple-500/20
              "
            >
              <img
                src="/profile.jpg"
                alt="Ashvini Kumar Gautam"
                className="
                  h-40
                  w-40
                  rounded-full
                  object-cover
                  border-4
                  border-black
                  transition-transform
                  duration-300
                  hover:scale-105
                  sm:h-48
                  sm:w-48
                  md:h-56
                  md:w-56
                "
              />
            </div>
          </div>
        </Reveal>

        {/* Description + Buttons */}
        <Reveal delay={160}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {profile.role} building end-to-end ML pipelines, RAG-based LLM
              applications, and AI-powered web tools — turning messy data into
              systems that reason, retrieve, and ship.
            </p>

            <div className="flex gap-3">
              <a
                href="#projects"
                className="
                  rounded-full
                  bg-amber
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-ink
                  transition-transform
                  hover:-translate-y-0.5
                "
              >
                View projects
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-line
                  px-6
                  py-3
                  text-sm
                  text-paper
                  transition-colors
                  hover:border-teal/60
                "
              >
                Contact
              </a>
            </div>
          </div>
        </Reveal>

        {/* Bottom Information */}
        <Reveal delay={240}>
          <div
            className="
              flex
              flex-wrap
              gap-x-10
              gap-y-3
              border-t
              border-line
              pt-6
              font-mono
              text-xs
              text-muted
            "
          >
            <span>{profile.location}</span>

            <span className="hidden sm:inline">
              B.Tech CSE, 2023–2027
            </span>

            <span className="hidden sm:inline">
              SGPA 7.6
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
 