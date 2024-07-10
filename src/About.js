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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar
              vitae dolor. Integer eu nibh at nisi ullamcorper sagittis id vel
              leo. Integer feugiat faucibus libero, at maximus nisl suscipit
              posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum
              egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique
              sapien vestibulum lobortis. Nam eget bibendum metus, non dictum
              mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
