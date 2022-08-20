import React from 'react';
import { useSelector } from 'react-redux';
import BooksList from '../components/BookList';

const Books = () => {
  const BookList = useSelector((state) => state.book);

  return (
    <>
      <BooksList bookList={BookList} />
    </>
  );
};

export default Books;
