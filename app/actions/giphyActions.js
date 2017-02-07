
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

// export const fetchGiphys = {
//   static getGiphys(currentKeywords) {
//     return fetch(`http://api.giphy.com/v1/gifs/search?q=${currentKeywords}&api_key=dc6zaT0xFJmzC`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     }).catch(error => {
//       console.log(error);
//     });
//   }
// }
// export default fetchGiphys;

// export const fetchCurrentLocalForecast = (location) => {
//   const lat = location.coords.latitude;
//   const lon = location.coords.longitude;
//   return (dispatch) => {
//     const weatherURL = () => `http://api.openweathermap.org/data/2.5/weather?APPID=${weatherKey}&units=imperial&lat=${lat}&lon=${lon}`;
//     return fetch(weatherURL())
//     .then(weather => weather.json())
//     .then(jsonWeather => dispatch(currentLocalCity(jsonWeather)));
//   };
// };

// export const fetchGiphys = (dispatch) => {
//   dispatch(getGiphys(giphy));
//   return fetch(`http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaT0xFJmzC`)
//     .then(response => response.json())
//     .then(json => dispatch(receiveGiphys(giphy, json)))
//     .catch((error) => {
//       throw(error)
//     })
// }
