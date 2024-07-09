import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css'; // Ensure to create this CSS file and add styles from the provided CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="container nav">
        <a href="/" title="Visit Company's site">
          <span className="sr-only">Company Name</span>
          <img width="64" height="64" src="https://placehold.co/64x64" alt="Company's Logo" title="Company Name" />
        </a>
        <button id="hamburger" type="button" className={`hamburger ${isOpen ? 'active' : ''}`} aria-pressed={isOpen} onClick={toggleMenu}>
          <span className="sr-only">Menu</span>
          <span className="line"></span>
        </button>
        <div id="dropdown" className={`dropdown ${isOpen ? 'active' : ''}`}>
          <ul id="dropdown-content" className={`dropdown-content ${isOpen ? 'active' : ''}`} role="menu" aria-label="Main Menu">
            <li role="none"><Link role="menuitem" to="about" smooth={true} duration={500} onClick={toggleMenu}>About us</Link></li>
            <li role="none"><Link role="menuitem" to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
            <li role="none"><Link role="menuitem" to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact us</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
