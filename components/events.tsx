import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users } from "lucide-react"

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="events-title" className="text-2xl md:text-3xl font-semibold">
          Hackathons & Events
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="size-5 text-primary" />
                HackARthon – Pre-hackathon for Meta Spark Playtime
              </CardTitle>
              <CardDescription>Organized via XtrudAR AI Community</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">Recognition: $9600 prize, Top 3.3% globally.</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-5 text-primary" />
                SLASH KEY – 30 Hour Hackathon
              </CardTitle>
              <CardDescription>All Kerala Students</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Organized and mentored project teams throughout the event.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workshops</CardTitle>
              <CardDescription>Selected Highlights</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>• Data Structures with Prateek Narang (Google, Coding Minutes)</p>
              <p>• Data Science with Mohit Uniyal (TensorFlow Mentor)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Flagship & Community Events</CardTitle>
              <CardDescription>Organizing & Leadership</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>• AICSSYC’23 – Core Organizer & Panel Moderator</p>
              <p>• Colloquium ‘25 – Organizing Team, IEEE CS Kerala Chapter</p>
              <p>• INFORMATYKA – Section-wide Volunteer Meetup</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
