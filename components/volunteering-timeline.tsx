import { CalendarDays } from "lucide-react"

const items = [
  { role: "Chairperson – IEEE CS MESCE", period: "2022–23" },
  { role: "Vice Chairperson – IEEE CS MESCE", period: "2021–22" },
  { role: "SYP Lead – IEEE CS Kerala Section", period: "2023–24" },
  { role: "Joint Secretary – IEEE CS Kerala Section Professional Team", period: "" },
  { role: "NSS – Post Volunteer Secretary", period: "2021–22" },
  { role: "Hack Club – Volunteer", period: "2021–22" },
  { role: "Tinkerhub – Outreach Lead", period: "" },
  { role: "Founding Team – XtrudAR AI", period: "" },
]

export function VolunteeringTimeline() {
  return (
    <section id="volunteering" aria-labelledby="volunteering-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="volunteering-title" className="text-2xl md:text-3xl font-semibold">
          Leadership & Volunteering
        </h2>

        <ol className="mt-6 relative border-l pl-6">
          {items.map((item, i) => (
            <li key={i} className="mb-8 ml-2">
              <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border bg-background flex items-center justify-center">
                <CalendarDays className="size-3 text-primary" />
              </div>
              <h3 className="font-medium">{item.role}</h3>
              {item.period ? <p className="text-sm text-muted-foreground">{item.period}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
