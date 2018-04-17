import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import Cell from './Cell.js';
// import Board from './Board.js';
import rootReducer from './indexReducer.js';
import rotate from './rotateAction.js'


// const defaultState = {
//   board,
// }


const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;