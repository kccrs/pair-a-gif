import * as types from '../actions/actionTypes';

const initialState = [];

const giphys = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'SEARCH_GIPHY':
      return data;
  }
  return state;
};

export default giphys;
