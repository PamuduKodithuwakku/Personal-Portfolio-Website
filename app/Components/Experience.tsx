import React from 'react';

const education = [
  {
    year: "2022 - Present",
    role: "University of Moratuwa",
    company1: "BSc.(Hons) in Information Technology",
    description1: "Studying core IT subjects and engaging in software development projects.",
    list1: "CGPA - 3.5/4.0 (End of 4 semesters)"
  },
  {
    year: "2007 - 2020",
    role: "G/Sanghamiththa Balika Vidyalaya",
    company1: "G.C.E. Advanced Level 2020",
    description1: "Combined Mathematics A | Chemistry A | Physics C",
    company2: "G.C.E. Ordinary Level 2017",
    description2: "Results - 9A's"
  }
];

const experiences = [
  {
    company: "Rotaract Club of University of Moratuwa",
    role: "Member",
    duration: "June 2022 - Aug 2023",
    description: "Actively contributed to multiple social, environmental, and entertainment projects as an Organizing Committee (OC) member, collaborating with diverse teams to plan, execute, and manage impactful initiatives aimed at community development and social well-being."
  },
  {
    company: "IEEE Student Branch - University of Moratuwa",
    role: "Member",
    duration: "Sep 2023 - Dec 2023",
    description: "Actively contributed as an Organizing Committee (OC) member, helping to plan and execute various events and initiatives within the IEEE Student Branch.."
  }
];

const Experience = () => {
  return (
    <div id='experience' className="bg-black pb-16 pt-16 scroll-mt-[10vh]">
      <h2 className="heading mb-16">Education & <span className='text-yellow-400'>Experience</span></h2>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education Section */}
        <div data-aos='fade-right'>
          <h3 className="text-white text-2xl font-bold mb-4">Education</h3>
          <ul className="relative border-l-4 border-yellow-400">
            {education.map((edu, index) => (
              <li key={index} className="mb-10 ml-6">
                <div className="absolute w-6 h-6 bg-yellow-400 rounded-full mt-1.5 -left-3.5"></div>
                <p className="text-gray-500">{edu.year}</p>
                <h3 className="text-yellow-400 text-xl font-bold">{edu.role}</h3>
                <h4 className="text-lg text-gray-300">{edu.company1}</h4>
                <p className="mt-4 text-gray-300">{edu.description1}</p>
                {edu.list1 && (
                  <ul>
                    <li className='list-disc ml-8 mt-4 text-gray-300'>{edu.list1}</li>
                  </ul>
                )}
                {edu.company2 && (
                  <h4 className="text-lg text-gray-300 mt-10">{edu.company2}</h4>
                )}
                {edu.description2 && (
                  <p className="mt-4 text-gray-300">{edu.description2}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience Section */}
        <div data-aos='fade-left'>
          <h3 className="text-white text-2xl font-bold mb-4">Experience</h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-yellow-400 text-2xl font-bold">{experience.company}</h3>
                <h4 className="text-lg text-gray-300 mt-2">{experience.role}</h4>
                <p className="text-sm text-gray-500 mt-2">{experience.duration}</p>
                <p className="mt-4 text-gray-300">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;