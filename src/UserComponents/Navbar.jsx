import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    FaBars, FaTimes, FaTools, FaEnvelope,
    FaProjectDiagram, FaAward,
    FaUser
} from 'react-icons/fa';
import ProfileBrandLogo from '../Assets/ProfilePic/ProfileBrandLogo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 bg-[#0a192f] text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <img
                        src={ProfileBrandLogo}
                        alt="ProfileBrandLogo"
                        className="w-10 h-10 rounded-full border-2 border-pink-100 shadow-sm hover:scale-105 transition duration-300"
                    />

                    <h1 className="text-2xl font-extrabold tracking-wider hover:scale-105 hover:text-violet-200 transition duration-300">
                        Portfolio
                    </h1>

                    {/* Route Links */}
                    <RouterLink
                        to="/projects"
                        className="flex items-center space-x-1 font-semibold hover:text-yellow-500 transition hidden md:flex"
                    >
                        <FaProjectDiagram />
                        <span>Projects</span>
                    </RouterLink>

                    <RouterLink
                        to="/skills"
                        className="flex items-center space-x-1 font-semibold hover:text-yellow-500 transition hidden md:flex"
                    >
                        <FaTools />
                        <span>Skills</span>
                    </RouterLink>

                    <RouterLink
                        to="/certifications"
                        className="flex items-center space-x-1 font-semibold hover:text-yellow-500 transition hidden md:flex"
                    >
                        <FaAward />
                        <span>Certifications</span>
                    </RouterLink>
                </div>

                <ul className="hidden md:flex space-x-6 items-center">
                    <li className="flex items-center space-x-1 font-semibold hover:text-yellow-500 transition">
                        <FaUser />
                        <RouterLink to="/" smooth={true} duration={500} offset={-70}>
                            About
                        </RouterLink>
                    </li>
                    <li className="flex items-center space-x-1 font-semibold hover:text-yellow-500 transition">
                        <FaEnvelope />
                        <RouterLink to="/contact" smooth={true} duration={500} offset={-70}>
                            Contact
                        </RouterLink>
                    </li>
                </ul>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col space-y-4 text-lg font-semibold">
                        <li className="flex items-center space-x-2 hover:text-yellow-500 transition">
                            <FaProjectDiagram />
                            <RouterLink to="/projects" onClick={toggleMenu}>
                                Projects
                            </RouterLink>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-500 transition">
                            <FaTools />
                            <RouterLink to="/skills" onClick={toggleMenu}>
                                Skills
                            </RouterLink>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-500 transition">
                            <FaAward />
                            <RouterLink to="/certifications" onClick={toggleMenu}>
                                Certifications
                            </RouterLink>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-500 transition">
                            <FaUser />
                            <RouterLink to="/" onClick={toggleMenu}>
                                About
                            </RouterLink>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-yellow-500 transition">
                            <FaEnvelope />
                            <RouterLink to="/contact" onClick={toggleMenu}>
                                Contact
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
