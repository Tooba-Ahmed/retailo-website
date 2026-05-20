'use client'

import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    initials: 'HS',
    name: 'Head of Sales Operations',
    role: 'Regional FMCG Brand',
    location: 'KSA',
    quote: 'Retailo gave us visibility we never had before. We went from managing distributors over WhatsApp to having a real dashboard. The difference is night and day.',
    tag: 'Supply Chain SaaS',
  },
  {
    initials: 'CF',
    name: 'Chief Financial Officer',
    role: 'Distribution Company',
    location: 'UAE',
    quote: 'The credit management module alone saved us from three distributor defaults. Real-time exposure visibility across our entire network changed how we operate.',
    tag: 'Supply Chain SaaS',
  },
  {
    initials: 'VP',
    name: 'VP Technology',
    role: 'Multinational FMCG',
    location: 'Pakistan',
    quote: 'Their team understands MENAP at a level no global vendor does. Implementation was fast, results were immediate, and the partnership continues to deliver.',
    tag: 'AI Consulting',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)
  const nextIdx = (current + 1) % testimonials.length
  const prevIdx = (current - 1 + testimonials.length) % testimonials.length

  const t = testimonials[current]
  const tNext = testimonials[nextIdx]
  const tPrev = testimonials[prevIdx]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <div className="s-eyebrow">
            <span className="s-eyebrow-dot" />
            Hear from our customers
          </div>
          <h2 className="s-title">
            Trusted by the teams<br />running <em>MENAP retail.</em>
          </h2>
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>

          {/* Left — person card */}
          <div className={styles.personCard}>
            <div className={styles.avatar}>
              <span className={styles.avatarInitials}>{t.initials}</span>
              <div className={styles.avatarRing} />
            </div>
            <div className={styles.personInfo}>
              <div className={styles.personName}>{t.name}</div>
              <div className={styles.personRole}>{t.role} · {t.location}</div>
              <div className={styles.personTag}>{t.tag}</div>
            </div>
          </div>

          {/* Center — main quote */}
          <div className={styles.quoteCard}>
            <div className={styles.quoteIcon}>"</div>
            <blockquote className={styles.quote} key={current}>
              {t.quote}
            </blockquote>
          </div>

          {/* Right — next/prev navigation */}
          <div className={styles.navCards}>
            <button className={styles.navCard} onClick={next} aria-label="Next testimonial">
              <div className={styles.navLabel}>Next</div>
              <div className={styles.navPreview}>{tNext.initials}</div>
              <div className={styles.navArrow}>→</div>
            </button>
            <button className={styles.navCard} onClick={prev} aria-label="Previous testimonial">
              <div className={styles.navArrow} style={{ transform: 'rotate(180deg)' }}>→</div>
              <div className={styles.navPreview}>{tPrev.initials}</div>
              <div className={styles.navLabel}>Prev</div>
            </button>
          </div>

        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
