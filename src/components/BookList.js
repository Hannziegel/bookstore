import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import AddBook from './AddBook';
import Book from './Book';

const BooksList = () => {
  const booksList = useSelector((state) => state.books);

  return (
    <div>
      {
        booksList.map((book) => (
          <div key={book.id}>
            <Book gener="Action" title={book.title} author={book.author} id={book.id} />
          </div>
        ))
      }
      <AddBook />
    </div>
  );
};

export default BooksList;
