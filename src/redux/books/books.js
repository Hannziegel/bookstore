const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

// initial state
const initialState = [
  {
    title: 'The name of the wind',
    author: 'Patrick Rothfuss',
    id: '1',
  },
  {
    title: 'American Gods',
    author: 'Neil Gaiman',
    id: '2',
  },
];

// reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;

// action creators

export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({ type: REMOVE, book });
