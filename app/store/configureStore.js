import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers/reducers';

const loggerMiddleware = createLogger();

const configureStore = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default configureStore;
