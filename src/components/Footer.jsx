function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">ABYSS</h3>
          <p className="text-slate-400 text-sm">
            Discover the hidden wonders of the deep ocean with premium 
            submarine expeditions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">About</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Packages</li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <p className="text-slate-400 text-sm mb-2">📧 contact@abyss.com</p>
          <p className="text-slate-400 text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-slate-400 text-sm">📍 Mumbai, India</p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
        © 2026 ABYSS. Built for HackOcean Hackathon. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer