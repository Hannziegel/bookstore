import React from 'react';
import '../styles/Global.css';

const AddBook = () => (
  <div className="container flex-column">
    <h3>ADD NEW BOOK</h3>
    <form className="flex">
      <input placeholder="Book Title" />
      <input placeholder="Author" />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
