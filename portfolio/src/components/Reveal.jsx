import useReveal from '../hooks/useReveal'

/**
 * Wraps children in a div that fades/slides into view on scroll.
 * `delay` (ms) lets siblings stagger without needing a JS animation library.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
