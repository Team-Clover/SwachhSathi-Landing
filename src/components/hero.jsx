/* eslint-disable react/no-unknown-property */
import React from "react";
import GooeyNav from "./GooeyNav";
import Beams from "./Beams.jsx"; // 👈 shader beams background
import ShinyText from "./ShinyText.jsx"; // 👈 Import shiny text
import { Download } from "lucide-react"; // 👈 Download icon

const Hero = () => {
  // Navigation items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="w-screen min-h-screen relative bg-black">
      {/* Beams Background */}
      <div className="absolute inset-0 z-0">
        <Beams />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

      {/* Gooey Navigation */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <GooeyNav items={navItems} />
      </div>

      {/* Scrollable Content Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-6 overflow-y-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          SWACHH SATHI
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl opacity-80">
          Join the revolution in sustainable waste management. Connect citizens,
          workers, and factories through our intelligent platform for efficient
          waste tracking, recycling, and a greener future.
        </p>

        {/* Sleek Black & White Button */}
        <div className="mt-10">
          <a
            href="https://expo.dev/accounts/aditya_7/projects/ssdemo/builds/a636e517-ad84-4c35-aae4-7acdc39e455d"
            target="_blank"   // 👈 opens in new tab
            rel="noopener noreferrer" // 👈 security best practice
            className="relative inline-flex items-center gap-2 px-5 py-2 text-sm md:text-base font-semibold text-white rounded-full overflow-hidden group"
          >
            {/* Black & White Glow Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-white animate-gradient-x blur-lg opacity-40 group-hover:opacity-70 transition"></span>

            {/* Button Core */}
            <span className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 backdrop-blur-lg border border-white/30 group-hover:scale-105 transition-transform duration-300">
              <Download className="w-4 h-4 text-white" />
              <ShinyText text="DOWNLOAD NOW" speed={3} className="text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
