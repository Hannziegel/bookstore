const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';
const GET = 'bookstore/books/GET_BOOK';
const API_ID = 'DRrhhx0Pgnk6pSVsDI0Z';

// initial state
const initialState = [];

// reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;

// action creators

export const addBook = (book) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }).then(dispatch({
    type: ADD,
    book,
  }));
};

export const removeBook = (book) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(dispatch({
    type: REMOVE, book,
  }));
};

export const getBooks = () => async (dispatch) => {
  const books = [];
  const fetchBooks = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`).then((data) => data.json());

  Object.keys(fetchBooks).forEach((e) => {
    books.push({ ...fetchBooks[e][0], item_id: e });
  });

  dispatch({
    type: GET,
    payload: books,
  });
};
