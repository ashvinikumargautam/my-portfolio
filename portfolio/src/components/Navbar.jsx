import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-paper">
           Ashvini
        </a>

        <ul className="hidden gap-8 font-body text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:ashvini1275@gmail.com"
          className="hidden rounded-full border border-line px-4 py-2 text-sm text-paper transition-colors hover:border-amber/60 md:inline-block"
        >
          Email Me
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-px w-6 bg-paper transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px w-6 bg-paper transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-ink px-6 pb-6 pt-2 font-body text-sm text-muted md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
