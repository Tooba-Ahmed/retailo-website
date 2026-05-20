import Navbar from '../../components/Navbar'
import PressHero from '../../components/PressHero'
import Recognition from '../../components/Recognition'
import PressList from '../../components/PressList'
import Appearances from '../../components/Appearances'
import MediaCTA from '../../components/MediaCTA'
import Footer from '../../components/Footer'

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PressHero />
        <Recognition />
        <PressList />
        <Appearances />
        <MediaCTA />
      </main>
      <Footer />
    </>
  )
}
