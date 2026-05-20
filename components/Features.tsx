'use client'

import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const features = [
  {
    icon: '🛒',
    title: 'B2B Marketplace',
    desc: 'Thousands of SKUs from top regional and global brands, all in one place.',
  },
  {
    icon: '💳',
    title: 'Built-in Fintech',
    desc: 'Buy now, pay later and digital credit lines designed for small retailers.',
  },
  {
    icon: '📦',
    title: 'Next-day Delivery',
    desc: 'Reliable, fast logistics so your shelves are always stocked.',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    desc: 'Track spending, best sellers, and order history — simply and clearly.',
  },
  {
    icon: '🌍',
    title: 'MENAP Coverage',
    desc: 'Saudi Arabia, UAE, Pakistan and growing — one platform, the whole region.',
  },
  {
    icon: '🤝',
    title: 'Brand Partnerships',
    desc: 'Direct brand relationships mean better prices and exclusive deals for you.',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={`${styles.tag} fade-up`}>Why Retailo</div>
            <h2 className={`${styles.title} fade-up`}>
              Built for the<br />modern retailer.
            </h2>
          </div>
          <p className={`${styles.sub} fade-up`}>
            Everything a small or medium retailer needs to run a smarter,
            faster business — in one app.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} fade-up`}>
              <div className={styles.icon}>{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
