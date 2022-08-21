import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../styles/Global.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [titleName, setTitle] = useState('');
  const [authorName, setAuthor] = useState('');
  const [categoryTitle, setCategory] = useState('');

  const createBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title: titleName,
      author: authorName,
      category: categoryTitle,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="container flex-column addBook-container">
      <h3>ADD NEW BOOK</h3>
      <form className="flex" onSubmit={createBook}>
        <input required placeholder="Book Title" type="text" name="title" value={titleName} onInput={(e) => setTitle(e.target.value)} />
        <input required placeholder="Author" type="text" name="author" value={authorName} onInput={(e) => setAuthor(e.target.value)} />
        <select
          name="categories"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <option value="">Category</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
        </select>

        <button type="submit" required>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
