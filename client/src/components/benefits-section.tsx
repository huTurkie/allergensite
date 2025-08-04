import { motion } from "framer-motion";
import { Shield, Clock, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Protect Your Health",
    description: "Stay safe and aligned with your values. AllergenAI helps you avoid allergens, non-vegan, and non-halal ingredients in seconds with smart AI detection.",
    bgColor: "bg-blue-violet-600"
  },
  {
    icon: Clock,
    title: "Save Time Shopping", 
    description: "Skip the fine print. Just scan a product and instantly see whether it meets your allergen, vegan, or halal preferences. Fast, accurate, and stress-free.",
    bgColor: "bg-blue-violet-600"
  },
  {
    icon: Smartphone,
    title: "Use It Anywhere",
    description: "Your phone is your superpower. With AllergenAI by your side, you can scan and check food anywhere — from grocery aisles to dinner tables.",
    bgColor: "bg-blue-violet-600"
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-violet-700 mb-6"
          >
            Why Choose AllergenAI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            More than just scanning - we're your personal food safety companion for a healthier, worry-free lifestyle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-20 h-20 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="w-10 h-10 text-white" strokeWidth={2} stroke="white" fill="none" />
              </div>
              <h3 className="text-2xl font-bold text-blue-violet-700 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
