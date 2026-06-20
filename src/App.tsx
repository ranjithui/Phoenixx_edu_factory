import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { Services } from "./components/Services"
import { NLPLevels } from "./components/NLPLevels"
import { About } from "./components/About"
import { Audience } from "./components/Audience"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Services />
        <NLPLevels />
        <Audience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
