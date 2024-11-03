"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(); // Format: HH:MM:SS
      const dateString = now.toLocaleDateString(); // Format: DD/MM/YYYY (atau format lokal)
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateTime(); // Update initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#444444] to-[#555555] p-4 rounded-md mb-8 shadow-lg w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://lostsagakr-cdn-image.valofe.com/2014_grand/class/logo/common/logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="ml-5 md:ml-32 mb-1"
            />
          </Link>

          {/* Display Current Time and Date */}
          <div className="text-[#ffffff] ml-4">
            <p className="text-sm">{currentTime}</p>
            <p className="text-sm">{currentDate}</p>
          </div>
        </div>

        <div className="md:hidden mr-5">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col items-center justify-center transition-all duration-300">
              <span
                className={`block w-6 h-1 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-white mb-1 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-x-1" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
        <ul className="hidden md:flex md:flex-row md:items-center md:space-x-4">
          <li>
            <button className="relative text-[#ffffff] font-semibold transition duration-300 py-2 px-4 rounded-md bg-[#2A2A2A] hover:bg-[#353535] hover:text-[#ffffff] shadow-md hover:shadow-lg mr-32">
              Login
            </button>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu for Mobile */}
      <ul
        className={`absolute left-0 w-full bg-gradient-to-r from-[#444444] to-[#555555] rounded-md transition-all duration-200 ease-in-out ${
          isMenuOpen ? "top-16 flex flex-col" : "hidden"
        } md:hidden space-y-2 p-4`}
      >
        <li>
          <button className="block w-full text-[#ffffff] font-semibold transition duration-300 py-2 px-4 rounded-md bg-[#2A2A2A] hover:bg-[#353535] hover:text-[#ffffff] shadow-md hover:shadow-lg">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
