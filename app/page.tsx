import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ConnectedSteps from '../components/ConnectedSteps'
import Solutions from '../components/Solutions'
import Results from '../components/Results'
import Spotlight from '../components/Spotlight'
import Testimonials from '../components/Testimonials'
import CTABand from '../components/CTABand'
import Footer from '../components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Shared dot-grid background spans hero + connected steps + solutions */}
        <div className={styles.dotSection}>
          <Hero />
          <ConnectedSteps />
          <Solutions />
        </div>
        <Results />
        <Spotlight />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
