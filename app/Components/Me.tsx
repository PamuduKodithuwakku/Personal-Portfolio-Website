import React from 'react';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';

const Me = () => {
  return (
    <div id='home' className='h-[88vh] bg-black mt-[10vh]'>
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I&apos;M <span className='text-yellow-400'>Pamudu Kodithuwakku!</span>
          </h1>
          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            Undergraduate at University of Moratuwa
          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <a 
              href='/cv.pdf' 
              download
              className='px-[2rem] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
            </a>
          </div>
        </div>
        <div data-aos='zoom-in' className='w-[300px] mx-auto bg-[#55e6a5] mt-0 lg:mt-16 relative lg:flex items-center rounded-full h-[300px] sm:w-[500px] sm:h-[500px]'>
          <Image 
            src='/images/Me.jpg' 
            alt='me' layout='fill' 
            objectFit='contain' 
            className='object-cover rounded-full' 
          />
        </div>
      </div>
    </div>
  );
};

export default Me;