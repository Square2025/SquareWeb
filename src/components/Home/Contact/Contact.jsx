import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ""
      });
    }, 5000);
  };

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
    <div className="min-h-screen bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%] text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16 relative">
        {/* Background decorations */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-10 z-0"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#013E5C] rounded-full filter blur-[120px] opacity-10 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Page Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-3">
              <span className="bg-gradient-to-r from-[#9E67FF]/20 to-[#013E5C]/20 text-[#9E67FF] text-sm font-medium px-4 py-1.5 rounded-full border border-[#9E67FF]/20">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Contact <span className="text-[#9E67FF]">Us</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Have questions or want to learn more about our programs? We're here to help you on your tech education journey.
            </p>
          </motion.div>
          
          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50 transition-all"
                    placeholder="Course Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50 transition-all resize-none"
                    placeholder="I'd like to learn more about your courses..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#9E67FF] to-[#013E5C] hover:from-[#9E67FF]/90 hover:to-[#013E5C]/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-between"
            >
              {/* Info Cards */}
              <div className="space-y-6 mb-8">
                <motion.div 
                  variants={itemVariants}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-5"
                >
                  <div className="bg-[#9E67FF]/20 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-[#9E67FF] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-300">653 A, Ramnagar, Nagpur, Maharashtra, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-5"
                >
                  <div className="bg-[#9E67FF]/20 p-3 rounded-lg">
                    <FaEnvelope className="text-[#9E67FF] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                   
                    <p className="text-gray-300">hr@thesquareducation.com</p>
                  </div>
                </motion.div>
                
                
              </div>
              
              {/* Social Media */}
              <motion.div 
                variants={itemVariants}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/thesquareducation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-[#9E67FF]/20 border border-white/10 p-3 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/thesquareducation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-[#9E67FF]/20 border border-white/10 p-3 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-[#9E67FF]">Questions</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find quick answers to common questions about our programs and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">What courses do you offer?</h3>
                <p className="text-gray-300">
                  We offer a wide range of tech courses including web development, data science, AI/ML, mobile app development, and more. Each course is designed with industry-relevant skills in mind.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How long are your programs?</h3>
                <p className="text-gray-300">
                  Our program durations vary from 8-week intensive bootcamps to 6-month comprehensive courses, depending on the subject matter and depth of content.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer job placement assistance?</h3>
                <p className="text-gray-300">
                  Yes, we provide career support including resume reviews, interview preparation, and connections to our industry partners for internship and job opportunities.
                </p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Are there any prerequisites for joining?</h3>
                <p className="text-gray-300">
                  Most of our beginner courses have no prerequisites. For advanced courses, we recommend specific prior knowledge or experience, which is detailed on each course page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Contact;