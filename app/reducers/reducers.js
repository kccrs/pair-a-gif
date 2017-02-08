import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import currentGIFs from './currentGIFs';
import currentKeywords from './currentKeywords';

const reducers = combineReducers({
  currentGIFs,
  currentKeywords,
  routing: routerReducer
});

export default reducers;
