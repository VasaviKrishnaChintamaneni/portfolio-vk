import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaJsSquare, FaTable,
  FaJava,
  FaFileExcel
} from 'react-icons/fa';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categorizedSkills = {
    "Languages & Scripting": [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Java', icon: <FaJava />},
    ],
    "Frontend Development": [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'React', icon: <FaReact /> },
    ],
    "Backend & Tools": [
        { name: 'PowerBI', icon: <FaTable /> },
        { name: 'Excel', icon: <FaFileExcel /> },
        { name: 'Tableau', icon: <FaTable /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-pink-100 px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {Object.entries(categorizedSkills).map(([category, skills], sectionIndex) => (
          <div key={category}>
            <h3
              className="text-2xl font-semibold text-indigo-800 mb-6 border-l-2 border-gray-500 pl-4"
              data-aos="fade-right"
            >
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-xl p-6 shadow hover:shadow-xl transition"
                >
                  <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
                  <p className="text-lg font-medium text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
