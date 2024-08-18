import React, { useState } from 'react';
import Navbar from './Navbar';
import './article.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('./images/4040', false, /\.jpg$/));

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
        {/* <h1>Photo Gallery</h1> */}
        <div className="article-text article-text-start">
          <h2>Mont-Sainte-Anne</h2>
          <p>March 2024 marked a rusty return to the film photography game. A 
            fantastic day on the slopes was met with a mediocre shooting results, but my mind was pre-occupied with more important matters.
            The MTL office squad made their mark with a weekend to remember. Chalet, hotub, raclette, wine beer and a cloudy Saturday carving session.
            Another one for the books, or in this case for the collection. Let's hope the next outing produces more stellar shots.</p>
        </div>
        {images.map((image, index) => (
          <div key={index} className="article-image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="article-image"
              onClick={() => openLightbox(index)}
            />
            {/* <p className="image-description">Image {index + 1}</p> */}
            {/* Insert article text after the 14th image */}
            {index === 13 && (
              <div className="article-text article-text-middle">
                <h2>Summer-Squad</h2>
                <p>Keven makes a fool of himself, Lina gets her citizenship & Marie takes us on another journey through the great outdoors.
                  The end of this roll is an ode to the simple things in life. A display of national pride at our local Montreal diner
                  followed by a short hike to help feed the local Milton mosquito population. Yum!
                </p>
              </div>
            )}
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
