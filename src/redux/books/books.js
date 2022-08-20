const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

// initial state
const initialState = [];

// reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        title: action.title,
        author: action.author,
        id: action.id,
      }];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;

// action creators

export const addBook = (bookTitle, bookAuthor, bookId) => ({
  type: ADD,
  book: {
    title: bookTitle,
    author: bookAuthor,
    id: bookId,
  },
});

export const removeBook = (bookId) => ({ type: REMOVE, id: bookId });
