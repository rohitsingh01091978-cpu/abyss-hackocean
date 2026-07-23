import { motion } from 'framer-motion'

const packages = [
  {
    title: "Coral Explorer",
    price: "₹25,000",
    duration: "2 Hours",
    desc: "Perfect for beginners. Explore vibrant coral reefs at 100m depth.",
    image: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Abyss Voyager",
    price: "₹55,000",
    duration: "5 Hours",
    desc: "Deep dive to 500m — witness bioluminescent creatures up close.",
    image: "https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Trench Master",
    price: "₹1,20,000",
    duration: "Full Day",
    desc: "Ultimate expedition to the ocean trench, 2000m deep. For thrill seekers.",
    image: "https://images.unsplash.com/photo-1502726299822-6f583f972e02?auto=format&fit=crop&w=800&q=80",
  },
]

function Packages() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Our Packages
          </p>
          <h2 className="text-4xl font-bold text-white">
            Choose Your Expedition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-cyan-400 text-3xl font-bold mb-4">{pkg.price}</p>
                <p className="text-slate-400 mb-6">{pkg.desc}</p>
                <p className="text-slate-500 text-sm mb-6">⏱ Duration: {pkg.duration}</p>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-full transition-colors">
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Packages