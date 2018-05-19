const boardSize = (amount) =>{
  return {
    type: 'BOARD_SIZE',
    amount,
  }
}

export default boardSize;