import './App.css'
import { Hero } from './components/Hero'
import { MobileUseShowCase } from './components/MobileUseShowCase'
import { NavBar } from './components/NavBar'
import { PricingInfos } from './components/PricingInfos'
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
    </>
  )
}

export default App
