import React, { useState, useEffect } from "react";
import logo from "../../assets/logowithname.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate =useNavigate()
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
  
  const handleNavigation =()=>[
    navigate("/")
  ]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/30 backdrop-blur-md shadow-lg shadow-black/10 py-3' : 'bg-transparent py-6 md:py-10'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-10 w-full">
        <div className="w-[50%] md:w-[70%]">
          <img src={logo} alt="Logo" className="transition-all duration-300 max-w-full h-auto" onClick={handleNavigation} />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between items-center text-[#BBDFFF] space-x-8 lg:space-x-12 text-md">
          <a href="/" className="cursor-pointer hover:text-white transition-colors duration-200">Home</a>
          <a href="/courses" className="cursor-pointer hover:text-white transition-colors duration-200">Courses</a>
          <a href="#" className="cursor-pointer hover:text-white transition-colors duration-200">About</a>
          <a href="#" className="cursor-pointer hover:text-white transition-colors duration-200">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="menu-button md:hidden text-[#BBDFFF] focus:outline-none z-50"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? 
            <FaTimes className="text-2xl" /> : 
            <FaBars className="text-2xl" />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg z-40 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <nav className="flex flex-col space-y-8 text-xl text-[#BBDFFF]">
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;