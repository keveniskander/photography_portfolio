import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <Link to="/" className="logo" title="Visit Company's site">
          <span className="sr-only">Company Name</span>
          <div className="camera-icon"></div>
        </Link>

        <button
          id="hamburger"
          type="button"
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          aria-pressed={isMenuOpen}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Menu</span>
          <span className="line"></span>
        </button>
        <div id="dropdown" className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
          <ul
            id="dropdown-content"
            className={`dropdown-content ${isMenuOpen ? 'active' : ''}`}
            role="menu"
            aria-label="Main Menu"
          >
            <li role="none">
              <Link role="menuitem" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/article1" onClick={toggleMenu}>Article1</Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/article2" onClick={toggleMenu}>Article2</Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/article3" onClick={toggleMenu}>Article3</Link>
            </li>
            <li role="none">
              <Link role="menuitem" to="/about" onClick={toggleMenu}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
