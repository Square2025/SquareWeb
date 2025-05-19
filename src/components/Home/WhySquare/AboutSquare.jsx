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
                At Square, we’re not just another ed-tech platform — we’re a revolution.
We're flipping the script on traditional education by putting real-world skills and values front and center. Forget boring theory and overpriced courses — with Square, you get hands-on learning, industry-relevant content, and career-ready skills that actually matter.

Learn smarter. Build faster. Pay lesser.
Top-tier education, ridiculously affordable pricing, and vibes that match your hustle — that’s the Square promise.

It’s not just education. It’s evolution. Welcome to Square.
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
              Three Pillars. One Vision.
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
                  Level up with budget-friendly courses crafted by real industry pros. No fluff, just the good stuff that actually matters.

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
                  Get your hands dirty with real-world projects and challenges that turn knowledge into skill.

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
                 Put your skills to work — land internships, freelance gigs, or jobs that let you flex what you’ve mastered.
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
                  At Square, we’re not just teaching skills — we’re building futures. Every course is designed with one clear goal: helping you become employable and land real job opportunities once you’re done.

                </p>
                <p className="text-gray-300 text-lg leading-relaxed ">We believe in fast-tracking your success through a simple but powerful formula: learn it, apply it, own it.</p>
                <p className="text-gray-300 text-lg leading-relaxed mt-6">
                  But that’s not all. We’re creating a vibrant youth ecosystem — blending fresh ideas with next-gen teaching methods to shape all-rounders who are ready to take on the real world. Because your growth isn’t just about knowledge — it’s about becoming unstoppable, confident, and career-ready.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaUsers className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Community Focused</h3>
                  <p className="text-gray-400">We’re building a supportive network of learners, mentors, and professionals who grow together and lift each other up.
</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaRocket className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Career Acceleration</h3>
                  <p className="text-gray-400">Our entire ecosystem is designed to help you become employable faster, with content that mirrors what today’s job market demands.
</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaLightbulb className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Innovative Learning</h3>
                  <p className="text-gray-400">From bite-sized lessons to real-world simulations, our unique teaching methods make complex concepts easy to understand and even easier to apply.
</p>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <FaGraduationCap className="text-[#9E67FF] text-3xl mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Holistic Development</h3>
                  <p className="text-gray-400">We shape well-rounded professionals — blending technical skills, soft skills, and real-world experience so you’re ready for whatever comes next.</p>
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