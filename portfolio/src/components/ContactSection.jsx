import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-stone-50 px-4 sm:px-8 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:divide-x divide-stone-200"
      >
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center md:pr-8 space-y-8 order-2 md:order-1"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-stone-500 font-light leading-relaxed max-w-md mx-auto md:mx-0">
              Open to collaborations in cloud computing, modern web
              applications, and innovative software projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-stone-700 justify-center md:justify-start">
              <div className="p-2 bg-stone-100 rounded-full">
                <Mail size={20} />
              </div>
              <a
                href="mailto:violantajanalfred40@gmail.com"
                className="hover:text-stone-900 transition-colors break-all"
              >
                violantajanalfred40@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-stone-700 justify-center md:justify-start">
              <div className="p-2 bg-stone-100 rounded-full">
                <MapPin size={20} />
              </div>
              <span>Cabuyao City, Laguna, PH</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center md:pl-8 space-y-8 order-1 md:order-2"
        >
          <div className="text-center">
            <h3 className="text-2xl font-light mb-8">Connect</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6"
            >
              {[
                { 
                  icon: <Github size={22} />, 
                  link: "https://github.com/alfred-jgv",
                  label: "GitHub"
                },
                { 
                  icon: <Linkedin size={22} />, 
                  link: "https://www.linkedin.com/in/jan-alfred-violanta-129300316",
                  label: "LinkedIn"
                },
                { 
                  icon: <FileText size={22} />, 
                  link: "#",
                  label: "Resume"
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  aria-label={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-3 rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-colors group w-full md:w-auto justify-center md:justify-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {/* Additional call to action for mobile */}
          <div className="block md:hidden text-center mt-8">
            <p className="text-stone-500 mb-4">Prefer to email directly?</p>
            <a
              href="mailto:violantajanalfred40@gmail.com"
              className="inline-block px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors text-sm"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;