import React from "react";
import Header from "../Header/Header";
import Hero from "../../assets/hero.svg";
import graphics from "../../assets/graphics.gif";

function Home() {
  return (
    <section className="bg-gradient-to-r from-[#181818] from-[0%] to-[#013E5C] to-[100%] h-full">
      <div>
        <Header />
      </div>
      {/* Hero Section */}
      <div>
        <div className="grid grid-cols-2 px-10 py-20">
          <div className="col-span-1 text-white space-y-5">
            <div className="flex flex-col text-4xl font-semibold ">
              "Where Skills Keeps Your Away{" "}
              <span className="mt-3">From Corners" </span>
            </div>
            <div className="w-[300px]">
              Join a vibrant community of students and educators dedicated to
              fostering a lifelong love of learning. Discover innovative courses
              and tools that empower you to excel.
            </div>
            <div className="bg-[#9E67FF] w-25 text-center py-2 rounded-md cursor-pointer hover:drop-shadow-md hover:drop-shadow-white/40 ">
              Join Now
            </div>
          </div>
          <div className="col-span-1 ">
            <img src={Hero} alt="Charecters" />
          </div>
        </div>
      </div>
      {/* What is Square */}
      <div>
        <div className="flex flex-col items-center px-10 py-20 pt-0 space-y-10">
          {/* Learn. Churn. Earn. Section - Redesigned to match hero style */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img 
                  src={graphics} 
                  alt="Animated Graphic" 
                  className="h-[400px] object-contain"
                />
              </div>
              <div className="text-white space-y-6">
                <h2 className="text-4xl font-semibold">
                  Learn. Churn. Earn.
                </h2>
                <p className="w-[85%]">
                  Our comprehensive approach transforms beginners into industry-ready 
                  professionals through a proven three-step methodology.
                </p>
                <div className="space-y-8 mt-8">
                  {[
                    {
                      title: "Learn",
                      desc: "Master job-ready skills through hands-on, industry-focused courses.",
                    },
                    {
                      title: "Churn",
                      desc: "Break it. Build it. Repeat. Challenges that turn learners into pros.",
                    },
                    {
                      title: "Earn",
                      desc: "Freelance gigs and internships that reward your new skills.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="bg-[#9E67FF] w-10 h-10 flex items-center justify-center rounded-md shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-300 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#9E67FF] w-32 text-center py-2 rounded-md cursor-pointer hover:drop-shadow-md hover:drop-shadow-white/40 mt-6">
                  Explore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;