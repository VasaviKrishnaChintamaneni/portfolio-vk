import React, { useEffect } from "react";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl bg-white/90 backdrop-blur-md shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-indigo-900 mb-2">
          {project.title}
        </h3>

        {/* Short description */}
        {project.description && (
          <p className="text-gray-700 mb-4">{project.description}</p>
        )}

        {/* Long description */}
        {project.longDescription && (
          <p className="text-gray-800 whitespace-pre-line leading-relaxed mb-6">
            {project.longDescription}
          </p>
        )}

        {/* Impact Highlights */}
        {Array.isArray(project.impactHighlights) &&
          project.impactHighlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Impact Highlights
              </h4>
              <ul className="space-y-2">
                {project.impactHighlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-800"
                  >
                    <FaRegCheckCircle className="mt-1 text-indigo-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Tech stack */}
        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Artifacts */}
        {Array.isArray(project.artifacts) && project.artifacts.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Artifacts
            </h4>
            <ul className="space-y-2">
              {project.artifacts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-800">
                  <FaRegCheckCircle className="mt-1 text-indigo-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Screenshots / Diagrams (optional) */}
        {Array.isArray(project.images) && project.images.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Screenshots / Diagrams
            </h4>

            <div className="space-y-4">
              {project.images.map((img, idx) => (
                <figure
                  key={idx}
                  className="rounded-lg overflow-hidden border border-gray-200 bg-white"
                >
                  <img
                    src={img.src}
                    alt={img.alt || "Project image"}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="text-xs text-gray-600 p-3">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-800 hover:text-black underline"
            >
              <FaGithub />
              Code (GitHub)
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 underline"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 underline"
            >
              <FaExternalLinkAlt />
              Video Walkthrough
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

