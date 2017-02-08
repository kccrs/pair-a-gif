
import {
  GET_GIPHYS,
  SET_KEYWORDS,
  RECEIVE_GIPHYS
} from './actionTypes';

export const getGiphys = data => ({
  type: GET_GIPHYS,
  data
})

export const setKeywords = data => ({
  type: SET_KEYWORDS,
  data
})

export const receiveGiphys = data => ({
  type: RECEIVE_GIPHYS,
  data
})

export const fetchGiphys = data => dispatch => {
  dispatch(getGiphys(data))
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaT0xFJmzC`)
    .then(response => response.json())
    .then(json => dispatch(getGiphys(data, json)))
    .catch(error => {
      console.log(error);
    })
}
