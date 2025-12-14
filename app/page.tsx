"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  { name: "Lorrian Andwati", role: "Lead Structural Engineer", img: "/team/Lorian.jpg" },
  { name: "Alice M.", role: "Project Manager", img: "/team/Lorian.jpg" },
  { name: "John K.", role: "Civil Engineer", img: "/team/Lorian.jpg" },
  { name: "Mary A.", role: "Structural Designer", img: "/team/Lorian.jpg" }
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="scroll-smooth text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3 font-extrabold text-lg tracking-wide">
            <img src="/team/Design3.jpeg" alt="BiLOR Logo" className="h-9 w-9" />
            <span className="text-gray-900">BiLOR</span>
            <span className="text-green-600">ENGINEERING</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            {["home", "about", "services", "projects", "team", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-green-600 transition">{item.toUpperCase()}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1">
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-white border-t flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            {["home", "about", "services", "projects", "team", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setMenuOpen(false)} className="block hover:text-green-600 transition">{item.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="pt-36 min-h-screen flex flex-col justify-center items-center text-center px-6 
        bg-gradient-to-br from-black via-gray-900 to-green-900 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Structurally Sound,<br />
          <span className="text-green-400">Sustainably Designed</span>
        </motion.h1>

        <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
          Delivering innovative, safe, and sustainable civil & structural
          engineering solutions for residential, commercial, and industrial
          projects across Kenya.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow-lg text-center"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-green-400 rounded-xl hover:bg-green-400 hover:text-black transition text-center"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 max-w-6xl mx-auto px-6 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About BiLOR Engineering</h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            BiLOR Civil & Structural Engineering Design Ltd provides comprehensive civil and structural engineering services from concept design to project management. We are driven by quality, safety, innovation, and sustainable construction practices.
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { title: "Mission", text: "Deliver innovative, safe, and sustainable engineering solutions while prioritizing quality, integrity, and teamwork." },
              { title: "Vision", text: "To be a well-recognized structural engineering firm in Kenya, renowned for excellence and creativity." },
              { title: "Core Values", text: "Quality • Innovation • Safety • Integrity • Client Satisfaction" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-3 text-green-700">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-gradient-to-b from-gray-50 to-white px-6 space-y-10">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">Our Services</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Structural Design & Analysis",
            "Project Management & Coordination",
            "Feasibility Studies & Due Diligence",
            "Expert Witness Services",
            "Site Supervision & Engineering",
            "Consultancy Services"
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl border hover:border-green-600 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">Reliable, safe, and professional engineering solutions tailored to your project needs.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 max-w-6xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Residential Structural Design",
            "Commercial Developments",
            "Industrial Engineering Projects"
          ].map((project, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-gray-50 hover:border-green-600 transition">
              <h3 className="font-bold mb-2">{project}</h3>
              <p className="text-gray-600 text-sm">Engineering excellence delivered with precision and safety.</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 bg-gray-50 text-center px-6 space-y-10">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="flex justify-center mb-12">
          <img src="/team/Design3.jpeg" alt="BiLOR Logo" className="h-16 w-16" />
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05, y: -5 }} className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-2xl transition relative overflow-hidden">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="text-green-500 hover:text-green-600 transition">IG</a>
                <a href="#" className="text-green-500 hover:text-green-600 transition">TikTok</a>
                <a href="#" className="text-green-500 hover:text-green-600 transition">X</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 max-w-4xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Contact Us</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <form className="grid gap-4">
            <input className="p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Your Name" />
            <input className="p-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Your Email" />
            <textarea className="p-3 border rounded-xl h-32 focus:ring-2 focus:ring-green-500 outline-none" placeholder="Your Message" />
            <button className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition shadow">
              Send Message
            </button>
          </form>

          <div className="text-gray-700 space-y-3 text-sm">
            <p><strong>Phone / WhatsApp:</strong> 0799 236 234</p>
            <p><strong>Email:</strong> lorianandwati@gmail.com</p>
            <p><strong>Location:</strong> Hillside Estate, Opposite Kenya Creameries Company (KCC), Kapsoya, Eldoret, Uasin Gishu County</p>
            <p className="pt-4 text-gray-600 italic">Instagram · TikTok · X<br />bilor engineering designs ltd</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-8">
        <p className="text-gray-300">© 2025 BiLOR Civil & Structural Engineering Design Ltd</p>
        <p className="text-gray-500 text-sm mt-1">Building Trust, Designing the Future</p>
      </footer>
    </main>
  );
}
