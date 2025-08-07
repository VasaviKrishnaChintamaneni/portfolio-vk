import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectModal from '../UserComponents/ProjectModal.jsx';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Retail Analytics Dashboard",
      description:
        "Built a retail analytics dashboard to analyze purchasing patterns.",
      longDescription:
        "This project involved creating a comprehensive retail analytics dashboard using Power BI, SQL, and Python. It allows retail managers to monitor sales trends, customer behavior, and optimize inventory management. Includes interactive visuals for category performance, churn analysis, and revenue forecasts.",
      tech: ["Power BI", "SQL", "Python"],
      github: "https://github.com/yourusername/retail-dashboard",
      demo: "",
    },
    {
      title: "Student Engagement Model",
      description:
        "Machine learning model to predict student engagement and churn.",
      longDescription:
        "Developed a student engagement prediction model using exploratory data analysis (EDA), machine learning pipelines, and Power BI dashboards. This solution helps educational institutions proactively engage students based on behavior patterns, sign-up trends, and support usage.",
      tech: ["Machine Learning", "EDA", "Power BI", "Python"],
      github: "https://github.com/yourusername/student-engagement",
      demo: "",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 via-red-100 to-blue-100 px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-700">
        Projects & Research
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-800 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-gray-800 hover:text-blue-800 underline"
              >
                View Details
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
