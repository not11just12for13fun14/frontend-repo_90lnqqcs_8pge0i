import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const coins = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  scale: 0.6 + Math.random() * 0.9,
}))

export default function Hero() {
  const { scrollY } = useScroll()
  const parallax = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]" aria-label="Hero">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay + warm neon glows */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.6)_0%,rgba(10,10,10,0.9)_60%,#0a0a0a_100%)]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-32 h-96 opacity-60 bg-[radial-gradient(closest-side,_rgba(245,158,11,0.25),_transparent_70%)]" />
      <div className="pointer-events-none absolute -inset-x-40 top-0 h-96 opacity-40 bg-[radial-gradient(closest-side,_rgba(234,88,12,0.18),_transparent_70%)]" />

      {/* Warm particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 64 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-[2px] w-[2px] rounded-full bg-amber-300/70 shadow-[0_0_12px_2px_rgba(251,191,36,0.6)] animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating coins */}
      <div className="absolute inset-0 pointer-events-none">
        {coins.map((c) => (
          <div
            key={c.id}
            className="absolute coin"
            style={{ left: c.left, animationDelay: `${c.delay}s`, transform: `scale(${c.scale})` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 md:pt-44">
        <motion.div style={{ y: parallax }} className="max-w-3xl will-change-transform">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-[conic-gradient(at_10%_10%,#f59e0b_0%,#fb923c_20%,#ea580c_40%,#fbbf24_60%,#fdba74_80%,#f59e0b_100%)] drop-shadow-[0_0_26px_rgba(245,158,11,0.5)]"
          >
            Your #1 Online Casino Hub on Facebook
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-amber-100/90 max-w-2xl"
          >
            Play all top casino apps, get huge bonuses, and enjoy 24/7 payouts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 shadow-[0_0_25px_5px_rgba(251,191,36,0.6)] hover:brightness-110 transition-all duration-300"
            >
              <span className="absolute inset-0 animate-sheen opacity-0 group-hover:opacity-100" />
              Start Playing
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-[0_0_20px_4px_rgba(249,115,22,0.6)] hover:brightness-110 transition-all duration-300"
            >
              <span className="absolute inset-0 animate-sheen opacity-0 group-hover:opacity-100" />
              Join Us on Facebook
            </a>
          </motion.div>
        </motion.div>

        {/* Slot reel animation background element */}
        <div className="pointer-events-none absolute right-4 top-24 hidden md:block">
          <div className="slot-reel" />
        </div>
      </div>

      {/* Neon edge frame */}
      <div className="pointer-events-none absolute inset-0 rounded-none md:rounded-[28px] border border-transparent [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 rounded-[inherit] neon-border" />
      </div>
    </section>
  )
}
