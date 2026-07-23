import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1920&q=80" 
          alt="Deep Ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>

      {/* Glowing background effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 font-semibold tracking-widest uppercase mb-4"
        >
          Explore the Unknown
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Discover the <span className="text-cyan-400">Deep Ocean</span> <br /> Like Never Before
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-10"
        >
          Join ABYSS on a premium submarine expedition and witness the hidden wonders 
          of the ocean depths — safely, comfortably, and unforgettably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-full transition-colors">
            Book Your Expedition
          </button>
          <button className="border border-slate-400 hover:border-cyan-400 text-white px-8 py-3 rounded-full transition-colors">
            Learn More
          </button>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero