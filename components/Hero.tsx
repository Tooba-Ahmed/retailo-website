'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import styles from './Hero.module.css'

gsap.registerPlugin(SplitText, useGSAP)

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const phraseRef  = useRef<HTMLSpanElement>(null)

  // ── Dot-grid background ───────────────────────────────────────
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

  // ── GSAP SplitText char reveal on "built right." ──────────────
  useGSAP(() => {
    if (!phraseRef.current) return

    // Wait for fonts so character widths are measured correctly
    document.fonts.ready.then(() => {
      const split = new SplitText(phraseRef.current, { type: 'chars' })

      gsap.set(phraseRef.current, { opacity: 1 })

      gsap.from(split.chars, {
        opacity: 0,
        yPercent: 60,
        scale: 0.85,
        filter: 'blur(6px)',
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.035,
        delay: 0.5,
      })
    })
  }, { scope: sectionRef })

  return (
    <section className={styles.hero} ref={sectionRef}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.glow} />
      <svg className={styles.ghostLogo} viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0.564453 2.67402L11.4474 10.2441L13.1501 7.68325L2.37377 0.296875L0.564453 2.67402Z" fill="#D62B28"/>
        <path d="M1.57058 0C0.702946 0 0 0.701888 0 1.56821C0 2.43454 0.702946 3.13642 1.57058 3.13642C2.43821 3.13642 3.14115 2.43454 3.14115 1.56821C3.14115 0.701888 2.43765 0 1.57058 0Z" fill="#F58020"/>
        <path d="M18.9368 8.07322C18.7677 6.83553 18.2432 5.66407 17.4331 4.71277C16.0404 3.07723 14.0112 2.22802 11.8708 2.38086C10.4788 2.48019 9.14471 3.02371 8.0809 3.9259C6.5678 5.20938 5.72559 7.03529 5.72559 8.99031C5.72559 11.9667 7.71174 14.5552 10.5279 15.3603C10.8048 15.4397 11.0513 15.6014 11.2243 15.8315L12.1549 17.0708C12.2582 17.2088 12.4655 17.2088 12.5694 17.0708L13.5 15.8315C13.6724 15.6025 13.9167 15.4397 14.193 15.3608C17.2977 14.4752 19.3944 11.4237 18.9368 8.07322ZM12.3627 12.63C10.3959 12.63 8.80208 11.038 8.80208 9.07473C8.80208 7.11088 10.3964 5.5195 12.3627 5.5195C14.3295 5.5195 15.9233 7.11143 15.9233 9.07473C15.9233 11.038 14.3295 12.63 12.3627 12.63Z" fill="#F58020"/>
        <path d="M12.304 7.44727C11.4363 7.44727 10.7334 8.14915 10.7334 9.01548C10.7334 9.88125 11.4363 10.5837 12.304 10.5837C13.1711 10.5837 13.8745 9.8818 13.8745 9.01548C13.8745 8.14915 13.1711 7.44727 12.304 7.44727Z" fill="#F58020"/>
      </svg>

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          AI · Engineering · Platforms
        </div>

        <h1 className={styles.h1}>
          Operations,{' '}
          <br className={styles.h1Break} />
          <span ref={phraseRef} className={styles.orange} style={{ opacity: 0, display: 'inline-block' }}>
            engineered.
          </span>
        </h1>

        <p className={styles.sub}>
          Bring us the problem: a process to automate, a product to build, a supply chain to fix. We design, engineer, and ship the technology that solves it, built by a team that operates at scale, not just advises.
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
