import Hero from './components/Hero'
import Games from './components/Games'
import Payments from './components/Payments'
import Bonuses from './components/Bonuses'
import WhyUs from './components/WhyUs'
import HowToStart from './components/HowToStart'
import SafeSecure from './components/SafeSecure'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white">
      <Hero />
      <Games />
      <Payments />
      <Bonuses />
      <WhyUs />
      <HowToStart />
      <SafeSecure />
      <ContactCTA />
      <footer className="bg-[#050505] py-10 text-center text-zinc-500">© {new Date().getFullYear()} Vegas Hub. All rights reserved.</footer>
    </div>
  )
}

export default App
