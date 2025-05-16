import './App.css'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Reviews } from './components/Reviews'
import { ServicesSection } from './components/ServicesSection'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <ServicesSection />
      <Reviews />
    </>
  )
}

export default App
