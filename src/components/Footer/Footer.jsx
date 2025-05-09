import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
    { name: "Terms & Privacy", href: "/terms" }
  ];
  
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaDiscord size={20} />, href: "https://discord.com", label: "Discord" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <footer className="bg-[#0A0A1A]/30 text-gray-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#013E5C] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <span className="bg-gradient-to-r from-[#9E67FF] to-[#013E5C] w-8 h-8 flex items-center justify-center rounded mr-2">S</span>
                Square
              </h2>
            </div>
            <p className="text-gray-400 mb-6 pr-4">
              Redefining tech education with real-world projects, mentorship, and a thriving community of learners and creators.
            </p>
            <div className="flex items-center">
              <div className="bg-white/10 rounded-l-lg px-4 py-2 border-r border-white/10">
                <FaEnvelope className="text-[#9E67FF]" />
              </div>
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="bg-white/5 rounded-r-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-[#9E67FF] border border-white/10 border-l-0 w-full" 
              />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#9E67FF]"></div>
            </h3>
            <motion.ul
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {navLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#9E67FF] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#9E67FF] rounded-full mr-2 opacity-70"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#9E67FF]"></div>
            </h3>
            <div className="space-y-3 text-gray-400">
              <p>hello@squareeducation.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Tech Plaza, San Francisco, CA</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Connect
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#9E67FF]"></div>
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="bg-white/5 hover:bg-[#9E67FF]/20 border border-white/10 p-3 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} The Square Education. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="/privacy" className="hover:text-[#9E67FF] transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#9E67FF] transition-colors duration-300">Terms of Use</a>
            <a href="/cookies" className="hover:text-[#9E67FF] transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;