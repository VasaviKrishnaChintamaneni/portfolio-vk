import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPython,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaGitAlt,
  FaGithub,
  FaTable,
  FaCloud,
  FaServer,
  FaTasks,
  FaLaptopCode,
  FaBook,
} from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categorizedSkills = {
    "Data & Analytics": [
      { name: "SQL (Advanced, window functions)", icon: <FaDatabase /> },
      { name: "Python", icon: <FaPython /> },
      { name: "pandas / NumPy", icon: <FaCogs /> },
      { name: "scikit-learn", icon: <FaProjectDiagram /> },
      { name: "Exploratory Data Analysis (EDA)", icon: <FaChartLine /> },
      { name: "Feature Engineering", icon: <FaCogs /> },
      { name: "Forecasting (ARIMA, Prophet)", icon: <FaChartLine /> },
      { name: "Statistical Modeling & Hypothesis Testing", icon: <FaProjectDiagram /> },
    ],

    "Data Engineering & Cloud": [
      { name: "ETL Pipelines", icon: <FaServer /> },
      { name: "dbt", icon: <FaCogs /> },
      { name: "Apache Spark", icon: <FaServer /> },
      { name: "Airflow / Prefect", icon: <FaTasks /> },
      { name: "AWS / Azure / BigQuery", icon: <FaCloud /> },
      { name: "Delta Lake / Parquet", icon: <FaDatabase /> },
      { name: "Star & Snowflake Schemas", icon: <FaDatabase /> },
    ],

    "BI & Visualization": [
      { name: "Power BI (DAX, Power Query)", icon: <FaTable /> },
      { name: "Tableau", icon: <FaTable /> },
      { name: "KPI Dashboards", icon: <FaChartLine /> },
      { name: "A/B Test Analysis", icon: <FaChartLine /> },
      { name: "Data Storytelling", icon: <FaUsers /> },
    ],

    "Tools & Workflow": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Jupyter Notebook", icon: <FaLaptopCode /> },
      { name: "VS Code", icon: <FaLaptopCode /> },
      { name: "Jira", icon: <FaTasks /> },
      { name: "Confluence", icon: <FaBook /> },
      { name: "Agile / Scrum", icon: <FaProjectDiagram /> },
    ],

    "Business & Soft Skills": [
      { name: "Stakeholder Communication", icon: <FaUsers /> },
      { name: "Financial Analytics", icon: <FaChartLine /> },
      { name: "Process Mapping (BPMN 2.0)", icon: <FaProjectDiagram /> },
      { name: "Gap Analysis", icon: <FaCogs /> },
      { name: "Cross-functional Collaboration", icon: <FaUsers /> },
    ],
  };

  return (
    <section id="skills">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-pink-100 px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Technical Skills
        </h2>

        <p className="italic text-center text-gray-600 mt-3 mb-16 max-w-2xl mx-auto">
          "Tools and techniques applied across <span className="font-medium text-gray-700">real-world analytics projects"</span>
        </p>



        <div className="max-w-6xl mx-auto space-y-16">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
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
                    data-aos-delay={index * 80}
                    className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-xl p-5 shadow hover:shadow-xl transition-transform hover:-translate-y-1"
                  >
                    <div className="text-3xl text-blue-600 mb-2">
                      {skill.icon}
                    </div>
                    <p className="text-[15px] sm:text-base font-semibold text-gray-900 text-center ">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skills;