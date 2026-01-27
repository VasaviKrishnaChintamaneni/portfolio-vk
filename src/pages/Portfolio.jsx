import React from "react";

import Home from "./Home.jsx"; // your About content
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import MyCertifications from "./MyCertifications.jsx";
import Contact from "./Contact.jsx";

const Portfolio = () => {
    return (
        <main>
            <Home />

            {/* Skills needs an ID wrapper because your Skills component currently starts with a <div> */}
            <Skills />

            {/* Projects already has its own <section>, but giving it an ID wrapper ensures navbar works */}
            <Projects />

            <MyCertifications />

            <Contact />
        </main>
    );
};

export default Portfolio;
