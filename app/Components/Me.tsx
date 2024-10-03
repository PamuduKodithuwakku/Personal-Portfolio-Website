import { motion } from 'framer-motion';
import TextEffect from './TextEffect';
import Image from 'next/image';
import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const Me = () => {
  return (
    <div id="home" className="bg-black mt-[10vh]">
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold mt-16 lg:mt-0">
            HI, I&apos;M <span className="text-yellow-400">Pamudu Kodithuwakku!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">Undergraduate at University of Moratuwa</p>
          <button className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a 
              href="/cv.pdf" 
              download
              className="px-[2rem] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase border rounded-full border-[#55e6a5] text-white flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white" />
            </a>
          </button>
        </div>

        <div className="relative w-[300px] h-[300px] mx-auto mt-8 lg:mt-16 flex items-center justify-center md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]">
          <Image
            src="/images/Me0.png"
            alt="me"
            layout="fill"
            objectFit="contain"
            className="object-cover rounded-full"
          />
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]"
            fill="transparent"
            viewBox="0 0 500 500"
          >
            <motion.circle
              cx="253" 
              cy="253" 
              r="250"  
              stroke="#00ff99" 
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }} 
              animate={{ 
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }} 
              transition={{ 
                duration: 20,
                repeat: Infinity, 
                repeatType: "reverse", 
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default Me;
