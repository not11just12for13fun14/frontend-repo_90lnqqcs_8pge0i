import { motion } from 'framer-motion'

const logos = [
  { name: 'Cash App', color: '#00C244' },
  { name: 'Venmo', color: '#3D95CE' },
  { name: 'Chime', color: '#2de26d' },
  { name: 'PayPal', color: '#00457C' },
  { name: 'Crypto', color: '#f59e0b' },
]

export default function Payments() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(249,115,22,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400"
        >
          Fast, Secure & Guaranteed Payouts
        </motion.h3>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {logos.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.06 }}
              className="relative rounded-2xl border border-amber-400/30 bg-gradient-to-b from-[#121212] to-[#0f0f0f] p-6 text-center shadow-[0_0_20px_rgba(251,191,36,0.35)]"
            >
              <div className="mx-auto h-12 w-12 rounded-xl" style={{ background: l.color }} />
              <div className="mt-3 text-sm font-semibold text-zinc-200">{l.name}</div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl neon-border" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
