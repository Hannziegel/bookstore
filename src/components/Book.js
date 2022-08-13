/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Global.css';
import '../styles/Book.css';

const Book = (props) => {
  const { gener, title, author } = props;

  return (
    <div className="book-container container">
      <div className="book-info-container">
        <p>{gener}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions-container">
          <p>Comments</p>
          <p>Remove</p>
          <p>Edit</p>
        </div>
      </div>
      <div>
        63% COMPLETED
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
