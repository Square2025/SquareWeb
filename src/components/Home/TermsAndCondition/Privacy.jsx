import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";

function PrivacyPolicy() {
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
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 mb-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Privacy Policy
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-gray-400 mb-1">Effective Date: {currentDate}</p>
              <p className="text-gray-400">Last Updated: {currentDate}</p>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              At Square Education, we value your trust and are committed to protecting your personal information. 
              This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit 
              our website or use our services.
            </motion.p>
            
            {/* Section 1 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                1. Information We Collect
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>
                  <span className="font-medium text-[#9E67FF]">Personal Data:</span> Name, email address, phone number, billing information, etc.
                </li>
                <li>
                  <span className="font-medium text-[#9E67FF]">Usage Data:</span> Pages visited, time spent, referral source, device details.
                </li>
                <li>
                  <span className="font-medium text-[#9E67FF]">Cookies:</span> We use cookies to enhance your browsing experience and analyze site traffic.
                </li>
              </ul>
            </motion.div>
            
            {/* Section 2 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                2. How We Use Your Data
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>To provide and maintain our educational services.</li>
                <li>To personalize your learning experience.</li>
                <li>To process transactions and communicate with you.</li>
                <li>For marketing (with opt-out option).</li>
                <li>To improve our platform based on usage trends and feedback.</li>
              </ul>
            </motion.div>
            
            {/* Section 3 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                3. Sharing Your Information
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300 mb-3">
                We do not sell, rent, or trade your personal information. We may share it with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>
                  Trusted service providers under confidentiality agreements (e.g., payment processors, hosting services).
                </li>
                <li>
                  Legal authorities, if required to comply with law or protect our rights.
                </li>
              </ul>
            </motion.div>
            
            {/* Section 4 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                4. Data Security
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300">
                We use secure servers, encrypted communications (SSL), and regular monitoring to protect your data. 
                While we strive for 100% security, no system is completely immune.
              </p>
            </motion.div>
            
            {/* Section 5 */}
            <motion.div className="mb-8" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                5. Your Rights
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                <li>
                  Access, correct, or delete your personal data by contacting us at <a href="mailto:hr@thesquareducation.com" className="text-[#9E67FF] hover:underline">hr@thesquareducation.com</a>.
                </li>
                <li>
                  Unsubscribe from promotional emails anytime.
                </li>
              </ul>
            </motion.div>
            
            {/* Section 6 */}
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                6. Changes to this Policy
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <p className="text-gray-300">
                We may update this Privacy Policy periodically. We will notify users via email or a website notice.
              </p>
            </motion.div>
          </motion.div>
          
          {/* No Refund Policy */}
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
              No Refund Policy
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-gray-400">Effective Date: {currentDate}</p>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8"
              variants={itemVariants}
            >
              Due to the nature of digital content and the immediate access provided after payment, 
              Square Education follows a strict No Refund Policy.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 relative inline-block">
                Please Note:
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9E67FF]/50"></div>
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 ml-2">
                <li>
                  All payments for courses, workshops, and digital content are final and non-refundable.
                </li>
                <li>
                  We encourage users to read course descriptions carefully and reach out to our support team before purchasing.
                </li>
                <li>
                  In the rare event of a technical issue (e.g., duplicate payment), contact us within 7 days at <a href="mailto:hr@thesquareducation.com" className="text-[#9E67FF] hover:underline">hr@thesquareducation.com</a> for resolution.
                </li>
                <li>
                  By enrolling in our courses, you acknowledge and agree to this No Refund Policy.
                </li>
              </ul>
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

export default PrivacyPolicy;