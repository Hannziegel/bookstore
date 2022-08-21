import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import AddBook from './AddBook';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const BooksList = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {
        booksList.map((book) => (
          <div key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              item_id={book.item_id}
              category={book.category}
            />
          </div>
        ))
      }
      <AddBook />
    </div>
  );
};

export default BooksList;
