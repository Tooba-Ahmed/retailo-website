'use client'

import { useEffect, useRef } from 'react'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Browse & compare',
    desc: 'Thousands of SKUs from top brands with instant price comparison.',
  },
  {
    num: '02',
    title: 'Order in seconds',
    desc: 'Place restock orders with a few taps — no calls, no middlemen.',
  },
  {
    num: '03',
    title: 'Next-day delivery',
    desc: 'Reliable, fast delivery so your shelves never go empty.',
  },
  {
    num: '04',
    title: 'Track everything',
    desc: 'Full order, delivery, and payment visibility in one place.',
  },
]

const orders = [
  { name: 'Unilever Bundle', sub: 'Delivered · Today', price: 'SAR 240', active: true },
  { name: 'Nestlé Pack', sub: 'Delivered · Yesterday', price: 'SAR 185', active: true },
  { name: 'P&G Essentials', sub: 'Processing', price: 'SAR 310', active: false },
  { name: 'Coca-Cola Mix', sub: 'Processing', price: 'SAR 120', active: false },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
    <section className={styles.section} id="how" ref={ref}>
      {/* Left */}
      <div className={styles.left}>
        <div className={`${styles.tag} fade-up`}>How it works</div>
        <h2 className={`${styles.title} fade-up`}>
          Commerce,<br />made simple.
        </h2>
        {steps.map((s, i) => (
          <div key={i} className={`${styles.step} fade-up`}>
            <div className={styles.num}>{s.num}</div>
            <div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right */}
      <div className={styles.right}>
        <div className={`${styles.card} fade-up`}>
          <div className={styles.cardHeader}>My Orders</div>
          {orders.map((o, i) => (
            <div key={i} className={styles.orderRow}>
              <div className={styles.orderLeft}>
                <div className={`${styles.dot} ${!o.active ? styles.dotDim : ''}`} />
                <div>
                  <div className={styles.orderName}>{o.name}</div>
                  <div className={styles.orderSub}>{o.sub}</div>
                </div>
              </div>
              <div className={styles.orderPrice}>{o.price}</div>
            </div>
          ))}
          <div className={styles.badge}>Next delivery: Tomorrow 9am</div>
        </div>
      </div>
    </section>
  )
}
