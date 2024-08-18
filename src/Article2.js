import React, { useState } from 'react';
import Navbar from './Navbar';
import './article.css'; // Assuming you have the same CSS file for styling
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => {
  return r.keys().map(r);
};

// Import images from the new folder
const images = importAll(require.context('../src/images/4039', false, /\.jpg$/));

const ArticleWithImages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="article-container">
        <h1>2024 Closing Ceremonies</h1>
        <div className="article-text">Most </div>
        {images.map((image, index) => (
          <div key={index} className="article-image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="article-image"
              onClick={() => openLightbox(index)}
            />

          </div>
        ))}
      </div>

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
};

export default ArticleWithImages;
