import Navbar from '../../components/Navbar'
import AboutHero from '../../components/AboutHero'
import PurposeJourney from '../../components/PurposeJourney'
import Values from '../../components/Values'
import CTABand from '../../components/CTABand'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <PurposeJourney />
        <Values />
        <CTABand
          headline={<>Join us in <span>transforming</span> retail.</>}
          subline="We're hiring across product, engineering, and operations."
          primaryLabel="See open roles →"
          secondaryLabel="Contact us"
        />
      </main>
      <Footer />
    </>
  )
}
