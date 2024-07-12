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
            Very rarely do we have the privilege of witnessing the rawest forms of human expression. 
            Welcome to an experiment driven by genuine human experience. Expression, experiment, experience. 
            From this point on, I will refer to this as the triple ‘E’, or a screeching “EEE!” if you will.  
            The BYKEVO collection is my take on the ideal memory: flawed yet strangely sexy
            <br></br><br></br>
             Welcome to my art installation where I will be taking a trip down a very unfamiliar, primitive lane 
            (at least to my generation) and leaving out the “how do I look?” second takes. 
            For every roll of 35mm shot, there will be a collection released with a subsequent article surrounding the pieces 
            being showcased. For every memory captured, good or bad, I will allow it to exist in this world, the same way it was created… 
            spontaneously. I refuse to allow ego or embarrassment taint my perspective (also known as the double ‘E’). 
            This is a vision without lip fillers, without unsolicited opinions and without attention seeking sociopathy. 
            This is a collection of memories captured by Kevo. The BYKEVO collection. 

            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
