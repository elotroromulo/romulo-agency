import AnimationObserver from '@/components/AnimationObserver'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AnimationObserver />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <div className="glow-divider mx-6 sm:mx-12" />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
