import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";

function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%]">
      <Header />
      
      <div className="pt-32 pb-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Terms and Conditions
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-gray-400 mb-1">Effective Date: {currentDate}</p>
              <p className="text-gray-400">Last Updated: {currentDate}</p>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              Welcome to Square Education. By using our platform, you agree to the following terms and conditions:
            </motion.p>
            
            {/* Section 1 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                1. Use of the Website
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>You must be 10 years or older to register.</li>
                <li>You agree to use the platform for lawful purposes only.</li>
                <li>You may not copy, resell, or exploit any part of our content without written permission.</li>
              </ul>
            </motion.div>
            
            {/* Section 2 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                2. Account Responsibilities
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You are liable for all activity under your account.</li>
              </ul>
            </motion.div>
            
            {/* Section 3 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                3. Intellectual Property
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>
                  All content, logos, videos, text, and materials on Square are the intellectual property of Square Education or its content providers.
                </li>
                <li>
                  Unauthorized use may result in legal action.
                </li>
              </ul>
            </motion.div>
            
            {/* Section 4 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                4. Course Access & Certificates
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>Course access is provided for a duration mentioned at the time of purchase.</li>
                <li>Certificates will only be issued upon successful completion of course requirements.</li>
              </ul>
            </motion.div>
            
            {/* Section 5 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                5. Termination
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate access to our platform without notice if you violate these terms.
              </p>
            </motion.div>
            
            {/* Section 6 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                6. Disclaimers
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>
                  We do not guarantee job placements but strive to provide you with skill-building tools and opportunities.
                </li>
                <li>
                  The content is for educational purposes and may be updated periodically.
                </li>
              </ul>
            </motion.div>
            
            {/* Section 7 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                7. Limitation of Liability
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300">
                Square Education will not be liable for any direct, indirect, incidental, or consequential damages 
                arising out of your use or inability to use the platform.
              </p>
            </motion.div>
            
            {/* Section 8 */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                8. Governing Law
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300">
                These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of Nagpur courts.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-5 -z-10"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#013E5C] rounded-full filter blur-[120px] opacity-5 -z-10"></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TermsAndConditions;