import React from 'react';

const CertificationModal = ({ cert, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          {cert.title}
        </h3>
        <img
          src={cert.file}
          alt={cert.title}
          className="rounded shadow-md w-full"
        />
      </div>
    </div>
  );
};

export default CertificationModal;
