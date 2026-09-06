import { useEffect, useRef } from 'react'

/**
 * Ambient, non-interactive canvas animation: a sparse field of drifting
 * "data nodes" that connect with a thin line when close together —
 * a nod to vector-embedding / similarity-graph visuals from the resume's
 * RAG and vector-DB work, kept quiet enough to sit behind foreground text.
 */
export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes, rafId
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const LINK_DIST = 150
    const NODE_COUNT_BASE = 70

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    function init() {
      resize()
      const count = Math.max(28, Math.min(NODE_COUNT_BASE, Math.floor((width * height) / 18000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16
            ctx.strokeStyle = `rgba(62, 207, 176, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(242, 184, 75, 0.45)'
        ctx.fill()
      }

      rafId = requestAnimationFrame(step)
    }

    init()
    if (!prefersReduced) {
      rafId = requestAnimationFrame(step)
    } else {
      // Draw a single static frame for reduced-motion users
      step()
      cancelAnimationFrame(rafId)
    }

    const onResize = () => init()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  )
}
