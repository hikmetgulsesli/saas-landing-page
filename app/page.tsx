import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-5xl font-bold text-text-primary mb-6 tracking-tight">
          Build Something Amazing
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mb-8">
          A modern SaaS platform designed to help you scale your business with powerful tools and intuitive workflows.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-medium rounded-lg shadow-md hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer transition-colors duration-fast"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </main>
  )
}
