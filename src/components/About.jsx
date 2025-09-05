/* eslint-disable react/no-unknown-property */
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-gray-200 via-white to-gray-400 text-transparent bg-clip-text">
              Transforming Waste Management
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between <span className="text-white font-semibold">environmental responsibility</span> 
            and <span className="text-white font-semibold">technological innovation</span>.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Problem Section */}
          <div className="bg-white/5 rounded-2xl p-10 border border-white/10 shadow-xl 
                          hover:shadow-white/20 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white">The Problem</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Inefficient waste management leads to{" "}
              <span className="text-white font-semibold">environmental damage</span>,{" "}
              <span className="text-white font-semibold">health issues</span>, and{" "}
              <span className="text-white font-semibold">resource wastage</span> across communities.
            </p>
          </div>

          {/* Solution Section */}
          <div className="bg-white/5 rounded-2xl p-10 border border-white/10 shadow-xl 
                          hover:shadow-white/20 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-white">Our Solution</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">SwachhSathi</span> creates a connected ecosystem for{" "}
              <span className="text-white font-semibold">smart waste tracking</span>,{" "}
              <span className="text-white font-semibold">recycling incentives</span>, and{" "}
              <span className="text-white font-semibold">community engagement</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
