import revealer from './revealCell.js';
import testAround from './expandBoard.js';

const createBoard = (boardLength, mineAmount) => {
  const structure = createStructure([], boardLength);
  const minedBoard = mineCreator(structure, mineAmount, boardLength);
  const fullBoard = createValues(minedBoard, boardLength, testAround);
  return fullBoard;
}


const mineCreator = (board, mineAmount, boardLength) => {
  let mines = 0;
  while (mines !== mineAmount) {
    let x = Math.floor(Math.random() * boardLength);
    let y = Math.floor(Math.random() * boardLength);
    if (checkCoordinateRepeat(board, x, y)) {
      board[x][y].hasMine = true;
      mines += 1;
    }
  } 
  return board;
}

const checkCoordinateRepeat = (board, x, y) => {
  let bool = true;
  if (board[x][y].hasMine === true) {
    return false;
  } else {
    return bool;
  }
}

const createStructure = (board, boardLength) => {
  for(let row = 0; row < boardLength; row++){
  board.push([]);
    for(let col = 0; col < boardLength; col++){
      board[row].push({
        x : row,
        y : col,
        hasMine: false,
        isOpened : false,
        hasFlag : false,
      });
    }
  }
  return board;
}


const createValues = (board, boardLength, testFunction) => {
  for(let row = 0; row < boardLength; row++){
    for(let col = 0; col < boardLength; col++){
      if(board[row][col].hasMine === false) {
        board[row][col].count = testFunction(board, row, col);  
      }   
    }
  }
  return board;
}

const rotate = (isRotated, currentDegrees) => {
  console.log(isRotated, currentDegrees, "Passed Values")
  return {
    isRotated: isRotated,
    currentDegrees: currentDegrees,
  }
}



const initalState = {
  board: createBoard(20, 40),
  rotateState: {
    isRotated: false,
    currentDegrees: 0,
  },
}

const updateState = (state = initalState, action) => {
  switch(action.type) {
    case 'REVEAL_CELL':
    console.log(state.rotateState)
      return {
        board: revealer(action.e.ctrlKey, state, action.index, action.y),
        rotateState: {
          isRotated: state.rotateState.isRotated,
          currentDegrees: state.rotateState.currentDegrees,
        },
      }
    case 'ROTATE_BOARD':
      return {
        board: state.board,
        rotateState: rotate(action.isRotated, action.currentDegrees)
      }
    default:
      return state;
  }
}

export default updateState;
