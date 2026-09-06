import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to the returned ref and
 * flips `visible` to true the first time the element enters the viewport.
 * Used to drive the `.reveal` CSS class (opacity/translate transition).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
