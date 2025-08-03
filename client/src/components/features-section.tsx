import { motion } from "framer-motion";
import { Camera, Barcode, QrCode } from "lucide-react";

// Custom Utensils Icon Component - Fork and knife without background box
const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Fork */}
    <path d="M11,10.3c0,0.93-0.64,1.71-1.5,1.93 V19H8v-6.77c-0.86-0.22-1.5-1-1.5-1.93V6.5C6.5,6.22,6.72,6,7,6s0.5,0.22,0.5,0.5V9h0.75V6.5c0-0.28,0.22-0.5,0.5-0.5 s0.5,0.22,0.5,0.5V9H10V6.5C10,6.22,10.23,6,10.5,6C10.78,6,11,6.22,11,6.5V10.3z"/>
    {/* Knife */}
    <path d="M15.58,12.59l-0.08,0.03V19H14v-6.38l-0.08-0.04 c-0.97-0.47-1.67-1.7-1.67-3.18c0-1.88,1.13-3.4,2.5-3.4c1.38,0,2.5,1.53,2.5,3.41C17.25,10.89,16.55,12.12,15.58,12.59z"/>
  </svg>
);

// Custom Label Scan Icon Component - Scanning frame with T letter
const LabelScanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top left corner */}
    <path d="M3 7V5C3 3.89543 3.89543 3 5 3H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Top right corner */}
    <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Bottom left corner */}
    <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Bottom right corner */}
    <path d="M21 17V19C21 20.1046 20.1046 21 19 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* T letter in center */}
    <path d="M9 9H15M12 9V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Custom QR Code Scan Icon Component - Scanning frame with barcode pattern
const QRScanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Top left corner */}
    <path d="M3 7V5C3 3.89543 3.89543 3 5 3H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Top right corner */}
    <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Bottom left corner */}
    <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Bottom right corner */}
    <path d="M21 17V19C21 20.1046 20.1046 21 19 21H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Barcode pattern inside */}
    <rect x="7" y="9" width="1" height="6" fill="currentColor"/>
    <rect x="9" y="9" width="0.5" height="6" fill="currentColor"/>
    <rect x="10.5" y="9" width="1.5" height="6" fill="currentColor"/>
    <rect x="12.5" y="9" width="0.5" height="6" fill="currentColor"/>
    <rect x="13.5" y="9" width="1" height="6" fill="currentColor"/>
    <rect x="15" y="9" width="0.5" height="6" fill="currentColor"/>
    <rect x="16" y="9" width="1" height="6" fill="currentColor"/>
  </svg>
);

const features = [
  {
    icon: UtensilsIcon,
    title: "Photo Scan",
    description: "Instantly identify allergens, vegan suitability, and halal compliance in your meals. Just point your camera at any dish and get comprehensive dietary information in seconds.",
    bgColor: "from-blue-violet-50 to-blue-violet-100",
    iconBg: "bg-blue-violet-500"
  },
  {
    icon: LabelScanIcon,
    title: "Label Scan", 
    description: "Quickly check ingredient lists for allergens, vegan status, and halal certifications. Scan any nutrition label and get instant alerts about potential dietary concerns.",
    bgColor: "from-blue-violet-50 to-blue-violet-100",
    iconBg: "bg-blue-violet-500"
  },
  {
    icon: QRScanIcon,
    title: "Barcode Scan",
    description: "Get instant dietary info from product packaging. Access detailed allergen information, vegan suitability, and halal certifications with one scan.",
    bgColor: "from-blue-violet-50 to-blue-violet-100", 
    iconBg: "bg-blue-violet-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-blue-violet-700 mb-6"
          >
            Three Ways to Stay Safe
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Advanced AI technology meets simple scanning to give you instant peace of mind about your food choices.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-violet-700 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
