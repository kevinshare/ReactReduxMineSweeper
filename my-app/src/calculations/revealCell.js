const revealer = (e, state, x, y) => {
  console.log(x, y, "CLICKED")
  const cells = state.board.slice();
  if (e === true) {
    cells[x,y].hasFlag = true;
    return cells;
  }
  if (cells[x][y].hasMine) {
    return {
      lose: 'YOU LOSE',
    }
  }
  if (cells[x][y].count === 0) {
    let openedBoard = checkAroundCell(cells, x, y);
    return openedBoard;
  } else {
    cells[x][y].isOpened = true;
    return cells;
  }
}

const createIndex = (x, y) => {
  const indexes =
  [
  [x - 1, y - 1],
  [x + 1, y + 1],
  [x + 1, y - 1],
  [x - 1, y + 1],
  [x - 1, y],
  [x, y - 1],
  [x, y + 1],
  [x + 1, y],
  ];
  return indexes;
}

const checkAroundCell = (board, x, y) => {
  let possibles = createIndex(x, y);
  board[x][y].isOpened = true;
  if (board[x] && board[x][y] && board[x][y].count === 0) {
    for (let i = 0; i < possibles.length; i++) {
      let row = possibles[i][0];
      let col = possibles[i][1];
      if (i <= 3 && board[row] && board[row][col] && board[row][col].count > 0) {
        board[row][col].isOpened = true;
      } else if (i >= 4 && board[row] && board[row][col] && !board[row][col].isOpened && !board[row][col].hasMine && !board[row][col].hasFlag) {
        board[row][col].isOpened = true;
        checkAroundCell(board, row, col);
      }
    } 
  }
  return board;
}

export default revealer;