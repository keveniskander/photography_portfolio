import React, { useState } from 'react';
import Navbar from './Navbar';
import './article.css'; 
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => {
  return r.keys().map(r);
};


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
        <div className="article-text">Ask me anything about the 2024 Summer Olympic games and I wouldn't be able to tell you
          much. Ask me about the 2024 Summer Bachelor games, and I still wouldn't be able to recount a whole lot. Thankfully, 
          we caught some of it on film. Based on the photos that came back from the lab, I'd say we did our countries proud. 
          Cheers to the athletes that left it all on the line, and cheers to the groom. Elie & Juliana 4ever baby!
          
        </div>
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
