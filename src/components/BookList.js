import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const BooksList = () => (
  <div>
    <Book gener="Action" title="The Hunger Games" author="Suzanne Collins" />
    <Book gener="Fiction" title="Harry Potter" author="J.K.Rowling" />
    <AddBook />
  </div>
);

export default BooksList;
