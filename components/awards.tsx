import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="awards-title" className="text-2xl md:text-3xl font-semibold">
          Awards
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Outstanding Student Volunteer (Special Mention)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">IEEE Malabar Subsection – 2022</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Outstanding Student Volunteer Award
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">IEEE Computer Society Kerala Section – 2022</CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
