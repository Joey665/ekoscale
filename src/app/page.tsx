export default function Home() {
  return (
    <main>
      <header className="py-12">
        <h1 className="text-4xl font-bold">EkoScale</h1>
        <p className="mt-3 text-lg text-zinc-300 max-w-2xl">SME growth agency for Lagos businesses — web, SEO, advertising, and product design that drives revenue.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-zinc-900 rounded-lg">
          <h3 className="text-xl font-semibold">Websites</h3>
          <p className="mt-2 text-zinc-400">Fast, conversion-focused sites tailored to your customers.</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-lg">
          <h3 className="text-xl font-semibold">SEO & Content</h3>
          <p className="mt-2 text-zinc-400">Local SEO and content strategies to be found in Lagos search results.</p>
        </div>
        <div className="p-6 bg-zinc-900 rounded-lg">
          <h3 className="text-xl font-semibold">Paid Ads</h3>
          <p className="mt-2 text-zinc-400">ROI-driven campaigns across Meta, Google and X.</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Our approach</h2>
        <ol className="mt-4 space-y-3 text-zinc-300">
          <li>1. Discover — Understand your customers and goals.</li>
          <li>2. Build — Launch a tested, measurable website or campaign.</li>
          <li>3. Grow — Iterate with data to scale revenue.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-3 text-zinc-300">Email hello@ekoscale.ng or book a free call to discuss growth for your Lagos business.</p>
      </section>
    </main>
  )
}
