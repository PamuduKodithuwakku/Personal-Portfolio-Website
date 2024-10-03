import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react'
import Image from 'next/image';

interface Props {
  openNav:() => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        {/* <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>Port<span className='text-yellow-300'>folio</span></h1> */}
        <div className='flex-[0.6] mt-2'>
        <Image src='/images/Pamudu.png' alt='me' height={60} width={120} />
        </div>
        <div className='nav-link'><a href="#home">Home</a></div>
        <div className='nav-link'><a href="#about">About</a></div>
        <div className='nav-link'><a href="#skills">Skills</a></div>
        <div className='nav-link'><a href="#projects">Projects</a></div>        
        <div className='nav-link'><a href="#experience">Experience</a></div>
        <div className='nav-link'><a href="#contact">Contact</a></div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
        </div>
      </div>
    </div>
  );
};

export default Nav;