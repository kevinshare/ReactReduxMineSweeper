import { render } from 'react-dom';

import App from './src/App.js';
import Board from './src/Board.js';
import Play fomr './src/Play.js'

import { Router, Route, IndexRoute } from 'react-router';


const router = {
  <Router>
    <Route path='/'component={App}>
      <IndexRoute component={Play}></IndexRoute>
      <Route path='/board' component={Board}>
      </Route>
    </Route>
  </Router>
}


render(router, document.getElementById('app'))