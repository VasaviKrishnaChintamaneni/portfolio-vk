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
  FaCloud,
  FaServer,
  FaTasks,
  FaLaptopCode,
  FaBrain,
  FaRobot,
  FaDocker,
  FaNetworkWired,
  FaAws,
  FaCode,
  FaFlask,
  FaShieldAlt,
  FaSlidersH,
  FaMicrochip,
  FaLayerGroup,
  FaSearchPlus,
} from "react-icons/fa";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const categorizedSkills = {
    "AI & Machine Learning": [
      { name: "Scikit-learn", icon: <FaProjectDiagram /> },
      { name: "TensorFlow / Keras", icon: <FaBrain /> },
      { name: "XGBoost / LightGBM", icon: <FaChartLine /> },
      { name: "CNN / RNN / LSTM", icon: <FaMicrochip /> },
      { name: "NLP", icon: <FaRobot /> },
      { name: "Feature Engineering", icon: <FaCogs /> },
      { name: "SHAP / LIME (Explainability)", icon: <FaSearchPlus /> },
      { name: "Time Series Analysis", icon: <FaChartLine /> },
    ],

    "Generative AI & LLMs": [
      { name: "LangChain", icon: <FaRobot /> },
      { name: "LlamaIndex", icon: <FaLayerGroup /> },
      { name: "RAG Pipelines", icon: <FaDatabase /> },
      { name: "Prompt Engineering", icon: <FaCode /> },
      { name: "LoRA / QLoRA Fine-Tuning", icon: <FaSlidersH /> },
      { name: "Hugging Face Transformers", icon: <FaBrain /> },
      { name: "LLM Evaluation & Benchmarking", icon: <FaChartLine /> },
      { name: "Agentic Workflows (AutoGen)", icon: <FaProjectDiagram /> },
    ],

    "MLOps & Cloud": [
      { name: "MLflow", icon: <FaNetworkWired /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <FaCogs /> },
      { name: "CI/CD (GitHub Actions)", icon: <FaGithub /> },
      { name: "AWS (EC2, S3, SageMaker)", icon: <FaAws /> },
      { name: "Azure ML / Azure Data Factory", icon: <FaCloud /> },
      { name: "GCP (Vertex AI, BigQuery)", icon: <FaCloud /> },
      { name: "Model Monitoring & Drift Detection", icon: <FaShieldAlt /> },
    ],

    "Data & Backend Engineering": [
      { name: "Python", icon: <FaPython /> },
      { name: "SQL (Advanced)", icon: <FaDatabase /> },
      { name: "FastAPI / Flask", icon: <FaFlask /> },
      { name: "Apache Kafka / Spark", icon: <FaServer /> },
      { name: "Apache Airflow", icon: <FaTasks /> },
      { name: "FAISS / Pinecone (Vector DBs)", icon: <FaDatabase /> },
      { name: "pandas / NumPy", icon: <FaChartLine /> },
      { name: "Jupyter Notebook", icon: <FaLaptopCode /> },
    ],

    "BI & Visualization": [
      { name: "Power BI (DAX, Power Query)", icon: <FaChartLine /> },
      { name: "Tableau", icon: <FaChartLine /> },
      { name: "KPI Dashboards", icon: <FaChartLine /> },
      { name: "A/B Test Analysis", icon: <FaProjectDiagram /> },
      { name: "Data Storytelling", icon: <FaUsers /> },
    ],

    "Tools & Workflow": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub / GitLab", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaLaptopCode /> },
      { name: "Jira", icon: <FaTasks /> },
      { name: "Agile / Scrum", icon: <FaProjectDiagram /> },
    ],

    "Business & Soft Skills": [
      { name: "Stakeholder Communication", icon: <FaUsers /> },
      { name: "Financial Analytics", icon: <FaChartLine /> },
      { name: "Cross-functional Collaboration", icon: <FaUsers /> },
      { name: "Process Mapping (BPMN 2.0)", icon: <FaProjectDiagram /> },
      { name: "Gap Analysis", icon: <FaCogs /> },
    ],
  };

  return (
    <section id="skills">
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-blue-100 to-pink-100 px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          Technical Skills
        </h2>

        <p className="italic text-center text-gray-600 mt-3 mb-16 max-w-2xl mx-auto">
          "Tools and techniques applied across{" "}
          <span className="font-medium text-gray-700">
            real-world AI & ML projects"
          </span>
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
                    <p className="text-[15px] sm:text-base font-semibold text-gray-900 text-center">
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