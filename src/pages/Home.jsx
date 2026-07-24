import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Packages from '../components/Packages'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home