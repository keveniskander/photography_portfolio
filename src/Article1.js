import React, { useState } from 'react';
import Navbar from './Navbar';
import './article.css'; // Assuming you have a CSS file for styling
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../src/images/4040', false, /\.jpg$/));

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
        <h1>Photo Gallery</h1>
        {images.map((image, index) => (
          <div key={index} className="article-image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="article-image"
              onClick={() => openLightbox(index)}
            />
            <p className="image-description">Image {index + 1}</p>
            {/* Add dividers or text sections as needed */}
            {(index + 1) % 5 === 0 && <div className="article-divider"></div>}
            {(index + 1) % 10 === 0 && <div className="text-section">Text or description here1</div>}
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
