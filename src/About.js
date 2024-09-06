import React from "react";
import './about.css'; // Import the CSS file for the About page
import myPicture from '../src/images/OIG1.jpg'; // Replace with the actual path to your picture
import Navbar from './Navbar'; // Import the Navbar component

function About(props) {
  return (
    <>
      <Navbar /> {}
      <section className="about-section">
        <div className="about-container">
          <img src={myPicture} alt="My Picture" className="about-picture" />
          <div className="about-text">
            <h1>BYKEVO COLLECTION</h1>
            <p>
            Very rarely do we have the privilege of witnessing the rawest forms of human expression.
            Welcome to a virtual space created to explore an analog world.
            Here, you will find an amateur, a few used cameras, and a stubborn insistence that by shooting film and uploading the results to my website, I'm somehow better than the average scrapbooking mom of three.
            <br></br><br></br>
            Welcome to an experiment driven by genuine human experience: expression, experiment, experience. 
            From this point on, I will refer to this as the triple ‘E’, or a screeching “EEE!” if you will. 
            The BYKEVO collection is my take on the ideal memory: flawed yet strangely sexy. 
            We're leaving out the “how do I look?” second takes, and in this space, we are quick to settle for mediocrity. 
            For every roll of 35mm shot, there will be a collection released with a subsequent article surrounding the pieces being showcased. 
            For every memory captured (good or bad), I will allow it to exist in this world the same way it was created: spontaneously. 
            I refuse to allow ego or embarrassment to taint my perspective (also known as the double ‘E’). 
            This is a vision without lip fillers, without gatekeeping, and without attention-seeking sociopathy. 
            This is a collection of memories captured by Kevo: the BYKEVO collection.

            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
