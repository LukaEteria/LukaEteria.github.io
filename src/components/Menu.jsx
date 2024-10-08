import React, { useState } from 'react';

const Menu = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // მენიუს დახურვა
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`sidebar ${isMenuOpen ? 'active' : ''}`}>
        <h1>My Projects</h1>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          {sections.map((section) => (
            <li key={section} className={currentSection === section ? 'active' : ''}>
              <button onClick={() => scrollToSection(section)}>{section}</button>
              <div className="left-line"></div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
