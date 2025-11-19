import { motion } from 'framer-motion'
import { Headphones, Clock, ShieldCheck, Gift, Trophy } from 'lucide-react'

const items = [
  { icon: Headphones, text: '24/7 Support' },
  { icon: Clock, text: 'Fast Deposits & Cashouts' },
  { icon: ShieldCheck, text: 'Trusted Agents' },
  { icon: Gift, text: 'Exclusive Offers' },
  { icon: Trophy, text: 'Weekly Giveaways' },
]

export default function WhyUs() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400"
        >
          Why Play With Us
        </motion.h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-amber-400/30 bg-gradient-to-b from-[#121212] to-[#0e0e0e] p-6 text-center shadow-[0_0_20px_rgba(251,191,36,0.35)]"
              >
                <Icon className="mx-auto h-6 w-6 text-amber-300" />
                <div className="mt-3 font-semibold text-zinc-200">{it.text}</div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl neon-border" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
