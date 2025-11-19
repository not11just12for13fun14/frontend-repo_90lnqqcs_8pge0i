import { motion } from 'framer-motion'
import { Dice5 } from 'lucide-react'

const gameList = [
  'Juwa','GameVault','FireKirne','UltraPanda','Vblink','Orion Star','MilkyWay','GameRoom','CashMachine','CashFrenzy','HighStake','CashVault','PandaMaster'
]

const photos = [
  'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=60', // roulette
  'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=60', // casino floor
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=60', // dice
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=60', // cards
  'https://images.unsplash.com/photo-1511193311914-9f7f37f9a6b0?auto=format&fit=crop&w=1200&q=60', // slot machine
  'https://images.unsplash.com/photo-1600880292089-90e7e86cd5d1?auto=format&fit=crop&w=1200&q=60', // chips
]

export default function Games() {
  const items = gameList.map((name, i) => ({
    name,
    img: photos[i % photos.length],
  }))

  return (
    <section id="games" className="relative bg-[#0b0b0b] py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400"
        >
          Play All Your Favorite Casino Apps
        </motion.h2>

        {/* Horizontal carousel with photo cards */}
        <div className="mt-10 relative">
          <div className="mask-gradient pointer-events-none absolute inset-y-0 left-0 w-16" />
          <div className="mask-gradient pointer-events-none absolute inset-y-0 right-0 w-16 rotate-180" />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -640, 0] }}
            transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
            className="flex gap-5 sm:gap-6 will-change-transform"
          >
            {items.concat(items).map((g, idx) => (
              <motion.a
                key={idx}
                href="#contact"
                whileHover={{ y: -6, scale: 1.045 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="group relative isolate min-w-[240px] sm:min-w-[280px] overflow-hidden rounded-2xl border border-amber-500/25 bg-[#111] shadow-[0_0_24px_rgba(245,158,11,0.28)]"
              >
                <img
                  src={g.img}
                  alt={g.name}
                  loading="lazy"
                  className="h-36 sm:h-40 w-full object-cover object-center transform-gpu transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
                  <div className="flex items-center gap-2 text-amber-200 drop-shadow-[0_0_12px_rgba(251,191,36,0.45)]">
                    <Dice5 className="h-5 w-5" />
                    <span className="font-semibold tracking-wide">{g.name}</span>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-black shadow-[0_0_12px_rgba(251,191,36,0.4)]">
                    Play
                  </span>
                </div>
                <span className="pointer-events-none absolute inset-0 rounded-2xl neon-border" />
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute -inset-x-1 -top-1 h-1 animate-sheen" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
    </section>
  )
}
