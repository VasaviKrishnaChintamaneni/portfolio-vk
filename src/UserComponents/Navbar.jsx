import React, { useEffect, useMemo, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTools,
  FaEnvelope,
  FaProjectDiagram,
  FaAward,
  FaUser,
  FaBook,
} from "react-icons/fa";
import ProfileBrandLogo from "../Assets/ProfilePic/ProfileBrandLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about", id: "about", icon: <FaUser /> },
      { label: "Skills", href: "#skills", id: "skills", icon: <FaTools /> },
      {
        label: "Projects",
        href: "#projects",
        id: "projects",
        icon: <FaProjectDiagram />,
      },
      {
        label: "Certifications",
        href: "#certifications",
        id: "certifications",
        icon: <FaAward />,
      },
      { label: "Publications", href: "#publications", id: "publications", icon: <FaBook /> },
      { label: "Contact", href: "#contact", id: "contact", icon: <FaEnvelope /> },
    ],
    []
  );

  // Scrollspy: observe sections and mark the one most in view as active
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio among those intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const top = visible[0];
        if (top?.target?.id) setActiveSection(top.target.id);
      },
      {
        // This makes "active" switch when a section is roughly centered-ish
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems]);

  const linkBase =
    "flex items-center space-x-1 font-semibold transition px-2 py-1 rounded-md";
  const linkInactive = "text-white hover:text-yellow-500";
  const linkActive = "text-yellow-400 bg-white/10";

  const getLinkClass = (id) =>
    `${linkBase} ${activeSection === id ? linkActive : linkInactive}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/95 backdrop-blur text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={ProfileBrandLogo}
            alt="ProfileBrandLogo"
            className="w-10 h-10 rounded-full border-2 border-pink-100 shadow-sm hover:scale-105 transition duration-300"
          />

          <a
            href="#about"
            className="text-2xl font-extrabold tracking-wider hover:scale-105 hover:text-violet-200 transition duration-300"
            onClick={closeMenu}
          >
            Portfolio
          </a>

          {/* Desktop center links (Skills/Projects/Certifications like your original layout) */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.slice(1, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getLinkClass(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Desktop right links */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <a href="#about" className={getLinkClass("about")}>
              <FaUser />
              <span>About</span>
            </a>
          </li>

          <li>
            <a href="#contact" className={getLinkClass("contact")}>
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-lg font-semibold">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`${getLinkClass(item.id)} w-full`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
