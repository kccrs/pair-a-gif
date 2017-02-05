import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { types } from '../actions/actionTypes';


import giphys from './giphysReducer';

const rootReducer = combineReducers({
  giphys,
  routing: routerReducer
});

export default rootReducer;

// const filter = (state = '', action) => {
//     switch (action.type) {
//         case types.FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };
