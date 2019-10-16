import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducer/reducer';

const rReducer = combineReducers({"home": rootReducer})


const store = createStore(rReducer, applyMiddleware(logger))

export default store;