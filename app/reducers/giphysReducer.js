// import { types } from '../actions/actionTypes';

const initialState = [];

const giphys = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'SEARCH_GIPHY':
      return data;
    default:
      console.log('No giphys.');
  }
  return state;
};

export default giphys;
