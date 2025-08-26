import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-stone-50 px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200"
      >
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center pr-8 py-16 space-y-8"
        >
          <div>
            <h2 className="text-4xl font-light tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-stone-500 font-light leading-relaxed">
              Open to collaborations in cloud computing, modern web
              applications, and innovative software projects.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-stone-700">
              <Mail size={22} />
              <a
                href="mailto:violantajanalfredg@gmail.com"
                className="hover:text-stone-900 transition-colors"
              >
                violantajanalfredg@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-stone-700">
              <MapPin size={22} />
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
          className="flex flex-col justify-center pl-8 py-16 items-start md:items-center"
        >
          <h3 className="text-2xl font-light mb-8">Connect</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex space-x-6"
          >
            {[
              { icon: <Github size={22} />, link: "https://github.com/alfred-jgv" },
              { icon: <Linkedin size={22} />, link: "www.linkedin.com/in/jan-alfred-violanta-129300316" },
              { icon: <FileText size={22} />, link: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 hover:border-stone-900 transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
