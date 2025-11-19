import { motion } from 'framer-motion'
import { Gift, Coins, PartyPopper, Sparkles } from 'lucide-react'

const bonuses = [
  { label: '150% Sign-Up Bonus', color: 'from-amber-400 to-yellow-300', icon: Gift },
  { label: '200% Refer Bonus', color: 'from-fuchsia-400 to-pink-400', icon: PartyPopper },
  { label: '30% Regular Bonus', color: 'from-cyan-400 to-teal-300', icon: Sparkles },
  { label: '50% Second Deposit Bonus', color: 'from-purple-400 to-indigo-400', icon: Coins },
]

export default function Bonuses() {
  return (
    <section className="relative bg-[#070707] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,114,182,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-fuchsia-300 to-cyan-300"
        >
          Bonuses & Promotions
        </motion.h3>

        {/* Confetti layer */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <span
              key={i}
              className="absolute block h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-amber-300 via-fuchsia-400 to-cyan-300 opacity-70 animate-confetti"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bonuses.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-pink-400/30 bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] p-6 shadow-[0_0_20px_rgba(236,72,153,0.35)]"
              >
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${b.color} px-3 py-1 text-sm font-semibold text-black shadow-[0_0_12px_rgba(255,255,255,0.3)]`}>
                  <Icon className="h-4 w-4" />
                  {b.label}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl neon-border" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
