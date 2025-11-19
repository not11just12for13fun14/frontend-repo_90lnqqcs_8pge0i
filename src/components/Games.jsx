import { motion } from 'framer-motion'
import { Gamepad2, Rocket, Coins, Crown, Star, Dice5 } from 'lucide-react'

const games = [
  'Juwa','GameVault','FireKirne','UltraPanda','Vblink','Orion Star','MilkyWay','GameRoom','CashMachine','CashFrenzy','HighStake','CashVault','PandaMaster'
]

export default function Games() {
  return (
    <section id="games" className="relative bg-[#070707] py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300"
        >
          Play All Your Favorite Casino Apps
        </motion.h2>

        {/* Horizontal carousel */}
        <div className="mt-10 relative">
          <div className="mask-gradient pointer-events-none absolute inset-y-0 left-0 w-16" />
          <div className="mask-gradient pointer-events-none absolute inset-y-0 right-0 w-16 rotate-180" />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -600, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
            className="flex gap-4 sm:gap-6 will-change-transform"
          >
            {games.concat(games).map((name, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.04 }}
                className="min-w-[220px] sm:min-w-[260px] bg-[#0b0b0b] border border-fuchsia-500/30 rounded-2xl p-5 sm:p-6 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 text-cyan-200">
                  <Dice5 className="h-5 w-5" />
                  <span className="font-semibold tracking-wide">{name}</span>
                </div>
                <p className="mt-3 text-sm text-zinc-300/80">
                  Premium gameplay, bonuses and nonstop entertainment.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-[#050505]" />
    </section>
  )
}
