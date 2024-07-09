import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import Navbar from "./Navbar";
import background from '../src/images/ROM_copy_BW.jpg';
import places1 from '../src/images/2021-10-21-0043.jpg';
import places2 from '../src/images/2021-10-21-0045.jpg';

const images = [places1, places2, /* Add other image paths here */];

function Places(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Navbar />
      <section className="main-section">
        <div className="main-div">
          <img className="background" src={background} alt="Background" />
          <div className="h1-container">
            <h1>ByKevo</h1>
          </div>
          <div className="h2-container">
            <h2>collection</h2>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="p-container">
            <p className="p1">Places</p>
          </div>
          <div className="photography-portfolio">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`img-${index % 2 === 0 ? 'left' : 'right'}`}
                id={`photo${index + 1}`}
                alt={`Place ${index + 1}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={<a href={images[photoIndex]} download>Download</a>}
        />
      )}
    </>
  );
}

export default Places;
