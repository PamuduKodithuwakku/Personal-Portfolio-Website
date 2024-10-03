import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-black pb-[4rem] pt-[6rem] md:pt-[8rem] text-white">
      <div className="container mx-auto  items-center w-[70%]">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-16">
            ABOUT <span className="text-yellow-400">ME</span>
          </h1>
          <div className="flex items-center mb-[3rem] justify-center md:justify-start">
            <span className="w-[100px] hidden md:block h-[5px] bg-gray-500 rounded-sm"></span>
            <p data-aos="fade-left" className="text-lg md:text-xl text-gray-300 leading-relaxed ml-[1.5rem] md:ml-[2rem]">
              I am currently pursuing a BSc.(Hons) in Information Technology at the University of Moratuwa. As a full-stack developer, 
              I have a passion for learning new technologies and a strong interest in the DevOps field. My goal is to utilize my skills 
              and expertise to bridge the gap between development and operations, ensuring efficient, reliable, and smooth software 
              delivery processes.
            </p>
            <span className="w-[100px] hidden md:block h-[5px] bg-gray-500 rounded-sm"></span>
          </div>
        </div>

        {/* Image Section */}
        {/* <div 
          data-aos="fade-left" 
          className="relative mx-auto md:mx-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex justify-center items-center"
        >
          <Image
            src="/images/Me.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg z-10"
          />
          <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-green-400 to-yellow-400 rounded-lg top-[-1.5rem] right-[-1.5rem] z-0"></div>
        </div> */}
      </div>
    </div>
  );
};

export default About;