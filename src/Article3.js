import React, { useState } from 'react';
import Navbar from './Navbar';
import './article.css'; 
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../src/images/02501083', false, /\.jpg$/));

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
        <h1>Literally All Over The Place</h1>
        <div className="article-text">
          <p>The disorganized, scrappy mess of this roll speaks for itself. It can be sussinctly described as terribly unbalanced photos with incredibly unique perspectives. We start our journey
            in the dimly lit Parisian streets wondering what the hell optimal lighting looks like. In the end, we're left with this messy showcase and a terrible wine hangover.
            You may ask: Was it worth it?? -- I invite you to be the judge. 
          </p>
        </div>

        {images.map((image, index) => (
          <div key={index} className="article-image-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="article-image"
              onClick={() => openLightbox(index)}
            />
            {/* Insert paragraph after image 11 */}
            {index === 10 && (
              <div className="article-text">
                <p>I have no recollection of this next grouping of photos and when I received this roll back from the lab, I had more questions than answers. My camera looks to 
                  have been hijacked by some family at my aunt's house sometime in the late summer of 2023. Its always refreshing to catch a few frames back from the lab that weren't
                  executed by me, and this is no exception.</p>
              </div>
            )}
            {/* Insert paragraph after image 21 */}
            {index === 20 && (
              <div className="article-text">
                <p>Now from my aunts house we're immediately thrown into a journey that begins in the port of Athens. A few frames on, we find ourselves on a blissful voyage
                  that takes us to our final destination for this exposition: Milos. This small greek island tucked away peacefully behind the chaos tops my list (and this roll) as
                  the perfect end to a perfect summer.</p>
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
