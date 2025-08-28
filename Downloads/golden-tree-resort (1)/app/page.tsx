"use client"

import { useEffect, useState } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SuitesSection from "@/components/suites-section"
import DiningSection from "@/components/dining-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />

      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SuitesSection />
          <DiningSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
