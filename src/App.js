import React from "react";
import Footer from "./UserComponents/Footer";

import Navbar from "./UserComponents/Navbar";

// Sections (all rendered on one page)
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import MyCertifications from "./pages/MyCertifications";
import Contact from "./pages/Contact";
import Publications from './pages/Publications';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="about">
          <Home />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <MyCertifications />
        </section>

        <section id="publications">
          <Publications />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
