import './App.css'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import { MobileUseShowCase } from './components/MobileUseShowCase'
import { NavBar } from './components/NavBar'
import { PricingInfos } from './components/PricingInfos'
import QASection from './components/QASection'
import { Reviews } from './components/Reviews'
import { ServicesSection } from './components/ServicesSection'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ServicesSection />
      <Reviews />
      <MobileUseShowCase />
      <PricingInfos />
      <QASection />
      <Footer />
    </>
  )
}

export default App
