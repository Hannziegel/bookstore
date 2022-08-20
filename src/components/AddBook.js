import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../styles/Global.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');

  return (
    <div className="container flex-column">
      <h3>ADD NEW BOOK</h3>
      <form className="flex">
        <input placeholder="Book Title" name="title" value={titleName} onInput={(e) => setTitle(e.target.value)} />
        <input placeholder="Author" name="author" value={authorName} onInput={(e) => setAuthor(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              title: titleName,
              author: authorName,
              id: uuidv4(),
            }));
            setTitle('');
            setAuthor('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
