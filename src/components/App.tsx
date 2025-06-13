
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Hero from "./hero/Hero"
import InfiniteMarqueeComponent from "./brands/InfiniteMarquee"
import ModelSection from "./solution/ModelSection"
import Reviews from "./reviews/Reviews"
import TrafficInsights from "./traffic/TrafficInsights"
import TailoredSolutions from "./solution/TailoredSolutions"
import { ReactLenis } from 'lenis/react'

export const App = () => {
  return (
    <ReactLenis root>
      <div className="bg-gradient-to-b from-[#0A0A0A] to-[#121212] text-white">
        <Header />
        <Hero />
        <div className="overflow-hidden">
        <InfiniteMarqueeComponent />
        </div>
        <TrafficInsights />
        <TailoredSolutions />
        <ModelSection />
        <Reviews />
        <Footer />
      </div>
    </ReactLenis>
  )
}