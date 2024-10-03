import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  const handleLinkClick = (section: string) => {
    // Close the navbar and navigate to the section
    closeNav();
    const targetSection = document.querySelector(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[20000] bg-[#09101a]`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#home')}>
          <a href="#home">Home</a>
        </div>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#about')}>
          <a href="#about">About</a>
        </div>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#skills')}>
          <a href="#skills">Skills</a>
        </div>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#projects')}>
          <a href="#projects">Projects</a>
        </div>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#experience')}>
          <a href="#experience">Experience</a>
        </div>
        <div className='nav-link-mobile' onClick={() => handleLinkClick('#contact')}>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-[2rem] right-[3rem] w-[2rem] h-[2rem] text-yellow-400'>
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;