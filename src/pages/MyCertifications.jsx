import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import CertificationModal from '../UserComponents/CertificationModal';
//import certificate1 from '../Assets/Certifications/PL300Certification.jpg';
import certificate2 from '../Assets/Certifications/AIDataAnalystInternshipCertificate.png';
//import certificate3 from '../Assets/Certifications/IBMDataAnalystProfessionalCertificate.png';
import certificate4 from '../Assets/Certifications/DataAnalystAccentureCertification.png';
import certificate5 from '../Assets/Certifications/SEAccentureForageCertification.png';
//import certificate6 from '../Assets/Certifications/JavaHackerRankCertification.png';

const certifications = [
  {
    id: 1,
    title: 'AI Proficiency',
    issuer: 'Section, Credly',
    date: 'July 13, 2025',
    url: 'https://www.credly.com/badges/376c3063-cd8b-4c88-a2c8-0c15c38e99a1/linked_in_profile',
  },
  {
    id: 2,
    title: ' AI Data Analyst Internship Certificate – Excelerate',
    issuer: 'RIT',
    date: 'Jul 2025',
    file: certificate2,
  },
  {
    id: 3,
    title: 'Programming with JavaScript',
    issuer: 'Meta, Coursera',
    date: 'Jan 8, 2024',
    url: 'https://coursera.org/share/2a49391822e6914ff9bf86e760d8880c',
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
    url: 'https://www.hackerrank.com/certificates/c26a4627033b',
  },
    {
    id: 7,
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft, Linkedin',
    date: 'July 7, 2025',
    url: 'https://www.linkedin.com/learning/certificates/5f3670793e9ca28b31a4aff6fd70a651ff09ae15dfa0e3f086d4b429b2c89e1c',
  },
   {
    id: 8,
    title: 'Version Control',
    issuer: 'Meta, Coursera',
    date: 'Jan ,2024',
    url: 'https://coursera.org/share/219b1048aceee0fdefba743507418cad',
  },
     {
    id: 9,
    title: 'Excel Basics for Data Analysis',
    issuer: 'IBM, Coursera',
    date: 'Jan ,2025',
    url: 'https://coursera.org/share/219b1048aceee0fdefba743507418cad',
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
                onClick={() => {
                  if (cert.url) {
                    window.open(cert.url, "_blank", "noopener,noreferrer");
                  } else {
                    setSelectedCert(cert);
                  }
                }}
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
