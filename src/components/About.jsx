/* eslint-disable react/no-unknown-property */
import React from "react";
import { AlertTriangle, Lightbulb } from "lucide-react"; // Lucide icons

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Transforming Waste Management
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between{" "}
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">
              environmental responsibility
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-purple-300 text-transparent bg-clip-text font-semibold">
              technological innovation
            </span>
            .
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Section */}
          <div className="bg-white/5 rounded-3xl p-14 border border-white/10 shadow-xl 
                          hover:shadow-white/20 transition duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-purple-300" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text">
                The Problem
              </h3>
            </div>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Inefficient waste management leads to{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text font-semibold">
                environmental damage
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">
                health issues
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-purple-300 text-transparent bg-clip-text font-semibold">
                resource wastage
              </span>{" "}
              across communities.
            </p>
          </div>

          {/* Solution Section */}
          <div className="bg-white/5 rounded-3xl p-14 border border-white/10 shadow-xl 
                          hover:shadow-white/20 transition duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-teal-300" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text">
                Our Solution
              </h3>
            </div>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold">
                SwachhSathi
              </span>{" "}
              creates a connected ecosystem for{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text font-semibold">
                smart waste tracking
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-purple-300 text-transparent bg-clip-text font-semibold">
                recycling incentives
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text font-semibold">
                community engagement
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
