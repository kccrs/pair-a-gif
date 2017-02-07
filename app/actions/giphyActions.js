
import { types } from './actionTypes';

export const actionCreators = {

  getGiphys: (data) => {
    return {
      type: types.GET_GIPHYS,
      data: data
    };
  },

  setKeywords: (data) => {
    return {
      type: types.SET_KEYWORDS,
      data: data
    };
  },

  receiveGiphys: (data) => {
    return {
      type: types.RECEIVE_GIPHYS,
      data: data
    };
  }
}

class fetchGiphys {
  static getGiphys(currentKeywords) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${currentKeywords}&api_key=dc6zaT0xFJmzC`)
    .then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      console.log(error);
    });
  }
}
export default fetchGiphys;

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
