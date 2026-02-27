import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
