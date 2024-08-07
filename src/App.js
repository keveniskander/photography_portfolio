import React from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import Places from './Places.js';
import Travel from './Travel.js';
import About from './About.js';
import Article1 from './Article1';
import Article2 from './Article2';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/about" element={<About />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  const location = useLocation();

  // Conditionally hide the navbar on certain routes
  const hideNavbarRoutes = ["/", "/about", "/travel"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    !shouldHideNavbar && (
      <nav style={{ margin: 10, textAlign: 'center' }}>
        <Link to="/" style={{ padding: 5 }}>
          Places
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/travel" style={{ padding: 5 }}>
          Travel
        </Link>
      </nav>
    )
  );
}

export default App;
