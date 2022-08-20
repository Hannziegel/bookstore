/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Global.css';
import '../styles/Book.css';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  return (
    <div className="book-container container">
      <div className="book-info-container">
        <p>Fiction</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions-container">
          <p>Comments</p>
          <button
            type="button"
            className="deleteButton"
            onClick={() => {
              dispatch(removeBook({ title, author, id }));
            }}
          >
            Remove
          </button>
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

Book.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
