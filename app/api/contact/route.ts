import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data || !data.email || !data.message) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }

  // Debug log – visible in v0 preview logs
  console.log("[v0] Contact message received:", data)

  // No-op success
  return NextResponse.json({ ok: true })
}
