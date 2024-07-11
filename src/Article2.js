import React from 'react';
import Navbar from './Navbar';
import './article.css'; // Optionally create this for styling

const Article2 = () => {
  return (
    <>
      <Navbar />
      <div className="article-container">
        <h1>Article 2</h1>
        <p>Content of Article 2...</p>
      </div>
    </>
  );
};

export default Article2;
