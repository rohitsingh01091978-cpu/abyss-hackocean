import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Adventure Traveler",
    text: "The Abyss Voyager package was life-changing. Seeing bioluminescent creatures up close in complete safety was unforgettable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Marine Biology Student",
    text: "As a beginner, the Coral Explorer package was perfect. The guides were incredibly knowledgeable and safety-focused throughout.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Arjun Kapoor",
    role: "Corporate Team Lead",
    text: "Booked the Trench Master for our team outing. Professional, thrilling, and beautifully organized from start to finish.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
]

function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-white">
            What Our Explorers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <p className="text-slate-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials