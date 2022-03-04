// App.jsx
 
import React from 'react';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Travel from './Travel.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
      
        <BrowserRouter>
          <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Project
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="/travel" style={{ padding: 5}}>
            Travel
          </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </BrowserRouter>
        
  );
}
 
export default App;