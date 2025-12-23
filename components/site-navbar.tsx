"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#volunteering", label: "Volunteering" },
  { href: "#events", label: "Hackathons & Events" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      id="home"
      className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      aria-label="Site navigation"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold">
          <span className="text-balance">Sabareesh K</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href="#contact">Get in touch</a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-sm hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-fit">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get in touch
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
