/* eslint-disable react/no-unknown-property */
import React from "react";

const GooeyNav = ({ items }) => {
  return (
    <nav className="relative">
      <ul className="flex gap-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="text-white font-medium hover:text-pink-400 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GooeyNav;
