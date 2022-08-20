// actions
const STATUS = 'STATUS';

// initial state
const initialState = [];

// reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;

// action creators
export const checkStatus = () => ({ type: STATUS });
