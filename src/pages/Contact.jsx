import React, { useEffect, useState } from 'react';
import { MdArrowUpward, MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineUserGroup, HiOutlineChartBar, HiOutlineCode, HiOutlineAcademicCap } from 'react-icons/hi';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [showButton, setShowButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        const formData = new FormData(e.target);
        try {
            const response = await fetch('https://formspree.io/f/xdkzwagv', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });
            if (response.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error submitting form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-primary min-h-screen px-8 py-6 pb-32"
        >
            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">

                {/* LEFT: Stat Cards — stretch to full height */}
                <div className="flex flex-col justify-start items-center w-full px-2 md:px-4 lg:px-6" data-aos="fade-right">
                    <div className="flex flex-col gap-4 w-full h-full md:max-w-[90%]">

                        {/* Card 1: Open to Opportunities */}
                        <div className="flex flex-col items-center justify-center p-6 border border-gray-200 shadow-md rounded-lg w-full bg-white hover:shadow-xl hover:bg-indigo-50 transition duration-300">
                            <HiOutlineAcademicCap size={40} className="text-blue-900 mb-3" />
                            <h4 className="text-lg md:text-xl font-bold text-[#24477a] text-center">
                                Open to Opportunities
                            </h4>
                            <p className="mt-2 text-center text-sm md:text-base font-semibold text-gray-700">
                                AI/ML Engineer • Applied AI Engineer • LLM / Generative AI Engineer
                            </p>
                            <p className="mt-3 text-center text-xs md:text-sm text-gray-600 leading-relaxed max-w-lg">
                                Seeking roles where intelligent systems, large language models, and real-world deployment intersect to drive meaningful product impact.
                            </p>
                        </div>

                        {/* Cards 2 + 3: Stats side by side — flex-1 so they grow equally */}
                        <div className="grid grid-cols-2 gap-4 flex-1">

                            {/* Card 2: Years + Agentic Systems */}
                            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 shadow-md rounded-lg bg-white hover:shadow-xl hover:bg-blue-50 transition duration-300 min-h-[180px]">
                                <HiOutlineUserGroup size={34} className="text-blue-900 mb-2" />
                                <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug">
                                    5+ Years in<br />AI/ML & Data
                                </p>
                                <div className="my-3 w-8 border-t border-gray-200" />
                                <HiOutlineChartBar size={34} className="text-blue-900 mb-2" />
                                <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug">
                                    3+ Agentic AI<br />Systems Built
                                </p>
                            </div>

                            {/* Card 3: IEEE Publication */}
                            <div className="flex flex-col items-center justify-center p-4 border border-gray-200 shadow-md rounded-lg bg-white hover:shadow-xl hover:bg-indigo-50 transition duration-300 min-h-[180px]">
                                <HiOutlineAcademicCap size={34} className="text-blue-900 mb-3" />
                                <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug">
                                    Co-authored a conference paper at<br />
                                    <span className="text-gray-600 font-bold">IEEE AIB Things 2024</span><br />
                                    on<br />
                                    <span className="text-gray-600 font-bold">Retinal Disease Classification</span>
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Tech Stack */}
                        <div className="flex flex-col items-center justify-center p-5 border border-gray-200 shadow-md rounded-lg w-full bg-white hover:shadow-xl hover:bg-purple-50 transition duration-300">
                            <HiOutlineCode size={34} className="text-blue-900 mb-2" />
                            <p className="text-center text-xs md:text-sm font-semibold text-gray-500 mb-2">
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 mt-1">
                                {["Python", "LangChain", "RAG", "TensorFlow", "Docker", "MLflow", "AWS", "Kubernetes"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT: Contact Form */}
                <div data-aos="fade-left" className="flex flex-col justify-start items-center w-full">
                    <h2 className="typewriter text-3xl text-blue-900 font-bold mb-4 text-center md:text-left">Let's Connect!</h2>
                    <div className="w-full overflow-hidden mb-4">
                        <div className="h-1 bg-gradient-to-r from-blue-400 via-red to-accent animate-growLine"></div>
                    </div>
                    <p className="mb-8 font-bold text-gray-500 text-md text-center md:text-left">
                        <i>Open to meaningful collaborations, insightful AI conversations, or simply connecting over a virtual coffee☕.</i>
                    </p>

                    {/* Social Icons Row */}
                    <div className="w-full flex justify-center gap-6 mb-4 text-2xl text-gray-700">
                        <a href="https://linkedin.com/in/vasavikrishnachintamaneni" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-600" />
                        </a>
                        <a href="mailto:chvasavikrishna101299@gmail.com">
                            <MdEmail className="hover:text-red-500" />
                        </a>
                        <span className="text-gray-400">|</span>
                        <a href="https://facebook.com/vasavikrishnachintamaneni" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-700" />
                        </a>
                        <a href="https://instagram.com/vasavi_krishna_chintamaneni" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500" />
                        </a>
                    </div>

                    <div className="w-full max-w-4xl mx-auto p-4 rounded-xl shadow-lg border border-gray-200 bg-transparent hover:shadow-2xl transition duration-300">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full text-left">

                            {/* Name + Email row */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block mb-2 font-semibold text-sm md:text-base">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 font-semibold text-sm md:text-base">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                                    />
                                </div>
                            </div>

                            {/* Message — taller to fill vertical space */}
                            <div className="flex-1">
                                <label className="block mb-2 font-semibold text-sm md:text-base">Message</label>
                                <textarea
                                    name="message"
                                    rows="10"
                                    required
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-500 transition text-sm md:text-base disabled:opacity-50 w-full"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : 'Send Message'}
                                </button>
                            </div>

                            <p className="w-full text-center text-xs text-gray-500">
                                I typically respond within 24–48 hours.
                            </p>

                        </form>
                    </div>

                    {success && (
                        <p className="w-full mt-4 text-center font-medium text-green-500 bg-white bg-opacity-70 rounded-md py-2 shadow-lg">
                            Thank you! Your message has been sent. ✅
                        </p>
                    )}
                </div>
            </div>

            {/* Back to Top Button */}
            {showButton && (
                <a aria-label="Back to top" href="#about"
                    className="fixed bottom-6 right-6 bg-gray-400 text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                    title="Back to Top"
                >
                    <MdArrowUpward className="text-xl" />
                </a>
            )}

            {/* Scroll Prompt */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-400 text-sm">
                ↓ Scroll
            </div>
        </section>
    );
};

export default Contact;