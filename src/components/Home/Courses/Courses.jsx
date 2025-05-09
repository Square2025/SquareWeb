import React from "react";
import {
  FaRocket,
  FaCalendarAlt,
  FaUserTie,
  FaTools,
  FaCertificate,
  FaBriefcase,
  FaArrowRight,
  FaStar,
  FaBookmark,
  FaFire
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Courses() {
  // Course data

  const navigate= useNavigate();
  const upcomingCourses = [
    {
      id: 1,
      title: "Build Your Own AI Products",
      description:
        "This isn't just a course—it's a startup bootcamp for the AI age. Build hands-on projects. Deploy live. Pitch like a pro.",
      status: "launching-soon",
      features: [
        { icon: <FaCalendarAlt />, text: "6 weeks of immersive learning" },
        { icon: <FaUserTie />, text: "Live mentorship from industry experts" },
        { icon: <FaTools />, text: "Build real AI tools & get certified" },
        { icon: <FaBriefcase />, text: "Showcase on your portfolio" },
      ],
      badge: "Most Anticipated",
      rating: 4.9,
      students: 320,
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=500&auto=format&fit=crop",
    },
  ];

  const handleNavigation = ()=>{
    navigate("/courses");
};
  const availableCourses = [
    {
      id: 2,
      title: "Web Development Bootcamp",
      description:
        "Master modern web development with React, Node.js, and more. Build a complete portfolio of projects.",
      status: "available",
      features: [
        { icon: <FaCalendarAlt />, text: "8 weeks of structured learning" },
        { icon: <FaUserTie />, text: "Weekly code reviews" },
        { icon: <FaTools />, text: "5 portfolio-ready projects" },
        { icon: <FaCertificate />, text: "Industry-recognized certification" },
      ],
      badge: "Bestseller",
      rating: 4.8,
      students: 1240,
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      description:
        "From statistics to machine learning. Learn to extract insights from data and build predictive models.",
      status: "available",
      features: [
        { icon: <FaCalendarAlt />, text: "10 weeks comprehensive curriculum" },
        { icon: <FaUserTie />, text: "Mentorship from data scientists" },
        { icon: <FaTools />, text: "Real-world data projects" },
        { icon: <FaBriefcase />, text: "Job placement assistance" },
      ],
      badge: "Trending",
      rating: 4.7,
      students: 980,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    },
  ];

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

  // Course card component
  const CourseCard = ({ course }) => (
    <motion.div 
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm bg-gradient-to-br from-black/60 to-[#121225]/80 group hover:shadow-2xl hover:shadow-[#9E67FF]/10 transition-all duration-500"
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-30">
        <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-md border border-white/10">
          {course.badge === "Most Anticipated" && <FaRocket className="mr-1 text-[#9E67FF]" />}
          {course.badge === "Bestseller" && <FaStar className="mr-1 text-yellow-400" />}
          {course.badge === "Trending" && <FaFire className="mr-1 text-orange-500" />}
          {course.badge}
        </div>
      </div>
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-30">
        {course.status === "launching-soon" ? (
          <div className="bg-[#9E67FF]/80 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center backdrop-blur-md">
            <FaRocket className="mr-1" /> Launching Soon
          </div>
        ) : (
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-white/10">
            Available Now
          </div>
        )}
      </div>
      
      {/* Bookmark button */}
      {/* <button className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 bg-black/50 p-2 rounded-full backdrop-blur-md text-white hover:bg-[#9E67FF]/70 transition-all duration-300 transform translate-y-2 group-hover:translate-y-16">
        <FaBookmark />
      </button> */}
      
      {/* Course Image */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Course Title on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{course.title}</h3>
          
          {/* Rating and Students */}
          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-xs ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-500"}`} />
                ))}
                <span className="ml-1 text-white text-xs">{course.rating}</span>
              </div>
              <span className="text-gray-300 text-xs">{course.students} students</span>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Course Details */}
      <div className="p-5">
        <p className="text-gray-300 mb-5 text-sm">{course.description}</p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {course.features.map((feature, idx) => (
            <div key={idx} className="flex items-start text-gray-300">
              <span className="text-[#9E67FF] mr-2 mt-1">{feature.icon}</span>
              <span className="text-xs">{feature.text}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="w-full py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group-hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9E67FF] to-[#6E45B5] opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#9E67FF] to-[#013E5C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 flex items-center justify-center text-white">
            {course.status === "launching-soon" ? "Pre-Register Now" : "Enroll Now"}
            <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="px-4 md:px-10 py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-[#9E67FF]/20 to-[#013E5C]/20 text-[#9E67FF] text-sm font-medium px-4 py-1.5 rounded-full border border-[#9E67FF]/20">
              Level Up Your Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Featured <span className="text-[#9E67FF]">Courses</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
            Elevate your skills with our carefully crafted courses designed to
            transform beginners into industry-ready professionals.
          </p>
        </motion.div>

        {/* Launching Soon Section */}
        <motion.div 
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <div className="bg-[#9E67FF]/10 p-2 rounded-lg">
                <FaRocket className="text-[#9E67FF] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Launching Soon</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </motion.div>

        {/* Available Courses Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-[#9E67FF]/10 p-2 rounded-lg">
                <FaCertificate className="text-[#9E67FF] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Top Courses</h3>
            </div>
            <button
              className="group cursor-pointer flex items-center text-gray-300 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2"
              onClick={handleNavigation}
            >
              <span className="mr-2 text-sm font-medium">
                Explore All Courses
              </span>
              <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {availableCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {/* Floating Decoration - Fixed positioning */}
          <div className="hidden md:block absolute right-0 top-1/2 w-40 h-40 bg-[#9E67FF] rounded-full filter blur-[80px] opacity-5 z-0"></div>
          <div className="hidden md:block absolute left-0 bottom-1/4 w-40 h-40 bg-[#013E5C] rounded-full filter blur-[80px] opacity-5 z-0"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Courses;