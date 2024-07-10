import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo" title="Visit Company's site">
          <span className="sr-only">Company Name</span>
          <img width="64" height="64" src="https://placehold.co/64x64" alt="Company's Logo" title="Company Name" />
        </Link>
        <button id="hamburger" type="button" className={`hamburger ${isMenuOpen ? 'active' : ''}`} aria-pressed={isMenuOpen} aria-label="Toggle Menu" onClick={toggleMenu}>
          <span className="sr-only">Menu</span>
          <span className="line"></span>
        </button>
        <div id="dropdown" className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
          <ul id="dropdown-content" className={`dropdown-content ${isMenuOpen ? 'active' : ''}`} role="menu" aria-label="Main Menu">
            <li role="none"><Link role="menuitem" to="/" onClick={toggleMenu}>Places</Link></li>
            <li role="none"><Link role="menuitem" to="/travel" onClick={toggleMenu}>People</Link></li>
            <li role="none"><Link role="menuitem" to="/about" onClick={toggleMenu}>About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
