import React from 'react';
import Navbar from './Navbar';
import './article.css'; // Optionally create this for styling

const Article1 = () => {
  return (
    <>
      <Navbar />
      <div className="article-container">
        <h1>Article 1</h1>
        <p>Content of Article 1...</p>
      </div>
    </>
  );
};

export default Article1;
