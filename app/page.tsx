"use client"; 

import React, { useEffect, useState } from 'react';
import Nav from "./Components/Nav";
import MobileNav from './Components/MobileNav';
import Me from './Components/Me';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './Components/Experience';

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Me />
        <div className='relative z-[30]'>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>     
      </div>
    </div>
  );
};

export default HomePage;