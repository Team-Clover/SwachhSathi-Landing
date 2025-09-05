/* eslint-disable react/no-unknown-property */
import React from "react";
import {
  Recycle,
  Users,
  MapPin,
  Award,
  Leaf,
  Heart,
  Star,
  Globe,
} from "lucide-react";
import CountUp from "./CountUp";

const Impact = () => {
  return (
    <section
      id="impact"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center space-y-4">
          <span className="text-sm font-semibold px-4 py-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 text-black">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              WHAT IMPACT WE ARE AMING TO..
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See how <span className="font-semibold text-white">SwachhSathi</span> will be transforming communities and
            creating a sustainable future for everyone.
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Waste Tracked */}
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl text-center space-y-3 overflow-hidden group hover:scale-105 transition">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Recycle className="w-10 h-10 mx-auto text-teal-300 relative z-10" />
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp target="500000" suffix="+" />
            </h3>
            <p className="bg-gradient-to-r from-teal-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text font-semibold relative z-10">
              Tons of Waste Tracked
            </p>
            <p className="text-gray-400 text-sm relative z-10">Successfully monitored and processed</p>
          </div>

          {/* Citizens Engaged */}
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl text-center space-y-3 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Users className="w-10 h-10 mx-auto text-cyan-300 relative z-10" />
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp target="1200000" suffix="+" />
            </h3>
            <p className="bg-gradient-to-r from-cyan-300 via-teal-300 to-purple-300 text-transparent bg-clip-text font-semibold relative z-10">
              Citizens Engaged
            </p>
            <p className="text-gray-400 text-sm relative z-10">Actively participating in our ecosystem</p>
          </div>

          {/* Cities Connected */}
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl text-center space-y-3 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <MapPin className="w-10 h-10 mx-auto text-purple-300 relative z-10" />
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp target="250" suffix="+" />
            </h3>
            <p className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 text-transparent bg-clip-text font-semibold relative z-10">
              Cities Connected
            </p>
            <p className="text-gray-400 text-sm relative z-10">Across the country making a difference</p>
          </div>

          {/* Satisfaction Rate */}
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl text-center space-y-3 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Award className="w-10 h-10 mx-auto text-pink-300 relative z-10" />
            <h3 className="text-2xl font-bold relative z-10">
              <CountUp target="98" suffix="%" />
            </h3>
            <p className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text font-semibold relative z-10">
              Satisfaction Rate
            </p>
            <p className="text-gray-400 text-sm relative z-10">Users love our platform</p>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Why Choose SwachhSathi?
            </span>
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive benefits that extend far beyond waste management.
          </p>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl space-y-4 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Leaf className="w-8 h-8 text-teal-300 relative z-10" />
            <h4 className="text-xl font-bold relative z-10">Environmental Impact</h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Reducing carbon footprint through smart waste management and increased recycling rates.
            </p>
          </div>

          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl space-y-4 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Heart className="w-8 h-8 text-cyan-300 relative z-10" />
            <h4 className="text-xl font-bold relative z-10">Cleaner Neighborhoods</h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Creating healthier communities with improved waste collection and disposal systems.
            </p>
          </div>

          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl space-y-4 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Star className="w-8 h-8 text-purple-300 relative z-10" />
            <h4 className="text-xl font-bold relative z-10">Gamified Rewards</h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Motivating positive behavior through points, badges, and community recognition.
            </p>
          </div>

          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl space-y-4 overflow-hidden group hover:scale-105 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            <Globe className="w-8 h-8 text-pink-300 relative z-10" />
            <h4 className="text-xl font-bold relative z-10">Community Participation</h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Building stronger communities through collective environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
