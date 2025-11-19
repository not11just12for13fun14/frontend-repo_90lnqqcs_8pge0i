import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'

export default function SafeSecure() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400"
        >
          Safe & Secure
        </motion.h3>

        <div className="mt-10 grid place-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center gap-4 rounded-3xl border border-amber-400/30 bg-gradient-to-b from-[#121212] to-[#0e0e0e] px-8 py-6 shadow-[0_0_24px_rgba(251,191,36,0.35)]"
          >
            <Shield className="h-8 w-8 text-amber-300" />
            <div className="text-amber-100 font-semibold">Your security is our priority. Play with confidence.</div>
            <Lock className="h-6 w-6 text-amber-300" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl neon-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
