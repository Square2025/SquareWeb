import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaBriefcase, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function AboutSquare() {
const navigate = useNavigate()

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleNavigation = () => {
navigate("/courses")
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%]">
      <Header />
      
      <div className="pt-32 pb-20 px-4 md:px-10 relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-10 -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#013E5C] rounded-full filter blur-[120px] opacity-10 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl  text-white mb-6">
              Welcome to <span className="text-[#9E67FF]">Square</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 italic mb-8">
              Where Skills keep you away from corners!
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                At 'Square,' we're redefining education through our groundbreaking ed-tech platform. 
                Our aim is to transform the educational landscape by prioritizing skills and values. 
                With Square, you gain access to top-notch learning experiences at unbelievable pricing.
              </p>
            </div>
          </motion.div>
          
          {/* Three-fold Approach */}
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-10 text-center"
              variants={fadeIn}
            >
              Our Three-fold Approach
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Learn */}
              <motion.div 
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="bg-[#9E67FF]/20 p-4 rounded-full mb-6">
                  <FaGraduationCap className="text-[#9E67FF] text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Learn</h3>
                <p className="text-gray-300">
                  Enrich your knowledge through affordable courses designed by industry experts.
                </p>
              </motion.div>
              
              {/* Churn */}
              <motion.div 
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="bg-[#9E67FF]/20 p-4 rounded-full mb-6">
                  <FaTools className="text-[#9E67FF] text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Churn</h3>
                <p className="text-gray-300">
                  Apply what you've learned through practical projects and worksheets that reinforce your skills.
                </p>
              </motion.div>
              
              {/* Earn */}
              <motion.div 
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center"
                variants={fadeIn}
              >
                <div className="bg-[#9E67FF]/20 p-4 rounded-full mb-6">
                  <FaBriefcase className="text-[#9E67FF] text-4xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Earn</h3>
                <p className="text-gray-300">
                  Seal your journey with internships, freelancing and job opportunities to showcase your mastery.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Our Mission */}
          <motion.div
            className="mb-20 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Our Mission
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  It's more than merely imparting skills at 'Square,' it's about ensuring job prospects upon successful course completion. 
                  We believe in accelerating your success by fostering learning, practice, and progress.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Furthermore, we are committed to developing a youth network ecosystem by integrating innovative methods with unique teaching techniques.
                  This synergy aims to evolve students into all-round performers, preparing them for the challenges of tomorrow's world.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaUsers className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Community Focused</h3>
                  <p className="text-gray-400">Building a network of skilled professionals who support each other.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaRocket className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Career Acceleration</h3>
                  <p className="text-gray-400">Fast-track your career with our industry-aligned curriculum.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaLightbulb className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Innovative Learning</h3>
                  <p className="text-gray-400">Unique teaching methods that make complex concepts accessible.</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaGraduationCap className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Holistic Development</h3>
                  <p className="text-gray-400">Focus on creating well-rounded professionals ready for any challenge.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          {/* <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join Square today and transform your educational experience. Discover courses that not only teach you skills but prepare you for real-world success.
            </p>
            <button onClick={handleNavigation} className="px-8 py-4 bg-gradient-to-r from-[#9E67FF] to-[#6E45B5] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105">
              Explore Our Courses
            </button>
          </motion.div> */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default AboutSquare;