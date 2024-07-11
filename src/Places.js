import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import Navbar from "./Navbar";
import background from '../src/images/ROM_copy_BW.jpg';
import places1 from '../src/images/2021-10-21-0043.jpg';
import places2 from '../src/images/2021-10-21-0045.jpg';

const images = [places1, places2];

function Places() {
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
          </div>
          <div className="article">
            <Link to="/article1" className="article-link">
              <div className="article-content" onClick={() => openLightbox(0)}>
                <div className="article-text">
                  <h3>Article 1 Title</h3>
                  <p>Short description for Article 1.</p>
                  <p className="learn-more">LEARN MORE</p>
                </div>
                <img src={places1} alt="Article 1" className="article-image" />
              </div>
            </Link>
          </div>
          <div className="article">
            <Link to="/article2" className="article-link">
              <div className="article-content" onClick={() => openLightbox(1)}>
                <div className="article-text">
                  <h3>Article 2 Title</h3>
                  <p>Short description for Article 2.</p>
                  <p className="learn-more">LEARN MORE</p>
                </div>
                <img src={places2} alt="Article 2" className="article-image" />
              </div>
            </Link>
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
