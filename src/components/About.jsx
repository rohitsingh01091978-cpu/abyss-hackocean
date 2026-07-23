function About() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Actual Image */}
        <div className="rounded-2xl h-96 overflow-hidden border border-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80" 
            alt="ABYSS Deep Sea Exploration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Text content */}
        <div>
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            About ABYSS
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Pioneers of Deep Sea Exploration
          </h2>
          <p className="text-slate-400 text-lg mb-6 leading-relaxed">
            ABYSS was founded with a simple mission — to make the mysteries of the deep 
            ocean accessible to everyone. With state-of-the-art submarines and expert 
            guides, we take you where few have ever been.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">500+</h3>
              <p className="text-slate-400 text-sm mt-1">Expeditions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15</h3>
              <p className="text-slate-400 text-sm mt-1">Ocean Sites</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">98%</h3>
              <p className="text-slate-400 text-sm mt-1">Safety Record</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About