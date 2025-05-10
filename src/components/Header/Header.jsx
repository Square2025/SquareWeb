import React, { useState, useEffect } from "react";
import logo from "../../assets/logowithname.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      const handleClickOutside = (e) => {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
          setMobileMenuOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [mobileMenuOpen]);
  
  const handleNavigation = () => {
    navigate("/");
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/30 backdrop-blur-md shadow-lg shadow-black/10 py-3' : 'bg-transparent py-6 md:py-10'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-10 w-full">
        <div className="w-[50%] md:w-[70%]">
          <img src={logo} alt="Logo" className="transition-all duration-300 max-w-full h-auto cursor-pointer" onClick={handleNavigation} />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center text-[#BBDFFF] space-x-8 lg:space-x-12 text-md">
          <span onClick={() => navigate("/")} className="cursor-pointer hover:text-white transition-colors duration-200">Home</span>
          <span onClick={() => navigate("/courses")} className="cursor-pointer hover:text-white transition-colors duration-200">Courses</span>
          <span onClick={() => navigate("/")} className="cursor-pointer hover:text-white transition-colors duration-200">About</span>
          <span onClick={() => navigate("/contact")} className="cursor-pointer hover:text-white transition-colors duration-200">Contact</span>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="menu-button md:hidden text-[#BBDFFF] focus:outline-none z-50 p-2 rounded-full bg-black/20 backdrop-blur-md"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? 
            <FaTimes className="text-xl" /> : 
            <FaBars className="text-xl" />
          }
        </button>
      </div>
      
      {/* New Mobile Menu - Dropdown style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg shadow-black/20 rounded-b-2xl overflow-hidden z-40 border-t border-white/5"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.nav className="flex flex-col py-4 px-6">
              <motion.span 
                className="py-3 border-b border-white/10 text-[#BBDFFF] hover:text-white transition-colors duration-200 cursor-pointer"
                variants={itemVariants}
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </motion.span>
              <motion.span 
                className="py-3 border-b border-white/10 text-[#BBDFFF] hover:text-white transition-colors duration-200 cursor-pointer"
                variants={itemVariants}
                onClick={() => {
                  navigate("/courses");
                  setMobileMenuOpen(false);
                }}
              >
                Courses
              </motion.span>
              <motion.span 
                className="py-3 border-b border-white/10 text-[#BBDFFF] hover:text-white transition-colors duration-200 cursor-pointer"
                variants={itemVariants}
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
              >
                About
              </motion.span>
              <motion.span 
                className="py-3 text-[#BBDFFF] hover:text-white transition-colors duration-200 cursor-pointer"
                variants={itemVariants}
                onClick={() => {
                  navigate("/contact");
                  setMobileMenuOpen(false);
                }}
              >
                Contact
              </motion.span>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;