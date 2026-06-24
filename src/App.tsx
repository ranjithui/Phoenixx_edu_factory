import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { TrustStrip } from "./components/TrustStrip"
import { Services } from "./components/Services"
import { About } from "./components/About"
import { IndustriesWeServe } from "./components/IndustriesWeServe"
import { Audience } from "./components/Audience"
import { Testimonials } from "./components/Testimonials"
import { ClientLogos } from "./components/ClientLogos"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ScrollZigzag } from "./components/ScrollZigzag"
import { FloatingCTA } from "./components/FloatingCTA"
import { ServicePage } from "./components/ServicePage"

// Landing page — all the home sections.
function Home() {
  return (
    <main>
      <HeroSection />
      <TrustStrip />
      <About />
      <Services />
      <IndustriesWeServe />
      <Audience />
      <Testimonials />
      <ClientLogos />
      <Contact />
    </main>
  )
}

// Jump to the top whenever the route changes (so service pages start at the top).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <ScrollToTop />
      {/* header — on every page */}
      <Navbar />

      {/* routed content grows to fill the viewport so the footer always sits at
          the bottom, even on short service pages */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </div>

      {/* footer — on every page */}
      <Footer />
      {/* zigzag weaves between the home sections — home page only (its self-sizing
          overlay would otherwise inflate the height of short service pages) */}
      {isHome && <ScrollZigzag />}
      <FloatingCTA />

      {/* subtle grain texture for premium depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[5] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}

export default App
