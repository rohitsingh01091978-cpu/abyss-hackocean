import { useState } from 'react'
import Footer from '../components/Footer'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="min-h-screen bg-slate-950 pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4 text-center">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-white mb-10 text-center">
            Contact ABYSS
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-slate-300 block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact