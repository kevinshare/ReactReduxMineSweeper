import { connect } from 'react-redux';
import Board from './components/Board';


const mapStateToProps = state => ({
  board: state.board,
  rotateState: state.rotateState,
});

export default connect(mapStateToProps)(Board);
