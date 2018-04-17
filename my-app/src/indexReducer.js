import { combineReducers } from 'redux';

import updateState from './cellReducer.js';



const rootReducer = combineReducers({
  board: updateState,
});

export default rootReducer;