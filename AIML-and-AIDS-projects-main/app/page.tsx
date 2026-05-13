export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="inline-block rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-300 mb-6">
          Credex AI Spend Audit
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Stop Overpaying <br />
          for AI Tools
        </h1>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl">
          Analyze your AI stack instantly and discover savings across
          ChatGPT, Claude, Copilot, Cursor, Gemini, and more.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Start Free Audit
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-xl">
            View Demo
          </button>
        </div>

      </section>
    </main>
  );
}
