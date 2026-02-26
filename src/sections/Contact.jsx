import { useRef } from "react"
// import emailjs from "@emailjs/browser"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!")
          form.current.reset()
        },
        () => {
          alert("Failed to send message.")
        }
      )
  }

  return (
    <section id="contact" className="px-6 lg:px-24 py-28">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-teal-400 tracking-widest text-sm mb-4">
          GET IN TOUCH
        </p>

        <h2 className="text-4xl lg:text-6xl font-bold text-teal-400">
          Let's build <span className="italic font-light  text-white">something great.</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Have a project in mind? I’d love to hear about it.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT: FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl 
                     rounded-3xl p-10 space-y-6"
        >

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full mt-2 p-4 rounded-xl bg-white/5 border border-white/10 
                         text-white outline-none transition
                         focus:border-teal-400
                         focus:shadow-[0_0_15px_rgba(20,184,166,0.6)]"
              placeholder="Your name..."
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full mt-2 p-4 rounded-xl bg-white/5 border border-white/10 
                         text-white outline-none transition
                         focus:border-teal-400
                         focus:shadow-[0_0_15px_rgba(20,184,166,0.6)]"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-2 p-4 rounded-xl bg-white/5 border border-white/10 
                         text-white outline-none transition
                         focus:border-teal-400
                         focus:shadow-[0_0_15px_rgba(20,184,166,0.6)]"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-teal-400 text-black font-semibold 
                       hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] 
                       transition flex items-center justify-center gap-2"
          >
            Send Message <Send size={18} />
          </button>

        </motion.form>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Email Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                          rounded-3xl p-8 flex items-center gap-6
                          hover:border-teal-400
                          hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]
                          transition">

            <div className="p-4 bg-teal-400/10 rounded-xl text-teal-400">
              <Mail size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white font-medium">sm30122000@gmail.com</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                          rounded-3xl p-8 flex items-center gap-6
                          hover:border-teal-400
                          hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]
                          transition">

            <div className="p-4 bg-teal-400/10 rounded-xl text-teal-400">
              <Phone size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white font-medium">+91 8777050461</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                          rounded-3xl p-8 flex items-center gap-6
                          hover:border-teal-400
                          hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]
                          transition">

            <div className="p-4 bg-teal-400/10 rounded-xl text-teal-400">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white font-medium">West Bengal, India</p>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl 
                          rounded-3xl p-8">
            <p className="text-green-400 font-medium mb-4">
              ● Currently Available
            </p>
            <p className="text-gray-400 text-sm">
              Open to internships, full-time roles, and freelance projects.
              Let's build something impactful.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact