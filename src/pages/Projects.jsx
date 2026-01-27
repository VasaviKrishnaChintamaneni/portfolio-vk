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

  // NOTE:
  // If you add images, place them under: /public/projects/
  // Then reference them like: "/projects/your-image.png"
  const projects = [
    {
      title: "Financial Settlement Data Platform",
      flagship: true,
      description:
        "Unified fragmented settlement data to improve reporting and risk monitoring through a governed cloud data platform.",
      longDescription:
        "Problem: Fragmented settlement data impacted reporting and risk monitoring.\n\nSolution: Built scalable ETL pipelines with orchestration, schema modeling, and data quality checks to produce governed, analytics-ready datasets.\n\nOutcome: Faster settlement analytics and reliable AI-ready datasets for downstream use.",
      tech: [
        "Python",
        "Apache Spark",
        "Airflow",
        "Azure Synapse",
        "Delta Lake",
        "dbt",
        "SQL",
      ],
      impactHighlights: [
        "Enabled faster and more reliable settlement analytics by unifying fragmented sources into a governed platform",
        "Delivered AI-ready, analytics-grade datasets with orchestration, modeling, and data quality checks",
        "Improved confidence in financial reporting and downstream risk monitoring through scalable ETL pipelines",
      ],
      artifacts: ["Architecture diagram", "Sample Airflow DAG", "Star/Snowflake schema image"],
      // Optional: add ONE architecture diagram image
      // images: [
      //   {
      //     src: "/projects/settlement-architecture.png",
      //     alt: "Settlement platform architecture diagram",
      //     caption: "High-level architecture showing ingestion, orchestration, modeling, and governed outputs.",
      //   },
      // ],
      github: "https://github.com/yourusername/financial-settlement-platform",
      demo: "",
    },

    {
      title: "Anomaly Detection for Financial Risk Monitoring",
      description:
        "Built an anomaly detection pipeline to identify unusual financial patterns and generate risk signals from time-series data.",
      longDescription:
        "Problem: Needed early detection of unusual financial patterns to support proactive risk monitoring.\n\nSolution: Created feature-engineered pipelines and compared statistical + ML-based approaches for anomaly detection on time-series data.\n\nOutcome: Risk alert outputs and trend insights with an emphasis on reducing false positives.",
      tech: ["Python", "SQL", "scikit-learn", "Statsmodels", "Time Series Analysis"],
      impactHighlights: [
        "Developed a feature-engineered anomaly detection workflow tailored to financial time-series behavior",
        "Compared multiple methods to reduce false positives and improve alert precision for risk monitoring",
        "Enabled early identification of unusual patterns through trend analysis and alert-ready outputs",
      ],
      github: "https://github.com/yourusername/financial-anomaly-detection",
      demo: "",
    },

    {
      title: "Cloud Data Warehouse Modernization",
      description:
        "Modernized a cloud data warehouse using robust modeling, transformations, and governance to enable analytics at scale.",
      longDescription:
        "Problem: Inconsistent datasets and limited governance created friction for BI and forecasting.\n\nSolution: Designed star/snowflake schemas and implemented dbt-based transformations, testing, and lineage.\n\nOutcome: Clean, analytics-ready datasets with improved traceability and governance for downstream analytics.",
      tech: ["dbt", "SQL", "Azure/AWS", "Data Modeling"],
      impactHighlights: [
        "Designed star and snowflake schemas to deliver clean, analytics-ready datasets for BI and forecasting",
        "Implemented dbt transformations, testing, and lineage to improve governance and transparency",
        "Reduced downstream analytics friction by standardizing models and improving dataset consistency",
      ],
      artifacts: ["dbt lineage screenshot", "Before/after schema comparison"],
      github: "https://github.com/yourusername/cloud-warehouse-modernization",
      demo: "",
    },

    {
      title: "Power BI Executive Dashboard",
      description:
        "Executive dashboards for performance KPIs, risk metrics, and experiment outcomes with stakeholder-focused storytelling.",
      longDescription:
        "Problem: Leadership needed a single view of performance and risk metrics to support faster decision-making.\n\nSolution: Built Power BI dashboards with KPI framing, clear visuals, and stakeholder-focused storytelling.\n\nOutcome: Executive-ready reporting that highlights performance, risk indicators, and A/B test outcomes.",
      tech: ["Power BI", "DAX", "SQL", "Business Analytics"],
      impactHighlights: [
        "Translated complex data into executive-ready KPI and risk insights with clear narratives",
        "Enabled leadership to track performance and A/B test outcomes in a single view",
        "Improved decision-making through stakeholder-focused visualization design and data storytelling",
      ],
      // Optional: add ONE dashboard screenshot + optional Loom link
      // images: [
      //   {
      //     src: "/projects/powerbi-exec-dashboard.png",
      //     alt: "Power BI executive dashboard screenshot",
      //     caption: "Sample executive view of KPIs and risk indicators.",
      //   },
      // ],
      // video: "https://www.loom.com/share/your-video-id",
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-purple-100 via-red-100 to-blue-100 px-6 py-10">
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
