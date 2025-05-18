import React from "react";
import Header from "../Header/Header";
import Hero from "../../assets/hero.svg";
import LRCSection from "./LearnChurnEarn/LRCSection";
import Courses from "./Courses/Courses";
import WhySquare from "./WhySquare/WhySquare";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%] h-full overflow-x-hidden">
      <Header />

      {/* Hero Section - Responsive padding and layout */}
      <div className="pt-24 md:pt-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 py-12 md:py-20 gap-8 md:gap-0">
          {/* Text content - Full width on mobile, half on desktop */}
          <motion.div
            className="col-span-1 text-white space-y-5 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col text-3xl text-semibold md:text-4xl  font-sans">
              <TypeAnimation
                sequence={[
                  '"Where Skills Keeps Your Away From Corners"',
                  1000,
                  '"Where Skills Empower Your Future"',
                  1000,
                  '"Where Skills Transform Your Life"',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="leading-tight"
              />
            </div>
            <motion.div
              className="w-full md:w-[300px] text-sm  md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join a vibrant community of students and educators dedicated to
              fostering a lifelong love of learning. Discover innovative courses
              and tools that empower you to excel.
            </motion.div>
            {/* <motion.div
              className="bg-[#9E67FF] w-full md:w-auto md:inline-block text-center py-2 px-6 rounded-md cursor-pointer hover:drop-shadow-md hover:drop-shadow-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Join Now
            </motion.div> */}
          </motion.div>

          {/* Hero image - Adjusted positioning with mt-negative value and self-center */}
          <motion.div
            className="col-span-1 order-1 md:order-2 flex items-center md:items-start justify-center md:justify-end md:-mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={Hero}
              alt="Characters"
              className="max-w-full h-auto md:w-full"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Other sections */}
      <div>
        <LRCSection />
      </div>
      <div>
        <WhySquare />
      </div>
      <div>
        <Courses />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
