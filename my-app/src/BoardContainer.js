import { connect } from 'react-redux';
import Board from './Board.js';


const mapStateToProps = state => ({
  board: state.board,
  rotateState: state.rotateState,
});

export default connect(mapStateToProps)(Board);