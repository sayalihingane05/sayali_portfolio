


import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import avatarImg from "../assets/avatarImg.jpg";

const Home = () => {
  return (
    <div
      className="text-white flex flex-col md:flex-row items-center 
      justify-between px-6 md:px-20 py-20"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-2/4 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Hello, I am{" "}
          <span className="text-[#2841a4]">
            <Typewriter
              words={["Sayali", "Full-Stack Developer"]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-gray-300">
          I’m a passionate Full-Stack Developer with strong React, Java, and SQL skills.
        </p>

        <a href="#Contact">
          <button
            className="mt-6 bg-[#40508b] px-6 py-2 rounded-3xl 
            hover:scale-110 hover:shadow-lg hover:shadow-[#465697]/50 
            transition font-semibold"
          >
            Contact Me
          </button>
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 md:mt-0"
      >
        {/* Glow Ring */}
        <div
          className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-blue-500 to-purple-500 
          blur-2xl opacity-60 animate-pulse"
        ></div>

        {/* Floating Image */}
        <motion.img
          src={avatarImg}
          alt="Avatar"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 md:w-80 md:h-80 
          rounded-full object-cover border-4 border-[#465697] 
          hover:scale-105 transition"
        />
      </motion.div>
    </div>
  );
};

export default Home;
