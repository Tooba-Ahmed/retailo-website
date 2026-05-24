'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const mouse = { x: -999, y: -999 }
    const SPACING = 28
    const DISPERSE_R = 88
    const DISPERSE_STRENGTH = 32
    const DOT_R = 1.3
    const ORANGE: [number, number, number] = [232, 100, 10]

    type Dot = { ox: number; oy: number; cx: number; cy: number; vx: number; vy: number }
    let dots: Dot[] = []
    let W = 0, H = 0

    const buildGrid = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = section.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas.width  = W * dpr
      canvas.height = H * dpr
      canvas.style.width  = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let x = SPACING / 2; x < W; x += SPACING) {
        for (let y = SPACING / 2; y < H; y += SPACING) {
          dots.push({ ox: x, oy: y, cx: x, cy: y, vx: 0, vy: 0 })
        }
      }
    }

    buildGrid()
    window.addEventListener('resize', buildGrid)

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }
    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const d of dots) {
        const dx = d.cx - mouse.x
        const dy = d.cy - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < DISPERSE_R) {
          const force = (1 - dist / DISPERSE_R) * DISPERSE_STRENGTH
          const angle = Math.atan2(dy, dx)
          d.vx += Math.cos(angle) * force * 0.35
          d.vy += Math.sin(angle) * force * 0.35
        }
        d.vx = (d.vx + (d.ox - d.cx) * 0.10) * 0.75
        d.vy = (d.vy + (d.oy - d.cy) * 0.10) * 0.75
        d.cx += d.vx
        d.cy += d.vy
        const cursorDist = Math.sqrt((d.cx - mouse.x) ** 2 + (d.cy - mouse.y) ** 2)
        const glowBoost = cursorDist < DISPERSE_R ? (1 - cursorDist / DISPERSE_R) * 0.5 : 0
        const alpha = Math.min(0.72, 0.16 + glowBoost)
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
          Supply Chain · AI · Technology · MENAP
        </div>

        <h1 className={styles.h1}>
          Built for <span className={styles.orange}>MENAP retail.</span>
        </h1>

        <p className={styles.sub}>
          We give brands and distributors the software, AI, and engineering
          to run faster, leaner supply chains — from order to delivery.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className="btn-orange">Book a demo →</a>
          <a href="#solutions" className="btn-outline">See what we do</a>
        </div>

        {/* Metrics — replace values with real data when available */}
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricNum}>7<span className={styles.metricSuffix}>yr</span></span>
            <span className={styles.metricLabel}>In MENAP retail</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            {/* PLACEHOLDER — replace with real figure */}
            <span className={styles.metricNum}>[X]<span className={styles.metricSuffix}>+</span></span>
            <span className={styles.metricLabel}>Brands & distributors</span>
          </div>
          <div className={styles.metricDivider} />
          <div className={styles.metric}>
            {/* PLACEHOLDER — replace with real figure */}
            <span className={styles.metricNum}>[X]<span className={styles.metricSuffix}>+</span></span>
            <span className={styles.metricLabel}>Countries served</span>
          </div>
        </div>
      </div>
    </section>
  )
}
