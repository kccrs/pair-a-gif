import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  INVALIDATE_GIPHY,
  REQUEST_GIPHYS,
  RECEIVE_GIPHYS,
  SEARCH_GIPHY
} from '../actions'

const selectedGiphy = (state = 'cats', action) => {
  switch (action.type) {
    case SEARCH_GIPHY:
      return action.giphy
    default:
      return state
  }
}

const gifs = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_GIPHY:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_GIPHYS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_GIPHYS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.gifs,
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}

const gifsByGiphy = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_GIPHY:
    case RECEIVE_GIPHYS:
    case REQUEST_GIPHYS:
      return {
        ...state,
        [action.giphy]: gifs(state[action.giphy], action)
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  gifsByGiphy,
  selectedGiphy,
  routing: routerReducer
})

export default rootReducer;
