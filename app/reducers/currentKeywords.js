import { SET_KEYWORDS } from '../actions/actionTypes';

const initialState = ['cats'];

const currentKeywords = (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYWORDS:
      return action.data
    default:
      return state
  }
}

export default currentKeywords;
