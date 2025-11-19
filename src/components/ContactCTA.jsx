import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-[#0b0b0b] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-amber-400/30 bg-gradient-to-b from-[#121212] to-[#0f0f0f] p-8 sm:p-10 text-center shadow-[0_0_28px_rgba(251,191,36,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300">
            Need help? We’re available 24/7 — message us anytime.
          </h3>
          <p className="mt-3 text-zinc-300/90">Our team is standing by to get you playing in minutes.</p>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 px-7 py-3 font-semibold text-white shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:brightness-110 transition-all"
          >
            <MessageCircle className="h-5 w-5" />
            Message Us on Facebook
            <span className="absolute inset-0 rounded-full animate-sheen opacity-0 group-hover:opacity-100" />
          </a>

          <div className="pointer-events-none absolute inset-0 rounded-3xl neon-border-flicker" />
        </motion.div>
      </div>
    </section>
  )
}
