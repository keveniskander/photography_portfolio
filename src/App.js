// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Travel from './Travel.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;