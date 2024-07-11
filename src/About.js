import React from "react";
import './about.css'; // Import the CSS file for the About page
import myPicture from '../src/images/myPicture.jpg'; // Replace with the actual path to your picture
import Navbar from './Navbar'; // Import the Navbar component

function About(props) {
  return (
    <>
      <Navbar /> {}
      <section className="about-section">
        <div className="about-container">
          <img src={myPicture} alt="My Picture" className="about-picture" />
          <div className="about-text">
            <h1>BYKEVO COLLECTIVE</h1>
            <p>
              You are looking at the BYKEVO COLLECTION, a project that has been very near and dear to my heart for many years.
              My memories, my stories, my mood. Captured, catalogued and manipulated by a less than competent lense. Welcome to the COLLECTIVE!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
