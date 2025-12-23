"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h1 id="hero-title" className="text-3xl md:text-5xl font-semibold text-pretty">
          {"Hi, I’m Sabareesh 👋"} <span className="text-primary">Data Engineer</span> {"& Operations Lead"}
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
          Passionate about building with data and empowering communities through technology & leadership.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href="/Sabareesh Resume .docx-1.pdf" download="Sabareesh Resume .docx-1.pdf">
              <Download className="mr-2 size-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/sabareeshk/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 size-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/sabareeshk886" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto">
        <Image
          src={"/images/personal.jpg"}
          alt="Portrait of Sabareesh K"
          width={320}
          height={320}
          className="rounded-xl border shadow-sm"
          priority
        />
      </div>
    </section>
  )
}
