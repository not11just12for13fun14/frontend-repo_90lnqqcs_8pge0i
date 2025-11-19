import { motion } from 'framer-motion'
import { Facebook, Gamepad2, Gift, CreditCard, Rocket } from 'lucide-react'

const steps = [
  { icon: Facebook, title: 'Join us on Facebook' },
  { icon: Gamepad2, title: 'Choose your favorite casino app' },
  { icon: Gift, title: 'Claim your bonus' },
  { icon: CreditCard, title: 'Deposit instantly' },
  { icon: Rocket, title: 'Start playing & winning' },
]

export default function HowToStart() {
  return (
    <section className="relative bg-[#070707] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.14),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300"
        >
          How to Start
        </motion.h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] p-6 text-center shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              >
                <Icon className="mx-auto h-6 w-6 text-cyan-300" />
                <div className="mt-3 font-semibold text-zinc-200">{s.title}</div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl neon-border" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
