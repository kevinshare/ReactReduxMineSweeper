import { connect } from 'react-redux';
import Cell from './components/Cell';
import revealCell from './actions/revealAction';

const mapDispatchToProps = dispatch => ({
  handleClick: (e, index, y) => dispatch(revealCell(e, index, y)),
});

const mapStateToProps = (state, ownProps) => ({
  isOpened: state.board.board[ownProps.index][ownProps.y]['isOpened'],
  hasMine: state.board.board[ownProps.index][ownProps.y]['hasMine'],
  count: state.board.board[ownProps.index][ownProps.y]['count'],
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
