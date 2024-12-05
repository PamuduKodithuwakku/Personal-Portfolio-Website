import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built using Next.js, TypeScript and Tailwind CSS to showcase my skills and projects.',
    imageSrc: '/images/p2.png',
    link: 'https://pamudukodithuwakku-portfolio-website.vercel.app',
  },
  {
    title: 'Food Ordering App',
    description: 'A full-stack food ordering system developed using Next.js, MongoDB, and PayPal integration for seamless payments.',
    imageSrc: '/images/p5.png',
    link: '#',
  },
  {
    title: 'Unified Project Workspace',
    description: 'A project management tool with user roles, task creation, and real-time collaboration using React, TypeScript, Node.js and Tailwind CSS.',
    imageSrc: '/images/p1.png',
    link: '#',
  },
  {
    title: 'Automated Hydroponic Farming Chamber',
    description: 'A smart farming system with automated environmental control using sensors and microcontrollers.',
    imageSrc: '/images/p4.png',
    link: 'https://www.linkedin.com/posts/pamudu-kodithuwakku-68930428b_exmo23-hardwareproject-hydroponics-activity-7252527784080617472-Dwic?utm_source=share&utm_medium=member_android',
  }
];

const Projects = () => {
  return (
    <div id='projects' className='bg-[#02050a] pt-[6rem] md:pt-[8rem] pb-12'>
      <h1 className='heading mb-12'>
        Pro<span className='text-yellow-400'>jects</span>
      </h1>
      <div className='w-[90%] pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-4 transition-transform duration-300'
            data-aos='fade-up'
            data-aos-delay={index * 200}
          >
            <div className='relative w-full h-52 md:h-72'>
              <Image 
                src={project.imageSrc}
                alt={project.title}
                layout='fill'
                className='object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-yellow-400'>{project.title}</h3>
              <p className='mt-3 text-gray-300'>{project.description}</p>
              <a
                href={project.link}
                className='inline-block mt-4 text-yellow-400 font-semibold hover:text-yellow-300'
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;