import React, { useState, useEffect, useRef } from 'react';

interface SkillProps {
  skillName: string;
  percentage: number;
}

const SkillBar: React.FC<SkillProps> = ({ skillName, percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 200);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold text-white">{skillName}</span>
        <span className="text-lg font-semibold text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-green-400 to-yellow-400 h-4 rounded-full transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = skillsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills1 = [
    { skillName: 'React', percentage: 85 },
    { skillName: 'Next.js', percentage: 60 },
    { skillName: 'Java', percentage: 75 },
    { skillName: 'C', percentage: 75 },
    { skillName: 'Tailwind CSS', percentage: 90 },
  ];

  const skills2 = [
    { skillName: 'Node.js', percentage: 65 },
    { skillName: 'MySQL', percentage: 60 },
    { skillName: 'TypeScript', percentage: 50 },
    { skillName: 'JavaScript', percentage: 65 },
    { skillName: 'HTML & CSS', percentage: 80 },
  ];

  return (
    <div id="skills" ref={skillsRef} className="bg-black pb-[3rem] pt-[6rem] md:pt-[8rem] scroll-mt-[10vh]">
      <h2 className="heading mb-12">
        Ski<span className="text-yellow-400">lls</span>
      </h2>
      <div className="flex flex-col md:flex-row w-[90%] mt-[4rem] mx-auto justify-between gap-8">
        <div className="p-6 w-full md:w-[45%] bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out">
          {skills1.map((skill, index) => (
            <SkillBar
              key={index}
              skillName={skill.skillName}
              percentage={isVisible ? skill.percentage : 0}
            />
          ))}
        </div>
        <div className="p-6 w-full md:w-[45%] bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out">
          {skills2.map((skill, index) => (
            <SkillBar
              key={index}
              skillName={skill.skillName}
              percentage={isVisible ? skill.percentage : 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;