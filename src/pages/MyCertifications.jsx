import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import CertificationModal from '../UserComponents/CertificationModal';
import certificate1 from '../Assets/Certifications/PL300Certification.jpg';
import certificate2 from '../Assets/Certifications/AIDataAnalystInternshipCertification.png';
import certificate3 from '../Assets/Certifications/IBMDataAnalystProfessionalCertificate.png';
import certificate4 from '../Assets/Certifications/DataAnalystAccentureCertification.png';
import certificate5 from '../Assets/Certifications/SEAccentureForageCertification.png';
import certificate6 from '../Assets/Certifications/JavaHackerRankCertification.png';

const certifications = [
  {
    id: 1,
    title: 'Data Analyst Associate',
    issuer: 'Microsoft',
    date: 'Jan 2024',
    file: certificate1,
  },
  {
    id: 2,
    title: ' AI Data Analyst Internship Certificate– Excelerate',
    issuer: 'RIT',
    date: 'Apr 2025',
    file: certificate2,
  },
   {
    id: 3,
    title: 'IBM Data Analyst Professional Certificate',
    issuer: 'Coursera',
    date: 'Feb 2024',
    file: certificate3,
  },
   {
    id: 4,
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture North America',
    date: 'Apr 2025',
    file: certificate4,
  },
   {
    id: 5,
    title: 'Software Engineering Job Simulation',
    issuer: 'Accenture Nordics',
    date: 'Apr 2025',
    file: certificate5,
  },
   {
    id: 6,
    title: 'Java Developer',
    issuer: 'HackerRank',
    date: 'Oct 2020',
    file: certificate6,
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
    <section id="certifications" className="py-14 px-4 bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-700 dark:text-white">CERTIFICATIONS</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-white/80 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl text-indigo-700 font-semibold">{cert.title}</h3>
                <p className="text-sm text-pink-700 dark:text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(cert)}
                className="text-purple-600 hover:text-pink-500"
                title="View Certificate"
              >
                <FaEye size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificationModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

       {/* Scroll Prompt (optional) */}
            <div className="absolute bottom-2 right-2 transform -translate-x-1/2 animate-bounce text-purple-300 text-sm">
                ↓ Scroll
            </div>
    </section>
  );
};

export default Certifications;
