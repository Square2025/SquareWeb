import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../assets/logowithname.svg"
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "About Us", navigate: "/about" },
    // { name: "Courses", navigate: "/courses" },
    // { name: "Community", navigate: "/" },
    // { name: "Blog", navigate: "/" },
    { name: "Terms ", navigate: "/terms" },
    { name: "Privacy ", navigate: "/privacy" }
  ];
  
  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/company/thesquareducation/", label: "LinkedIn" },  
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/thesquareducation/", label: "Instagram" },
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
    <footer className="bg-black/30 text-gray-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#013E5C] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <img src={logo} alt="Logo" className="w-[20%]"/>
            </div>
            <p className="text-gray-400 mb-6 pr-4">
            Where skills keep you away from the corners.
            </p>
            
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
                  <Link 
                    to={link.navigate} 
                    className="hover:text-[#9E67FF] transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#9E67FF] rounded-full mr-2 opacity-70"></span>
                    {link.name}
                  </Link>
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
              <p>hr@thesquareducation.com</p>
              
              <p>653 A,Ramnagar,Nagpur</p>
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
            <Link to="/privacy" className="hover:text-[#9E67FF] transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#9E67FF] transition-colors duration-300">Terms of Use</Link>
            {/* <Link to="/cookies" className="hover:text-[#9E67FF] transition-colors duration-300">Cookies</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;