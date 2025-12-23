import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="experience-title" className="text-2xl md:text-3xl font-semibold">
          Professional Experience
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="size-5 text-primary" />
                DeepMost – Data Engineer
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="size-4" />
                Jul 2024 – Apr 2025 · Remote
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>• Contributed to “Lexeek,” an AI engagement platform.</p>
              <p>• Automated data cleaning scripts with Python & Pandas.</p>
              <p>• Optimized real-time frontend performance.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="size-5 text-primary" />
                Algorithma – Data Engineer
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Calendar className="size-4" />
                Jun 2023 – Jun 2024 · Kochi
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>• Maintained data pipelines for SmartBasket.AI & FIN-GPT.</p>
              <p>• Cleaned & mapped 500k+ records for AI investment models.</p>
              <p>• Built structured pipelines with SQL & PostgreSQL.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
