import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

export const REQUEST_GIPHYS = 'REQUEST_GIPHYS';
export const RECEIVE_GIPHYS = 'RECEIVE_GIPHYS';
export const SELECT_GIPHY = 'SELECT_GIPHY';
export const INVALIDATE_GIPHY = 'INVALIDATE_GIPHY';
export const SEARCH_GIPHY = 'SEARCH_GIPHY';

export const searchGiphy = giphy => ({
  type: SEARCH_GIPHY,
  giphy
})

export const selectGiphy = giphy => ({
  type: SELECT_GIPHY,
  giphy
})

export const invalidateGiphy = giphy => ({
  type: INVALIDATE_GIPHY,
  giphy
})

export const requestGiphys = giphy => ({
  type: REQUEST_GIPHYS,
  giphy
})

export const receiveGiphys = (giphy, json) => ({
  type: RECEIVE_GIPHYS,
  giphy,
  gifs: json.giphy.children.map(child => child.giphy),
  receivedAt: Date.now()
})

const fetchGiphys = giphy => dispatch => {
  dispatch(requestGiphys(giphy))
  return fetch(`https://www.giphy.com/r/${giphy}.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveGiphys(giphy, json)))
}

const shouldFetchGiphys = (state, giphy) => {
  const gifs = state.gifsByGiphy[giphy]
  if (!gifs) {
    return true
  }
  if (gifs.isFetching) {
    return false
  }
  return gifs.didInvalidate
}

export function fetchGiphysIfNeeded(giphy) {
  return (dispatch, getState) => {
    if (shouldFetchGiphys(getState(), giphy)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchGiphys(giphy))
    }
  }
}
