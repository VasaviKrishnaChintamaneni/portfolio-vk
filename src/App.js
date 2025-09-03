import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './UserComponents/Navbar';
import Footer from './UserComponents/Footer';
import BackToTop from './UserComponents/BackToTop';

import Home from './pages/Home'; // wraps the Hero
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Certifications from './pages/MyCertifications';
import Skills from './pages/Skills';

function App() {
  return (
    <Router basename="/portfolio-vk">
      <div className="flex flex-col font-sans bg-secondary min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
