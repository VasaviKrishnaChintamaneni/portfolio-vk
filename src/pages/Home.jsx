import React, { useEffect, useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
    FaLinkedin, FaGithub, FaDownload,
    FaPython, FaAws, FaDocker, FaBrain,
    FaDatabase, FaCloud, FaRobot, FaCogs,
    FaNetworkWired,
} from 'react-icons/fa';
import Hero1 from '../Assets/ProfilePic/HeroPhoto1.jpg';
import Hero2 from '../Assets/ProfilePic/HeroPhoto2.jpg';
import Hero3 from '../Assets/ProfilePic/HeroPhoto3.jpg';
import Hero4 from '../Assets/ProfilePic/HeroPhoto4.jpg';



import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    const images = [Hero1, Hero2, Hero3, Hero4];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [techSlide, setTechSlide] = useState(0); // 0 = tech, 1 = video
    const introDrivePreviewSrc =
    "https://www.loom.com/embed/f4b27b7e88754a1b97c479a91fd5a9ba";

    const techStackSlide1 = [
        { icon: FaPython, label: "Python" },
        { icon: FaBrain, label: "TensorFlow / PyTorch" },
        { icon: FaRobot, label: "LangChain / RAG" },
        { icon: FaCloud, label: "Hugging Face" },
        { icon: FaAws, label: "AWS / GCP" },
        { icon: FaDocker, label: "Docker" },
        { icon: FaCogs, label: "Kubernetes" },
        { icon: FaDatabase, label: "FAISS / Pinecone" },
        { icon: FaNetworkWired, label: "MLflow" },
        { icon: FaGithub, label: "GitHub" },
    ];

    const introRef = useRef(null);
    const [loadIntroVideo, setLoadIntroVideo] = useState(false);


    useEffect(() => {
        const el = introRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoadIntroVideo(true);
                observer.disconnect();
            }
        }, { threshold: 0.25 });

        observer.observe(el);
        return () => observer.disconnect();
    }, []);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5s

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const t = setInterval(() => {
            setTechSlide((s) => (s + 1) % 2);
        }, 6000);

        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    const [showScrollHint, setShowScrollHint] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setShowScrollHint(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-8 py-10 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"
        >

            {/* Main content */}
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1fr_1.15fr] gap-8 items-center">
                {/* Left Side - About Me */}
                <div data-aos="fade-right" className="text-primary">

                    <div className="flex items-start gap-6">

                        {/* About Content */}
                        <div className="flex-1 space-y-5">
                            <div className="rounded-2xl p-6 backdrop-blur-md
             bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100
             shadow-xl transition-all duration-300
             hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="flex flex-wrap items-center gap-2 mt-4">
                                    <p className="text-md text-gray-500 mb-2  tracking-wider">
                                        <b>Hi,</b>
                                    </p>
                                    <p className="text-md text-gray-500 mb-2 uppercase tracking-wider">Welcome to my space. PLEASE START HERE
                                    </p>
                                    {/* Resume Download Button */}
                                    <a
                                        href="/portfolio-vk/Assets/Resume.pdf"
                                        download="Vasavi-Krishna-Chintamaneni-Resume.pdf"
                                        className="inline-flex items-center gap-2 bg-yellow-500 text-white font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition"
                                    >
                                        <FaDownload className="text-lg" />
                                        Resume
                                    </a>

                                    {/* LinkedIn Profile Button */}
                                    <a
                                        href="https://www.linkedin.com/in/vasavikrishnavk"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition"
                                    >
                                        <FaLinkedin className="text-lg" />
                                        LinkedIn
                                    </a>

                                    {/* GitHub Profile Button */}
                                    <a
                                        href="https://github.com/VasaviKrishnaChintamaneni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-700 text-white font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition"
                                    >
                                        <FaGithub className="text-lg" />
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Card 1: Passion & Purpose */}
                            <div className="rounded-2xl p-6 backdrop-blur-md
             bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100
             shadow-xl transition-all duration-300
             hover:shadow-2xl hover:-translate-y-1"
                            >

                                <h5 className="text-xl md:text-2xl font-semibold text-[#2d5796] mb-3">
                                    Passion &amp; Purpose
                                </h5>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    My journey into AI didn't begin with algorithms — it grew from a deep love
                                    for understanding patterns and meaning. Through music, I learned how rhythm,
                                    emotion, and structure come together to tell stories. Machine learning, to me,
                                    works the same way.
                                    <br/><br/>
                                    Beyond work, I'm fueled by curiosity: exploring new places, ideas, and
                                    conversations. These experiences remind me that the most powerful AI systems
                                    are built by people who deeply understand the humans they're built for.
                                    <br/><br/>
                                    <span className="text-[#3360a3] font-semibold">
                                        "Every signal holds a story. My role is to build the systems that listen
                                        — and act on it."
                                    </span>
                                </p>
                            </div>

                            {/*<hr className="my-6 border-gray-500/30" />*/}

                            <div
                                className="rounded-2xl p-6 backdrop-blur-md
             bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100
             shadow-xl transition-all duration-300
             hover:shadow-2xl hover:-translate-y-1"
                            >

                                <h5 className="text-xl md:text-2xl font-semibold text-[#2d5796] mb-3">
                                    Area of Expertise
                                </h5>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    I'm an <b>AI/ML Engineer</b> with 5+ years of experience building intelligent systems
                                    across enterprise networking, financial services, and cloud environments.
                                    <br/>
                                    Currently at Cisco, I design agentic AI assistants, predictive maintenance
                                    models, and anomaly detection pipelines using{" "}
                                    <b>LangChain, RAG, LLMs, LSTM, and TensorFlow</b> — deployed at scale with
                                    Docker, Kubernetes, and MLflow. <br/>
                                    <br/>
                                    "I bridge data engineering and AI, owning
                                    end-to-end workflows from raw telemetry to{" "}
                                    production-ready intelligent systems."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Side - Photo Carousel Card + Tech Stack & Video Carousel Card */}
                <div
                    className="flex flex-col items-center justify-center text-center text-textMain h-full w-full"
                    data-aos="fade-left"
                >
                    <div className="w-full max-w-lg lg:max-w-xl space-y-6">
                        {/* Card 1: Carousel + Intro */}
                        <div className="w-full backdrop-blur-md p-8 rounded-xl bg-gradient-to-br from-purple-100 via-violet-100 to-blue-200 shadow-2xl hover:shadow-6xl transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                            {/* Slideshow container */}
                            <div className="relative w-full h-96 mx-auto rounded-xl overflow-hidden shadow-lg mb-4 hover:shadow-4xl hover:scale-105 transition-transform duration-300 ">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Slide ${index}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                    />
                                ))}

                                {/* Dot indicators */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                                    {images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-blue-500" : "bg-gray-400"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Text below slideshow */}
                            <h2 className="text-2xl font-bold mb-2 text-[#24477a]">
                                Vasavi Krishna Chintamaneni
                            </h2>
                            <p className="text-sm mb-2 text-red-900">
                                AI/ML Engineer @ Cisco | CMU Computer Science | Richardson, TX | Rooted From Hyderabad, India.
                            </p>
                            <span className="text-md font-medium text-gray-700">
                                <Typewriter
                                    words={[
                                        "AI/ML Engineer @ Cisco",
                                        "Building Agentic AI Systems",
                                        "LLM Fine-Tuning & RAG Pipelines",
                                        "MLOps & Production AI Deployment",
                                        "Storyteller with a passion for insights!",
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

                        {/* Card 2: Tech Stack Highlights */}
                        <div className="w-full backdrop-blur-md p-6 rounded-xl bg-gradient-to-br from-purple-100 via-violet-100 to-blue-200 shadow-2xl hover:shadow-6xl transition duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <h3 className="text-lg md:text-xl font-semibold text-[#24477a] mb-4 leading-snug">
                                <b>{techSlide === 1 ? "The Story Behind My Work" : "Tech Stack"}</b>
                            </h3>


                            {/* Tech Stack Carousel */}
                            {/* Intro Video Carousel (2 slides) */}
                            <div className="relative overflow-hidden rounded-xl">
                                <div
                                    className="flex transition-transform duration-500"
                                    style={{ transform: `translateX(-${techSlide * 100}%)` }}
                                >
                                    {/* Slide 1 */}
                                    <div className="w-full shrink-0">
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                            {techStackSlide1.map(({ icon: Icon, label }) => (
                                                <div
                                                    key={label}
                                                    className="flex flex-col items-center justify-center rounded-xl bg-white/40 border border-white/50 p-3
                       transition-transform duration-300 hover:-translate-y-1 hover:bg-white/60"
                                                >
                                                    <Icon className="text-2xl text-[#0a192f]" />
                                                    <span className="mt-2 text-xs font-medium text-gray-700">{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Slide 2: Intro Video (click-to-play with poster overlay) */}
                                    <div className="w-full shrink-0">
                                        <div className="w-full shrink-0">
                                            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/50 bg-white/30 shadow-lg">
                                                <iframe
                                                    src={introDrivePreviewSrc}
                                                    className="w-full h-full"
                                                    allow="autoplay; fullscreen"
                                                    allowFullScreen
                                                    title="Intro video"
                                                />
                                            </div>

                                            <p className="mt-3 text-xs text-gray-600">Click-to-play</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Dots + manual nav */}
                                <div className="mt-4 flex justify-center gap-2">
                                    {[0, 1].map((i) => (
                                        <button
                                            key={i}
                                            onClick={() => setTechSlide(i)}
                                            className={`w-2.5 h-2.5 rounded-full ${techSlide === i ? "bg-blue-600" : "bg-gray-400"}`}
                                            aria-label={`Carousel slide ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>

                </div>
            </div>

            {showScrollHint && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 text-sm pointer-events-none">
                    ↓ Scroll
                </div>
            )}

        </section >
    );
};

export default Home;


