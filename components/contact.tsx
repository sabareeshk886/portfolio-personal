"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      setStatus("sending")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold">
          Contact
        </h2>
        <p className="mt-2 text-muted-foreground">
          <Mail className="inline size-4 mr-2 align-[-2px]" />
          Email:{" "}
          <a href="mailto:sabareeshk55@gmail.com" className="underline hover:text-primary">
            sabareeshk55@gmail.com
          </a>
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
          <div>
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your name" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <Textarea id="message" name="message" placeholder="How can I help?" required className="mt-1 min-h-32" />
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
            {status === "sent" && <span className="text-sm text-green-600">Message sent!</span>}
            {status === "error" && <span className="text-sm text-destructive">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
