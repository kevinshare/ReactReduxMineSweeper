import { combineReducers } from 'redux';
import updateState from './cellReducer';

const rootReducer = combineReducers({
  board: updateState,
});

export default rootReducer;
