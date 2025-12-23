import type React from "react"
import { Navbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { VolunteeringTimeline } from "@/components/volunteering-timeline"
import { Events } from "@/components/events"
import { Awards } from "@/components/awards"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const themeVars: React.CSSProperties = {
    // Light mode tokens
    // Blue primary with white fg for contrast
    ["--primary" as any]: "oklch(0.55 0.18 255)", // brand blue
    ["--primary-foreground" as any]: "oklch(0.98 0 0)", // near-white

    // Accessible ring and accent aligned to brand
    ["--ring" as any]: "oklch(0.75 0.12 255)",
    ["--accent" as any]: "oklch(0.97 0 0)",
    ["--accent-foreground" as any]: "oklch(0.20 0 0)",
  }

  return (
    <main style={themeVars}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <VolunteeringTimeline />
      <Events />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
