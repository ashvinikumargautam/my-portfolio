export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Ashvini Kumar Gautam</span>
        <span>Built with React, Vite &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
