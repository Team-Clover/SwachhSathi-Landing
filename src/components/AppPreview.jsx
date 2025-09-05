/* eslint-disable react/no-unknown-property */
import React from "react";
import { Play } from "lucide-react";

const AppPreview = () => {
  return (
    <section
      id="app-preview"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Android Phone Mockup */}
        <div className="relative flex justify-center">
          <div className="w-72 h-[520px] bg-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-800 relative overflow-hidden">
            {/* Speaker Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-700 rounded-full"></div>
            
            {/* Side Buttons */}
            <div className="absolute top-24 -left-1 w-1 h-14 bg-gray-700 rounded-r-md"></div>
            <div className="absolute top-40 -left-1 w-1 h-10 bg-gray-700 rounded-r-md"></div>
            <div className="absolute top-32 -right-1 w-1 h-20 bg-gray-700 rounded-l-md"></div>
            
            {/* Screen */}
            <div className="w-full h-full bg-gradient-to-b from-gray-800/80 to-black/90 flex flex-col items-center justify-center text-center px-6 py-10">
              {/* Bigger Mobile Icon */}
              <span className="text-7xl mb-6">📱</span>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white">Dashboard Overview</h3>
              
              {/* Badge */}
              <span className="text-sm bg-white/10 text-cyan-300 px-4 py-1 rounded-full mt-4">
                Analytics
              </span>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                Track your waste management progress, view statistics, and
                monitor your environmental impact in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="space-y-8">
          {/* Section Badge */}
          <span className="px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 text-black">
            App Preview
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              See SwachhSathi in Action
            </span>
          </h2>

          {/* Intro Text */}
          <p className="text-gray-400 max-w-lg leading-relaxed">
            Explore the intuitive interface and powerful features that make
            waste management simple and rewarding.
          </p>

          {/* Sub-section */}
          <div className="space-y-3">
            <span className="text-sm font-medium text-cyan-300 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              Analytics
            </span>
            <h3 className="text-2xl font-bold">Dashboard Overview</h3>
            <p className="text-gray-400 leading-relaxed">
              Track your waste management progress, view statistics, and monitor
              your environmental impact in real-time.
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Intuitive user interface
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Real-time data synchronization
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Offline functionality
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✔</span> Cross-platform compatibility
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 text-black font-bold hover:opacity-90 transition">
            <Play className="w-5 h-5" /> Watch Full Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
