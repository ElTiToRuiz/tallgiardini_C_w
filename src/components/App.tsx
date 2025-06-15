
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
      <div className="bg-gradient-to-b from-[#0A0A0A] via-[#000000] to-[#121212] text-white">
        <Header />
        <Hero />
        <div className="overflow-hidden">
          <InfiniteMarqueeComponent />
        </div>

        <div className="h-[2px] w-full max-w-6xl mx-auto my-24 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-sm rounded-full" />

        <TrafficInsights />
        <TailoredSolutions />

        <div className="h-[2px] w-full max-w-6xl mx-auto my-24 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-sm rounded-full" />

        <ModelSection />
        <div className="h-[2px] w-full max-w-6xl mx-auto my-24 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-sm rounded-full" />
        <Reviews />
        
        <Footer />
      </div>
    </ReactLenis>
  )
}