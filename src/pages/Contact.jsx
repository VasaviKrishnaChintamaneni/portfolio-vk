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
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setSuccess(true);
                e.target.reset(); // Reset form
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
            className="bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-primary min-h-screen px-8 py-6 pb-10 flex items-center justify-center"
        >
            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-6 h-[90vh] items-stretch">
                <div className="flex flex-col justify-center items-center w-full h-full px-2 md:px-4 lg:px-6" data-aos="fade-right">
                    <div className="grid grid-cols-2 gap-4 w-full h-full md:max-w-[90%]">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center justify-center p-2 md:p-3 border border-gray-200 shadow-md rounded-lg w-full aspect-square bg-white hover:shadow-xl hover:bg-blue-50 transition duration-300">
                            <HiOutlineUserGroup size={36} className="text-blue-900 mb-2 group-hover:text-indigo-700 transition" />
                            <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug group-hover:text-blue-800">
                                3+ Years in<br />Data & Analytics
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center justify-center p-2 md:p-3 border border-gray-200 shadow-md rounded-lg w-full aspect-square bg-white hover:shadow-xl hover:bg-blue-50 transition duration-300">
                            <HiOutlineChartBar size={36} className="text-blue-900 mb-2 group-hover:text-blue-700 transition" />
                            <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug group-hover:text-blue-800">
                                10+ Dashboards<br />Built
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center justify-center p-2 md:p-3 border border-gray-200 shadow-md rounded-lg w-full aspect-square bg-white hover:shadow-xl hover:bg-purple-50 transition duration-300">
                            <HiOutlineCode size={36} className="text-blue-900 mb-2 group-hover:text-purple-700 transition" />
                            <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug group-hover:text-blue-800">
                                Tech Stack:<br />Python | SQL | Power BI
                            </p>
                        </div>

                        {/* Stat 4 - IEEE Research */}
                        <div className="flex flex-col items-center justify-center p-2 md:p-3 border border-gray-200 shadow-md rounded-lg w-full aspect-square bg-white hover:shadow-xl hover:bg-indigo-50 transition duration-300">
                            <HiOutlineAcademicCap size={36} className="text-blue-900 mb-2 group-hover:text-indigo-700 transition" />
                            <p className="text-center text-xs md:text-sm font-semibold text-gray-500 leading-snug group-hover:text-blue-800">
                                Co-authored a conference paper at IEEE AIB Things 2024 on<br />
                                <span className="text-gray-500"><b>Retinal Disease Classification</b></span>
                            </p>
                        </div>


                    </div>
                </div>






                {/* RIGHT: Contact Form */}
                <div data-aos="fade-left" className="flex flex-col justify-center items-center w-full h-full">
                    <h2 className="typewriter text-3xl text-blue-900 font-bold mb-4 text-center md:text-left">Let’s Connect!</h2>
                    <div className="w-full overflow-hidden mb-4">
                        <div className="h-1 bg-gradient-to-r from-blue-400 via-red to-accent animate-growLine"></div>
                    </div>
                    <p className="mb-8 font-bold text-gray-500 text-md text-center md:text-left"><i>Open to meaningful collaborations, insightful data conversations, or simply connecting over a virtual coffee☕.</i></p>
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

                    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-4 p-2 rounded-xl shadow-lg border border-gray-200 bg-transparent hover:shadow-2xl hover:scale-[1.01] transition duration-300">
                        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 text-left">
                            {/* Name Field */}
                            <div className="w-full md:w-[48%]">
                                <label htmlFor="name" className="block mb-2 font-semibold text-sm md:text-base">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="w-full md:w-[48%]">
                                <label htmlFor="email" className="block mb-2 font-semibold text-sm md:text-base">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="w-full">
                                <label htmlFor="message" className="block mb-2 font-semibold text-sm md:text-base">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-base"
                                ></textarea>
                            </div>

                            {/* Centered Submit Button */}
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-900 text-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-green-500 transition text-sm md:text-base disabled:opacity-50"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : 'Send Message'}

                                </button>
                            </div>

                        </form>

                    </div>



                    {success && (
                        <p className="w-full mt-4 text-center font-medium text-green-500 bg-white bg-opacity-70 rounded-md px-0 py-2 shadow-lg hover:bg-gray-200 transition-colors duration-300">
                            Thank you! Your message has been sent. ✅
                        </p>



                    )}


                </div>
            </div>

            {/* Back to Top Button */}
            {showButton && (
                <a aria-label="Back to top" href="#home"
                    className="fixed bottom-6 right-6 bg-gray-400 text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                    title="Back to Top"
                >
                    <MdArrowUpward className="text-xl" />
                </a>
            )}

            {/* Scroll Prompt (optional) */}
            <div className="absolute bottom-2 left-2 transform -translate-x-1/2 animate-bounce text-purple-300 text-sm">
                ↓ Scroll
            </div>
        </section>
    );
};

export default Contact;

