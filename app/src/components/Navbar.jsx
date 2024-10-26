import React from 'react';
// import { a } from 'react-router-dom';
import styled from "styled-components";
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className=" py-4 pl-9 pr-9">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Hyprland */}
        <div className="flex items-center space-x-2 ml-9">
          <div className="bg-[#0B5563] border border-cyan-500 p-1 rounded-full">
            {/* Add your logo icon here, if you have an SVG, you can embed it directly */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-cyan-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              />
            </svg>
          </div>
          <span className="text-white text-xl font-bold">Mappa</span>
        </div>

        {/* Right side: Nav links and icons */}
        <div className="flex items-center space-x-6 text-white mr-9 rounded-full pl-6 pr-6 pt-2 pb-2 bg-transparent border-2 border-sky-300">
          <a href="#" className="hover:text-cyan-400 transition duration-300">
            About Project
          </a>
          <a href="#" className="hover:text-cyan-400 transition duration-300">
            Plugins
          </a>
          <a href="#" className="hover:text-cyan-400 transition duration-300 ">
            Docs
          </a>

          {/* Icons */}

          {/* Install Button */}
          <a href="#" className="ml-6">
            <button className="bg-cyan-500 text-black px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300 flex ">
            <Github /> <a href="https://github.com/Ghruank/marketing-assistant">GitHub</a>
            </button>
          </a>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
