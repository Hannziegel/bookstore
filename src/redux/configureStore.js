import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({ bookReducer, categoryReducer });

export default store;
