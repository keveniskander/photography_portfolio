// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Travel from './Travel.js'; 
import About from './About.js'; 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        {/* Set up the Router */}
        <Route exact path="/" component={Projects} />
        <Route path="/travel" component={Travel} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            // Set up the Links
            <Link to="/" className="item">Projects</Link>
            <Link to="/travel" className="item">Travel</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
 
export default App;