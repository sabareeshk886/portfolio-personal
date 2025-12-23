export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="gallery-title" className="text-2xl md:text-3xl font-semibold">
          Gallery (Optional)
        </h2>
        <p className="mt-2 text-muted-foreground">A few moments from events and hackathons.</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/portfolio-personal/SaveClip.App_319538829_537085141662017_2012131291797034537_n.jpg" alt="Event moment 1" className="rounded-md border" />
          <img src="/portfolio-personal/SaveClip.App_327275655_864573264655487_6342149333143319464_n.jpg" alt="Event moment 2" className="rounded-md border" />

        </div>
      </div>
    </section>
  )
}
