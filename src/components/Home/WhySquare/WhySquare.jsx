import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaMoneyBillWave, FaBriefcase, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

function WhySquare() {
  const reasons = [
    {
      icon: <FaRocket />,
      title: "Startup Simulation Learning",
      description: "Experience the real startup grind by building products in a fast-paced, hands-on simulation."
    },
    {
      icon: <FaUsers />,
      title: "Peer-to-Peer Power",
      description: "Learn, collaborate, and level up together with like-minded peers."
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Earn While You Learn",
      description: "Get paid gigs and projects as you sharpen your skills."
    },
    {
      icon: <FaBriefcase />,
      title: "Projects That Pop",
      description: "Build portfolio-worthy work that grabs employers’ attention."
    }
  ];

  const testimonials = [
    {
      quote: "The only platform where I built real products and got my first freelance client before graduating.",
      name: "Sanya",
      position: "3rd Year BTech",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "Square helped me level up my coding skills and land a tech internship that actually pays well!",
      name: "Arjun",
      position: "2nd Year BCA Student",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "The community here is fire! I've made connections that will last throughout my career.",
      name: "Zara",
      position: "Final Year Design Student",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      quote: "No cap - Square's projects gave me the confidence to start my own side hustle while still in college.",
      name: "Dev",
      position: "Computer Science Graduate",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const testimonialVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="px-4 md:px-10 py-20 overflow-hidden bg-[#E8F7F3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 py-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-6xl  text-black mb-4 relative inline-block">
          Why Learners Level Up 
          <span className="text-[#9E67FF] "> With Square</span>
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-[#9E67FF] to-[#013E5C] rounded-full"></div>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-6 text-lg">
          We’re not here to lecture — we’re here to launch careers.
          </p>
        </motion.div>

        {/* Reasons Grid */}
<motion.div            
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"           
  variants={containerVariants}           
  initial="hidden"           
  whileInView="visible"           
  viewport={{ once: true }}         
>           
  {reasons.map((reason, index) => (   
    <motion.div      
      key={index}     
      className="relative bg-gradient-to-br from-white/80 via-[#AAF3EB]/20 to-[#A28DEC]/25 backdrop-blur-xl rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/90 hover:via-[#AAF3EB]/30 hover:to-[#A28DEC]/40 hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-[#A28DEC]/40 hover:-translate-y-3 hover:scale-105 transition-all duration-400 group overflow-hidden"
      variants={itemVariants}     
      whileHover={{        
        y: -12,        
        scale: 1.05,       
        transition: {          
          duration: 0.4,         
          type: "spring",         
          stiffness: 300       
        }     
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(170,243,235,0.2), rgba(162,141,236,0.25))',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
      }}   
    >
      {/* Gradient border overlay */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-100 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: 'linear-gradient(135deg, #A28DEC, #AAF3EB, #A28DEC)',
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      >
        <div className="w-full h-full rounded-3xl bg-transparent"></div>
      </div>

      {/* Enhanced gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #A28DEC, #AAF3EB, #A28DEC, #AAF3EB)',
          padding: '3px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          filter: 'blur(0.5px)',
        }}
      >
        <div className="w-full h-full rounded-3xl bg-transparent"></div>
      </div>
     
      {/* Vibrant glass overlay */}     
      <div className="absolute inset-0 bg-gradient-to-br from-[#A28DEC]/15 via-[#AAF3EB]/20 to-[#A28DEC]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm" />          
      
      {/* Vibrant decorative elements */}     
      <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#A28DEC]/30 to-[#AAF3EB]/35 rounded-full blur-2xl group-hover:scale-150 group-hover:opacity-90 transition-all duration-500 opacity-50" />     
      <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-[#AAF3EB]/35 to-[#A28DEC]/30 rounded-full blur-xl group-hover:scale-130 group-hover:opacity-80 transition-all duration-400 opacity-45" />     
      
      {/* Icon with enhanced styling */}     
      <div className="relative mb-8 z-10">       
        <div className="text-5xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg text-black">         
          {reason.icon}       
        </div>       
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#A28DEC] via-[#AAF3EB] to-[#A28DEC] rounded-full transform group-hover:w-24 group-hover:h-2 transition-all duration-500 shadow-lg shadow-[#A28DEC]/30" />     
      </div>          
      
      {/* Content */}     
      <div className="relative z-10">       
        <h3 className="text-black text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#A28DEC] group-hover:to-[#AAF3EB] transition-all duration-500">         
          {reason.title}       
        </h3>       
        <p className="text-gray-700 leading-relaxed text-base group-hover:text-black transition-colors duration-300">         
          {reason.description}       
        </p>     
      </div>          
      
      {/* Enhanced bottom accent with glow */}     
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#A28DEC] via-[#AAF3EB] to-[#A28DEC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-lg shadow-[#A28DEC]/50" />   
      
      {/* Vibrant corner highlight */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#AAF3EB]/25 via-[#A28DEC]/15 to-transparent rounded-bl-full opacity-60 group-hover:opacity-100 group-hover:scale-120 transition-all duration-500 transform" />
      
    </motion.div> 
  ))}         
</motion.div>
        {/* Testimonials Carousel - Enhanced Version */}
        {/* <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our <span className="text-[#9E67FF]">Students</span> Say
          </motion.h3>
          
          <div className="relative max-w-4xl mx-auto">
           
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#9E67FF] to-[#013E5C] opacity-40 blur-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#9E67FF] to-[#013E5C] opacity-40 blur-lg"></div>
            
            <motion.div 
              className="bg-gradient-to-r from-[#9E67FF]/20 to-[#013E5C]/30 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-xl shadow-black/30 border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentTestimonial}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <motion.div 
                className="relative z-10"
                variants={testimonialVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <FaQuoteLeft className="text-4xl text-[#9E67FF] mb-6 opacity-80" />
                <p className="text-white text-xl md:text-2xl font-medium mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="relative">
                      <img 
                        src={testimonials[currentTestimonial].avatar} 
                        alt={testimonials[currentTestimonial].name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#9E67FF] mr-4"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#9E67FF] rounded-full p-1">
                        <FaStar className="text-yellow-300 text-xs" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].position}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
         
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#9E67FF] text-white p-3 rounded-full transition-all duration-300 shadow-lg shadow-black/20 border border-white/10 z-10"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#9E67FF] text-white p-3 rounded-full transition-all duration-300 shadow-lg shadow-black/20 border border-white/10 z-10"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <FaChevronRight />
            </button>
            
          
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrentTestimonial(index)}
                  className={`transition-all duration-300 ${
                    currentTestimonial === index 
                      ? "w-8 h-2.5 bg-[#9E67FF] rounded-full" 
                      : "w-2.5 h-2.5 bg-gray-500 rounded-full hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div> */}
        
        {/* CTA Button - Enhanced */}
        {/* <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="bg-gradient-to-r from-[#9E67FF] to-[#6E45B5] hover:from-[#8A57E0] hover:to-[#5D3B9A] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#9E67FF]/30 text-lg">
            Join Our Community
          </button>
          <div className="mt-4 text-gray-400 text-sm">Join 10,000+ students already learning with us</div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default WhySquare;