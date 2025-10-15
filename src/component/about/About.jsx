import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Globe, BarChart3, Megaphone } from "lucide-react";

// 🌐 Service Data
const services = [
  { id: 1, name: "Web Development", icon: <Code className="w-8 h-8" /> },
  { id: 2, name: "Web Design", icon: <Palette className="w-8 h-8" /> },
  { id: 3, name: "Website Design", icon: <Globe className="w-8 h-8" /> },
  { id: 4, name: "SEO Services", icon: <BarChart3 className="w-8 h-8" /> },
  { id: 5, name: "Digital Marketing", icon: <Megaphone className="w-8 h-8" /> },
];

// 🧑‍💻 Internship Data
const internships = [
  "Web Development",
  "Web Design",
  "Java",
  "Python",
  "AI / ML",
  "Data Science",
  "Data Analysis",
];

export default function About() {
  return (
    <section id="about" className="w-full bg-gray-50">
      {/* 🖼️ Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80"
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering <span className="text-teal-400">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Transforming ideas into impactful web experiences & empowering the next generation of developers.
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* 🧭 About Text */}
      <motion.div
        className="max-w-6xl mx-auto text-center py-16 px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          About <span className="text-teal-600">Us</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We are a passionate team dedicated to building modern, fast, and user-friendly web solutions. 
          Along with professional services, we empower students and freshers with industry-level training and internships in trending technologies.
        </p>
      </motion.div>

      {/* 🌐 Our Services Section */}
      <div className="max-w-6xl mx-auto text-center px-6 md:px-20 pb-16">
        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-sm rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-teal-600 mb-3">{service.icon}</div>
              <h4 className="text-gray-800 font-semibold text-lg">{service.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🧑‍💻 Internship Programs */}
      <div className="max-w-6xl mx-auto text-center px-6 md:px-20 pb-20">
        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Internship Programs
        </motion.h3>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We provide hands-on training programs designed to make students industry ready. 
          Learn from professionals and work on real-time projects.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {internships.map((intern, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-200 transition"
            >
              {intern}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
