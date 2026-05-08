import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "../UserComponents/ProjectModal.jsx";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Agentic Network Troubleshooting Intelligence System",
      flagship: true,
      description:
        "Production-grade agentic AI assistant using RAG pipelines and LangChain orchestration to automate Level-1 network support — reducing resolution time by ~40%.",
      longDescription:
        "Problem: Network engineers spent significant time manually querying technical documentation to resolve Level-1 support tickets, slowing incident resolution.\n\nSolution: Architected an agentic troubleshooting system using transformer-based embeddings, semantic vector indexing in Pinecone, and LangChain-orchestrated RAG pipelines with dynamic chunking, top-k retrieval optimization, contextual memory handling, and response grounding controls.\n\nOutcome: Delivered deterministic, low-latency root-cause recommendations across distributed enterprise network environments, cutting Level-1 resolution time by approximately 40%.",
      tech: [
        "LangChain",
        "RAG",
        "FAISS",
        "Pinecone",
        "Python",
        "FastAPI",
        "Hugging Face",
        "Docker",
      ],
      impactHighlights: [
        "Reduced Level-1 network support resolution time by ~40% through automated agentic querying of technical documentation",
        "Implemented dynamic chunking, top-k retrieval optimization, and contextual memory for deterministic, grounded responses",
        "Deployed at scale across distributed enterprise network environments using containerized FastAPI services",
      ],
      github: "",
      demo: "",
    },

    {
      title: "Network Traffic Anomaly Detection (Hybrid LSTM-Attention)",
      description:
        "Hybrid LSTM-Attention deep learning model for multivariate time-series network telemetry with adaptive thresholding for real-time threat detection.",
      longDescription:
        "Problem: Existing monitoring systems generated excessive false positives and missed subtle early-stage anomalies in network telemetry streams.\n\nSolution: Built a hybrid LSTM-Attention deep learning model for multivariate time-series network telemetry, incorporating feature normalization, sliding-window sequence modeling, and adaptive thresholding to detect temporal anomalies.\n\nOutcome: Improved early outage detection accuracy while significantly minimizing false positives in real-time monitoring systems across production network infrastructure.",
      tech: [
        "LSTM",
        "TensorFlow",
        "Python",
        "Time Series Analysis",
        "Scikit-learn",
        "NumPy",
        "Pandas",
      ],
      impactHighlights: [
        "Improved early outage detection accuracy using sliding-window sequence modeling with adaptive thresholding",
        "Minimized false positives through hybrid LSTM-Attention architecture on multivariate telemetry streams",
        "Deployed in GPU-enabled environments for real-time threat detection and operational visibility",
      ],
      github: "",
      demo: "",
    },

    {
      title: "Domain-Adaptive LLM Fine-Tuning Framework",
      description:
        "Fine-tuned a compact transformer LLM using LoRA/QLoRA with 4-bit quantization on network incident tickets to adapt domain-specific terminology.",
      longDescription:
        "Problem: General-purpose LLMs lacked the domain-specific vocabulary and reasoning patterns needed to accurately interpret network incident tickets and resolution logs.\n\nSolution: Fine-tuned a compact transformer-based LLM using LoRA and QLoRA with 4-bit quantization, training on curated network incident tickets and resolution logs to adapt domain-specific terminology.\n\nOutcome: Significantly reduced GPU memory usage compared to full-parameter retraining while achieving strong domain adaptation, enabling cost-effective deployment of specialized LLMs for network operations.",
      tech: [
        "LoRA / QLoRA",
        "Hugging Face Transformers",
        "4-bit Quantization",
        "Python",
        "PyTorch",
        "PEFT",
      ],
      impactHighlights: [
        "Achieved strong domain adaptation on network terminology while avoiding full-parameter model retraining overhead",
        "Reduced GPU memory usage significantly through 4-bit quantization with LoRA/QLoRA techniques",
        "Trained on curated network incident tickets and resolution logs for accurate root-cause language understanding",
      ],
      github: "",
      demo: "",
    },

    {
      title: "Predictive Maintenance for Network Infrastructure",
      description:
        "Predictive models using LSTM, XGBoost, and scikit-learn on time-series telemetry data to surface actionable maintenance insights before failures occur.",
      longDescription:
        "Problem: Reactive maintenance workflows caused unplanned downtime and costly incident escalations across network infrastructure.\n\nSolution: Built predictive maintenance models using LSTM, XGBoost, and scikit-learn on time-series telemetry data, translating outputs into actionable insights through feature engineering and statistical analysis techniques. Tracked model performance with MLflow.\n\nOutcome: Enabled proactive identification of failure-prone network components, reducing reactive incident escalations and improving operational reliability across enterprise environments.",
      tech: [
        "LSTM",
        "XGBoost",
        "Scikit-learn",
        "MLflow",
        "Python",
        "SQL",
        "Pandas",
        "Feature Engineering",
      ],
      impactHighlights: [
        "Enabled proactive maintenance scheduling by surfacing failure predictions from time-series telemetry data",
        "Tracked model performance, data drift, and concept drift using MLflow in production environments",
        "Reduced reactive incident escalations through actionable insights derived from statistical feature engineering",
      ],
      github: "",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-purple-100 via-red-100 to-blue-100 px-6 py-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 p-5 flex flex-col"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-indigo-900">
                {project.title}
              </h3>

              {project.flagship && (
                <span className="text-xs font-semibold text-indigo-700">
                  Flagship Project
                </span>
              )}
            </div>

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
                View Case Study
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