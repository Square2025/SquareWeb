import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaMoneyBillWave, FaArrowRight } from "react-icons/fa";
import graphics from "../../../assets/graphics.gif";

function LRCSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const processSteps = [
    {
      title: "Learn",
      desc: "Master job-ready skills through hands-on, industry-focused courses.",
      icon: <FaGraduationCap className="text-2xl md:text-3xl text-[#9E67FF]" />,
      bgGradient: "from-[#9E67FF]/10 to-[#9E67FF]/20",
      iconBg: "bg-[#9E67FF]/20"
    },
    {
      title: "Churn",
      desc: "Break it. Build it. Repeat. Challenges that turn learners into pros.",
      icon: <FaTools className="text-2xl md:text-3xl text-[#9E67FF]" />,
      bgGradient: "from-[#9E67FF]/15 to-[#013E5C]/15",
      iconBg: "bg-[#9E67FF]/20"
    },
    {
      title: "Earn",
      desc: "Freelance gigs and internships that reward your new skills.",
      icon: <FaMoneyBillWave className="text-2xl md:text-3xl text-[#9E67FF]" />,
      bgGradient: "from-[#013E5C]/15 to-[#9E67FF]/15",
      iconBg: "bg-[#9E67FF]/20"
    }
  ];

  return (
    <div className="px-4 md:px-10 py-20 overflow-hidden relative bg-white" >
      {/* Background decorations */}
      <div className="absolute -right-20 top-1/4 w-60 h-60 bg-[#9E67FF] rounded-full filter blur-[100px] opacity-5 z-0"></div>
      <div className="absolute -left-20 top-2/3 w-60 h-60 bg-[#013E5C] rounded-full filter blur-[100px] opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 py-40 space-y-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block  ">
            <span className="bg-gradient-to-r from-[#9E67FF]/20 to-[#013E5C]/20 text-[#9E67FF] text-sm font-medium px-4 py-1.5 rounded-full border border-[#9E67FF]/20">
              Our Methodology
            </span>
          </div>
          <h2 className="text-3xl md:text-7xl  text-black mb-4">
            Learn. <span className="text-[#9E67FF]">Churn.</span> Earn.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Our comprehensive approach transforms beginners into industry-ready 
            professionals through a proven three-step methodology.
          </p>
        </motion.div>

        {/* Two-column layout with GIF and Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black rounded-2xl px-10 py-10">
          {/* GIF Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10 pointer-events-none"></div>
              
              {/* GIF */}
              <img 
                src={graphics} 
                alt="Learn Churn Earn Process" 
                className="w-[520%] object-cover rounded-2xl"
              />
              
              {/* Animated pulse effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#9E67FF]/30 to-transparent rounded-2xl"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          {/* Steps Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-black/60 to-[#121225]/80 p-5"
                variants={itemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Step Number - Adjusted z-index and opacity for better mobile display */}
                <div className="absolute right-3 top-2 text-7xl font-bold  md:text-white/5 text-white/3 z-0">
                  {idx + 1}
                </div>
                
                {/* Icon */}
                <div className={`p-3 inline-flex rounded-lg ${step.iconBg} shrink-0`}>
                  {step.icon}
                </div>
                
                {/* Content - Added z-10 to ensure it stays above the number */}
                <div className="relative z-10 max-w-[calc(100%-60px)]">
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-sm break-words">
                    {step.desc}
                  </p>
                </div>
                
                {/* Animated gradient border */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#9E67FF] to-[#013E5C] opacity-60"></div>
              </motion.div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LRCSection;