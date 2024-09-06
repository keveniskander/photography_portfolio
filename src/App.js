import React from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import Places from './Places.js';
import Travel from './Travel.js';
import About from './About.js';
import Article1 from './Article1';
import Article2 from './Article2';
import Footer from './footer';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* This will ensure that pages scroll to the top on navigation */}
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/about" element={<About />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

function Header() {
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/about", "/travel", "/article1", "/article2"];
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
