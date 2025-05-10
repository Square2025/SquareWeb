import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  FaCheck,
  FaPlay,
  FaUsers,
  FaGraduationCap,
  FaLock,
  FaRegClock,
  FaRegCalendarAlt,
  FaChalkboardTeacher,
  FaRegLightbulb,
  FaShoppingCart
} from "react-icons/fa";
import { motion } from "framer-motion";

function CourseStart() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // This would typically come from an API call based on courseId
  // For now, we'll use sample data
  const courseData = {
    id: 1,
    title: "Build Your Own AI Products",
    subtitle: "From Concept to Deployment: A Comprehensive Guide to Building AI-Powered Applications",
    description:
      "This isn't just a course—it's a startup bootcamp for the AI age. Build hands-on projects. Deploy live. Pitch like a pro. Learn to leverage cutting-edge AI technologies to create products that solve real-world problems.",
    longDescription: "In this comprehensive course, you'll learn how to conceptualize, design, build, and deploy AI-powered applications that can transform industries. From understanding the fundamentals of machine learning to implementing advanced AI features, this course covers everything you need to know to become an AI product developer.\n\nYou'll work on real-world projects, receive personalized feedback from industry experts, and build a portfolio that showcases your skills to potential employers or investors. By the end of this course, you'll have the knowledge and confidence to build your own AI products from scratch.",
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
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=1200&auto=format&fit=crop",
    price: 199.99,
    discountPrice: 149.99,
    instructor: {
      name: "Dr. Sarah Johnson",
      title: "AI Research Scientist & Product Lead",
      bio: "Dr. Sarah Johnson has over 10 years of experience in AI research and product development. She has led AI teams at major tech companies and has published numerous papers on machine learning and natural language processing.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    whatYouWillLearn: [
      "Design and develop AI-powered applications from scratch",
      "Implement machine learning models in production environments",
      "Create natural language processing features for your applications",
      "Build computer vision capabilities into your products",
      "Deploy AI applications to the cloud and scale them effectively",
      "Pitch your AI product to potential investors or employers",
      "Navigate the ethical considerations of AI product development",
      "Stay updated with the latest advancements in AI technology"
    ],
    courseContent: [
      {
        title: "Introduction to AI Product Development",
        lessons: [
          { title: "Understanding the AI Product Landscape", duration: "45 min", preview: true },
          { title: "Identifying Opportunities for AI Applications", duration: "1 hr", preview: false },
          { title: "Setting Up Your Development Environment", duration: "30 min", preview: true }
        ]
      },
      {
        title: "Fundamentals of Machine Learning for Products",
        lessons: [
          { title: "Machine Learning Basics for Product Developers", duration: "1.5 hrs", preview: false },
          { title: "Selecting the Right ML Models for Your Product", duration: "1 hr", preview: false },
          { title: "Data Collection and Preparation Strategies", duration: "1.5 hrs", preview: false },
          { title: "Training and Evaluating Your Models", duration: "2 hrs", preview: false }
        ]
      },
      {
        title: "Building Natural Language Processing Features",
        lessons: [
          { title: "Introduction to NLP for Products", duration: "1 hr", preview: false },
          { title: "Implementing Chatbots and Conversational Interfaces", duration: "2.5 hrs", preview: false },
          { title: "Text Analysis and Sentiment Detection", duration: "1.5 hrs", preview: false }
        ]
      },
      {
        title: "Computer Vision Applications",
        lessons: [
          { title: "Fundamentals of Computer Vision for Products", duration: "1 hr", preview: false },
          { title: "Image Recognition and Classification", duration: "2 hrs", preview: false },
          { title: "Building Object Detection Features", duration: "1.5 hrs", preview: false }
        ]
      },
      {
        title: "Deployment and Scaling",
        lessons: [
          { title: "Cloud Deployment Strategies for AI Applications", duration: "1.5 hrs", preview: false },
          { title: "Monitoring and Maintaining AI Systems", duration: "1 hr", preview: false },
          { title: "Scaling Your AI Product", duration: "1 hr", preview: false }
        ]
      },
      {
        title: "Capstone Project: Building Your AI Product",
        lessons: [
          { title: "Conceptualizing Your AI Product", duration: "2 hrs", preview: false },
          { title: "Developing a Prototype", duration: "3 hrs", preview: false },
          { title: "Testing and Refining Your Product", duration: "2 hrs", preview: false },
          { title: "Preparing Your Product Pitch", duration: "1.5 hrs", preview: false }
        ]
      }
    ],
    requirements: [
      "Basic programming knowledge (Python preferred)",
      "Understanding of fundamental data structures and algorithms",
      "Familiarity with web development concepts",
      "A computer with internet access",
      "Enthusiasm for learning and building AI products!"
    ],
    targetAudience: [
      "Software developers looking to specialize in AI",
      "Entrepreneurs interested in building AI-powered startups",
      "Product managers who want to incorporate AI into their products",
      "Students pursuing careers in AI and machine learning",
      "Professionals transitioning to AI product development roles"
    ]
  };

  // Calculate total course duration
  const calculateTotalDuration = () => {
    let totalMinutes = 0;
    courseData.courseContent.forEach(section => {
      section.lessons.forEach(lesson => {
        const durationParts = lesson.duration.split(' ');
        if (durationParts.includes('hr') || durationParts.includes('hrs')) {
          const hours = parseFloat(durationParts[0]);
          totalMinutes += hours * 60;
        } else if (durationParts.includes('min')) {
          totalMinutes += parseFloat(durationParts[0]);
        }
      });
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hours ${minutes > 0 ? `${minutes} minutes` : ''}`;
  };

  // Calculate total lessons
  const calculateTotalLessons = () => {
    let total = 0;
    courseData.courseContent.forEach(section => {
      total += section.lessons.length;
    });
    return total;
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-10 px-4 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column - Course Info */}
            <motion.div 
              className="lg:w-2/3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {/* Course Badge */}
              <div className="mb-4">
                <span className="bg-[#9E67FF]/20 text-[#9E67FF] text-sm font-medium px-4 py-1.5 rounded-full border border-[#9E67FF]/20 inline-flex items-center">
                  <FaRocket className="mr-2" /> {courseData.badge}
                </span>
              </div>
              
              {/* Course Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {courseData.title}
              </h1>
              
              {/* Course Subtitle */}
              <h2 className="text-xl text-gray-300 mb-6">
                {courseData.subtitle}
              </h2>
              
              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < Math.floor(courseData.rating) ? "text-yellow-400" : "text-gray-500"}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-white font-medium">{courseData.rating}</span>
                </div>
                
                {/* Students */}
                <div className="flex items-center text-gray-300">
                  <FaUsers className="mr-2" />
                  <span>{courseData.students} students enrolled</span>
                </div>
                
                {/* Status */}
                <div className="flex items-center">
                  {courseData.status === "launching-soon" ? (
                    <div className="bg-[#9E67FF]/80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FaRocket className="mr-1" /> Launching Soon
                    </div>
                  ) : (
                    <div className="bg-green-500/80 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FaCheck className="mr-1" /> Available Now
                    </div>
                  )}
                </div>
              </div>
              
              {/* Instructor Info */}
              <div className="flex items-center mb-8">
                <img 
                  src={courseData.instructor.image} 
                  alt={courseData.instructor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#9E67FF]"
                />
                <div className="ml-3">
                  <p className="text-white font-medium">{courseData.instructor.name}</p>
                  <p className="text-gray-400 text-sm">{courseData.instructor.title}</p>
                </div>
              </div>
              
              {/* Course Description */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  {courseData.description}
                </p>
              </div>
              
              {/* Course Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {courseData.features.map((feature, idx) => (
                  <div key={idx} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col items-center text-center">
                    <span className="text-[#9E67FF] text-2xl mb-2">{feature.icon}</span>
                    <span className="text-gray-300 text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Column - Pricing Card */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="sticky top-24 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
                  <img
                    src={courseData.image}
                    alt={courseData.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button for Preview */}
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#9E67FF]/90 text-white p-4 rounded-full hover:bg-[#9E67FF] transition-all duration-300">
                    <FaPlay />
                  </button>
                </div>
                
                {/* Pricing */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-white">${courseData.discountPrice}</span>
                      {courseData.discountPrice < courseData.price && (
                        <span className="text-xl text-gray-400 line-through">${courseData.price}</span>
                      )}
                    </div>
                    {courseData.discountPrice < courseData.price && (
                      <div className="bg-[#9E67FF]/20 text-[#9E67FF] text-sm font-medium px-3 py-1 rounded-md inline-block">
                        {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% off
                      </div>
                    )}
                  </div>
                  
                  {/* Course Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <FaRegClock className="mr-3 text-[#9E67FF]" />
                      <span>{calculateTotalDuration()} total</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaPlay className="mr-3 text-[#9E67FF]" />
                      <span>{calculateTotalLessons()} lessons</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaRegCalendarAlt className="mr-3 text-[#9E67FF]" />
                      <span>6 weeks access</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaGraduationCap className="mr-3 text-[#9E67FF]" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9E67FF] to-[#6E45B5] opacity-90"></div>
                      <span className="relative z-10 flex items-center justify-center text-white">
                        {courseData.status === "launching-soon" ? "Pre-Register Now" : "Enroll Now"}
                        <FaArrowRight className="ml-2 text-xs" />
                      </span>
                    </button>
                    
                    <button className="w-full py-3 rounded-xl font-medium border border-white/20 text-white hover:bg-white/5 transition-all duration-300">
                      Add to Cart
                      <FaShoppingCart className="ml-2 inline-block" />
                    </button>
                  </div>
                  
                  {/* Money-back guarantee */}
                  <div className="mt-6 text-center text-gray-400 text-sm">
                    30-day money-back guarantee
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Course Content Tabs */}
      <div className="px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <div className="border-b border-white/10 mb-8">
            <div className="flex overflow-x-auto hide-scrollbar">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${
                  activeTab === 'overview' 
                    ? 'text-[#9E67FF] border-b-2 border-[#9E67FF]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${
                  activeTab === 'curriculum' 
                    ? 'text-[#9E67FF] border-b-2 border-[#9E67FF]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${
                  activeTab === 'instructor' 
                    ? 'text-[#9E67FF] border-b-2 border-[#9E67FF]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Instructor
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-4 font-medium text-lg whitespace-nowrap ${
                  activeTab === 'reviews' 
                    ? 'text-[#9E67FF] border-b-2 border-[#9E67FF]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* What You'll Learn */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseData.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <FaCheck className="text-[#9E67FF] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Course Description */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Course Description</h3>
                  <div className="text-gray-300 space-y-4">
                    {courseData.longDescription.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                {/* Requirements */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {courseData.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Who This Course Is For */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Who This Course Is For</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {courseData.targetAudience.map((audience, idx) => (
                      <li key={idx}>{audience}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
            
            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Course Content</h3>
                  <p className="text-gray-300">
                    {courseData.courseContent.length} sections • {calculateTotalLessons()} lessons • {calculateTotalDuration()} total length
                  </p>
                </div>
                
                {/* Accordion for course sections */}
                <div className="space-y-4">
                  {courseData.courseContent.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="border border-white/10 rounded-xl overflow-hidden">
                      {/* Section Header */}
                      <div className="bg-black/30 px-6 py-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-white font-medium">
                            {sectionIdx + 1}. {section.title}
                          </h4>
                          <span className="text-gray-400 text-sm">
                            {section.lessons.length} lessons
                          </span>
                        </div>
                      </div>
                      
                      {/* Section Lessons */}
                      <div className="divide-y divide-white/5">
                        {section.lessons.map((lesson, lessonIdx) => (
                          <div key={lessonIdx} className="px-6 py-4 flex justify-between items-center">
                            <div className="flex items-center">
                              {lesson.preview ? (
                                <FaPlay className="text-[#9E67FF] mr-3" />
                              ) : (
                                <FaLock className="text-gray-500 mr-3" />
                              )}
                              <span className={`${lesson.preview ? 'text-white' : 'text-gray-400'}`}>
                                {lessonIdx + 1}. {lesson.title}
                              </span>
                              {lesson.preview && (
                                <span className="ml-3 text-xs bg-[#9E67FF]/20 text-[#9E67FF] px-2 py-0.5 rounded">
                                  Preview
                                </span>
                              )}
                            </div>
                            <span className="text-gray-400 text-sm">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/4">
                  <img 
                    src={courseData.instructor.image} 
                    alt={courseData.instructor.name}
                    className="w-full aspect-square object-cover rounded-xl border-2 border-[#9E67FF]/30"
                  />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-white mb-2">{courseData.instructor.name}</h3>
                  <p className="text-[#9E67FF] mb-4">{courseData.instructor.title}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <FaChalkboardTeacher className="mr-2 text-[#9E67FF]" />
                      <span>4 Courses</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaUsers className="mr-2 text-[#9E67FF]" />
                      <span>1,240+ Students</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FaRegLightbulb className="mr-2 text-[#9E67FF]" />
                      <span>10+ Years Experience</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {courseData.instructor.bio}
                  </p>
                </div>
              </motion.div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center py-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Course Reviews</h3>
                  <p className="text-gray-300 mb-4">
                    Reviews will be available once the course launches.
                  </p>
                  <button className="bg-[#9E67FF]/20 text-[#9E67FF] px-6 py-3 rounded-xl font-medium hover:bg-[#9E67FF]/30 transition-all duration-300">
                    Be the first to review
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Floating decorations */}
      <div className="hidden md:block fixed right-0 top-1/2 w-40 h-40 bg-[#9E67FF] rounded-full filter blur-[80px] opacity-5 z-0"></div>
      <div className="hidden md:block fixed left-0 bottom-1/4 w-40 h-40 bg-[#013E5C] rounded-full filter blur-[80px] opacity-5 z-0"></div>
    </section>
  );
}

export default CourseStart;