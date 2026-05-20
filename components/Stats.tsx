'use client'

import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

const stats = [
  { number: '10', suffix: 'M+', label: 'SMEs across MENAP' },
  { number: '500', suffix: 'K+', label: 'Retailers enabled' },
  { number: '3', suffix: 'M+', label: 'Orders delivered' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.stats} ref={ref}>
      {stats.map((s, i) => (
        <div key={i} className={`${styles.stat} fade-up`}>
          <div className={styles.number}>
            {s.number}<span>{s.suffix}</span>
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
