'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const mouse = { x: -999, y: -999 }
    const SPACING = 28, DISPERSE_R = 88, DISPERSE_STRENGTH = 32, DOT_R = 1.3
    const ORANGE: [number, number, number] = [232, 100, 10]
    type Dot = { ox: number; oy: number; cx: number; cy: number; vx: number; vy: number }
    let dots: Dot[] = [], W = 0, H = 0

    const buildGrid = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = section.getBoundingClientRect()
      W = rect.width; H = rect.height
      canvas.width = W * dpr; canvas.height = H * dpr
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let x = SPACING / 2; x < W; x += SPACING)
        for (let y = SPACING / 2; y < H; y += SPACING)
          dots.push({ ox: x, oy: y, cx: x, cy: y, vx: 0, vy: 0 })
    }
    buildGrid()
    window.addEventListener('resize', buildGrid)

    const onMove  = (e: MouseEvent) => { const r = section.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const d of dots) {
        const dx = d.cx - mouse.x, dy = d.cy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < DISPERSE_R) {
          const force = (1 - dist / DISPERSE_R) * DISPERSE_STRENGTH
          const angle = Math.atan2(dy, dx)
          d.vx += Math.cos(angle) * force * 0.35
          d.vy += Math.sin(angle) * force * 0.35
        }
        d.vx = (d.vx + (d.ox - d.cx) * 0.10) * 0.75
        d.vy = (d.vy + (d.oy - d.cy) * 0.10) * 0.75
        d.cx += d.vx; d.cy += d.vy
        const cd = Math.sqrt((d.cx - mouse.x) ** 2 + (d.cy - mouse.y) ** 2)
        const gb = cd < DISPERSE_R ? (1 - cd / DISPERSE_R) * 0.5 : 0
        const alpha = Math.min(0.72, 0.16 + gb)
        ctx.beginPath()
        ctx.arc(d.cx, d.cy, DOT_R, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ORANGE[0]},${ORANGE[1]},${ORANGE[2]},${alpha.toFixed(2)})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', buildGrid)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className={styles.hero} ref={sectionRef}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          AI · Engineering · Supply Chain
        </div>

        <h1 className={styles.h1}>
          Tech and AI,
          <br />
          <span className={styles.orange}>built right.</span>
        </h1>

        <p className={styles.sub}>
          We help enterprises adopt AI, build technology, and run smarter operations. Backed by five years of shipping real products at scale.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn-orange">Book a consultation →</a>
          <a href="#solutions" className="btn-outline">See what we do</a>
        </div>

        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricNum}>$53<span className={styles.metricSuffix}>M</span></span>
            <span className={styles.metricLabel}>Raised from global investors</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNum}>3<span className={styles.metricSuffix}>+</span></span>
            <span className={styles.metricLabel}>Countries live</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            <span className={styles.metricNum}>5<span className={styles.metricSuffix}>yr</span></span>
            <span className={styles.metricLabel}>Years shipping in production</span>
          </div>
        </div>
      </div>
    </section>
  )
}
