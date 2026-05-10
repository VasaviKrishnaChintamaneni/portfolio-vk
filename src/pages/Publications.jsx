import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaExternalLinkAlt,
    FaFilePdf,
    FaQuoteLeft,
    FaUsers,
    FaMicrochip,
    FaChartBar,
} from "react-icons/fa";

const Publications = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const publication = {
        title: "Hybrid Deep Learning/Machine Learning Model for Retinal Diseases Classifications Using OCT Images",
        conference: "2024 2nd International Conference on Artificial Intelligence, Blockchain, and Internet of Things (AIBThings)",
        conferenceShort: "IEEE AIBThings 2024",
        date: "September 7–8, 2024",
        location: "Mt Pleasant, MI, USA",
        addedToIEEE: "February 7, 2025",
        doi: "10.1109/AIBThings63359.2024.10863314",
        doiLink: "https://doi.org/10.1109/AIBThings63359.2024.10863314",
        ieeeLink: "https://ieeexplore.ieee.org/xpl/conhome/10860733/proceeding",
        authors: [
            { name: "Vasavi Krishna Chintamaneni", affiliation: "Central Michigan University", isMe: true },
            { name: "Sri Srujani Kandula", affiliation: "Central Michigan University", isMe: false },
            { name: "Sai Kiran Debbadi", affiliation: "Central Michigan University", isMe: false },
            { name: "Rasha S. Gargees", affiliation: "Central Michigan University", isMe: false },
        ],
        abstract: "This study leverages Optical Coherence Tomography (OCT) and a hybrid Deep Learning/Machine Learning pipeline to classify eight distinct retinal diseases. We developed DenseNet architectures from scratch for feature extraction, combined with Bayesian-optimized SVM classifiers for precise retinal pathology classification across conditions including CNV, DME, Drusen, AMD, CSR, DR, and Macular Hole.",
        keywords: ["Retinal Image Processing", "OCT", "DenseNet", "Bayesian Optimization", "SVM", "Deep Learning"],
        metrics: [
            { label: "DenseNet Accuracy", value: "61.79%", icon: <FaMicrochip /> },
            { label: "Bayesian SVM Accuracy", value: "86.62%", icon: <FaChartBar /> },
            { label: "SVM F1 Score", value: "0.87", icon: <FaChartBar /> },
        ],
    };

    return (
        <section
            className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-6 py-16"
        >
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-900 mb-3">Publications</h2>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                        Peer-reviewed research published at IEEE international conferences.
                    </p>
                </div>

                {/* Publication Card */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-indigo-100 overflow-hidden"
                >
                    {/* Top accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className="p-8">

                        {/* Badge row */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                <FaExternalLinkAlt className="text-[10px]" />
                                IEEE Xplore
                            </span>
                            <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-200">
                                {publication.conferenceShort}
                            </span>
                            <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1.5 rounded-full border border-gray-200">
                                {publication.date}
                            </span>
                            <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1.5 rounded-full border border-gray-200">
                                📍 {publication.location}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#1e3a5f] leading-snug mb-5">
                            {publication.title}
                        </h3>

                        {/* Authors */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <FaUsers className="text-indigo-400 text-sm" />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Authors</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {publication.authors.map((author, i) => (
                                    <span
                                        key={i}
                                        className={`text-sm px-3 py-1.5 rounded-lg border ${
                                            author.isMe
                                                ? "bg-blue-600 text-white border-blue-600 font-semibold"
                                                : "bg-gray-50 text-gray-700 border-gray-200"
                                        }`}
                                    >
                                        {author.name}
                                        {author.isMe && (
                                            <span className="ml-1.5 text-blue-200 text-xs font-normal">(You)</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                All authors — Department of Computer Science, Central Michigan University, USA
                            </p>
                        </div>

                        {/* Abstract */}
                        <div className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-100">
                            <div className="flex items-start gap-3">
                                <FaQuoteLeft className="text-indigo-300 text-lg mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700 text-sm leading-relaxed italic">
                                    {publication.abstract}
                                </p>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {publication.metrics.map((m, i) => (
                                <div
                                    key={i}
                                    className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl p-4 text-center shadow-md"
                                >
                                    <div className="text-blue-300 text-lg mb-1 flex justify-center">
                                        {m.icon}
                                    </div>
                                    <div className="text-white text-xl font-bold">{m.value}</div>
                                    <div className="text-blue-300 text-xs mt-1">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Keywords */}
                        <div className="mb-7">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                Index Terms
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {publication.keywords.map((kw, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full border border-indigo-200"
                                    >
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DOI + Links */}
                        <div className="border-t border-gray-100 pt-5">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs text-gray-400 mb-0.5">DOI</p>
                                    <p className="text-sm font-mono text-indigo-600">
                                        {publication.doi}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Added to IEEE Xplore: {publication.addedToIEEE}
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={publication.doiLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        <FaExternalLinkAlt className="text-xs" />
                                        View on IEEE
                                    </a>
                                    <a
                                        href={publication.ieeeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-white hover:bg-indigo-50 text-indigo-700 text-sm font-medium px-5 py-2.5 rounded-xl border border-indigo-300 transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        <FaFilePdf className="text-xs" />
                                        Conference Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <p
                    className="text-center text-xs text-gray-400 mt-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Published and indexed in IEEE Xplore Digital Library · February 2025
                </p>
            </div>
        </section>
    );
};

export default Publications;