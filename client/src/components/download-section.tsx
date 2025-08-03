import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-violet-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* AllergenAI Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            AllergenAI
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Download AllergenAI Today
        </motion.h2>
      </div>
    </section>
  );
}
