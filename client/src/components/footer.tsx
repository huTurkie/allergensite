import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import leafLogo from "../assets/leaf-logo.png";

const footerLinks = {
  support: [
    { name: "Contact Us", href: "#" },
    { name: "Feature Requests", href: "#" }
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/people/AllergenAi/61578715483605/", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/AllergenAI", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/allergenai_official/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/allergenai", label: "LinkedIn" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0">
          {/* Brand & Social */}
          <div className="flex flex-col items-center lg:items-start lg:ml-16 -mt-6">
            {/* Logo and Brand Name - moved slightly left */}
            <div className="flex items-center mb-1 -ml-2">
              <img 
                src={leafLogo} 
                alt="AllergenAI Leaf Logo" 
                className="w-12 h-12 object-contain -mr-4"
              />
              <span className="text-2xl font-bold text-white">AllergenAI</span>
            </div>
            
            <p className="text-gray-400 mb-3 text-lg leading-relaxed max-w-sm text-center lg:text-left">
              Find us on social media
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-violet-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Support - Middle */}
          <div className="text-center lg:text-left lg:ml-32">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Right */}
          <div className="text-center lg:text-left lg:mr-16">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
