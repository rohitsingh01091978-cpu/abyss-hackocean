import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          ABYSS
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('packages')} className="hover:text-cyan-400 transition-colors">
              Packages
            </button>
          </li>
          <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
        </ul>

        <Link to="/contact" className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2 rounded-full transition-colors">
          Book Now
        </Link>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">Home</Link>
          <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 text-left">About</button>
          <button onClick={() => scrollToSection('packages')} className="text-slate-300 hover:text-cyan-400 text-left">Packages</button>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-cyan-500 text-slate-900 font-semibold px-5 py-2 rounded-full text-center">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar