import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import Hero1 from '../Assets/ProfilePic/HeroPhoto1.jpg';
import Hero2 from '../Assets/ProfilePic/HeroPhoto2.jpg';
import Hero3 from '../Assets/ProfilePic/HeroPhoto3.jpg';
import Hero4 from '../Assets/ProfilePic/HeroPhoto4.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const images = [Hero1, Hero2, Hero3, Hero4];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5s

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-8 py-10 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"
        >

            {/* Main content */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - About Me */}
                <div data-aos="fade-right" className="text-primary">
                    {/* Hi GIF */}
                    <img
                        src="./Assets/hi.gif"
                        alt="Hi!"
                        className="w-32 h-auto mb-2 md:w-48 rounded-full" // adjust size as needed
                    />
                    <p className="text-md text-gray-500 mb-2 uppercase tracking-wider">Welcome to my space !</p>
                    <h3 className="text-lg font-semibold mb-2 text-indigo-900">Passion & Purpose</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">My journey into data began not just in code, but through a deep love for storytelling — shaped by my passion for singing and music. I believe every dataset holds a story waiting to be uncovered.
                        Beyond analytics, I’m someone who thrives on discovery — whether it’s exploring new places, diving into different genres of music, trying unique cuisines, dancing, staying active, or getting lost in thoughtful podcasts. Each of these experiences helps me understand myself better and brings me closer to my purpose.
                        <br /><br />
                        <b>To me, "Data is more than numbers — it’s a way to create impact, bring clarity, and uncover truths that inspire meaningful decisions".</b>
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        {/* Resume Download Button */}
                        <a
                            href="/vasavi_krishna_chintamaneni_resume.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-yellow-500 text-white font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition"
                        >
                            <FaDownload className="text-lg" />
                            Download Resume
                        </a>

                        {/* LinkedIn Profile Button */}
                        <a
                            href="https://www.linkedin.com/in/vasavikrishnachintamaneni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition"
                        >
                            <FaLinkedin className="text-lg" />
                            View LinkedIn
                        </a>
                        {/* GitHub Profile Button */}
                        <a
                            href="https://github.com/VasaviKrishnaChintamaneni"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition"
                        >
                            <FaGithub className="text-lg" />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right Side - Profile Slideshow & Typewriter */}
                <div
                    className="flex flex-col items-center justify-center text-center text-textMain h-full"
                    data-aos="fade-left"
                >
                    <div className="w-full max-w-md backdrop-blur-md p-8 rounded-xl bg-gradient-to-br from-purple-100 via-violet-100 to-blue-200 shadow-2xl hover:shadow-6xl transition duration-300">
                        {/* Slideshow container */}
                        <div className="relative w-full max-w-sm h-80 rounded-xl overflow-hidden shadow-lg mb-4 shadow-2xl hover:shadow-4xl hover:scale-105 transition-transform duration-300">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Slide ${index}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                />
                            ))}
                            {/* Dot indicators */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-blue-500' : 'bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Text below slideshow */}
                        <h2 className="text-2xl font-bold mb-2 text-indigo-900">Vasavi Krishna Chintamaneni</h2>
                        <p className="text-sm mb-2 text-red-900">Central Michigan University | Mount Pleasant, MI | Computer Science Graduate | Rooted From Hyderabad, India.</p>
                        <span className="text-md font-medium text-gray-700">
                            <Typewriter
                                words={[
                                    'Data Analyst',
                                    'React Enthusiast!',
                                    'Storyteller with a passion for insights!',
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll Prompt (optional) */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 text-sm">
                ↓ Scroll
            </div>
        </section>
    );
};

export default Home;


