import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          ABYSS
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><Link to="/" className="hover:text-cyan-400 transition-colors">About</Link></li>
          <li><Link to="/" className="hover:text-cyan-400 transition-colors">Packages</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Desktop Button */}
        <Link to="/contact" className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2 rounded-full transition-colors">
          Book Now
        </Link>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">Home</Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">About</Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-cyan-400">Packages</Link>
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