import React, { useState } from 'react';
import Header from '../../Header/Header';
import {
  FaRocket,
  FaCalendarAlt,
  FaUserTie,
  FaTools,
  FaCertificate,
  FaBriefcase,
  FaArrowRight,
  FaStar,
  FaFilter,
  FaSearch,
  FaFire,
  FaGraduationCap,
  FaCode
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function CoursesPage() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Sample course data in same format as home page
  const allCourses = {
    bestseller: [
      {
        id: 1,
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
        id: 2,
        title: "JavaScript Masterclass",
        description:
          "Deep dive into advanced JavaScript concepts. Learn modern ES6+, design patterns, and functional programming.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "6 weeks of intensive learning" },
          { icon: <FaUserTie />, text: "1-on-1 code mentorship" },
          { icon: <FaTools />, text: "Build 3 advanced JS applications" },
          { icon: <FaBriefcase />, text: "Interview preparation included" },
        ],
        badge: "Bestseller",
        rating: 4.9,
        students: 870,
        image:
          "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=500&auto=format&fit=crop",
      },
    ],
    trending: [
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
      {
        id: 4,
        title: "UI/UX Design Bootcamp",
        description:
          "Master the art and science of user-centered design. Create stunning interfaces and seamless user experiences.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "7 weeks of practical training" },
          { icon: <FaUserTie />, text: "Portfolio reviews from designers" },
          { icon: <FaTools />, text: "4 complete UI/UX case studies" },
          { icon: <FaBriefcase />, text: "Design interview preparation" },
        ],
        badge: "Trending",
        rating: 4.6,
        students: 750,
        image:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=500&auto=format&fit=crop",
      },
    ],
    upcoming: [
      {
        id: 5,
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
      {
        id: 6,
        title: "Blockchain Development Intensive",
        description:
          "From Web3 fundamentals to building decentralized apps. Master smart contracts, DeFi protocols, and more.",
        status: "launching-soon",
        features: [
          { icon: <FaCalendarAlt />, text: "8 weeks of deep technical training" },
          { icon: <FaUserTie />, text: "Mentorship from blockchain engineers" },
          { icon: <FaTools />, text: "Build your own DApp & smart contracts" },
          { icon: <FaBriefcase />, text: "Connect with Web3 employers" },
        ],
        badge: "Most Anticipated",
        rating: 0,
        students: 180,
        image:
          "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=500&auto=format&fit=crop",
      },
    ],
    regular: [
      {
        id: 7,
        title: "Python for Automation",
        description:
          "Learn to automate repetitive tasks and build scripts that save time. Perfect for beginners and professionals alike.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "4 weeks of practical lessons" },
          { icon: <FaUserTie />, text: "Weekly live Q&A sessions" },
          { icon: <FaTools />, text: "10+ automation projects" },
          { icon: <FaBriefcase />, text: "Certificate of completion" },
        ],
        badge: "",
        rating: 4.5,
        students: 620,
        image:
          "https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 8,
        title: "Digital Marketing Fundamentals",
        description:
          "Master SEO, social media, email marketing, and analytics. Develop strategies that drive real business growth.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "5 weeks comprehensive curriculum" },
          { icon: <FaUserTie />, text: "Feedback from marketing experts" },
          { icon: <FaTools />, text: "Create live marketing campaigns" },
          { icon: <FaBriefcase />, text: "Industry-recognized certification" },
        ],
        badge: "",
        rating: 4.4,
        students: 890,
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 9,
        title: "Mobile App Development",
        description:
          "Build cross-platform mobile apps with React Native. Deploy to iOS and Android from a single codebase.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "7 weeks of hands-on development" },
          { icon: <FaUserTie />, text: "Code reviews from senior devs" },
          { icon: <FaTools />, text: "Build 2 complete mobile apps" },
          { icon: <FaBriefcase />, text: "App store submission guidance" },
        ],
        badge: "",
        rating: 4.6,
        students: 510,
        image:
          "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 10,
        title: "Cloud Computing & DevOps",
        description:
          "Master AWS, Docker, and Kubernetes. Build scalable infrastructure and implement CI/CD pipelines.",
        status: "available",
        features: [
          { icon: <FaCalendarAlt />, text: "9 weeks of advanced training" },
          { icon: <FaUserTie />, text: "Mentorship from DevOps engineers" },
          { icon: <FaTools />, text: "Build real cloud infrastructure" },
          { icon: <FaBriefcase />, text: "Preparation for AWS certification" },
        ],
        badge: "",
        rating: 4.7,
        students: 430,
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
      },
    ]
  };

  // Filter courses based on active category and search term
  const getFilteredCourses = () => {
    let filteredCourses = [];
    
    if (activeCategory === 'all') {
      // Combine all categories
      Object.keys(allCourses).forEach(category => {
        filteredCourses = [...filteredCourses, ...allCourses[category]];
      });
    } else {
      filteredCourses = allCourses[activeCategory] || [];
    }
    
    // Apply search filter if there's a search term
    if (searchTerm.trim() !== '') {
      return filteredCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filteredCourses;
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

  // Course card component (same as home page)
  const CourseCard = ({ course }) => (
    <motion.div 
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm bg-gradient-to-br from-black/60 to-[#121225]/80 group hover:shadow-2xl hover:shadow-[#9E67FF]/10 transition-all duration-500"
    >
      {/* Badge */}
      {course.badge && (
        <div className="absolute top-4 left-4 z-30">
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center backdrop-blur-md border border-white/10">
            {course.badge === "Most Anticipated" && <FaRocket className="mr-1 text-[#9E67FF]" />}
            {course.badge === "Bestseller" && <FaStar className="mr-1 text-yellow-400" />}
            {course.badge === "Trending" && <FaFire className="mr-1 text-orange-500" />}
            {course.badge}
          </div>
        </div>
      )}
      
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
          {course.rating > 0 && (
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-xs ${i < Math.floor(course.rating) ? "text-yellow-400" : "text-gray-500"}`} />
                ))}
                <span className="ml-1 text-white text-xs">{course.rating}</span>
              </div>
              <span className="text-gray-300 text-xs">{course.students} students</span>
            </div>
          )}
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
        <button onClick={()=>{navigate("/pre-course")}} className="w-full cursor-pointer py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group-hover:shadow-lg">
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

  // Category filter buttons
  const categories = [
    { id: 'all', name: 'All Courses', icon: <FaGraduationCap /> },
    { id: 'bestseller', name: 'Bestsellers', icon: <FaStar /> },
    { id: 'trending', name: 'Trending', icon: <FaFire /> },
    { id: 'upcoming', name: 'Upcoming', icon: <FaRocket /> },
    { id: 'regular', name: 'Regular Courses', icon: <FaCode /> },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%] overflow-x-hidden">
      <Header />
      
      {/* Page Hero Section */}
      <div className="relative pt-40 pb-12 px-4 md:px-10">
        <motion.div 
          className="max-w-7xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-[#9E67FF]/20 to-[#013E5C]/20 text-[#9E67FF] text-sm font-medium px-4 py-1.5 rounded-full border border-[#9E67FF]/20">
              Transform Your Career
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Browse Our <span className="text-[#9E67FF]">Courses</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
            From beginner fundamentals to advanced specializations, find the perfect course to accelerate your professional growth and unlock new opportunities.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9E67FF]/50 focus:border-transparent backdrop-blur-xl"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </motion.div>
        
        {/* Background decorations */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#9E67FF] rounded-full filter blur-[120px] opacity-5 z-0"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-[#013E5C] rounded-full filter blur-[120px] opacity-5 z-0"></div>
      </div>
      
      {/* Category Filter Section */}
      <div className="px-4 md:px-10 mb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-[#9E67FF] text-white shadow-lg shadow-[#9E67FF]/20' 
                    : 'bg-black/30 text-gray-300 border border-white/10 hover:bg-black/40'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Courses Grid */}
      <div className="px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {getFilteredCourses().map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
          
          {/* No results message */}
          {getFilteredCourses().length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Floating decorations */}
      <div className="hidden md:block fixed right-0 top-1/2 w-40 h-40 bg-[#9E67FF] rounded-full filter blur-[80px] opacity-5 z-0"></div>
      <div className="hidden md:block fixed left-0 bottom-1/4 w-40 h-40 bg-[#013E5C] rounded-full filter blur-[80px] opacity-5 z-0"></div>
      <div>
      <div>
        <Footer/>
      </div>
      </div>
    </section>
  );
}

export default CoursesPage;